// Everything the site says. Edit here, then run `node scripts/build.mjs`.

export const site = {
    name: "Araminix",
    url: "https://araminix.github.io/",
    github: "https://github.com/araminix",
    tagline: "Where serenity meets speed.",
    summary:
        "Araminix is the open-source work of Amin Abbasi in one place: zero-crash streaming runtimes, real-time actor platforms, software for power plants, and ten years of backend architecture in libraries, studies and starters. Typed end to end, tested at every level and documented like products.",
    description: "Araminix is Amin Abbasi's open-source work: plantline, @araminix/platform and @araminix/lib, the gach library, micro-service starters and architecture studies.",
    location: "Türkiye",
};

export const stats = [
    { value: "3", label: "flagship products" },
    { value: "2.6k+", label: "npm downloads last month", live: "npm-total" },
    { value: "390+", label: "automated tests in the products" },
    { value: "10+", label: "years building backends" },
];

/** The three products, largest story first. `media` names a picture set or an illustration in art.mjs. */
export const products = [
    {
        id: "plantline",
        name: "plantline",
        kind: "Web app · Energy engineering",
        tagline: "Single-line diagrams and DWG/DXF plant layouts, in the browser.",
        text: "A free tool for the people who design, build and run power plants. Draw the plant's single-line diagram, open its AutoCAD drawing and see the plant on the map with its tables, inverters, turbines, towers and cables found and counted. No account and no server: drawings are read in the browser and never leave it.",
        points: [
            ["A real diagram editor", "23 IEC 60617 symbols, drag and drop, connection points, shaped line routes, group editing, properties for every kind of equipment and design checks; a new diagram starts empty or from a ready example of its plant type."],
            ["AutoCAD in the browser", "DWG and DXF read by a .NET reader compiled ahead of time to WebAssembly: a 7.5 MB plant with 27,000 block copies opens in about 3.5 seconds."],
            ["On the map", "In the drawing's own coordinates (UTM or any proj4 system) or by a click; objects counted, lengths measured and capacity worked out from the modules."],
            ["For everyone", "14 languages, each with its flag, Arabic and Persian right to left, counts and digits as each language writes them, keyboard and screen-reader use, light and dark themes, phones and tablets, and no tracking."],
            ["Measured in CI", "Unit, reader and end-to-end tests on desktop and phone, with limits on reading time, memory and download size."],
        ],
        tech: ["React 19", "TypeScript", ".NET 10 → WebAssembly", "ACadSharp", "Leaflet", "proj4", "Vite", "Vitest", "Playwright"],
        links: [
            { label: "Open the app", href: "https://araminix.github.io/plantline/", primary: true, icon: "arrow-up-right" },
            { label: "Source", href: "https://github.com/araminix/plantline", icon: "github" },
        ],
        repo: "araminix/plantline",
        version: "0.7.0",
        media: "plantline",
    },
    {
        id: "platform",
        name: "@araminix/platform",
        kind: "npm package · Node.js runtime",
        tagline: "An actor-based application runtime and WebSocket platform for Node.js.",
        text: "Write applications as TypeScript classes. The platform runs every opened app in its own worker thread, streams the UI tree and its updates to the browser over multiplexed WebSocket streams, and routes commands between apps and external agents such as devices or services.",
        points: [
            ["One worker per app", "Each app instance runs in its own worker thread with memory limits, timeouts and forced termination: one app cannot take the server down."],
            ["Server-driven UI on actors", "Pages return actors instead of touching the UI; updates are applied under a per-instance lock, so actions, timers and requests never interleave."],
            ["Agents", "External processes connect as agents, each served by its own worker, exchanging typed tasks and messages with the apps."],
            ["Hardened endpoint", "Signed httpOnly sessions, a CSRF guard, origin checks, rate-limited sign-in, two-factor hooks, verified Google sign-in, safe uploads and presigned S3/MinIO links."],
            ["No exceptions in the API", "Every fallible call returns a Result; error codes reach clients, error objects only reach the log."],
        ],
        tech: ["Node.js 22+", "TypeScript", "Express 5", "WebSocket", "worker_threads", "MinIO / S3", "io-ts", "node:test"],
        links: [
            { label: "npm", href: "https://www.npmjs.com/package/@araminix/platform", primary: true, icon: "package" },
            { label: "Source", href: "https://github.com/araminix/platform", icon: "github" },
        ],
        repo: "araminix/platform",
        npm: "@araminix/platform",
        version: "2.4.1",
        media: "platform",
    },
    {
        id: "lib",
        name: "@araminix/lib",
        kind: "npm package · Browser and Node.js",
        tagline: "Universal, type-safe multiplexed WebSocket streaming.",
        text: "The communication layer of the Araminix stack: any number of independent, typed, bidirectional streams over a single WebSocket, kept alive across network drops, with every failure reported as a Result instead of an exception. The same code runs in browsers and in Node.js.",
        points: [
            ["Multiplexed streams", "Each stream has a name, typed arguments, typed messages both ways, its own lifecycle and bounded queues."],
            ["Resilient by design", "Reconnects with exponential backoff and jitter, resumes on the new socket and detects dead peers with per-stream heartbeats."],
            ["Validated protocol", "Every frame is checked against an io-ts codec; malformed frames are dropped."],
            ["Isomorphic", "Native WebSocket in browsers and Node.js 22+, no polyfills, ESM with types and declaration maps."],
        ],
        tech: ["TypeScript", "WebSocket", "io-ts", "fp-ts", "ESM", "node:test"],
        links: [
            { label: "npm", href: "https://www.npmjs.com/package/@araminix/lib", primary: true, icon: "package" },
            { label: "Source", href: "https://github.com/araminix/lib", icon: "github" },
        ],
        repo: "araminix/lib",
        npm: "@araminix/lib",
        version: "3.1.0",
        media: "lib",
    },
];

