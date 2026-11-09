// Everything the site says. Edit here, then run `node scripts/build.mjs`.

export const site = {
    name: "Araminix",
    url: "https://araminix.github.io/",
    github: "https://github.com/araminix",
    tagline: "Where serenity meets speed.",
    summary:
        "Araminix builds trusted, zero-crash streaming runtimes, real-time actor ecosystems and engineering software for the energy industry. Everything is open source, typed end to end, tested at every level and documented like a product.",
    description: "Araminix builds open-source streaming runtimes, real-time actor platforms and engineering tools for power plants: plantline, @araminix/platform and @araminix/lib.",
    location: "Türkiye",
};

export const stats = [
    { value: "3", label: "open-source products" },
    { value: "2.3k+", label: "npm downloads last month", live: "npm-total" },
    { value: "400+", label: "automated tests across the stack" },
    { value: "14", label: "languages in plantline" },
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
            ["For everyone", "14 languages with Arabic and Persian right to left, light and dark themes, phones and tablets, and no tracking."],
            ["Measured in CI", "Unit, reader and end-to-end tests on desktop and phone, with limits on reading time, memory and download size."],
        ],
        tech: ["React 19", "TypeScript", ".NET 10 → WebAssembly", "ACadSharp", "Leaflet", "proj4", "Vite", "Vitest", "Playwright"],
        links: [
            { label: "Open the app", href: "https://araminix.github.io/plantline/", primary: true, icon: "arrow-up-right" },
            { label: "Source", href: "https://github.com/araminix/plantline", icon: "github" },
        ],
        repo: "araminix/plantline",
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
    ["Runtimes and frameworks", ["Node.js", "Express", "React", "ASP.NET Core", "Echo", "Flask", "WebAssembly"]],
    ["Real-time and messaging", ["WebSocket", "Socket.IO", "gRPC", "RabbitMQ", "WebRTC (OpenVidu)"]],
    ["Data", ["MongoDB", "MySQL", "PostgreSQL", "Redis", "ArangoDB", "MinIO / S3"]],
    ["Delivery", ["Docker", "GitHub Actions", "pnpm", "Vite", "Vitest", "Playwright", "xUnit", "node:test"]],
    ["Domains", ["Power plants and grids", "Single-line diagrams", "CAD and GIS", "ERP and MES", "Fintech", "Video calls"]],
];

