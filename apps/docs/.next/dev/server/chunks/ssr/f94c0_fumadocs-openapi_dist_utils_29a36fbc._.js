module.exports = [
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/url.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isUrl",
    ()=>isUrl,
    "joinURL",
    ()=>joinURL,
    "resolveRequestData",
    ()=>resolveRequestData,
    "resolveServerUrl",
    ()=>resolveServerUrl,
    "withBase",
    ()=>withBase
]);
//#region src/utils/url.ts
function isUrl(schemaId) {
    return schemaId.startsWith("https://") || schemaId.startsWith("http://");
}
function joinURL(base, pathname) {
    if (pathname.startsWith("/")) pathname = pathname.slice(1);
    if (base.endsWith("/")) base = base.slice(0, -1);
    if (pathname.length > 0) return base + "/" + pathname;
    else return base;
}
/**
* @param url - URL (can be relative)
* @param base - the base URL (must be absolute)
*/ function withBase(url, base) {
    if (!url.startsWith("https://") && !url.startsWith("http://")) return joinURL(base, url);
    return url;
}
function resolveServerUrl(template, variables) {
    for (const [key, value] of Object.entries(variables))template = template.replaceAll(`{${key}}`, value);
    return template;
}
function resolveRequestData(pathname, { path, query }) {
    for(const key in path){
        const param = path[key];
        pathname = pathname.replace(`{${key}}`, param.value);
    }
    const [pathPart, existingQueryString] = pathname.split("?", 2);
    const searchParams = new URLSearchParams(existingQueryString || "");
    for(const key in query){
        const param = query[key];
        if (param.values.length === 0) continue;
        searchParams.delete(key);
        for (const item of param.values)searchParams.append(key, item);
    }
    return searchParams.size > 0 ? `${pathPart}?${searchParams}` : pathPart;
}
;
 //# sourceMappingURL=url.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/pages/preset-auto.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAutoPreset",
    ()=>createAutoPreset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
//#region src/utils/pages/preset-auto.ts
function createAutoPreset(options) {
    if (options.per === "custom") return options;
    const { slugify = (s)=>{
        return s.replace(/\s+/g, "-").toLowerCase();
    } } = options;
    let nameFn;
    if (typeof options.name === "function") nameFn = options.name;
    else {
        const { algorithm = "v2" } = options.name ?? {};
        nameFn = function(result, document) {
            if (result.type === "tag") return slugify(result.tag);
            if (result.type === "group") {
                const schemaId = result.schemaId;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUrl"])(schemaId) ? "index" : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["basename"](schemaId, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["extname"](schemaId));
            }
            if (result.type === "operation") {
                const operation = document.paths[result.item.path][result.item.method];
                if (algorithm === "v2" && operation.operationId) return operation.operationId;
                return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](this.routePathToFilePath(result.item.path), result.item.method.toLowerCase());
            }
            const hook = document.webhooks[result.item.name][result.item.method];
            if (algorithm === "v2" && hook.operationId) return hook.operationId;
            return slugify(result.item.name);
        };
    }
    function groupOutput(builder, entry) {
        const { dereferenced } = builder.document;
        const { groupBy = "none" } = options;
        if (groupBy === "route") return [
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](builder.routePathToFilePath(entry.type === "operation" ? entry.item.path : entry.item.name), `${entry.item.method.toLowerCase()}.mdx`)
        ];
        const file = nameFn.call(builder, entry, dereferenced);
        if (groupBy === "tag") {
            let tags = entry.type === "operation" ? dereferenced.paths[entry.item.path][entry.item.method].tags : dereferenced.webhooks[entry.item.name][entry.item.method].tags;
            if (!tags || tags.length === 0) {
                console.warn("When `groupBy` is set to `tag`, make sure a `tags` is defined for every operation schema.");
                tags = [
                    "unknown"
                ];
            }
            return tags.map((tag)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](slugify(tag), `${file}.mdx`));
        }
        if (typeof groupBy === "function") return [
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](slugify(groupBy(entry)), `${file}.mdx`)
        ];
        return [
            `${file}.mdx`
        ];
    }
    return {
        toPages (builder) {
            const { dereferenced } = builder.document;
            const items = builder.extract();
            if (options.per === "file") {
                const entry = {
                    type: "group",
                    schemaId: builder.id,
                    path: "",
                    info: {
                        title: dereferenced.info.title,
                        description: dereferenced.info.description
                    },
                    ...items
                };
                entry.path = nameFn.call(builder, entry, dereferenced) + ".mdx";
                builder.create(entry);
                return;
            }
            if (options.per === "tag") {
                const tags = dereferenced.tags ?? [];
                for (const tag of tags){
                    const { displayName } = builder.fromTag(tag);
                    const entry = {
                        type: "tag",
                        path: "",
                        schemaId: builder.id,
                        info: {
                            title: displayName,
                            description: tag.description
                        },
                        webhooks: items.webhooks.filter((webhook)=>webhook.tags?.includes(tag.name)),
                        operations: items.operations.filter((op)=>op.tags?.includes(tag.name)),
                        tag: tag.name,
                        rawTag: tag
                    };
                    entry.path = nameFn.call(builder, entry, dereferenced) + ".mdx";
                    builder.create(entry);
                }
                return;
            }
            for (const op of items.operations){
                const { pathItem, operation, displayName } = builder.fromExtractedOperation(op);
                const entry = {
                    type: "operation",
                    schemaId: builder.id,
                    item: op,
                    path: "",
                    info: {
                        title: displayName,
                        description: operation.description ?? pathItem.description
                    }
                };
                for (const outputPath of groupOutput(builder, entry))builder.create({
                    ...entry,
                    path: outputPath
                });
            }
            for (const webhook of items.webhooks){
                const { pathItem, operation, displayName } = builder.fromExtractedWebhook(webhook);
                const entry = {
                    type: "webhook",
                    schemaId: builder.id,
                    info: {
                        title: displayName,
                        description: operation.description ?? pathItem.description
                    },
                    item: webhook,
                    path: ""
                };
                for (const outputPath of groupOutput(builder, entry))builder.create({
                    ...entry,
                    path: outputPath
                });
            }
        }
    };
}
;
 //# sourceMappingURL=preset-auto.js.map
}),
];

//# sourceMappingURL=f94c0_fumadocs-openapi_dist_utils_29a36fbc._.js.map