(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/graph-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphView",
    ()=>GraphView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/collide.js [app-client] (ecmascript) <export default as forceCollide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/link.js [app-client] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$framework$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/framework/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ForceGraph2D = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/node_modules/.pnpm/react-force-graph-2d@1.29.0_react@19.2.3/node_modules/react-force-graph-2d/dist/react-force-graph-2d.mjs [app-client] (ecmascript, async loader)"));
_c = ForceGraph2D;
function GraphView(props) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mount, setMount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraphView.useEffect": ()=>{
            setMount(true);
        }
    }["GraphView.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative border h-[600px] [&_canvas]:size-full rounded-xl overflow-hidden",
        children: mount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientOnly, {
            ...props,
            containerRef: ref
        }, void 0, false, {
            fileName: "[project]/components/graph-view.tsx",
            lineNumber: 49,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/graph-view.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(GraphView, "hE+RGvW+Z9JmFccqXvHxK0UqGRY=");
_c1 = GraphView;
function ClientOnly({ containerRef, graph }) {
    _s1();
    const graphRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const hoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$framework$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleNodeHover = (node)=>{
        const graph = graphRef.current;
        if (!graph) return;
        hoveredRef.current = node;
        if (node) {
            const coords = graph.graph2ScreenCoords(node.x, node.y);
            setTooltip({
                x: coords.x + 4,
                y: coords.y + 4,
                content: node.description ?? 'No description'
            });
        } else {
            setTooltip(null);
        }
    };
    // Custom node rendering: circle with text label below
    const nodeCanvasObject = (node, ctx)=>{
        const container = containerRef.current;
        if (!container) return;
        const style = getComputedStyle(container);
        const fontSize = 14;
        const radius = 5;
        // Draw circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        const hoverNode = hoveredRef.current;
        const isActive = hoverNode?.id === node.id || hoverNode?.neighbors?.includes(node.id);
        ctx.fillStyle = isActive ? style.getPropertyValue('--color-fd-primary') : style.getPropertyValue('--color-purple-300');
        ctx.fill();
        // Draw text below the node
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = getComputedStyle(container).getPropertyValue('color');
        ctx.fillText(node.text, node.x, node.y + radius + fontSize);
    };
    const linkColor = (link)=>{
        const container = containerRef.current;
        if (!container) return '#999';
        const style = getComputedStyle(container);
        const hoverNode = hoveredRef.current;
        if (hoverNode && typeof link.source === 'object' && typeof link.target === 'object' && (hoverNode.id === link.source.id || hoverNode.id === link.target.id)) {
            return style.getPropertyValue('--color-fd-primary');
        }
        return `color-mix(in oklab, ${style.getPropertyValue('--color-fd-muted-foreground')} 50%, transparent)`;
    };
    // Enrich nodes with neighbors for hover effects
    const enrichedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientOnly.useMemo[enrichedNodes]": ()=>{
            const { nodes, links } = structuredClone(graph);
            for (const node of nodes){
                node.neighbors = links.flatMap({
                    "ClientOnly.useMemo[enrichedNodes]": (link)=>{
                        if (link.source === node.id) return link.target;
                        if (link.target === node.id) return link.source;
                        return [];
                    }
                }["ClientOnly.useMemo[enrichedNodes]"]);
            }
            return {
                nodes,
                links
            };
        }
    }["ClientOnly.useMemo[enrichedNodes]"], [
        graph
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ForceGraph2D, {
                ref: {
                    get current () {
                        return graphRef.current;
                    },
                    set current (fg){
                        graphRef.current = fg;
                        if (fg) {
                            fg.d3Force('link', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"])().distance(200));
                            fg.d3Force('charge', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"])().strength(10));
                            fg.d3Force('collision', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"])(60));
                        }
                    }
                },
                graphData: enrichedNodes,
                nodeCanvasObject: nodeCanvasObject,
                linkColor: linkColor,
                onNodeHover: handleNodeHover,
                onNodeClick: (node)=>{
                    router.push(node.url);
                },
                linkWidth: 2,
                enableNodeDrag: true,
                enableZoomInteraction: true
            }, void 0, false, {
                fileName: "[project]/components/graph-view.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bg-fd-popover text-fd-popover-foreground size-fit p-2 border rounded-xl shadow-lg text-sm max-w-xs",
                style: {
                    top: tooltip.y,
                    left: tooltip.x
                },
                children: tooltip.content
            }, void 0, false, {
                fileName: "[project]/components/graph-view.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(ClientOnly, "gM4lHT8BHlBdULj86xLfLLU5uqs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$framework$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = ClientOnly;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ForceGraph2D");
__turbopack_context__.k.register(_c1, "GraphView");
__turbopack_context__.k.register(_c2, "ClientOnly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/graph-view.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/graph-view.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/add.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAll",
    ()=>addAll,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(d) {
    const x = +this._x.call(null, d), y = +this._y.call(null, d);
    return add(this.cover(x, y), x, y, d);
}
function add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
    var parent, node = tree._root, leaf = {
        data: d
    }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;
    // Find the existing leaf for the new point, or add it.
    while(node.length){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
    }while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm))
    return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
    var d, i, n = data.length, x, y, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // Compute the points and their extent.
    for(i = 0; i < n; ++i){
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);
    // Add the new points.
    for(i = 0; i < n; ++i){
        add(this, xz[i], yz[i], data[i]);
    }
    return this;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/cover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
    var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
    } else {
        var z = x1 - x0 || 1, node = this._root, parent, i;
        while(x0 > x || x >= x1 || y0 > y || y >= y1){
            i = (y < y0) << 1 | x < x0;
            parent = new Array(4), parent[i] = node, node = parent, z *= 2;
            switch(i){
                case 0:
                    x1 = x0 + z, y1 = y0 + z;
                    break;
                case 1:
                    x0 = x1 - z, y1 = y0 + z;
                    break;
                case 2:
                    x1 = x0 + z, y0 = y1 - z;
                    break;
                case 3:
                    x0 = x1 - z, y0 = y1 - z;
                    break;
            }
        }
        if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    var data = [];
    this.visit(function(node) {
        if (!node.length) do data.push(node.data);
        while (node = node.next)
    });
    return data;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/extent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [
        [
            this._x0,
            this._y0
        ],
        [
            this._x1,
            this._y1
        ]
    ];
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quad.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/find.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quad.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(x, y, radius) {
    var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
    }
    while(q = quads.pop()){
        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
        // Bisect the current quadrant.
        if (node.length) {
            var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
            quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](node[3], xm, ym, x2, y2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](node[2], x1, ym, xm, y2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](node[1], xm, y1, x2, ym), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](node[0], x1, y1, xm, ym));
            // Visit the closest quadrant first.
            if (i = (y >= ym) << 1 | x >= xm) {
                q = quads[quads.length - 1];
                quads[quads.length - 1] = quads[quads.length - 1 - i];
                quads[quads.length - 1 - i] = q;
            }
        } else {
            var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
            if (d2 < radius) {
                var d = Math.sqrt(radius = d2);
                x0 = x - d, y0 = y - d;
                x3 = x + d, y3 = y + d;
                data = node.data;
            }
        }
    }
    return data;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/remove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeAll",
    ()=>removeAll
]);
function __TURBOPACK__default__export__(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
    var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;
    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while(true){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
    }
    // Find the point to remove.
    while(node.data !== d)if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    // If there are multiple coincident points, remove just the point.
    if (previous) return next ? previous.next = next : delete previous.next, this;
    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;
    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];
    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
    }
    return this;
}
function removeAll(data) {
    for(var i = 0, n = data.length; i < n; ++i)this.remove(data[i]);
    return this;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return this._root;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/size.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    var size = 0;
    this.visit(function(node) {
        if (!node.length) do ++size;
        while (node = node.next)
    });
    return size;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/visit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quad.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](node, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop()){
        if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
            var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
            if (child = node[3]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, xm, ym, x1, y1));
            if (child = node[2]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, x0, ym, xm, y1));
            if (child = node[1]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, xm, y0, x1, ym));
            if (child = node[0]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, x0, y0, xm, ym));
        }
    }
    return this;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/visitAfter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quad.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this._root, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop()){
        var node = q.node;
        if (node.length) {
            var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
            if (child = node[0]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, x0, y0, xm, ym));
            if (child = node[1]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, xm, y0, x1, ym));
            if (child = node[2]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, x0, ym, xm, y1));
            if (child = node[3]) quads.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](child, xm, ym, x1, y1));
        }
        next.push(q);
    }
    while(q = next.pop()){
        callback(q.node, q.x0, q.y0, q.x1, q.y1);
    }
    return this;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultX",
    ()=>defaultX
]);
function defaultX(d) {
    return d[0];
}
function __TURBOPACK__default__export__(_) {
    return arguments.length ? (this._x = _, this) : this._x;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/y.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultY",
    ()=>defaultY
]);
function defaultY(d) {
    return d[1];
}
function __TURBOPACK__default__export__(_) {
    return arguments.length ? (this._y = _, this) : this._y;
}
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quadtree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>quadtree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$cover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/cover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/extent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$visit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/visit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$visitAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/visitAfter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/x.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/y.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function quadtree(nodes, x, y) {
    var tree = new Quadtree(x == null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultX"] : x, y == null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultY"] : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
}
function leaf_copy(leaf) {
    var copy = {
        data: leaf.data
    }, next = copy;
    while(leaf = leaf.next)next = next.next = {
        data: leaf.data
    };
    return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(4)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 4; ++i){
            if (child = node.source[i]) {
                if (child.length) nodes.push({
                    source: child,
                    target: node.target[i] = new Array(4)
                });
                else node.target[i] = leaf_copy(child);
            }
        }
    }
    return copy;
};
treeProto.add = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.addAll = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAll"];
treeProto.cover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$cover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.extent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.find = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.remove = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.removeAll = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAll"];
treeProto.root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.visit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$visit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.visitAfter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$visitAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
treeProto.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quadtree.js [app-client] (ecmascript) <export default as quadtree>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quadtree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quadtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quadtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quadtree.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/constant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return function() {
        return x;
    };
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/jiggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(random) {
    return (random() - 0.5) * 1e-6;
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/collide.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quadtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__quadtree$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quadtree.js [app-client] (ecmascript) <export default as quadtree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/jiggle.js [app-client] (ecmascript)");
;
;
;
function x(d) {
    return d.x + d.vx;
}
function y(d) {
    return d.y + d.vy;
}
function __TURBOPACK__default__export__(radius) {
    var nodes, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quadtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__quadtree$3e$__["quadtree"])(nodes, x, y).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                yi = node.y + node.vy;
                tree.visit(apply);
            }
        }
        function apply(quad, x0, y0, x1, y1) {
            var data = quad.data, rj = quad.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
                    if (l < r * r) {
                        if (x === 0) x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random), l += x * x;
                        if (y === 0) y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random), l += y * y;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        node.vy += (y *= l) * r;
                        data.vx -= x * (r = 1 - r);
                        data.vy -= y * r;
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
    }
    function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for(var i = quad.r = 0; i < 4; ++i){
            if (quad[i] && quad[i].r > quad.r) {
                quad.r = quad[i].r;
            }
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+_), initialize(), force) : radius;
    };
    return force;
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/collide.js [app-client] (ecmascript) <export default as forceCollide>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceCollide",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/collide.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/jiggle.js [app-client] (ecmascript)");
;
;
function index(d) {
    return d.index;
}
function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
}
function __TURBOPACK__default__export__(links) {
    var id = index, strength = defaultStrength, strengths, distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(30), distances, nodes, count, bias, random, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
        for(var k = 0, n = links.length; k < iterations; ++k){
            for(var i = 0, link, source, target, x, y, l, b; i < n; ++i){
                link = links[i], source = link.source, target = link.target;
                x = target.x + target.vx - source.x - source.vx || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random);
                y = target.y + target.vy - source.y - source.vy || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random);
                l = Math.sqrt(x * x + y * y);
                l = (l - distances[i]) / l * alpha * strengths[i];
                x *= l, y *= l;
                target.vx -= x * (b = bias[i]);
                target.vy -= y * b;
                source.vx += x * (b = 1 - b);
                source.vy += y * b;
            }
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map((d, i)=>[
                id(d, i, nodes),
                d
            ])), link;
        for(i = 0, count = new Array(n); i < m; ++i){
            link = links[i], link.index = i;
            if (typeof link.source !== "object") link.source = find(nodeById, link.source);
            if (typeof link.target !== "object") link.target = find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for(i = 0, bias = new Array(m); i < m; ++i){
            link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        }
        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i){
            strengths[i] = +strength(links[i], i, links);
        }
    }
    function initializeDistance() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i){
            distances[i] = +distance(links[i], i, links);
        }
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+_), initializeDistance(), force) : distance;
    };
    return force;
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/link.js [app-client] (ecmascript) <export default as forceLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/link.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i){
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
const __TURBOPACK__default__export__ = dispatch;
}),
"[project]/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dispatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer,
    "now",
    ()=>now,
    "timer",
    ()=>timer,
    "timerFlush",
    ()=>timerFlush
]);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1){
        if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
        } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/lcg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32