export const capabilities = [
    ["radio-tower", "Real-time systems", "Multiplexed WebSocket protocols, actor runtimes and streaming pipelines that keep their promises under load and across network drops."],
    ["server", "Resilient backends", "Worker isolation, backpressure, timeouts and typed results instead of exceptions, in Node.js, Go and .NET."],
    ["zap", "Software for energy", "Single-line diagrams, DWG/DXF processing and GIS placement for solar, wind, storage, hydro and grid projects."],
    ["shield-check", "Security by design", "Hardened sessions and uploads, content security policies, audits and their fixes, shipped as part of the work, not after it."],
    ["code-xml", "The modern web platform", "WebAssembly, canvas and SVG rendering at scale, right-to-left languages, and privacy by default."],
    ["test-tube-diagonal", "Quality you can measure", "Tests at every level, CI limits on time, memory and size, and documentation written as part of the product."],
];

export const principles = [
    ["infinity", "Zero crashes by design", "Failures are values, isolated and recovered from, never surprises."],
    ["braces", "Typed end to end", "From the wire format to the UI, the compiler checks the contract."],
    ["gauge", "Measured, not guessed", "Real files and real numbers before and after every change."],
    ["lock-keyhole", "Secure by default", "Nothing leaves the user's device unless it has to."],
    ["book-text", "Documented like a product", "Every package ships a full guide and API reference."],
    ["heart-handshake", "Open by default", "MIT and Apache licences, changelogs and a history anyone can review."],
];

export const stack = [
    ["Languages", ["TypeScript", "JavaScript", "C# / .NET", "Go", "Python"]],
    ["Runtimes and frameworks", ["Node.js", "Express", "NestJS", "React", "ASP.NET Core", "Echo, Gin and Fiber", "Flask", "WebAssembly"]],
    ["Real-time and messaging", ["WebSocket", "Socket.IO", "gRPC", "RabbitMQ", "WebRTC (OpenVidu)"]],
    ["Data", ["MongoDB", "MySQL", "PostgreSQL", "Redis", "ArangoDB", "MinIO / S3"]],
    ["Delivery", ["Docker", "GitHub Actions", "pnpm", "Vite", "Vitest", "Jest", "Playwright", "xUnit", "node:test"]],
    ["Domains", ["Power plants and grids", "CAD and GIS", "ERP and MES", "Trading and wallets", "Healthcare (FHIR)", "CRM and social networks", "Video calls"]],
];

