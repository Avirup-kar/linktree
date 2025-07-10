module.exports = {

"[project]/.next-internal/server/app/api/senddata/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongodb [external] (mongodb, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}}),
"[project]/lib/mongodb.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// lib/mongodb.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local');
}
if ("TURBOPACK compile-time truthy", 1) {
    if (!global._mongoClientPromise) {
        client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    "TURBOPACK unreachable";
}
const __TURBOPACK__default__export__ = clientPromise;
}}),
"[project]/app/api/senddata/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"40073cc1ade5931be53ad8c868656ce2c3d01fe2c4":"POST"} */ __turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ POST(request) {
    const clint = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
    const db = clint.db("Linktree");
    const collection = db.collection("Links");
    const doc = await collection.findOne(username);
    console.log(doc);
    if (!doc) {
        return Response.json({
            success: 'false',
            error: 'true',
            message: 'username nor exist',
            result: null
        });
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    POST
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(POST, "40073cc1ade5931be53ad8c868656ce2c3d01fe2c4", null);
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0ee6aebb._.js.map