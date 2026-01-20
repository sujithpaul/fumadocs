(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/playground/fetcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserFetcher",
    ()=>createBrowserFetcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$requests$2f$media$2f$resolve$2d$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/requests/media/resolve-adapter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$requests$2f$media$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/requests/media/adapter.js [app-client] (ecmascript)");
;
;
//#region src/playground/fetcher.ts
function createBrowserFetcher(adapters, requestTimeout) {
    return {
        async fetch (url, options) {
            const headers = new Headers();
            if (options.bodyMediaType && options.bodyMediaType !== "multipart/form-data") headers.append("Content-Type", options.bodyMediaType);
            for(const key in options.header){
                const param = options.header[key];
                headers.append(key, param.value);
            }
            const proxyUrl = options.proxyUrl ? new URL(options.proxyUrl, document.baseURI) : null;
            if (proxyUrl) {
                proxyUrl.searchParams.append("url", url);
                url = proxyUrl.toString();
            }
            let body = void 0;
            if (options.bodyMediaType && options.body) {
                const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$requests$2f$media$2f$resolve$2d$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaAdapter"])(options.bodyMediaType, adapters);
                if (!adapter) return {
                    status: 400,
                    type: "text",
                    data: `[Fumadocs] No adapter for ${options.bodyMediaType}, you need to specify one from 'createOpenAPI()'.`
                };
                body = adapter.encode(options);
            }
            for(const key in options.cookie){
                const segs = [
                    `${key}=${options.cookie[key].value}`
                ];
                if (proxyUrl && proxyUrl.origin !== window.location.origin) segs.push(`domain=${proxyUrl.host}`);
                segs.push("path=/", "max-age=30");
                document.cookie = segs.join("; ");
            }
            return fetch(url, {
                method: options.method,
                cache: "no-cache",
                headers,
                body,
                signal: AbortSignal.timeout(requestTimeout * 1e3)
            }).then(async (res)=>{
                const contentType = res.headers.get("Content-Type") ?? "";
                let type;
                let data;
                if (contentType.startsWith("application/json")) {
                    type = "json";
                    data = await res.json();
                } else {
                    type = contentType.startsWith("text/html") ? "html" : "text";
                    data = await res.text();
                }
                return {
                    status: res.status,
                    type,
                    data
                };
            }).catch((e)=>{
                return {
                    status: 400,
                    type: "text",
                    data: `Client side error: ${e instanceof Error ? `[${e.name}] ${e.message}` : e.toString()}`
                };
            });
        }
    };
}
;
 //# sourceMappingURL=fetcher.js.map
}),
]);

//# sourceMappingURL=f94c0_fumadocs-openapi_dist_playground_fetcher_65caaf2d.js.map