/** The open-source library and starters, shown like the products. */
export const featured = [
    {
        id: "gach",
        name: "gach",
        kind: "npm package · Terminal output",
        tagline: "Chainable colours and styles for terminal text.",
        text: "A small TypeScript library for colouring console output: named colours, RGB and hex, bold, italic, underline and more, chained on one call. Types included, nothing else to install, and it turns its colours off when NO_COLOR is set. It colours the logs of @araminix/lib, both micro-service starters and the Node.js performance study.",
        points: [
            ["One chain, any order", "color and bgColor by name, rgb and hex, bold, italic, underline, strikethrough and inverse, each returning the same object, and reset to start again."],
            ["Presets", "success, error, warning and rainbow for the usual messages, and customStyle to set several at once or add any ANSI code, such as one of the 256 colours."],
            ["Typed, no dependencies", "Written in TypeScript with its declarations; colour names are checked by the compiler, and the whole package is under 30 KB."],
            ["Polite in any terminal", "NO_COLOR turns colours off and FORCE_COLOR turns them on, as in Node.js; a wrong colour is reported, never thrown."],
            ["In use since 2021", "18 releases on npm, about 3,700 downloads in the last year, and tests that run before every release."],
        ],
        tech: ["TypeScript", "ANSI escape codes", "Node.js", "node:test", "npm"],
        links: [
            { label: "npm", href: "https://www.npmjs.com/package/gach", primary: true, icon: "package" },
            { label: "Source", href: "https://github.com/amin-abbasi/gach", icon: "github" },
            { label: "Changelog", href: "https://github.com/amin-abbasi/gach/blob/master/CHANGELOG.md", icon: "book-open" },
        ],
        repo: "amin-abbasi/gach",
        npm: "gach",
        version: "1.8.1",
        media: "gach",
    },
    {
        id: "boilerplates",
        name: "Micro-service boilerplates",
        kind: "Starters · TypeScript and JavaScript",
        tagline: "A layered Express service to start from, in TypeScript or JavaScript.",
        text: "Two starters for REST micro-services on Express 5, built up over six years. Each request passes the same layers: security middlewares, routes, validation, controllers, services and repositories, with the database behind one interface. The TypeScript one is kept as a reference architecture; the JavaScript one is maintained.",
        points: [
            ["Layered", "Routes, validators, controllers, services and repositories, each in its own folder; validation with Zod (TypeScript) or Joi (JavaScript)."],
            ["Your database", "MongoDB with Mongoose, or MySQL and PostgreSQL with TypeORM, behind the same repository interface; Redis for caching."],
            ["Production basics", "Helmet, CORS, rate limiting, JWT sign-in with roles, request logs, one error format and messages in English and Persian. No keys in the repository: one command makes a certificate for local HTTPS."],
            ["Documented and real-time", "OpenAPI (Swagger) pages from the routes, and Socket.IO ready to switch on."],
            ["Tested and containerised", "Jest and Supertest; the TypeScript one runs its integration tests against MongoDB and MySQL in Docker Compose, in CI on GitHub Actions."],
        ],
        tech: ["Node.js", "Express 5", "TypeScript", "JavaScript", "MongoDB", "TypeORM", "Redis", "Socket.IO", "OpenAPI", "Jest", "Docker"],
        links: [
            { label: "TypeScript", href: "https://github.com/amin-abbasi/typescript-boilerplate", primary: true, icon: "github" },
            { label: "JavaScript", href: "https://github.com/amin-abbasi/javascript-boilerplate", icon: "github" },
        ],
        repos: [
            ["amin-abbasi/typescript-boilerplate", "TypeScript", 42],
            ["amin-abbasi/javascript-boilerplate", "JavaScript", 4],
        ],
        media: "boilerplates",
    },
];

