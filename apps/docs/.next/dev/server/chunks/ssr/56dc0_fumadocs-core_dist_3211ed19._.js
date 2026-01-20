module.exports = [
"[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/search-DzqmOjzV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>createContentHighlighter
]);
//#region src/search/index.ts
function escapeRegExp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildRegexFromQuery(q) {
    const trimmed = q.trim();
    if (trimmed.length === 0) return null;
    const terms = Array.from(new Set(trimmed.split(/\s+/).map((t)=>t.trim()).filter(Boolean)));
    if (terms.length === 0) return null;
    const escaped = terms.map(escapeRegExp).join("|");
    return new RegExp(`(${escaped})`, "gi");
}
function createContentHighlighter(query) {
    const regex = typeof query === "string" ? buildRegexFromQuery(query) : query;
    return {
        highlight (content) {
            if (!regex) return [
                {
                    type: "text",
                    content
                }
            ];
            const out = [];
            let i = 0;
            for (const match of content.matchAll(regex)){
                if (i < match.index) out.push({
                    type: "text",
                    content: content.substring(i, match.index)
                });
                out.push({
                    type: "text",
                    content: match[0],
                    styles: {
                        highlight: true
                    }
                });
                i = match.index + match[0].length;
            }
            if (i < content.length) out.push({
                type: "text",
                content: content.substring(i)
            });
            return out;
        }
    };
}
;
 //# sourceMappingURL=search-DzqmOjzV.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/remove-undefined-Buxsprgu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>removeUndefined
]);
//#region src/utils/remove-undefined.ts
function removeUndefined(value, deep = false) {
    const obj = value;
    for(const key in obj){
        if (obj[key] === void 0) delete obj[key];
        if (!deep) continue;
        const entry = obj[key];
        if (typeof entry === "object" && entry !== null) {
            removeUndefined(entry, deep);
            continue;
        }
        if (Array.isArray(entry)) for (const item of entry)removeUndefined(item, deep);
    }
    return value;
}
;
 //# sourceMappingURL=remove-undefined-Buxsprgu.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/orama-cloud-yicpgD0c.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchDocs",
    ()=>searchDocs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2d$DzqmOjzV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/search-DzqmOjzV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$remove$2d$undefined$2d$Buxsprgu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/remove-undefined-Buxsprgu.js [app-ssr] (ecmascript)");
;
;
//#region src/search/client/orama-cloud.ts
async function searchDocs(query, options) {
    const highlighter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2d$DzqmOjzV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(query);
    const list = [];
    const { index = "default", client, params: extraParams, tag } = options;
    if (index === "crawler") {
        const result$1 = await client.search({
            datasources: [],
            ...extraParams,
            term: query,
            where: {
                category: tag ? {
                    eq: tag.slice(0, 1).toUpperCase() + tag.slice(1)
                } : void 0,
                ...extraParams?.where
            },
            limit: 10
        });
        if (!result$1) return list;
        for (const hit of result$1.hits){
            const doc = hit.document;
            list.push({
                id: hit.id,
                type: "page",
                content: doc.title,
                contentWithHighlights: highlighter.highlight(doc.title),
                url: doc.path
            }, {
                id: "page" + hit.id,
                type: "text",
                content: doc.content,
                contentWithHighlights: highlighter.highlight(doc.content),
                url: doc.path
            });
        }
        return list;
    }
    const params = {
        datasources: [],
        ...extraParams,
        term: query,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$remove$2d$undefined$2d$Buxsprgu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])({
            tag,
            ...extraParams?.where
        }),
        groupBy: {
            properties: [
                "page_id"
            ],
            max_results: 7,
            ...extraParams?.groupBy
        }
    };
    const result = await client.search(params);
    if (!result || !result.groups) return list;
    for (const item of result.groups){
        let addedHead = false;
        for (const hit of item.result){
            const doc = hit.document;
            if (!addedHead) {
                list.push({
                    id: doc.page_id,
                    type: "page",
                    content: doc.title,
                    breadcrumbs: doc.breadcrumbs,
                    contentWithHighlights: highlighter.highlight(doc.title),
                    url: doc.url
                });
                addedHead = true;
            }
            list.push({
                id: doc.id,
                content: doc.content,
                contentWithHighlights: highlighter.highlight(doc.content),
                type: doc.content === doc.section ? "heading" : "text",
                url: doc.section_id ? `${doc.url}#${doc.section_id}` : doc.url
            });
        }
    }
    return list;
}
;
 //# sourceMappingURL=orama-cloud-yicpgD0c.js.map
}),
];

//# sourceMappingURL=56dc0_fumadocs-core_dist_3211ed19._.js.map