/** Open-source work of the founder, on his GitHub accounts. `icon` and `tone` drive the generated cover. */
export const repos = [
    { repo: "amin-abbasi/typescript-boilerplate", title: "TypeScript micro-service boilerplate", text: "A layered micro-service starter with Express, MongoDB, MySQL, Redis, Docker and OpenAPI, kept as a reference for hand-built TypeScript architecture.", language: "TypeScript", tags: ["Express", "MongoDB", "Redis", "Docker"], stars: 42, icon: "layers", tone: "ts" },
    { repo: "amin-abbasi/arango-edge-patterns", title: "ArangoDB edge patterns for ERP", text: "Graph patterns from real ERP systems: category trees, warehouse hierarchies and traversals on ArangoDB edge collections, with the article that explains them.", language: "TypeScript", tags: ["ArangoDB", "Graphs", "ERP"], stars: 2, icon: "waypoints", tone: "graph", extra: { label: "Article on DEV", href: "https://dev.to/amin4193/escaping-recursive-hell-building-erp-hierarchies-with-arangodb-edges-751" } },
    { repo: "amin-abbasi/node-performance-gotchas", title: "The Leaky Pipe: Node.js performance gotchas", text: "Memory leaks, event-loop blocking and stream backpressure, each with the problem and the fix side by side and measured.", language: "TypeScript", tags: ["Node.js", "V8", "Streams"], stars: 3, icon: "gauge", tone: "perf" },
    { repo: "amin-abbasi/system-design-flash-sale", title: "FlashScale: a flash-sale system design", text: "Sharding, cache-aside and load balancing that survive a Black Friday spike, runnable locally with live metrics.", language: "TypeScript", tags: ["Sharding", "Caching", "Load balancing"], stars: 1, icon: "shopping-cart", tone: "sale" },
    { repo: "amin-abbasi/gach", title: "gach: terminal colours", text: "Chainable ANSI styling for JavaScript and TypeScript consoles: colours, RGB and hex, styles and resets. Used by @araminix/lib.", language: "TypeScript", tags: ["npm", "CLI"], stars: 2, icon: "square-terminal", tone: "term", npm: "gach" },
    { repo: "amin-abbasi/javascript-boilerplate", title: "JavaScript micro-service boilerplate", text: "Express, MongoDB, Redis, Socket.IO and OpenAPI with Jest tests and asynchronous logging.", language: "JavaScript", tags: ["Express", "Socket.IO", "Jest"], stars: 4, icon: "boxes", tone: "js" },
    { repo: "amin-abbasi/go-boilerplate", title: "Go server boilerplate", text: "A Go service with the Echo framework, MongoDB, Redis and JWT authentication.", language: "Go", tags: ["Echo", "MongoDB", "JWT"], stars: 2, icon: "server", tone: "go" },
    { repo: "amin-euro/learning-api", title: "Modular .NET API", text: "ASP.NET Core with separate Core, Infrastructure and API layers, EF Core, and unit and integration tests.", language: "C#", tags: [".NET", "EF Core", "xUnit"], stars: 0, icon: "blocks", tone: "cs" },
    { repo: "amin-abbasi/open-vidu-node", title: "Video calls with OpenVidu", text: "WebRTC video calls with an OpenVidu server and a Node.js backend, run with Docker Compose.", language: "JavaScript", tags: ["WebRTC", "OpenVidu"], stars: 3, icon: "video", tone: "video" },
    { repo: "amin-abbasi/node-public-private-key", title: "Service-to-service keys", text: "Services that trust each other through RSA key pairs, in TypeScript and Express.", language: "TypeScript", tags: ["RSA", "Security"], stars: 1, icon: "key-round", tone: "key" },
    { repo: "amin-abbasi/rabbitmq-express", title: "RPC over RabbitMQ", text: "Request and reply between Express services over RabbitMQ queues.", language: "TypeScript", tags: ["RabbitMQ", "RPC"], stars: 1, icon: "rabbit", tone: "mq" },
    { repo: "amin-abbasi/grpc-typescript-sample", title: "gRPC in TypeScript", text: "Typed gRPC services and clients in TypeScript.", language: "TypeScript", tags: ["gRPC", "Protobuf"], stars: 1, icon: "arrow-left-right", tone: "grpc" },
    { repo: "amin-abbasi/hd-wallet-address", title: "HD wallet addresses", text: "A small Flask service that derives addresses from a hierarchical deterministic wallet.", language: "Python", tags: ["Flask", "Crypto"], stars: 1, icon: "wallet", tone: "py" },
    { repo: "amin-abbasi/node-chat", title: "Real-time chat", text: "A chat with Node.js, Socket.IO, Redis and React.", language: "JavaScript", tags: ["Socket.IO", "Redis", "React"], stars: 1, icon: "messages-square", tone: "chat" },
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
        "Amin founded Araminix to publish the runtimes, protocols and tools he would want to build on. He is a lead backend architect with more than ten years in Node.js, distributed systems and real-time pipelines, and has mentored more than thirty engineers.",
        "He designs the stack's protocols and runtimes, writes the code and the documentation, and audits it: security reviews, measured performance work and the tests that keep both honest.",
    ],
    accounts: [
        { label: "github.com/amin-abbasi", note: "main account", href: "https://github.com/amin-abbasi", icon: "github" },
        { label: "github.com/amin-euro", note: "second account", href: "https://github.com/amin-euro", icon: "github" },
        { label: "amin-abbasi.github.io", note: "personal site", href: "https://amin-abbasi.github.io/", icon: "globe" },
        { label: "dev.to/amin4193", note: "articles", href: "https://dev.to/amin4193", icon: "newspaper" },
        { label: "x.com/amin4193", note: "posts", href: "https://x.com/amin4193", icon: "arrow-up-right" },
    ],
};