/** More repositories of github.com/amin-abbasi, the account Araminix belongs to: studies from real work and a Go starter. */
export const repos = [
    { repo: "amin-abbasi/arango-edge-patterns", kind: "Study", title: "ArangoDB edge patterns for ERP", text: "Graph patterns from real ERP systems: category trees, warehouse hierarchies and traversals on ArangoDB edge collections, tested against a real database, with the article that explains them.", language: "TypeScript", tags: ["ArangoDB", "Graphs", "ERP", "Jest"], stars: 2, icon: "waypoints", tone: "graph", extra: { label: "Article on DEV", href: "https://dev.to/amin4193/escaping-recursive-hell-building-erp-hierarchies-with-arangodb-edges-751" } },
    { repo: "amin-abbasi/node-performance-gotchas", kind: "Study", title: "The Leaky Pipe: Node.js performance gotchas", text: "Memory leaks, event-loop blocking and stream backpressure, each as a problem endpoint and a fixed one, with scripts that load them and show the difference.", language: "TypeScript", tags: ["Node.js", "V8", "Streams"], stars: 3, icon: "gauge", tone: "perf" },
    { repo: "amin-abbasi/system-design-flash-sale", kind: "Study", title: "FlashScale: a flash-sale system design", text: "Sharding, cache-aside and load balancing simulated in one process, with stress tests from ten thousand to a million orders.", language: "TypeScript", tags: ["Sharding", "Caching", "Load balancing"], stars: 1, icon: "shopping-cart", tone: "sale" },
    { repo: "amin-abbasi/go-boilerplate", kind: "Starter", title: "Go server boilerplate", text: "A Go service with the Echo framework, MongoDB, Redis and JWT authentication, run with Docker and live reload.", language: "Go", tags: ["Echo", "MongoDB", "JWT", "Docker"], stars: 2, icon: "server", tone: "go" },
];

export const writing = [
    {
        title: "Escaping “Recursive Hell”: Building ERP Hierarchies with ArangoDB Edges",
        href: "https://dev.to/amin4193/escaping-recursive-hell-building-erp-hierarchies-with-arangodb-edges-751",
        where: "DEV Community",
        date: "March 2026",
        text: "Why adjacency lists break down in real ERP data, and how edge collections and graph traversals model categories, warehouses and bills of materials instead.",
    },
];

export const founder = {
    name: "Amin Abbasi",
    role: "Founder · Lead backend architect",
    text: [
        "Araminix is Amin Abbasi's own organisation, owned by the same GitHub account as every repository on this page: the runtimes, protocols and tools Amin wanted to build on, published, tested and documented.",
        "Amin is a lead backend architect with more than ten years in Node.js, distributed systems and real-time pipelines, across manufacturing, energy, trading, healthcare and social platforms. A surveying engineer by training, at home with coordinates, maps and CAD, which plantline puts to work.",
    ],
    numbers: [
        ["10+", "years building backends"],
        ["30+", "engineers mentored"],
        ["8", "companies"],
        ["5", "industries"],
    ],
    /** Selected results from that work. */
    highlights: [
        ["workflow", "A server-driven UI framework over WebSockets that cut front-end releases by 80%: the model @araminix/platform is built on."],
        ["blocks", "An ERP and MES monolith split into independently deployable services: features in a week instead of a month."],
        ["activity", "A trading engine with 30% faster order matching, and price feeds over RabbitMQ at twice the throughput."],
        ["gauge", "ArangoDB queries tuned to 60 ms at more than 1,500 requests a second."],
        ["network", "A CRM of more than 30 Node.js micro-services, and teams grown from 4 to 9 engineers and led at 12."],
    ],
    accounts: [
        { label: "github.com/amin-abbasi", note: "every repository, Araminix included", href: "https://github.com/amin-abbasi", icon: "github" },
        { label: "amin-abbasi.github.io", note: "experience, case studies and résumé", href: "https://amin-abbasi.github.io/", icon: "globe" },
        { label: "dev.to/amin4193", note: "articles", href: "https://dev.to/amin4193", icon: "newspaper" },
        { label: "x.com/amin4193", note: "posts", href: "https://x.com/amin4193", icon: "arrow-up-right" },
    ],
};
