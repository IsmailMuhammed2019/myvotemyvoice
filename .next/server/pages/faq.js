const CHUNK_PUBLIC_PATH = "server/pages/faq.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__da4830._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_3f9873._.js");
runtime.loadChunk("server/chunks/ssr/_19707b._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/faq.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
