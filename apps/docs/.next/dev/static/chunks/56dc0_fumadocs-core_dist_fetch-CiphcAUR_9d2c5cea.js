(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/fetch-CiphcAUR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchDocs",
    ()=>fetchDocs
]);
//#region src/search/client/fetch.ts
const cache = /* @__PURE__ */ new Map();
async function fetchDocs(query, { api = "/api/search", locale, tag }) {
    const url = new URL(api, window.location.origin);
    url.searchParams.set("query", query);
    if (locale) url.searchParams.set("locale", locale);
    if (tag) url.searchParams.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
    const key = url.toString();
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await fetch(url);
    if (!res.ok) throw new Error(await res.text());
    const result = await res.json();
    cache.set(key, result);
    return result;
}
;
 //# sourceMappingURL=fetch-CiphcAUR.js.map
}),
]);

//# sourceMappingURL=56dc0_fumadocs-core_dist_fetch-CiphcAUR_9d2c5cea.js.map