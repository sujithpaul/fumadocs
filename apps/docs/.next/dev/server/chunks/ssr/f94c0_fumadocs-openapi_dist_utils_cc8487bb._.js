module.exports = [
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/id-to-title.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "idToTitle",
    ()=>idToTitle
]);
//#region src/utils/id-to-title.ts
function idToTitle(id) {
    let result = [];
    for (const c of id)if (result.length === 0) result.push(c.toLocaleUpperCase());
    else if (c === ".") result = [];
    else if (/^[A-Z]$/.test(c) && result.at(-1) !== " ") result.push(" ", c);
    else if (c === "-") result.push(" ");
    else result.push(c);
    return result.join("");
}
;
 //# sourceMappingURL=id-to-title.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMethod",
    ()=>createMethod,
    "getPreferredType",
    ()=>getPreferredType,
    "getTagDisplayName",
    ()=>getTagDisplayName,
    "methodKeys",
    ()=>methodKeys,
    "pickExample",
    ()=>pickExample
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$id$2d$to$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/id-to-title.js [app-rsc] (ecmascript)");
;
//#region src/utils/schema.ts
const methodKeys = [
    "get",
    "post",
    "patch",
    "delete",
    "head",
    "put"
];
function getPreferredType(body) {
    if ("application/json" in body) return "application/json";
    return Object.keys(body)[0];
}
function getTagDisplayName(tag) {
    return "x-displayName" in tag && typeof tag["x-displayName"] === "string" ? tag["x-displayName"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$id$2d$to$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idToTitle"])(tag.name);
}
/**
* Summarize method endpoint information
*/ function createMethod(method, path, operation) {
    return {
        description: path.description,
        summary: path.summary,
        ...operation,
        parameters: [
            ...operation.parameters ?? [],
            ...path.parameters ?? []
        ],
        method: method.toUpperCase()
    };
}
function pickExample(value) {
    if (value.example !== void 0) return value.example;
    if (value.content) {
        const type = getPreferredType(value.content);
        const content = type ? value.content[type] : void 0;
        if (type && content) {
            const out = value.examples?.[type].value ?? pickExample(content);
            if (out !== void 0) return out;
        }
    }
    if (value.examples) {
        const examples = Object.values(value.examples);
        if (examples.length > 0) return examples[0].value;
    }
}
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/pages/builder.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromSchema",
    ()=>fromSchema,
    "fromServer",
    ()=>fromServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$id$2d$to$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/id-to-title.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/schema.js [app-rsc] (ecmascript)");
;
;
//#region src/utils/pages/builder.ts
async function fromServer(server, config) {
    const schemas = await server.getSchemas();
    const generated = {};
    const entries = Object.entries(schemas);
    if (entries.length === 0) throw new Error("No input files found.");
    for (const [id, schema] of entries)generated[id] = fromSchema(id, schema, config);
    return generated;
}
function fromSchema(schemaId, processed, config) {
    const files = [];
    const { toPages } = config;
    const { dereferenced } = processed;
    toPages({
        id: schemaId,
        document: processed,
        create (entry) {
            files.push(entry);
        },
        extract: ()=>extractInfo(dereferenced),
        routePathToFilePath (path) {
            return path.toLowerCase().replaceAll(".", "-").split("/").flatMap((v)=>{
                if (v.startsWith("{") && v.endsWith("}")) return v.slice(1, -1);
                if (v.length === 0) return [];
                return v;
            }).join("/");
        },
        fromExtractedWebhook (item) {
            const pathItem = dereferenced.webhooks?.[item.name];
            if (!pathItem) return;
            const operation = pathItem?.[item.method];
            if (!operation) return;
            return {
                pathItem,
                operation,
                get displayName () {
                    return operation.summary || pathItem.summary || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$id$2d$to$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idToTitle"])(item.name);
                }
            };
        },
        fromExtractedOperation (item) {
            const pathItem = dereferenced.paths?.[item.path];
            if (!pathItem) return;
            const operation = pathItem?.[item.method];
            if (!operation) return;
            return {
                pathItem,
                operation,
                get displayName () {
                    return operation.summary || pathItem.summary || (operation.operationId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$id$2d$to$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idToTitle"])(operation.operationId) : item.path);
                }
            };
        },
        fromTag (tag) {
            return {
                get displayName () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTagDisplayName"])(tag);
                }
            };
        },
        fromTagName (name) {
            const tag = dereferenced.tags?.find((item)=>item.name === name);
            if (!tag) return;
            return {
                info: tag,
                ...this.fromTag(tag)
            };
        }
    });
    return files;
}
function extractInfo(document) {
    const result = {
        webhooks: [],
        operations: []
    };
    for (const [path, pathItem] of Object.entries(document.paths ?? {})){
        if (!pathItem) continue;
        for (const methodKey of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["methodKeys"]){
            if (!pathItem[methodKey]) continue;
            result.operations.push({
                method: methodKey,
                path,
                tags: pathItem[methodKey]?.tags
            });
        }
    }
    for (const [name, pathItem] of Object.entries(document.webhooks ?? {})){
        if (!pathItem) continue;
        for (const methodKey of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$openapi$40$10$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$_cc2b55a815e0d4fac6348798c51f8993$2f$node_modules$2f$fumadocs$2d$openapi$2f$dist$2f$utils$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["methodKeys"]){
            if (!pathItem[methodKey]) continue;
            result.webhooks.push({
                method: methodKey,
                name,
                tags: pathItem[methodKey]?.tags
            });
        }
    }
    return result;
}
;
 //# sourceMappingURL=builder.js.map
}),
];

//# sourceMappingURL=f94c0_fumadocs-openapi_dist_utils_cc8487bb._.js.map