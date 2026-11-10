// Everything the site says. Edit here, then run `node scripts/build.mjs`.

export const site = {
    name: "Araminix",
    url: "https://araminix.github.io/",
    github: "https://github.com/araminix",
    tagline: "Where serenity meets speed.",
    summary:
        "Araminix is the open-source work of Amin Abbasi in one place: zero-crash streaming runtimes, real-time actor platforms, software for power plants, and ten years of backend architecture in libraries, studies and starters. Typed end to end, tested at every level and documented like products.",
    description: "Araminix is Amin Abbasi's open-source work: plantline, @araminix/platform and @araminix/lib, and two dozen more repositories of libraries, architecture studies and starters.",
    location: "Türkiye",
};

/** The hero's numbers; `repos` is counted by the build (the products and the repositories below). */
export const stats = [
    { value: "3", label: "flagship products" },
    { value: "repos", label: "open-source repositories" },
    { value: "2.7k+", label: "npm downloads last month", live: "npm-total" },
    { value: "390+", label: "automated tests in the products" },
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
            ["A real diagram editor", "23 IEC 60617 symbols, drag and drop, connection points, shaped line routes, group editing, properties for every kind of equipment and design checks."],
            ["AutoCAD in the browser", "DWG and DXF read by a .NET reader compiled ahead of time to WebAssembly: a 7.5 MB plant with 27,000 block copies opens in about 3.5 seconds."],
            ["On the map", "In the drawing's own coordinates (UTM or any proj4 system) or by a click; objects counted, lengths measured and capacity worked out from the modules."],
            ["For everyone", "14 languages with Arabic and Persian right to left, counts and digits as each language writes them, keyboard and screen-reader use, light and dark themes, phones and tablets, and no tracking."],
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

/** The kinds of repository, in the order of the filters. */
export const kinds = [
    ["tools", "Libraries and tools"],
    ["studies", "Studies"],
    ["starters", "Starters"],
    ["samples", "Samples"],
    ["challenges", "Coding challenges"],
];

/**
 * The public repositories of github.com/amin-abbasi, the account Araminix is run from (forks and placeholders left
 * out), most useful first. `icon` and `tone` draw a card's cover; entries without them are listed in the compact
 * table under the cards.
 */
export const repos = [
    { repo: "amin-abbasi/typescript-boilerplate", kind: "starters", title: "TypeScript micro-service boilerplate", text: "A layered micro-service starter with Express, MongoDB, MySQL, Redis, Docker and OpenAPI, kept as a reference for hand-built TypeScript architecture.", language: "TypeScript", tags: ["Express", "MongoDB", "Redis", "Docker"], stars: 42, icon: "layers", tone: "ts" },
    { repo: "amin-abbasi/arango-edge-patterns", kind: "studies", title: "ArangoDB edge patterns for ERP", text: "Graph patterns from real ERP systems: category trees, warehouse hierarchies and traversals on ArangoDB edge collections, with the article that explains them.", language: "TypeScript", tags: ["ArangoDB", "Graphs", "ERP"], stars: 2, icon: "waypoints", tone: "graph", extra: { label: "Article on DEV", href: "https://dev.to/amin4193/escaping-recursive-hell-building-erp-hierarchies-with-arangodb-edges-751" } },
    { repo: "amin-abbasi/node-performance-gotchas", kind: "studies", title: "The Leaky Pipe: Node.js performance gotchas", text: "Memory leaks, event-loop blocking and stream backpressure, each with the problem and the fix side by side and measured.", language: "TypeScript", tags: ["Node.js", "V8", "Streams"], stars: 3, icon: "gauge", tone: "perf" },
    { repo: "amin-abbasi/system-design-flash-sale", kind: "studies", title: "FlashScale: a flash-sale system design", text: "Sharding, cache-aside and load balancing that survive a Black Friday spike, runnable locally with live metrics.", language: "TypeScript", tags: ["Sharding", "Caching", "Load balancing"], stars: 1, icon: "shopping-cart", tone: "sale" },
    { repo: "amin-abbasi/gach", kind: "tools", title: "gach: terminal colours", text: "Chainable ANSI styling for JavaScript and TypeScript consoles: colours, RGB and hex, styles and resets. Used by @araminix/lib.", language: "TypeScript", tags: ["npm", "CLI"], stars: 2, icon: "square-terminal", tone: "term", npm: "gach" },
    { repo: "amin-abbasi/amin-abbasi.github.io", kind: "tools", title: "An architect's portfolio engine", text: "The personal site behind amin-abbasi.github.io: React 19 pre-rendered for search engines, a skill graph from one JSON file, English and Turkish, and a private analytics dashboard. Made to be forked.", language: "TypeScript", tags: ["React 19", "Vite", "SSG"], stars: 1, icon: "globe", tone: "site", extra: { label: "Open the site", href: "https://amin-abbasi.github.io/" } },
    { repo: "amin-abbasi/irtm-logs", kind: "tools", title: "irtm-logs: request logs for micro-services", text: "An npm package that records each endpoint's request and response, with the object it acted on, across every micro-service of a system.", language: "JavaScript", tags: ["npm", "Logging", "Micro-services"], stars: 2, icon: "list-checks", tone: "logs", npm: "irtm-logs" },
    { repo: "amin-abbasi/javascript-boilerplate", kind: "starters", title: "JavaScript micro-service boilerplate", text: "Express, MongoDB, Redis, Socket.IO and OpenAPI with Jest tests and asynchronous logging.", language: "JavaScript", tags: ["Express", "Socket.IO", "Jest"], stars: 4, icon: "boxes", tone: "js" },
    { repo: "amin-abbasi/go-boilerplate", kind: "starters", title: "Go server boilerplate", text: "A Go service with the Echo framework, MongoDB, Redis and JWT authentication.", language: "Go", tags: ["Echo", "MongoDB", "JWT"], stars: 2, icon: "server", tone: "go" },
    { repo: "amin-abbasi/go-server", kind: "starters", title: "Go HTTP servers: Gin, Fiber and Echo", text: "The same small server in the standard library and, one branch each, in Gin, Fiber and Echo, to compare the frameworks side by side.", language: "Go", tags: ["net/http", "Gin", "Fiber", "Echo"], stars: 1, icon: "git-branch", tone: "goalt" },
    { repo: "amin-abbasi/open-vidu-node", kind: "samples", title: "Video calls with OpenVidu", text: "WebRTC video calls with an OpenVidu server and a Node.js backend, run with Docker Compose.", language: "JavaScript", tags: ["WebRTC", "OpenVidu"], stars: 3, icon: "video", tone: "video" },
    { repo: "amin-abbasi/node-public-private-key", kind: "samples", title: "Service-to-service keys", text: "Services that trust each other through RSA key pairs, in TypeScript and Express.", language: "TypeScript", tags: ["RSA", "Security"], stars: 1, icon: "key-round", tone: "key" },
    { repo: "amin-abbasi/rabbitmq-express", kind: "samples", title: "RPC over RabbitMQ", text: "Request and reply between Express services over RabbitMQ queues.", language: "TypeScript", tags: ["RabbitMQ", "RPC"], stars: 1, icon: "rabbit", tone: "mq" },
    { repo: "amin-abbasi/grpc-typescript-sample", kind: "samples", title: "gRPC in TypeScript", text: "Typed gRPC services and clients in TypeScript.", language: "TypeScript", tags: ["gRPC", "Protobuf"], stars: 1, icon: "arrow-left-right", tone: "grpc" },
    { repo: "amin-abbasi/hd-wallet-address", kind: "samples", title: "HD wallet addresses", text: "A small Flask service that derives addresses from a hierarchical deterministic wallet.", language: "Python", tags: ["Flask", "Crypto"], stars: 1, icon: "wallet", tone: "py" },
    { repo: "amin-abbasi/node-chat", kind: "samples", title: "Real-time chat", text: "A chat with Node.js, Socket.IO, Redis and React.", language: "JavaScript", tags: ["Socket.IO", "Redis", "React"], stars: 1, icon: "messages-square", tone: "chat" },
    { repo: "amin-abbasi/grpc-sample", kind: "samples", title: "gRPC in Node.js", text: "A gRPC server and client in plain JavaScript.", language: "JavaScript", stars: 1 },
    { repo: "amin-abbasi/todo-list-js-mongodb", kind: "samples", title: "To-do list", text: "A REST API in Node.js and MongoDB with a React client.", language: "JavaScript", stars: 3 },
    { repo: "amin-abbasi/contact-service", kind: "challenges", title: "Contacts service", text: "NestJS and PostgreSQL, with unit and end-to-end tests.", language: "TypeScript", stars: 1 },
    { repo: "amin-abbasi/fashion-cloud-cache-api", kind: "challenges", title: "Cache API", text: "A cache with expiry over Express and MongoDB, with Jest tests and an OpenAPI description.", language: "TypeScript", stars: 2 },
    { repo: "amin-abbasi/fashion-cloud-test", kind: "challenges", title: "Cache service", text: "A second take on the cache, configured per environment, with Jest tests.", language: "TypeScript", stars: 0 },
    { repo: "amin-abbasi/grocery-store-service", kind: "challenges", title: "Grocery store network", text: "Stores, employees and managers in a hierarchy, over Express, MongoDB and Redis.", language: "TypeScript", stars: 1 },
    { repo: "amin-abbasi/clipboard-health-test", kind: "challenges", title: "Ticket breakdown and refactoring", text: "A feature broken into tickets, and a function refactored under its tests.", language: "JavaScript", stars: 0 },
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
