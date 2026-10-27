// Single source of truth for the project cards, the filters and the case-study pages.
const PROJECTS = [
    {
        slug: 'pokeverse',
        name: 'PokeVerse',
        repo: 'https://github.com/Cordobot/PokeVerse',
        apk: 'https://github.com/Cordobot/PokeVerse/releases/latest/download/PokeVerse.apk',
        frame: 'phone',
        accent: '#e3350d',
        minSdk: 26,
        testCount: 8,
        tags: ['Compose', 'Clean Architecture', 'Offline-first', 'Room', 'Retrofit', 'Hilt', 'Tests'],
        desc: {
            es: 'Pokédex con los 1025 Pokémon: región, juegos, tipos, debilidades y evoluciones, con caché offline.',
            en: 'Pokédex with all 1025 Pokémon: region, games, types, weaknesses and evolutions, with offline cache.'
        },
        problem: {
            es: 'Las Pokédex que existen suelen depender de la red en cada pantalla y no explican bien contra qué tipos es débil un Pokémon. Quería una app que cargue los 1025 Pokémon una sola vez, funcione sin conexión y calcule las debilidades con la tabla de tipos real.',
            en: 'Most Pokédex apps hit the network on every screen and do a poor job of explaining type weaknesses. I wanted an app that loads all 1025 Pokémon once, works offline and computes matchups with the real type chart.'
        },
        decisions: {
            es: [
                'Clean Architecture con casos de uso (buscar, refrescar, detalle, debilidades) y repositorio como única fuente de verdad.',
                'Room guarda la lista y cada detalle (como JSON) para que la app abra al instante y sin red.',
                'La región se deduce del número nacional y los juegos se muestran en español y en orden de lanzamiento.',
                'Tabla de tipos 18×18 en el dominio: multiplicadores ×4, ×2, ×½, ×¼ y ×0 sin depender de la API.'
            ],
            en: [
                'Clean Architecture with use cases (search, refresh, detail, matchups) and the repository as the single source of truth.',
                'Room stores the list and every detail (as JSON) so the app opens instantly and offline.',
                'The region comes from the national dex number and games are shown in release order.',
                '18×18 type chart in the domain layer: ×4, ×2, ×½, ×¼ and ×0 multipliers without hitting the API.'
            ]
        },
        challenge: {
            es: ['PokeAPI no tiene un endpoint con los tipos de todos los Pokémon', 'Pedir el detalle de cada uno eran 1025 llamadas. En su lugar la app hace 19 peticiones en paralelo con async/awaitAll: la lista de especies y una por cada uno de los 18 tipos, y cruza los resultados. La primera carga pasa de minutos a unos segundos.'],
            en: ['PokeAPI has no endpoint with the types of every Pokémon', 'Fetching each detail meant 1025 calls. Instead the app makes 19 parallel requests with async/awaitAll — the species list plus one per type — and joins the results. The first load goes from minutes to a few seconds.']
        },
        tests: {
            es: '8 pruebas unitarias: Charizard es ×4 débil a Roca e inmune a Tierra, búsqueda sin tildes, filtros combinados y regiones.',
            en: '8 unit tests: Charizard is 4× weak to Rock and immune to Ground, accent-insensitive search, combined filters and regions.'
        }
    },
    {
        slug: 'criptopulse',
        name: 'CriptoPulse',
        repo: 'https://github.com/Cordobot/CriptoPulse',
        apk: 'https://github.com/Cordobot/CriptoPulse/releases/latest/download/CriptoPulse.apk',
        frame: 'phone',
        accent: '#0f9d58',
        minSdk: 26,
        testCount: 5,
        tags: ['Compose', 'Offline-first', 'Room', 'Retrofit', 'DataStore', 'Hilt', 'Tests'],
        desc: {
            es: 'Precios cripto en tiempo real con caché offline y diseño adaptable a tablets.',
            en: 'Real-time crypto prices with offline cache and a tablet-ready adaptive layout.'
        },
        problem: {
            es: 'Una app de precios es inútil si se queda en blanco al perder la señal. CriptoPulse muestra siempre los últimos datos conocidos, dice cuándo se actualizaron y se refresca sola mientras está en pantalla.',
            en: 'A price app is useless if it goes blank when the signal drops. CriptoPulse always shows the last known data, says when it was updated and refreshes itself while on screen.'
        },
        decisions: {
            es: [
                'Actualización automática cada 60 s con flatMapLatest y stateIn(WhileSubscribed): se detiene sola cuando la app pasa a segundo plano.',
                'Room como caché y tabla separada de favoritos para que una actualización nunca los borre.',
                'Moneda y orden guardados en DataStore.',
                'Diseño de dos paneles en pantallas de 720 dp o más (tablets y plegables) y minigráficas dibujadas en Canvas.'
            ],
            en: [
                'Auto-refresh every 60 s with flatMapLatest and stateIn(WhileSubscribed): it stops by itself when the app goes to the background.',
                'Room as the cache with a separate favorites table so a refresh never wipes them.',
                'Currency and sort order stored in DataStore.',
                'Two-pane layout at 720 dp and up (tablets and foldables) and sparklines drawn on Canvas.'
            ]
        },
        challenge: {
            es: ['Refrescar sin gastar batería ni datos', 'Un bucle con delay dentro de un Flow, compartido con WhileSubscribed(5 s): la pantalla recibe datos nuevos cada minuto, pero si nadie la observa el bucle se cancela. Al volver se reanuda con onStart, sin temporizadores manuales.'],
            en: ['Refreshing without draining battery or data', 'A delay loop inside a Flow shared with WhileSubscribed(5 s): the screen gets fresh data every minute, but when nobody observes it the loop is cancelled. It resumes with onStart, with no manual timers.']
        },
        tests: {
            es: '5 pruebas unitarias: orden por alzas y bajas, favoritos, monedas sin precio y que la hora de sincronización solo cambie si la petición tuvo éxito.',
            en: '5 unit tests: sorting by gainers and losers, favorites, coins without price and the sync time only changing on success.'
        }
    },
    {
        slug: 'enfoca',
        name: 'Enfoca',
        repo: 'https://github.com/Cordobot/Enfoca',
        apk: 'https://github.com/Cordobot/Enfoca/releases/latest/download/Enfoca.apk',
        frame: 'phone',
        accent: '#e76f51',
        minSdk: 26,
        testCount: 15,
        tags: ['Compose', 'WorkManager', 'AlarmManager', 'Room', 'Hilt', 'Background', 'Tests'],
        desc: {
            es: 'Hábitos con rachas y Pomodoro con notificaciones que llegan aunque la app esté cerrada.',
            en: 'Habits with streaks and a Pomodoro timer whose notifications arrive even when the app is closed.'
        },
        problem: {
            es: 'Un temporizador que solo funciona con la app abierta no sirve: el usuario bloquea el teléfono y se olvida. Enfoca avisa exactamente cuando termina cada fase y recuerda los hábitos a la hora elegida, aunque el sistema haya cerrado la app.',
            en: 'A timer that only works with the app open is useless: people lock the phone and forget. Enfoca notifies exactly when each phase ends and reminds habits at the chosen time, even after the system killed the app.'
        },
        decisions: {
            es: [
                'Recordatorios de hábitos con WorkManager: un trabajo periódico único por hábito que sobrevive a reinicios.',
                'Fin de cada Pomodoro con AlarmManager.setExactAndAllowWhileIdle, que funciona incluso en modo Doze.',
                'El estado del temporizador se guarda: si el sistema mata el proceso, al volver sigue donde iba.',
                'Animaciones con AnimatedVisibility y animate*AsState en las tarjetas y el reloj.'
            ],
            en: [
                'Habit reminders with WorkManager: one unique periodic job per habit that survives reboots.',
                'End of each Pomodoro with AlarmManager.setExactAndAllowWhileIdle, which fires even in Doze mode.',
                'The timer state is persisted: if the system kills the process, it resumes where it was.',
                'Animations with AnimatedVisibility and animate*AsState on the cards and the clock.'
            ]
        },
        challenge: {
            es: ['La alarma llegaba hasta 18 minutos tarde', 'Desde Android 12 las alarmas exactas requieren permiso; sin él, el sistema las agrupa en una ventana. Declaré USE_EXACT_ALARM (adecuado para un temporizador) con SCHEDULE_EXACT_ALARM solo hasta API 32, y la app vuelve a una alarma inexacta si el permiso no está disponible.'],
            en: ['The alarm fired up to 18 minutes late', 'Since Android 12 exact alarms need a permission; without it the system batches them in a window. I declared USE_EXACT_ALARM (meant for timers) with SCHEDULE_EXACT_ALARM only up to API 32, and the app falls back to an inexact alarm if the permission is missing.']
        },
        tests: {
            es: '13 pruebas unitarias (rachas, reglas del Pomodoro, programación de alarmas con MockK) y 2 pruebas de UI en Compose.',
            en: '13 unit tests (streaks, Pomodoro rules, alarm scheduling with MockK) and 2 Compose UI tests.'
        }
    },
    {
        slug: 'scanvault',
        name: 'ScanVault',
        repo: 'https://github.com/Cordobot/ScanVault',
        apk: 'https://github.com/Cordobot/ScanVault/releases/latest/download/ScanVault.apk',
        frame: 'phone',
        accent: '#6366f1',
        minSdk: 26,
        testCount: 7,
        tags: ['Compose', 'CameraX', 'ML Kit', 'Hardware', 'Room', 'Hilt', 'Tests'],
        desc: {
            es: 'Escáner QR y de barras en el dispositivo: Wi-Fi, contactos, enlaces e historial.',
            en: 'On-device QR and barcode scanner: Wi-Fi, contacts, links and history.'
        },
        problem: {
            es: 'Los lectores QR gratuitos suelen estar llenos de anuncios y mandan las imágenes a un servidor. ScanVault lee todo en el dispositivo, entiende qué contiene el código (una red Wi-Fi, un contacto, un enlace) y ofrece la acción correcta.',
            en: 'Free QR readers tend to be full of ads and send images to a server. ScanVault reads everything on the device, understands what the code contains (a Wi-Fi network, a contact, a link) and offers the right action.'
        },
        decisions: {
            es: [
                'CameraX con un ImageAnalysis que pasa cada cuadro a ML Kit Barcode Scanning, sin red.',
                'Linterna y lectura desde la galería con el Photo Picker.',
                'Parser propio para Wi-Fi, vCard/MECARD, URL, geo, SMS, teléfono y productos.',
                'Pantalla de permiso con sus tres estados: pedir, explicar y abrir ajustes.'
            ],
            en: [
                'CameraX with an ImageAnalysis use case that feeds every frame to ML Kit Barcode Scanning, offline.',
                'Torch and scanning from the gallery with the Photo Picker.',
                'Custom parser for Wi-Fi, vCard/MECARD, URL, geo, SMS, phone and products.',
                'Permission screen with its three states: ask, explain and open settings.'
            ]
        },
        challenge: {
            es: ['El mismo código se guardaba 30 veces por segundo', 'La cámara analiza cada cuadro, así que un QR quieto se detectaba sin parar. El caso de uso de guardado ignora el mismo contenido durante 10 segundos; el historial queda limpio sin frenar el análisis.'],
            en: ['The same code was stored 30 times per second', 'The camera analyses every frame, so a still QR was detected nonstop. The save use case ignores the same content for 10 seconds, keeping the history clean without slowing the analyser.']
        },
        tests: {
            es: '7 pruebas unitarias: Wi-Fi con caracteres escapados, contactos vCard y MECARD, URL con y sin esquema y el filtro de duplicados.',
            en: '7 unit tests: Wi-Fi with escaped characters, vCard and MECARD contacts, URLs with and without scheme and the duplicate filter.'
        }
    },
    {
        slug: 'cuentaclara',
        name: 'CuentaClara',
        repo: 'https://github.com/Cordobot/CuentaClara',
        apk: null,
        frame: 'phone',
        accent: '#10b981',
        minSdk: 26,
        testCount: 8,
        tags: ['Compose', 'Firebase', 'Offline-first', 'Clean Architecture', 'Hilt', 'Tests'],
        desc: {
            es: 'Gastos compartidos en tiempo real con Firebase, reglas de seguridad y modo offline.',
            en: 'Real-time shared expenses with Firebase, security rules and offline mode.'
        },
        problem: {
            es: 'En un apartamento compartido o un viaje siempre alguien pierde la cuenta. CuentaClara lleva los gastos del grupo en la nube y responde una pregunta: ¿quién le paga a quién y cuánto?',
            en: 'In a shared flat or a trip someone always loses track. CuentaClara keeps the group expenses in the cloud and answers one question: who pays whom, and how much?'
        },
        decisions: {
            es: [
                'Firebase Auth, Firestore en tiempo real (snapshot listeners convertidos en Flow con callbackFlow) y FCM.',
                'Montos en centavos (Long) para que el reparto nunca tenga errores de redondeo.',
                'Reglas de seguridad: solo los miembros leen el grupo y nadie crea gastos a nombre de otro.',
                'Caché persistente de Firestore, reintentos con backoff exponencial y sesión cifrada con EncryptedSharedPreferences.'
            ],
            en: [
                'Firebase Auth, real-time Firestore (snapshot listeners turned into Flow with callbackFlow) and FCM.',
                'Amounts in cents (Long) so splitting never has rounding errors.',
                'Security rules: only members read a group and nobody creates expenses on behalf of someone else.',
                'Firestore persistent cache, retries with exponential backoff and a session encrypted with EncryptedSharedPreferences.'
            ]
        },
        challenge: {
            es: ['Unirse a un grupo sin poder leerlo', 'Para entrar con un código hay que escribir en un grupo del que aún no eres miembro. La regla de Firestore compara el antes y el después (diff) y solo permite agregarte a ti mismo. Lo verifiqué con el emulador: un extraño recibe 403 al leer el grupo y un miembro recibe 403 si falsifica el autor de un gasto.'],
            en: ['Joining a group you cannot read yet', 'Joining with a code means writing to a group you are not a member of. The Firestore rule compares before and after (diff) and only lets you add yourself. Verified against the emulator: a stranger gets 403 reading the group and a member gets 403 forging an expense author.']
        },
        tests: {
            es: '8 pruebas unitarias: reparto con centavos sobrantes, liquidación con tres personas, montos al estilo colombiano y reintentos solo ante errores transitorios.',
            en: '8 unit tests: splitting with leftover cents, settling with three people, Colombian-style amounts and retries only on transient errors.'
        },
        apkNote: {
            es: 'Necesita un proyecto propio de Firebase, por eso no tiene APK público. Se prueba con el emulador de Firebase siguiendo el README.',
            en: 'It needs its own Firebase project, so there is no public APK. Try it with the Firebase emulator following the README.'
        }
    },
    {
        slug: 'arbarrio',
        name: 'Arbarrio',
        repo: 'https://github.com/Cordobot/Arbarrio',
        apk: 'https://github.com/Cordobot/Arbarrio/releases/latest/download/Arbarrio.apk',
        frame: 'phone',
        accent: '#6366f1',
        minSdk: 24,
        testCount: 0,
        tags: ['Compose', 'Firebase', 'Clean Architecture', 'Room', 'DataStore', 'Maps'],
        desc: {
            es: 'App de arriendos en barrios periféricos: publica inmuebles, filtra, guarda favoritos y ve el mapa.',
            en: 'Rental app for outlying neighborhoods: list properties, filter, save favorites and browse the map.'
        },
        problem: {
            es: 'Los portales de arriendo se concentran en las zonas céntricas y dejan por fuera a los barrios periféricos. Arbarrio deja que cualquier propietario publique su inmueble con fotos y ubicación, y que los inquilinos encuentren opciones cerca.',
            en: 'Rental portals focus on central areas and leave outlying neighborhoods out. Arbarrio lets any owner list a property with photos and location, and lets tenants find options nearby.'
        },
        decisions: {
            es: [
                'Firebase Auth con correo, Google (Credential Manager) y Facebook, más desbloqueo con biometría.',
                'Inmuebles en Firestore en tiempo real y fotos en Firebase Storage.',
                'Favoritos en Room para que funcionen sin conexión; preferencias en DataStore.',
                'Google Maps Compose con la ubicación del dispositivo y cambio de idioma por app.'
            ],
            en: [
                'Firebase Auth with email, Google (Credential Manager) and Facebook, plus biometric unlock.',
                'Real-time listings in Firestore and photos in Firebase Storage.',
                'Favorites in Room so they work offline; preferences in DataStore.',
                'Google Maps Compose with the device location and per-app language switching.'
            ]
        },
        challenge: {
            es: ['Tres formas de iniciar sesión en una sola sesión', 'Google, Facebook y correo terminan en Firebase Auth, así que el resto de la app solo conoce un usuario. El inicio de Google usa Credential Manager, la API actual que reemplaza a Google Sign-In.'],
            en: ['Three sign-in methods, one session', 'Google, Facebook and email all end in Firebase Auth, so the rest of the app only knows one user. Google sign-in uses Credential Manager, the current API that replaces Google Sign-In.']
        },
        tests: null
    },
    {
        slug: 'pronostika',
        name: 'Pronóstika',
        repo: 'https://github.com/Cordobot/Pronostika',
        apk: 'https://github.com/Cordobot/Pronostika/releases/latest/download/Pronostika.apk',
        frame: 'phone',
        accent: '#2a9d8f',
        minSdk: 24,
        testCount: 7,
        tags: ['Compose', 'Clean Architecture', 'Retrofit', 'Hilt', 'Tests'],
        desc: {
            es: 'App del clima con pronóstico por horas y de 5 días, búsquedas recientes y Clean Architecture.',
            en: 'Weather app with hourly and 5-day forecasts, recent searches and Clean Architecture.'
        },
        problem: {
            es: 'Consultar el clima de otra ciudad suele mostrar las horas en la zona horaria del teléfono, lo que confunde. Pronóstika muestra el clima actual, las próximas 24 horas y 5 días en la hora local de la ciudad consultada.',
            en: 'Checking the weather of another city usually shows times in the phone time zone, which is confusing. Pronóstika shows current weather, the next 24 hours and 5 days in the local time of the searched city.'
        },
        decisions: {
            es: [
                'Estado de la UI sellado (Idle, Loading, Success, Error) observado con StateFlow.',
                'El repositorio pide /weather y /forecast en paralelo con async.',
                'Errores HTTP traducidos a mensajes claros: ciudad no encontrada, sin conexión, límite de consultas.',
                'Las últimas 5 ciudades se guardan y la app abre con la última consultada.'
            ],
            en: [
                'Sealed UI state (Idle, Loading, Success, Error) observed through StateFlow.',
                'The repository calls /weather and /forecast in parallel with async.',
                'HTTP errors mapped to clear messages: city not found, offline, rate limit.',
                'The last 5 cities are saved and the app opens with the latest one.'
            ]
        },
        challenge: {
            es: ['Agrupar el pronóstico por el día de la ciudad, no del teléfono', 'La API entrega bloques de 3 horas en UTC. Los mappers aplican el desfase horario de la ciudad antes de agrupar por día, así los 5 días y el amanecer coinciden con lo que vive alguien allá.'],
            en: ['Grouping the forecast by the city day, not the phone day', 'The API returns 3-hour blocks in UTC. The mappers apply the city offset before grouping by day, so the 5 days and the sunrise match what someone living there sees.']
        },
        tests: {
            es: '7 pruebas unitarias del ViewModel y de los mappers (agrupación diaria y zona horaria).',
            en: '7 unit tests for the ViewModel and the mappers (daily grouping and time zone).'
        }
    },
    {
        slug: 'tvshare',
        name: 'Tvshare',
        repo: 'https://github.com/Cordobot/Tvshare',
        apk: null,
        frame: 'tv',
        cover: 'assets/projects/tvshare.svg',
        accent: '#f97316',
        minSdk: 24,
        testCount: 8,
        tags: ['Android TV', 'Kotlin Multiplatform', 'Compose', 'Hardware', 'Background', 'Tests'],
        desc: {
            es: 'Transmite la pantalla y el audio de una Android TV a la PC por red local en tiempo real.',
            en: 'Streams the screen and audio of an Android TV to a PC over the local network in real time.'
        },
        problem: {
            es: 'Grabar o mostrar en la PC lo que pasa en una Android TV normalmente exige una capturadora HDMI. Tvshare lo hace por Wi-Fi: la TV transmite y la PC recibe.',
            en: 'Recording or showing what happens on an Android TV on a PC usually needs an HDMI capture card. Tvshare does it over Wi-Fi: the TV streams and the PC receives.'
        },
        decisions: {
            es: [
                'Kotlin Multiplatform: el protocolo (puertos, cabeceras, descubrimiento) se comparte entre Android y la app de escritorio.',
                'MediaProjection + MediaCodec para codificar H.264 por hardware y AudioPlaybackCapture para el audio (Android 10+).',
                'La captura corre en un servicio en primer plano, así sigue transmitiendo mientras usas otras apps.',
                'La PC descubre la TV por UDP y decodifica con FFmpeg en una app Compose Desktop.'
            ],
            en: [
                'Kotlin Multiplatform: the protocol (ports, headers, discovery) is shared between Android and the desktop app.',
                'MediaProjection + MediaCodec for hardware H.264 encoding and AudioPlaybackCapture for audio (Android 10+).',
                'Capture runs in a foreground service, so it keeps streaming while you use other apps.',
                'The PC discovers the TV over UDP and decodes with FFmpeg in a Compose Desktop app.'
            ]
        },
        challenge: {
            es: ['Video fluido por una red doméstica', 'El codificador por hardware de la TV produce H.264 con baja latencia y el stream va por TCP con cabeceras propias; el descubrimiento por UDP evita que el usuario tenga que escribir IPs.'],
            en: ['Smooth video over a home network', 'The TV hardware encoder produces low-latency H.264 and the stream goes over TCP with custom headers; UDP discovery saves the user from typing IP addresses.']
        },
        tests: {
            es: '8 pruebas del protocolo compartido y del servidor de streaming (common, JVM y Android).',
            en: '8 tests for the shared protocol and the streaming server (common, JVM and Android).'
        },
        apkNote: {
            es: 'Es una app para Android TV que funciona junto con la app de escritorio; ambas se compilan desde el repositorio.',
            en: 'It is an Android TV app that works together with the desktop app; both are built from the repository.'
        }
    },
    {
        slug: 'cortv',
        name: 'CorTV',
        repo: 'https://github.com/Cordobot/CorTV',
        apk: null,
        frame: 'tv',
        cover: 'assets/projects/cortv.svg',
        accent: '#ef4444',
        minSdk: 23,
        testCount: 0,
        tags: ['Android TV', 'Compose', 'Media3'],
        desc: {
            es: 'Reproductor para Android TV y móvil: TV en vivo, películas, series, animes y kids.',
            en: 'Player for Android TV and phones: live TV, movies, series, anime and kids.'
        },
        problem: {
            es: 'Las interfaces pensadas para el dedo no sirven con un control remoto. CorTV está diseñada para el D-pad: foco claro, menú lateral y zapping con las flechas.',
            en: 'Interfaces designed for fingers do not work with a remote. CorTV is designed for the D-pad: clear focus, a side menu and zapping with the arrows.'
        },
        decisions: {
            es: [
                'Dos apps (TV con Compose for TV y teléfono con Material 3) sobre un módulo común con el catálogo y las preferencias.',
                'Media3 ExoPlayer con HLS y DASH, MediaSession y progreso guardado para "Seguir viendo".',
                'Canales verificados de la base abierta de iptv-org; los que fallan se ocultan solos.',
                'Recuperación del foco al volver del reproductor, clave para la navegación con control remoto.'
            ],
            en: [
                'Two apps (TV with Compose for TV and phone with Material 3) on top of a common module with the catalog and preferences.',
                'Media3 ExoPlayer with HLS and DASH, MediaSession and saved progress for "Continue watching".',
                'Verified channels from the open iptv-org database; failing ones hide themselves.',
                'Focus restoration when coming back from the player, key for remote-control navigation.'
            ]
        },
        challenge: {
            es: ['Muchos streams públicos no cargan', 'Un script en Python verifica qué canales cargan y tienen audio, y la app oculta en tiempo real los que fallan al reproducir, así el usuario no ve pantallas negras.'],
            en: ['Many public streams do not load', 'A Python script checks which channels load and have audio, and the app hides at runtime those that fail to play, so users never see black screens.']
        },
        tests: null
    }
];

// Filters shown above the grid (tags that more than one project shares)
const PROJECT_FILTERS = ['Compose', 'Clean Architecture', 'Offline-first', 'Firebase', 'Background', 'Hardware', 'Android TV', 'Tests'];

const PROJECT_TAG_LABELS = {
    es: { 'Offline-first': 'Offline-first', Background: 'Segundo plano', Hardware: 'Hardware', Tests: 'Con pruebas', 'Android TV': 'Android TV' },
    en: { Background: 'Background work', Tests: 'Tested' }
};