function __TURBOPACK__default__export__() {
    let s = 1;
    return ()=>(s = (a * s + c) % m) / m;
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/simulation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "x",
    ()=>x,
    "y",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$lcg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/lcg.js [app-client] (ecmascript)");
;
;
;
function x(d) {
    return d.x;
}
function y(d) {
    return d.y;
}
var initialRadius = 10, initialAngle = Math.PI * (3 - Math.sqrt(5));
function __TURBOPACK__default__export__(nodes) {
    var simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = new Map(), stepper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timer"])(step), event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("tick", "end"), random = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$lcg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    if (nodes == null) nodes = [];
    function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
        }
    }
    function tick(iterations) {
        var i, n = nodes.length, node;
        if (iterations === undefined) iterations = 1;
        for(var k = 0; k < iterations; ++k){
            alpha += (alphaTarget - alpha) * alphaDecay;
            forces.forEach(function(force) {
                force(alpha);
            });
            for(i = 0; i < n; ++i){
                node = nodes[i];
                if (node.fx == null) node.x += node.vx *= velocityDecay;
                else node.x = node.fx, node.vx = 0;
                if (node.fy == null) node.y += node.vy *= velocityDecay;
                else node.y = node.fy, node.vy = 0;
            }
        }
        return simulation;
    }
    function initializeNodes() {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.index = i;
            if (node.fx != null) node.x = node.fx;
            if (node.fy != null) node.y = node.fy;
            if (isNaN(node.x) || isNaN(node.y)) {
                var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
                node.x = radius * Math.cos(angle);
                node.y = radius * Math.sin(angle);
            }
            if (isNaN(node.vx) || isNaN(node.vy)) {
                node.vx = node.vy = 0;
            }
        }
    }
    function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random);
        return force;
    }
    initializeNodes();
    return simulation = {
        tick: tick,
        restart: function() {
            return stepper.restart(step), simulation;
        },
        stop: function() {
            return stepper.stop(), simulation;
        },
        nodes: function(_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },
        alpha: function(_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
        },
        alphaMin: function(_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },
        alphaDecay: function(_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },
        alphaTarget: function(_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },
        velocityDecay: function(_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },
        randomSource: function(_) {
            return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },
        force: function(name, _) {
            return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
        },
        find: function(x, y, radius) {
            var i = 0, n = nodes.length, dx, dy, d2, node, closest;
            if (radius == null) radius = Infinity;
            else radius *= radius;
            for(i = 0; i < n; ++i){
                node = nodes[i];
                dx = x - node.x;
                dy = y - node.y;
                d2 = dx * dx + dy * dy;
                if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
        },
        on: function(name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
    };
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quadtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__quadtree$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-quadtree@3.0.1/node_modules/d3-quadtree/src/quadtree.js [app-client] (ecmascript) <export default as quadtree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/jiggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/simulation.js [app-client] (ecmascript)");
;
;
;
;
function __TURBOPACK__default__export__() {
    var nodes, node, random, alpha, strength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
        var i, n = nodes.length, tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$quadtree$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$quadtree$2f$src$2f$quadtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__quadtree$3e$__["quadtree"])(nodes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"]).visitAfter(accumulate);
        for(alpha = _, i = 0; i < n; ++i)node = nodes[i], tree.visit(apply);
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
    function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;
        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
            for(x = y = i = 0; i < 4; ++i){
                if ((q = quad[i]) && (c = Math.abs(q.value))) {
                    strength += q.value, weight += c, x += c * q.x, y += c * q.y;
                }
            }
            quad.x = x / weight;
            quad.y = y / weight;
        } else {
            q = quad;
            q.x = q.data.x;
            q.y = q.data.y;
            do strength += strengths[q.data.index];
            while (q = q.next)
        }
        quad.value = strength;
    }
    function apply(quad, x1, _, x2) {
        if (!quad.value) return true;
        var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
            if (l < distanceMax2) {
                if (x === 0) x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random), l += x * x;
                if (y === 0) y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random), l += y * y;
                if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
                node.vx += x * quad.value * alpha / l;
                node.vy += y * quad.value * alpha / l;
            }
            return true;
        } else if (quad.length || l >= distanceMax2) return;
        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
            if (x === 0) x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random), l += x * x;
            if (y === 0) y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$jiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(random), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }
        do if (quad.data !== node) {
            w = strengths[quad.data.index] * alpha / l;
            node.vx += x * w;
            node.vy += y * w;
        }
        while (quad = quad.next)
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+_), initialize(), force) : strength;
    };
    force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
}
}),
"[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript) <export default as forceManyBody>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceManyBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$force$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-force@3.0.0/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b21adb67._.js.map