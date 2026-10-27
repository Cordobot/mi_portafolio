// Real code from the projects, shown in the "How I build an app" section.
const SNIPPETS = [
    {
        file: 'Balances.kt',
        project: 'CuentaClara',
        layer: 'domain',
        note: {
            es: 'Dominio puro en Kotlin: sin Android ni Firebase, por eso se prueba con JUnit en milisegundos.',
            en: 'Pure Kotlin domain: no Android or Firebase, so JUnit tests it in milliseconds.'
        },
        code: String.raw`/**
 * Few transfers that settle every balance: the biggest debtor pays the biggest creditor
 * until one of them reaches zero. At most n - 1 transfers for n members.
 */
fun settle(net: Map<String, Long>): List<Settlement> {
    val creditors = net.filterValues { it > 0 }.map { it.key to it.value }.sortedByDescending { it.second }.toMutableList()
    val debtors = net.filterValues { it < 0 }.map { it.key to -it.value }.sortedByDescending { it.second }.toMutableList()
    val result = mutableListOf<Settlement>()
    while (creditors.isNotEmpty() && debtors.isNotEmpty()) {
        val (creditor, credit) = creditors.first()
        val (debtor, debt) = debtors.first()
        val amount = minOf(credit, debt)
        result += Settlement(debtor, creditor, amount)
        creditors[0] = creditor to credit - amount
        debtors[0] = debtor to debt - amount
        if (creditors[0].second == 0L) creditors.removeAt(0)
        if (debtors[0].second == 0L) debtors.removeAt(0)
        creditors.sortByDescending { it.second }
        debtors.sortByDescending { it.second }
    }
    return result
}`
    },
    {
        file: 'PokemonRepositoryImpl.kt',
        project: 'PokeVerse',
        layer: 'data',
        note: {
            es: '19 peticiones en paralelo en lugar de 1025: la primera carga pasa de minutos a segundos.',
            en: '19 parallel requests instead of 1025: the first load goes from minutes to seconds.'
        },
        code: String.raw`override suspend fun refreshPokemon(force: Boolean): Result<Unit> = runCatchingNetwork {
    if (!force && dao.count() > 0) return@runCatchingNetwork

    // One call for every species plus one per type (18) gives names and types of all Pokémon
    val entities = coroutineScope {
        val species = async { api.getSpeciesList() }
        val typeLists = PokemonType.entries.map { type -> async { type to api.getType(type.apiName) } }

        val typesById = mutableMapOf<Int, MutableList<Pair<Int, PokemonType>>>()
        typeLists.awaitAll().forEach { (type, dto) ->
            dto.pokemon.forEach { typesById.getOrPut(it.pokemon.id) { mutableListOf() } += it.slot to type }
        }
        species.await().results.map { resource ->
            PokemonEntity(
                id = resource.id,
                name = prettyName(resource.name),
                types = typesById[resource.id].orEmpty().sortedBy { it.first }.joinToString(",") { it.second.apiName }
            )
        }.sortedBy { it.id }
    }
    dao.replaceAll(entities)
}`
    },
    {
        file: 'AndroidReminderScheduler.kt',
        project: 'Enfoca',
        layer: 'data',
        note: {
            es: 'WorkManager para lo que puede esperar y AlarmManager exacto para lo que no.',
            en: 'WorkManager for what can wait and an exact AlarmManager for what cannot.'
        },
        code: String.raw`/**
 * One unique periodic work per habit, every 24 h, starting at the next occurrence of the
 * reminder time. WorkManager keeps it across reboots and app updates.
 */
override fun scheduleHabitReminder(habit: Habit) {
    val reminder = habit.reminder ?: return
    val request = PeriodicWorkRequestBuilder<HabitReminderWorker>(24, TimeUnit.HOURS)
        .setInitialDelay(delayUntil(reminder).toMillis(), TimeUnit.MILLISECONDS)
        .setInputData(workDataOf(HabitReminderWorker.KEY_HABIT_ID to habit.id))
        .addTag(TAG_HABITS)
        .build()
    WorkManager.getInstance(context)
        .enqueueUniquePeriodicWork(workName(habit.id), ExistingPeriodicWorkPolicy.UPDATE, request)
}

/** The end of a Pomodoro must be on time, so it uses an exact alarm when allowed. */
override fun schedulePhaseEnd(atMillis: Long, phase: PomodoroPhase) {
    val pending = phaseEndIntent(phase)
    val exactAllowed = Build.VERSION.SDK_INT < Build.VERSION_CODES.S || alarmManager.canScheduleExactAlarms()
    if (exactAllowed) {
        alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, atMillis, pending)
    } else {
        alarmManager.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, atMillis, pending)
    }
}`
    }
];
