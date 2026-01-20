module.exports = [
"[project]/node_modules/.pnpm/fumadocs-openapi@10.2.6_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2._cc2b55a815e0d4fac6348798c51f8993/node_modules/fumadocs-openapi/dist/utils/pages/to-body.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toBody",
    ()=>toBody
]);
//#region src/utils/pages/to-body.tsx
function toBody(entry) {
    if (entry.type === "operation") return {
        document: entry.schemaId,
        operations: [
            entry.item
        ]
    };
    if (entry.type === "webhook") return {
        document: entry.schemaId,
        webhooks: [
            entry.item
        ]
    };
    return {
        showTitle: true,
        showDescription: true,
        document: entry.schemaId,
        operations: entry.operations,
        webhooks: entry.webhooks
    };
}
;
 //# sourceMappingURL=to-body.js.map
}),
];

//# sourceMappingURL=f94c0_fumadocs-openapi_dist_utils_pages_to-body_7b817f2e.js.map