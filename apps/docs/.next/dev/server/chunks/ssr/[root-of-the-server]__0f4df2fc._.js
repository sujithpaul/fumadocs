module.exports = [
"[project]/node_modules/.pnpm/fumadocs-ui@16.4.7_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2.8_fum_a0aa98b9eaafcfab2811d8db06cde78f/node_modules/fumadocs-ui/dist/components/ui/button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
;
//#region src/components/ui/button.tsx
const variants = {
    primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
    outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
    ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
    secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring", {
    variants: {
        variant: variants,
        color: variants,
        size: {
            sm: "gap-1 px-2 py-1.5 text-xs",
            icon: "p-1.5 [&_svg]:size-5",
            "icon-sm": "p-1.5 [&_svg]:size-4.5",
            "icon-xs": "p-1 [&_svg]:size-4"
        }
    }
});
;
 //# sourceMappingURL=button.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clipboard
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ]
];
const Clipboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clipboard", __iconNode);
;
 //# sourceMappingURL=clipboard.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript) <export default as Clipboard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clipboard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@fumadocs+ui@16.4.7_@types+react@19.2.8_fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@or_964fa1c3b4be450de0f4d570a35ca762/node_modules/@fumadocs/ui/dist/hooks/use-copy-button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyButton",
    ()=>useCopyButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
//#region src/hooks/use-copy-button.ts
function useCopyButton(onCopy) {
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onCopy);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    callbackRef.current = onCopy;
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        Promise.resolve(callbackRef.current()).then(()=>{
            setChecked(true);
            timeoutRef.current = window.setTimeout(()=>{
                setChecked(false);
            }, 1500);
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        };
    }, []);
    return [
        checked,
        onClick
    ];
}
;
 //# sourceMappingURL=use-copy-button.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.4.7_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2.8_fum_a0aa98b9eaafcfab2811d8db06cde78f/node_modules/fumadocs-ui/dist/components/codeblock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock,
    "CodeBlockTab",
    ()=>CodeBlockTab,
    "CodeBlockTabs",
    ()=>CodeBlockTabs,
    "CodeBlockTabsList",
    ()=>CodeBlockTabsList,
    "CodeBlockTabsTrigger",
    ()=>CodeBlockTabsTrigger,
    "Pre",
    ()=>Pre
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.4.7_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2.8_fum_a0aa98b9eaafcfab2811d8db06cde78f/node_modules/fumadocs-ui/dist/components/ui/button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.4.7_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2.8_fum_a0aa98b9eaafcfab2811d8db06cde78f/node_modules/fumadocs-ui/dist/components/ui/tabs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fumadocs$2b$ui$40$16$2e$4$2e$7_$40$types$2b$react$40$19$2e$2$2e$8_fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$or_964fa1c3b4be450de0f4d570a35ca762$2f$node_modules$2f40$fumadocs$2f$ui$2f$dist$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fumadocs+ui@16.4.7_@types+react@19.2.8_fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@or_964fa1c3b4be450de0f4d570a35ca762/node_modules/@fumadocs/ui/dist/cn.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fumadocs$2b$ui$40$16$2e$4$2e$7_$40$types$2b$react$40$19$2e$2$2e$8_fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$or_964fa1c3b4be450de0f4d570a35ca762$2f$node_modules$2f40$fumadocs$2f$ui$2f$dist$2f$hooks$2f$use$2d$copy$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fumadocs+ui@16.4.7_@types+react@19.2.8_fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@or_964fa1c3b4be450de0f4d570a35ca762/node_modules/@fumadocs/ui/dist/hooks/use-copy-button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fumadocs$2b$ui$40$16$2e$4$2e$7_$40$types$2b$react$40$19$2e$2$2e$8_fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$or_964fa1c3b4be450de0f4d570a35ca762$2f$node_modules$2f40$fumadocs$2f$ui$2f$dist$2f$merge$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fumadocs+ui@16.4.7_@types+react@19.2.8_fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@or_964fa1c3b4be450de0f4d570a35ca762/node_modules/@fumadocs/ui/dist/merge-refs.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
//#region src/components/codeblock.tsx
const TabsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function Pre(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("pre", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("min-w-full w-max *:flex *:flex-col", props.className),
        children: props.children
    });
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props$1)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props$1,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("empty:hidden", props$1.className)
    }), ...props }) {
    const inTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(TabsContext) !== null;
    const areaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("figure", {
        ref,
        dir: "ltr",
        ...props,
        tabIndex: -1,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
        children: [
            title ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
                children: [
                    typeof icon === "string" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "[&_svg]:size-3.5",
                        dangerouslySetInnerHTML: {
                            __html: icon
                        }
                    }) : icon,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("figcaption", {
                        className: "flex-1 truncate",
                        children: title
                    }),
                    Actions({
                        className: "-me-2",
                        children: allowCopy && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CopyButton, {
                            containerRef: areaRef
                        })
                    })
                ]
            }) : Actions({
                className: "absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
                children: allowCopy && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CopyButton, {
                    containerRef: areaRef
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: areaRef,
                ...viewportProps,
                role: "region",
                tabIndex: 0,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
                style: {
                    "--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
                    counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
                    ...viewportProps.style
                },
                children
            })
        ]
    });
}
function CopyButton({ className, containerRef, ...props }) {
    const [checked, onClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fumadocs$2b$ui$40$16$2e$4$2e$7_$40$types$2b$react$40$19$2e$2$2e$8_fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$or_964fa1c3b4be450de0f4d570a35ca762$2f$node_modules$2f40$fumadocs$2f$ui$2f$dist$2f$hooks$2f$use$2d$copy$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCopyButton"])(()=>{
        const pre = containerRef.current?.getElementsByTagName("pre").item(0);
        if (!pre) return;
        const clone = pre.cloneNode(true);
        clone.querySelectorAll(".nd-copy-ignore").forEach((node)=>{
            node.replaceWith("\n");
        });
        navigator.clipboard.writeText(clone.textContent ?? "");
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        "data-checked": checked || void 0,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
            size: "icon-xs"
        }), className),
        "aria-label": checked ? "Copied Text" : "Copy Text",
        onClick,
        ...props,
        children: checked ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {})
    });
}
function CodeBlockTabs({ ref, ...props }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nested = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(TabsContext) !== null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fumadocs$2b$ui$40$16$2e$4$2e$7_$40$types$2b$react$40$19$2e$2$2e$8_fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$or_964fa1c3b4be450de0f4d570a35ca762$2f$node_modules$2f40$fumadocs$2f$ui$2f$dist$2f$merge$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRefs"])(containerRef, ref),
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("bg-fd-card rounded-xl border", !nested && "my-4", props.className),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TabsContext, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                    containerRef,
                    nested
                }), [
                nested
            ]),
            children: props.children
        })
    });
}
function CodeBlockTabsList(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className),
        children: props.children
    });
}
function CodeBlockTabsTrigger({ children, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary"
            }),
            children
        ]
    });
}
function CodeBlockTab(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
        ...props
    });
}
;
 //# sourceMappingURL=codeblock.js.map
}),
"[project]/node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */ /**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */ /**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    /** @type {Array<string>} */ const tokens = [];
    const input = String(value || '');
    let index = input.indexOf(',');
    let start = 0;
    /** @type {boolean} */ let end = false;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        const token = input.slice(start, index).trim();
        if (token || !end) {
            tokens.push(token);
        }
        start = index + 1;
        index = input.indexOf(',', start);
    }
    return tokens;
}
function stringify(values, options) {
    const settings = options || {};
    // Ensure the last empty entry is seen.
    const input = values[values.length - 1] === '' ? [
        ...values,
        ''
    ] : values;
    return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
}),
"[project]/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecate",
    ()=>deprecate,
    "equal",
    ()=>equal,
    "ok",
    ()=>ok,
    "unreachable",
    ()=>unreachable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)");
;
/**
 * @type {Set<string>}
 */ const codesWarned = new Set();
class AssertionError extends Error {
    name = 'Assertion';
    code = 'ERR_ASSERTION';
    /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */ // eslint-disable-next-line max-params
    constructor(message, actual, expected, operator, generated){
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        /**
     * @type {unknown}
     */ this.actual = actual;
        /**
     * @type {unknown}
     */ this.expected = expected;
        /**
     * @type {boolean}
     */ this.generated = generated;
        /**
     * @type {string}
     */ this.operator = operator;
    }
}
class DeprecationError extends Error {
    name = 'DeprecationWarning';
    /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */ constructor(message, code){
        super(message);
        /**
     * @type {string | undefined}
     */ this.code = code;
    }
}
function deprecate(fn, message, code) {
    let warned = false;
    // The wrapper will keep the same prototype as fn to maintain prototype chain
    Object.setPrototypeOf(deprecated, fn);
    // @ts-expect-error: it’s perfect, typescript…
    return deprecated;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */ function deprecated(...args) {
        if (!warned) {
            warned = true;
            if (typeof code === 'string' && codesWarned.has(code)) {
            // Empty.
            } else {
                console.error(new DeprecationError(message, code || undefined));
                if (typeof code === 'string') codesWarned.add(code);
            }
        }
        return new.target ? Reflect.construct(fn, args, new.target) : Reflect.apply(fn, this, args);
    }
}
function equal(actual, expected, message) {
    assert((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"])(actual, expected), actual, expected, 'equal', 'Expected values to be deeply equal', message);
}
function ok(value, message) {
    assert(Boolean(value), false, true, 'ok', 'Expected value to be truthy', message);
}
function unreachable(message) {
    assert(false, false, true, 'ok', 'Unreachable', message);
}
/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */ // eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
    if (!bool) {
        throw userMessage instanceof Error ? userMessage : new AssertionError(userMessage || defaultMessage, actual, expected, operator, !userMessage);
    }
}
}),
"[project]/node_modules/.pnpm/estree-util-is-identifier-name@3.0.0/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cont",
    ()=>cont,
    "name",
    ()=>name,
    "start",
    ()=>start
]);
/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [jsx=false]
 *   Support JSX identifiers (default: `false`).
 */ const startRe = /[$_\p{ID_Start}]/u;
const contRe = /[$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const contReJsx = /[-$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
/** @type {Options} */ const emptyOptions = {};
function start(code) {
    return code ? startRe.test(String.fromCodePoint(code)) : false;
}
function cont(code, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? contReJsx : contRe;
    return code ? re.test(String.fromCodePoint(code)) : false;
}
function name(name, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? nameReJsx : nameRe;
    return re.test(name);
}
}),
"[project]/node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whitespace",
    ()=>whitespace
]);
/**
 * @typedef {import('hast').Nodes} Nodes
 */ // HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
const re = /[ \t\n\f\r]/g;
function whitespace(thing) {
    return typeof thing === 'object' ? thing.type === 'text' ? empty(thing.value) : false : empty(thing);
}
/**
 * @param {string} value
 * @returns {boolean}
 */ function empty(value) {
    return value.replace(re, '') === '';
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info as InfoType} from 'property-information'
 */ /** @type {InfoType} */ __turbopack_context__.s([
    "Info",
    ()=>Info
]);
class Info {
    /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */ constructor(property, attribute){
        this.attribute = attribute;
        this.property = property;
    }
}
Info.prototype.attribute = '';
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = '';
Info.prototype.spaceSeparated = false;
Info.prototype.space = undefined;
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolean",
    ()=>boolean,
    "booleanish",
    ()=>booleanish,
    "commaOrSpaceSeparated",
    ()=>commaOrSpaceSeparated,
    "commaSeparated",
    ()=>commaSeparated,
    "number",
    ()=>number,
    "overloadedBoolean",
    ()=>overloadedBoolean,
    "spaceSeparated",
    ()=>spaceSeparated
]);
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefinedInfo",
    ()=>DefinedInfo
]);
/**
 * @import {Space} from 'property-information'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
const checks = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
class DefinedInfo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"] {
    /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */ constructor(property, attribute, mask, space){
        let index = -1;
        super(property, attribute);
        mark(this, 'space', space);
        if (typeof mask === 'number') {
            while(++index < checks.length){
                const check = checks[index];
                mark(this, checks[index], (mask & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[check]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[check]);
            }
        }
    }
}
DefinedInfo.prototype.defined = true;
/**
 * @template {keyof DefinedInfo} Key
 *   Key type.
 * @param {DefinedInfo} values
 *   Info.
 * @param {Key} key
 *   Key.
 * @param {DefinedInfo[Key]} value
 *   Value.
 * @returns {undefined}
 *   Nothing.
 */ function mark(values, key, value) {
    if (value) {
        values[key] = value;
    }
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the cleaned case insensitive form of an attribute or property.
 *
 * @param {string} value
 *   An attribute-like or property-like name.
 * @returns {string}
 *   Value that can be used to look up the properly cased property on a
 *   `Schema`.
 */ __turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
function normalize(value) {
    return value.toLowerCase();
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "find",
    ()=>find
]);
/**
 * @import {Schema} from 'property-information'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)");
;
;
;
const cap = /[A-Z]/g;
const dash = /-[a-z]/g;
const valid = /^data[-\w.:]+$/i;
function find(schema, value) {
    const normal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(value);
    let property = value;
    let Type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"];
    if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === '-') {
            // Turn it into a property.
            const rest = value.slice(5).replace(dash, camelcase);
            property = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
            // Turn it into an attribute.
            const rest = value.slice(4);
            if (!dash.test(rest)) {
                let dashes = rest.replace(cap, kebab);
                if (dashes.charAt(0) !== '-') {
                    dashes = '-' + dashes;
                }
                value = 'data' + dashes;
            }
        }
        Type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinedInfo"];
    }
    return new Type(property, value);
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Kebab.
 */ function kebab($0) {
    return '-' + $0.toLowerCase();
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Camel.
 */ function camelcase($0) {
    return $0.charAt(1).toUpperCase();
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Special cases for React (`Record<string, string>`).
 *
 * `hast` is close to `React` but differs in a couple of cases.
 * To get a React property from a hast property,
 * check if it is in `hastToReact`.
 * If it is, use the corresponding value;
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "hastToReact",
    ()=>hastToReact
]);
const hastToReact = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink'
};
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema as SchemaType, Space} from 'property-information'
 */ /** @type {SchemaType} */ __turbopack_context__.s([
    "Schema",
    ()=>Schema
]);
class Schema {
    /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */ constructor(property, normal, space){
        this.normal = normal;
        this.property = property;
        if (space) {
            this.space = space;
        }
    }
}
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = undefined;
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "merge",
    ()=>merge
]);
/**
 * @import {Info, Space} from 'property-information'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)");
;
function merge(definitions, space) {
    /** @type {Record<string, Info>} */ const property = {};
    /** @type {Record<string, string>} */ const normal = {};
    for (const definition of definitions){
        Object.assign(property, definition.property);
        Object.assign(normal, definition.normal);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"](property, normal, space);
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create
]);
/**
 * @import {Info, Space} from 'property-information'
 */ /**
 * @typedef Definition
 *   Definition of a schema.
 * @property {Record<string, string> | undefined} [attributes]
 *   Normalzed names to special attribute case.
 * @property {ReadonlyArray<string> | undefined} [mustUseProperty]
 *   Normalized names that must be set as properties.
 * @property {Record<string, number | null>} properties
 *   Property names to their types.
 * @property {Space | undefined} [space]
 *   Space.
 * @property {Transform} transform
 *   Transform a property name.
 */ /**
 * @callback Transform
 *   Transform.
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} property
 *   Property.
 * @returns {string}
 *   Attribute.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)");
;
;
;
function create(definition) {
    /** @type {Record<string, Info>} */ const properties = {};
    /** @type {Record<string, string>} */ const normals = {};
    for (const [property, value] of Object.entries(definition.properties)){
        const info = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinedInfo"](property, definition.transform(definition.attributes || {}, property), value, definition.space);
        if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
            info.mustUseProperty = true;
        }
        properties[property] = info;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(property)] = property;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(info.attribute)] = property;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"](properties, normals, definition.space);
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/aria.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aria",
    ()=>aria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
const aria = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaAutoComplete: null,
        ariaBusy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaChecked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaColCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaColIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaColSpan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaControls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaCurrent: null,
        ariaDescribedBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaDetails: null,
        ariaDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaDropEffect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaErrorMessage: null,
        ariaExpanded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaFlowTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaGrabbed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaHasPopup: null,
        ariaHidden: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaLive: null,
        ariaModal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiLine: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiSelectable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaOrientation: null,
        ariaOwns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaPlaceholder: null,
        ariaPosInSet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaPressed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaReadOnly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRelevant: null,
        ariaRequired: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRoleDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaRowCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaRowIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaRowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaSelected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaSetSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaSort: null,
        ariaValueMax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueMin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueNow: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueText: null,
        role: null
    },
    transform (_, property) {
        return property === 'role' ? property : 'aria-' + property.slice(4).toLowerCase();
    }
});
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} attribute
 *   Attribute.
 * @returns {string}
 *   Transformed attribute.
 */ __turbopack_context__.s([
    "caseSensitiveTransform",
    ()=>caseSensitiveTransform
]);
function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseInsensitiveTransform",
    ()=>caseInsensitiveTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)");
;
function caseInsensitiveTransform(attributes, property) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseSensitiveTransform"])(attributes, property.toLowerCase());
}
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "html",
    ()=>html
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv'
    },
    mustUseProperty: [
        'checked',
        'multiple',
        'muted',
        'selected'
    ],
    properties: {
        // Standard Properties.
        abbr: null,
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        acceptCharset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        accessKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        action: null,
        allow: null,
        allowFullScreen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        allowPaymentRequest: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        allowUserMedia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        alt: null,
        as: null,
        async: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        autoCapitalize: null,
        autoComplete: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        autoPlay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        blocking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        capture: null,
        charSet: null,
        checked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        cite: null,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        cols: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        colSpan: null,
        content: null,
        contentEditable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        controls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        controlsList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        coords: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"] | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        defer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        dir: null,
        dirName: null,
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        download: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        draggable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        formTarget: null,
        headers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        hidden: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        high: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        href: null,
        hrefLang: null,
        htmlFor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        httpEquiv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        inputMode: null,
        integrity: null,
        is: null,
        isMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        itemId: null,
        itemProp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemRef: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        low: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        manifest: null,
        max: null,
        maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        media: null,
        method: null,
        min: null,
        minLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        multiple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        muted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        name: null,
        nonce: null,
        noModule: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noValidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        optimum: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pattern: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        placeholder: null,
        playsInline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        referrerPolicy: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        required: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        reversed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        rows: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        rowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        sandbox: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        scope: null,
        scoped: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        seamless: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        selected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootClonable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootDelegatesFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootMode: null,
        shape: null,
        size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        sizes: null,
        slot: null,
        span: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        spellCheck: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        step: null,
        style: null,
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        useMap: null,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        wrap: null,
        writingSuggestions: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        aLink: null,
        archive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        axis: null,
        background: null,
        bgColor: null,
        border: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        borderColor: null,
        bottomMargin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        declare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        leftMargin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        marginWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        noResize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noHref: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noShade: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        rules: null,
        scheme: null,
        scrolling: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        standby: null,
        summary: null,
        text: null,
        topMargin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        disableRemotePlayback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        prefix: null,
        property: null,
        results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        security: null,
        unselectable: null
    },
    space: 'html',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/svg.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        accentHeight: 'accent-height',
        alignmentBaseline: 'alignment-baseline',
        arabicForm: 'arabic-form',
        baselineShift: 'baseline-shift',
        capHeight: 'cap-height',
        className: 'class',
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        crossOrigin: 'crossorigin',
        dataType: 'datatype',
        dominantBaseline: 'dominant-baseline',
        enableBackground: 'enable-background',
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        hrefLang: 'hreflang',
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        horizOriginY: 'horiz-origin-y',
        imageRendering: 'image-rendering',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        navDown: 'nav-down',
        navDownLeft: 'nav-down-left',
        navDownRight: 'nav-down-right',
        navLeft: 'nav-left',
        navNext: 'nav-next',
        navPrev: 'nav-prev',
        navRight: 'nav-right',
        navUp: 'nav-up',
        navUpLeft: 'nav-up-left',
        navUpRight: 'nav-up-right',
        onAbort: 'onabort',
        onActivate: 'onactivate',
        onAfterPrint: 'onafterprint',
        onBeforePrint: 'onbeforeprint',
        onBegin: 'onbegin',
        onCancel: 'oncancel',
        onCanPlay: 'oncanplay',
        onCanPlayThrough: 'oncanplaythrough',
        onChange: 'onchange',
        onClick: 'onclick',
        onClose: 'onclose',
        onCopy: 'oncopy',
        onCueChange: 'oncuechange',
        onCut: 'oncut',
        onDblClick: 'ondblclick',
        onDrag: 'ondrag',
        onDragEnd: 'ondragend',
        onDragEnter: 'ondragenter',
        onDragExit: 'ondragexit',
        onDragLeave: 'ondragleave',
        onDragOver: 'ondragover',
        onDragStart: 'ondragstart',
        onDrop: 'ondrop',
        onDurationChange: 'ondurationchange',
        onEmptied: 'onemptied',
        onEnd: 'onend',
        onEnded: 'onended',
        onError: 'onerror',
        onFocus: 'onfocus',
        onFocusIn: 'onfocusin',
        onFocusOut: 'onfocusout',
        onHashChange: 'onhashchange',
        onInput: 'oninput',
        onInvalid: 'oninvalid',
        onKeyDown: 'onkeydown',
        onKeyPress: 'onkeypress',
        onKeyUp: 'onkeyup',
        onLoad: 'onload',
        onLoadedData: 'onloadeddata',
        onLoadedMetadata: 'onloadedmetadata',
        onLoadStart: 'onloadstart',
        onMessage: 'onmessage',
        onMouseDown: 'onmousedown',
        onMouseEnter: 'onmouseenter',
        onMouseLeave: 'onmouseleave',
        onMouseMove: 'onmousemove',
        onMouseOut: 'onmouseout',
        onMouseOver: 'onmouseover',
        onMouseUp: 'onmouseup',
        onMouseWheel: 'onmousewheel',
        onOffline: 'onoffline',
        onOnline: 'ononline',
        onPageHide: 'onpagehide',
        onPageShow: 'onpageshow',
        onPaste: 'onpaste',
        onPause: 'onpause',
        onPlay: 'onplay',
        onPlaying: 'onplaying',
        onPopState: 'onpopstate',
        onProgress: 'onprogress',
        onRateChange: 'onratechange',
        onRepeat: 'onrepeat',
        onReset: 'onreset',
        onResize: 'onresize',
        onScroll: 'onscroll',
        onSeeked: 'onseeked',
        onSeeking: 'onseeking',
        onSelect: 'onselect',
        onShow: 'onshow',
        onStalled: 'onstalled',
        onStorage: 'onstorage',
        onSubmit: 'onsubmit',
        onSuspend: 'onsuspend',
        onTimeUpdate: 'ontimeupdate',
        onToggle: 'ontoggle',
        onUnload: 'onunload',
        onVolumeChange: 'onvolumechange',
        onWaiting: 'onwaiting',
        onZoom: 'onzoom',
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pointerEvents: 'pointer-events',
        referrerPolicy: 'referrerpolicy',
        renderingIntent: 'rendering-intent',
        shapeRendering: 'shape-rendering',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        strokeDashArray: 'stroke-dasharray',
        strokeDashOffset: 'stroke-dashoffset',
        strokeLineCap: 'stroke-linecap',
        strokeLineJoin: 'stroke-linejoin',
        strokeMiterLimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        tabIndex: 'tabindex',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        transformOrigin: 'transform-origin',
        typeOf: 'typeof',
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        vectorEffect: 'vector-effect',
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        xHeight: 'x-height',
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: 'playbackorder',
        timelineBegin: 'timelinebegin'
    },
    properties: {
        about: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        accentHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        amplitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        arabicForm: null,
        ascent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        attributeName: null,
        attributeType: null,
        azimuth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        by: null,
        calcMode: null,
        capHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        diffuseConstant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        direction: null,
        display: null,
        dur: null,
        divisor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        dominantBaseline: null,
        download: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        enableBackground: null,
        end: null,
        event: null,
        exponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        g2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        horizOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        horizOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        id: null,
        ideographic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k4: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        kernelMatrix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        overlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pointsAtY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pointsAtZ: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        rev: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFeatures: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFonts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFormats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        specularExponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strikethroughThickness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        string: null,
        stroke: null,
        strokeDashArray: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strokeOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strokeWidth: null,
        style: null,
        surfaceScale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        tableValues: null,
        target: null,
        targetX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        targetY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        underlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        values: null,
        vAlphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vMathematical: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vectorEffect: null,
        vHanging: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vIdeographic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        version: null,
        vertAdvY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vertOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vertOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    },
    space: 'svg',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseSensitiveTransform"]
});
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xlink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xlink",
    ()=>xlink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
;
const xlink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: 'xlink',
    transform (_, property) {
        return 'xlink:' + property.slice(5).toLowerCase();
    }
});
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xmlns.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xmlns",
    ()=>xmlns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)");
;
;
const xmlns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        xmlnsxlink: 'xmlns:xlink'
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: 'xmlns',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xml.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xml",
    ()=>xml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
;
const xml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: 'xml',
    transform (_, property) {
        return 'xml:' + property.slice(3).toLowerCase();
    }
});
}),
"[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "html",
    ()=>html,
    "svg",
    ()=>svg
]);
// Note: types exposed from `index.d.ts`.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/aria.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/svg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xlink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xmlns.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xml.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xml"]
], 'html');
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svg"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xml"]
], 'svg');
}),
"[project]/node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    const input = String(value || '').trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(' ').trim();
}
}),
"[project]/node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;
// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */ function index(style, options) {
    if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!style) return [];
    options = options || {};
    /**
   * Positional.
   */ var lineno = 1;
    var column = 1;
    /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */ function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
    }
    /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */ function position() {
        var start = {
            line: lineno,
            column: column
        };
        return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */ function Position(start) {
        this.start = start;
        this.end = {
            line: lineno,
            column: column
        };
        this.source = options.source;
    }
    /**
   * Non-enumerable source string.
   */ Position.prototype.content = style;
    /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */ function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) ;
        else {
            throw err;
        }
    }
    /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */ function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
    }
    /**
   * Parse whitespace.
   */ function whitespace() {
        match(WHITESPACE_REGEX);
    }
    /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */ function comments(rules) {
        var c;
        rules = rules || [];
        while(c = comment()){
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */ function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){
            ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
            type: TYPE_COMMENT,
            comment: str
        });
    }
    /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */ function declaration() {
        var pos = position();
        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");
        // val
        var val = match(VALUE_REGEX);
        var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        // ;
        match(SEMICOLON_REGEX);
        return ret;
    }
    /**
   * Parse declarations.
   *
   * @return {Object[]}
   */ function declarations() {
        var decls = [];
        comments(decls);
        // declarations
        var decl;
        while(decl = declaration()){
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        return decls;
    }
    whitespace();
    return declarations();
}
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */ function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
module.exports = index; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/style-to-object@1.0.14/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StyleToObject;
const inline_style_parser_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/cjs/index.js [app-ssr] (ecmascript)"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */ function StyleToObject(style, iterator) {
    let styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    const declarations = (0, inline_style_parser_1.default)(style);
    const hasIterator = typeof iterator === 'function';
    declarations.forEach((declaration)=>{
        if (declaration.type !== 'declaration') {
            return;
        }
        const { property, value } = declaration;
        if (hasIterator) {
            iterator(property, value, declaration);
        } else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */ var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */ var capitalize = function(match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */ var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
};
/**
 * CamelCases a CSS property.
 */ var camelCase = function(property, options) {
    if (options === void 0) {
        options = {};
    }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase; //# sourceMappingURL=utilities.js.map
}),
"[project]/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var style_to_object_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/style-to-object@1.0.14/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)"));
var utilities_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */ function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function(property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */ /**
 * Get the ending point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */ __turbopack_context__.s([
    "pointEnd",
    ()=>pointEnd,
    "pointStart",
    ()=>pointStart,
    "position",
    ()=>position
]);
const pointEnd = point('end');
const pointStart = point('start');
/**
 * Get the positional info of `node`.
 *
 * @param {'end' | 'start'} type
 *   Side.
 * @returns
 *   Getter.
 */ function point(type) {
    return point;
    //TURBOPACK unreachable
    ;
    /**
   * Get the point info of `node` at a bound side.
   *
   * @param {Node | NodeLike | null | undefined} [node]
   * @returns {Point | undefined}
   */ function point(node) {
        const point = node && node.position && node.position[type] || {};
        if (typeof point.line === 'number' && point.line > 0 && typeof point.column === 'number' && point.column > 0) {
            return {
                line: point.line,
                column: point.column,
                offset: typeof point.offset === 'number' && point.offset > -1 ? point.offset : undefined
            };
        }
    }
}
function position(node) {
    const start = pointStart(node);
    const end = pointEnd(node);
    if (start && end) {
        return {
            start,
            end
        };
    }
}
}),
"[project]/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */ /**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */ __turbopack_context__.s([
    "stringifyPosition",
    ()=>stringifyPosition
]);
function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== 'object') {
        return '';
    }
    // Node.
    if ('position' in value || 'type' in value) {
        return position(value.position);
    }
    // Position.
    if ('start' in value || 'end' in value) {
        return position(value);
    }
    // Point.
    if ('line' in value || 'column' in value) {
        return point(value);
    }
    // ?
    return '';
}
/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */ function point(point) {
    return index(point && point.line) + ':' + index(point && point.column);
}
/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */ function position(pos) {
    return point(pos && pos.start) + '-' + point(pos && pos.end);
}
/**
 * @param {number | null | undefined} value
 * @returns {number}
 */ function index(value) {
    return value && typeof value === 'number' ? value : 1;
}
}),
"[project]/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VFileMessage",
    ()=>VFileMessage
]);
/**
 * @import {Node, Point, Position} from 'unist'
 */ /**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef Options
 *   Configuration.
 * @property {Array<Node> | null | undefined} [ancestors]
 *   Stack of (inclusive) ancestor nodes surrounding the message (optional).
 * @property {Error | null | undefined} [cause]
 *   Original error cause of the message (optional).
 * @property {Point | Position | null | undefined} [place]
 *   Place of message (optional).
 * @property {string | null | undefined} [ruleId]
 *   Category of message (optional, example: `'my-rule'`).
 * @property {string | null | undefined} [source]
 *   Namespace of who sent the message (optional, example: `'my-package'`).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
class VFileMessage extends Error {
    /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */ // eslint-disable-next-line complexity
    constructor(causeOrReason, optionsOrParentOrPlace, origin){
        super();
        if (typeof optionsOrParentOrPlace === 'string') {
            origin = optionsOrParentOrPlace;
            optionsOrParentOrPlace = undefined;
        }
        /** @type {string} */ let reason = '';
        /** @type {Options} */ let options = {};
        let legacyCause = false;
        if (optionsOrParentOrPlace) {
            // Point.
            if ('line' in optionsOrParentOrPlace && 'column' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('start' in optionsOrParentOrPlace && 'end' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('type' in optionsOrParentOrPlace) {
                options = {
                    ancestors: [
                        optionsOrParentOrPlace
                    ],
                    place: optionsOrParentOrPlace.position
                };
            } else {
                options = {
                    ...optionsOrParentOrPlace
                };
            }
        }
        if (typeof causeOrReason === 'string') {
            reason = causeOrReason;
        } else if (!options.cause && causeOrReason) {
            legacyCause = true;
            reason = causeOrReason.message;
            options.cause = causeOrReason;
        }
        if (!options.ruleId && !options.source && typeof origin === 'string') {
            const index = origin.indexOf(':');
            if (index === -1) {
                options.ruleId = origin;
            } else {
                options.source = origin.slice(0, index);
                options.ruleId = origin.slice(index + 1);
            }
        }
        if (!options.place && options.ancestors && options.ancestors) {
            const parent = options.ancestors[options.ancestors.length - 1];
            if (parent) {
                options.place = parent.position;
            }
        }
        const start = options.place && 'start' in options.place ? options.place.start : options.place;
        /**
     * Stack of ancestor nodes surrounding the message.
     *
     * @type {Array<Node> | undefined}
     */ this.ancestors = options.ancestors || undefined;
        /**
     * Original error cause of the message.
     *
     * @type {Error | undefined}
     */ this.cause = options.cause || undefined;
        /**
     * Starting column of message.
     *
     * @type {number | undefined}
     */ this.column = start ? start.column : undefined;
        /**
     * State of problem.
     *
     * * `true` — error, file not usable
     * * `false` — warning, change may be needed
     * * `undefined` — change likely not needed
     *
     * @type {boolean | null | undefined}
     */ this.fatal = undefined;
        /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | undefined}
     */ this.file = '';
        // Field from `Error`.
        /**
     * Reason for message.
     *
     * @type {string}
     */ this.message = reason;
        /**
     * Starting line of error.
     *
     * @type {number | undefined}
     */ this.line = start ? start.line : undefined;
        // Field from `Error`.
        /**
     * Serialized positional info of message.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */ this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])(options.place) || '1:1';
        /**
     * Place of message.
     *
     * @type {Point | Position | undefined}
     */ this.place = options.place || undefined;
        /**
     * Reason for message, should use markdown.
     *
     * @type {string}
     */ this.reason = this.message;
        /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | undefined}
     */ this.ruleId = options.ruleId || undefined;
        /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | undefined}
     */ this.source = options.source || undefined;
        // Field from `Error`.
        /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */ this.stack = legacyCause && options.cause && typeof options.cause.stack === 'string' ? options.cause.stack : '';
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | undefined}
     */ this.actual = undefined;
        /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | undefined}
     */ this.expected = undefined;
        /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | undefined}
     */ this.note = undefined;
        /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | undefined}
     */ this.url = undefined;
    }
}
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.column = undefined;
VFileMessage.prototype.line = undefined;
VFileMessage.prototype.ancestors = undefined;
VFileMessage.prototype.cause = undefined;
VFileMessage.prototype.fatal = undefined;
VFileMessage.prototype.place = undefined;
VFileMessage.prototype.ruleId = undefined;
VFileMessage.prototype.source = undefined;
}),
"[project]/node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toJsxRuntime",
    ()=>toJsxRuntime
]);
/**
 * @import {Identifier, Literal, MemberExpression} from 'estree'
 * @import {Jsx, JsxDev, Options, Props} from 'hast-util-to-jsx-runtime'
 * @import {Element, Nodes, Parents, Root, Text} from 'hast'
 * @import {MdxFlowExpressionHast, MdxTextExpressionHast} from 'mdast-util-mdx-expression'
 * @import {MdxJsxFlowElementHast, MdxJsxTextElementHast} from 'mdast-util-mdx-jsx'
 * @import {MdxjsEsmHast} from 'mdast-util-mdxjs-esm'
 * @import {Position} from 'unist'
 * @import {Child, Create, Field, JsxElement, State, Style} from './types.js'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$comma$2d$separated$2d$tokens$40$2$2e$0$2e$3$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/estree-util-is-identifier-name@3.0.0/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$whitespace$40$3$2e$0$2e$0$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$space$2d$separated$2d$tokens$40$2$2e$0$2e$2$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$style$2d$to$2d$js$40$1$2e$1$2e$21$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// To do: next major: `Object.hasOwn`.
const own = {}.hasOwnProperty;
/** @type {Map<string, number>} */ const emptyMap = new Map();
const cap = /[A-Z]/g;
// `react-dom` triggers a warning for *any* white space in tables.
// To follow GFM, `mdast-util-to-hast` injects line endings between elements.
// Other tools might do so too, but they don’t do here, so we remove all of
// that.
// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/rehypejs/rehype-react/pull/29>.
// See: <https://github.com/rehypejs/rehype-react/pull/32>.
// See: <https://github.com/rehypejs/rehype-react/pull/45>.
const tableElements = new Set([
    'table',
    'tbody',
    'thead',
    'tfoot',
    'tr'
]);
const tableCellElement = new Set([
    'td',
    'th'
]);
const docs = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function toJsxRuntime(tree, options) {
    if (!options || options.Fragment === undefined) {
        throw new TypeError('Expected `Fragment` in options');
    }
    const filePath = options.filePath || undefined;
    /** @type {Create} */ let create;
    if (options.development) {
        if (typeof options.jsxDEV !== 'function') {
            throw new TypeError('Expected `jsxDEV` in options when `development: true`');
        }
        create = developmentCreate(filePath, options.jsxDEV);
    } else {
        if (typeof options.jsx !== 'function') {
            throw new TypeError('Expected `jsx` in production options');
        }
        if (typeof options.jsxs !== 'function') {
            throw new TypeError('Expected `jsxs` in production options');
        }
        create = productionCreate(filePath, options.jsx, options.jsxs);
    }
    /** @type {State} */ const state = {
        Fragment: options.Fragment,
        ancestors: [],
        components: options.components || {},
        create,
        elementAttributeNameCase: options.elementAttributeNameCase || 'react',
        evaluater: options.createEvaluater ? options.createEvaluater() : undefined,
        filePath,
        ignoreInvalidStyle: options.ignoreInvalidStyle || false,
        passKeys: options.passKeys !== false,
        passNode: options.passNode || false,
        schema: options.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        stylePropertyNameCase: options.stylePropertyNameCase || 'dom',
        tableCellAlignToStyle: options.tableCellAlignToStyle !== false
    };
    const result = one(state, tree, undefined);
    // JSX element.
    if (result && typeof result !== 'string') {
        return result;
    }
    // Text node or something that turned into nothing.
    return state.create(tree, state.Fragment, {
        children: result || undefined
    }, undefined);
}
/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Nodes} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function one(state, node, key) {
    if (node.type === 'element') {
        return element(state, node, key);
    }
    if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
        return mdxExpression(state, node);
    }
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        return mdxJsxElement(state, node, key);
    }
    if (node.type === 'mdxjsEsm') {
        return mdxEsm(state, node);
    }
    if (node.type === 'root') {
        return root(state, node, key);
    }
    if (node.type === 'text') {
        return text(state, node);
    }
}
/**
 * Handle element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function element(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.tagName.toLowerCase() === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = findComponentFromName(state, node.tagName, false);
    const props = createElementProps(state, node);
    let children = createChildren(state, node);
    if (tableElements.has(node.tagName)) {
        children = children.filter(function(child) {
            return typeof child === 'string' ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$whitespace$40$3$2e$0$2e$0$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whitespace"])(child) : true;
        });
    }
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle MDX expression.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxFlowExpressionHast | MdxTextExpressionHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxExpression(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        const program = node.data.estree;
        const expression = program.body[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
        // Assume result is a child.
        return state.evaluater.evaluateExpression(expression.expression);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX ESM.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxjsEsmHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxEsm(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        // Assume result is a child.
        return state.evaluater.evaluateProgram(node.data.estree);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX JSX.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxJsxElement(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.name === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = node.name === null ? state.Fragment : findComponentFromName(state, node.name, true);
    const props = createJsxElementProps(state, node);
    const children = createChildren(state, node);
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle root.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Root} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function root(state, node, key) {
    /** @type {Props} */ const props = {};
    addChildren(props, createChildren(state, node));
    return state.create(node, state.Fragment, props, key);
}
/**
 * Handle text.
 *
 * @param {State} _
 *   Info passed around.
 * @param {Text} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function text(_, node) {
    return node.value;
}
/**
 * Add `node` to props.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Props} props
 *   Props.
 * @param {unknown} type
 *   Type.
 * @param {Element | MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Node.
 * @returns {undefined}
 *   Nothing.
 */ function addNode(state, props, type, node) {
    // If this is swapped out for a component:
    if (typeof type !== 'string' && type !== state.Fragment && state.passNode) {
        props.node = node;
    }
}
/**
 * Add children to props.
 *
 * @param {Props} props
 *   Props.
 * @param {Array<Child>} children
 *   Children.
 * @returns {undefined}
 *   Nothing.
 */ function addChildren(props, children) {
    if (children.length > 0) {
        const value = children.length > 1 ? children : children[0];
        if (value) {
            props.children = value;
        }
    }
}
/**
 * @param {string | undefined} _
 *   Path to file.
 * @param {Jsx} jsx
 *   Dynamic.
 * @param {Jsx} jsxs
 *   Static.
 * @returns {Create}
 *   Create a production element.
 */ function productionCreate(_, jsx, jsxs) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(_, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const fn = isStaticChildren ? jsxs : jsx;
        return key ? fn(type, props, key) : fn(type, props);
    }
}
/**
 * @param {string | undefined} filePath
 *   Path to file.
 * @param {JsxDev} jsxDEV
 *   Development.
 * @returns {Create}
 *   Create a development element.
 */ function developmentCreate(filePath, jsxDEV) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(node, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node);
        return jsxDEV(type, props, key, isStaticChildren, {
            columnNumber: point ? point.column - 1 : undefined,
            fileName: filePath,
            lineNumber: point ? point.line : undefined
        }, undefined);
    }
}
/**
 * Create props from an element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current element.
 * @returns {Props}
 *   Props.
 */ function createElementProps(state, node) {
    /** @type {Props} */ const props = {};
    /** @type {string | undefined} */ let alignValue;
    /** @type {string} */ let prop;
    for(prop in node.properties){
        if (prop !== 'children' && own.call(node.properties, prop)) {
            const result = createProperty(state, prop, node.properties[prop]);
            if (result) {
                const [key, value] = result;
                if (state.tableCellAlignToStyle && key === 'align' && typeof value === 'string' && tableCellElement.has(node.tagName)) {
                    alignValue = value;
                } else {
                    props[key] = value;
                }
            }
        }
    }
    if (alignValue) {
        // Assume style is an object.
        const style = props.style || (props.style = {});
        style[state.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = alignValue;
    }
    return props;
}
/**
 * Create props from a JSX element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current JSX element.
 * @returns {Props}
 *   Props.
 */ function createJsxElementProps(state, node) {
    /** @type {Props} */ const props = {};
    for (const attribute of node.attributes){
        if (attribute.type === 'mdxJsxExpressionAttribute') {
            if (attribute.data && attribute.data.estree && state.evaluater) {
                const program = attribute.data.estree;
                const expression = program.body[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                const objectExpression = expression.expression;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(objectExpression.type === 'ObjectExpression');
                const property = objectExpression.properties[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(property.type === 'SpreadElement');
                Object.assign(props, state.evaluater.evaluateExpression(property.argument));
            } else {
                crashEstree(state, node.position);
            }
        } else {
            // For JSX, the author is responsible of passing in the correct values.
            const name = attribute.name;
            /** @type {unknown} */ let value;
            if (attribute.value && typeof attribute.value === 'object') {
                if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
                    const program = attribute.value.data.estree;
                    const expression = program.body[0];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                    value = state.evaluater.evaluateExpression(expression.expression);
                } else {
                    crashEstree(state, node.position);
                }
            } else {
                value = attribute.value === null ? true : attribute.value;
            }
            // Assume a prop.
            props[name] = value;
        }
    }
    return props;
}
/**
 * Create children.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Parents} node
 *   Current element.
 * @returns {Array<Child>}
 *   Children.
 */ function createChildren(state, node) {
    /** @type {Array<Child>} */ const children = [];
    let index = -1;
    /** @type {Map<string, number>} */ // Note: test this when Solid doesn’t want to merge my upcoming PR.
    /* c8 ignore next */ const countsByName = state.passKeys ? new Map() : emptyMap;
    while(++index < node.children.length){
        const child = node.children[index];
        /** @type {string | undefined} */ let key;
        if (state.passKeys) {
            const name = child.type === 'element' ? child.tagName : child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement' ? child.name : undefined;
            if (name) {
                const count = countsByName.get(name) || 0;
                key = name + '-' + count;
                countsByName.set(name, count + 1);
            }
        }
        const result = one(state, child, key);
        if (result !== undefined) children.push(result);
    }
    return children;
}
/**
 * Handle a property.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Field | undefined}
 *   Field for runtime, optional.
 */ function createProperty(state, prop, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(state.schema, prop);
    // Ignore nullish and `NaN` values.
    if (value === null || value === undefined || typeof value === 'number' && Number.isNaN(value)) {
        return;
    }
    if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$comma$2d$separated$2d$tokens$40$2$2e$0$2e$3$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$space$2d$separated$2d$tokens$40$2$2e$0$2e$2$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value);
    }
    // React only accepts `style` as object.
    if (info.property === 'style') {
        let styleObject = typeof value === 'object' ? value : parseStyle(state, String(value));
        if (state.stylePropertyNameCase === 'css') {
            styleObject = transformStylesToCssCasing(styleObject);
        }
        return [
            'style',
            styleObject
        ];
    }
    return [
        state.elementAttributeNameCase === 'react' && info.space ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hastToReact"][info.property] || info.property : info.attribute,
        value
    ];
}
/**
 * Parse a CSS declaration to an object.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} value
 *   CSS declarations.
 * @returns {Style}
 *   Properties.
 * @throws
 *   Throws `VFileMessage` when CSS cannot be parsed.
 */ function parseStyle(state, value) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$style$2d$to$2d$js$40$1$2e$1$2e$21$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value, {
            reactCompat: true
        });
    } catch (error) {
        if (state.ignoreInvalidStyle) {
            return {};
        }
        const cause = error;
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot parse `style` attribute', {
            ancestors: state.ancestors,
            cause,
            ruleId: 'style',
            source: 'hast-util-to-jsx-runtime'
        });
        message.file = state.filePath || undefined;
        message.url = docs + '#cannot-parse-style-attribute';
        throw message;
    }
}
/**
 * Create a JSX name from a string.
 *
 * @param {State} state
 *   To do.
 * @param {string} name
 *   Name.
 * @param {boolean} allowExpression
 *   Allow member expressions and identifiers.
 * @returns {unknown}
 *   To do.
 */ function findComponentFromName(state, name, allowExpression) {
    /** @type {Identifier | Literal | MemberExpression} */ let result;
    if (!allowExpression) {
        result = {
            type: 'Literal',
            value: name
        };
    } else if (name.includes('.')) {
        const identifiers = name.split('.');
        let index = -1;
        /** @type {Identifier | Literal | MemberExpression | undefined} */ let node;
        while(++index < identifiers.length){
            /** @type {Identifier | Literal} */ const prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(identifiers[index]) ? {
                type: 'Identifier',
                name: identifiers[index]
            } : {
                type: 'Literal',
                value: identifiers[index]
            };
            node = node ? {
                type: 'MemberExpression',
                object: node,
                property: prop,
                computed: Boolean(index && prop.type === 'Literal'),
                optional: false
            } : prop;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'always a result');
        result = node;
    } else {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(name) && !/^[a-z]/.test(name) ? {
            type: 'Identifier',
            name
        } : {
            type: 'Literal',
            value: name
        };
    }
    // Only literals can be passed in `components` currently.
    // No identifiers / member expressions.
    if (result.type === 'Literal') {
        const name = result.value;
        return own.call(state.components, name) ? state.components[name] : name;
    }
    // Assume component.
    if (state.evaluater) {
        return state.evaluater.evaluateExpression(result);
    }
    crashEstree(state);
}
/**
 * @param {State} state
 * @param {Position | undefined} [place]
 * @returns {never}
 */ function crashEstree(state, place) {
    const message = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot handle MDX estrees without `createEvaluater`', {
        ancestors: state.ancestors,
        place,
        ruleId: 'mdx-estree',
        source: 'hast-util-to-jsx-runtime'
    });
    message.file = state.filePath || undefined;
    message.url = docs + '#cannot-handle-mdx-estrees-without-createevaluater';
    throw message;
}
/**
 * Transform a DOM casing style object to a CSS casing style object.
 *
 * @param {Style} domCasing
 * @returns {Style}
 */ function transformStylesToCssCasing(domCasing) {
    /** @type {Style} */ const cssCasing = {};
    /** @type {string} */ let from;
    for(from in domCasing){
        if (own.call(domCasing, from)) {
            cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
        }
    }
    return cssCasing;
}
/**
 * Transform a DOM casing style field to a CSS casing style field.
 *
 * @param {string} from
 * @returns {string}
 */ function transformStyleToCssCasing(from) {
    let to = from.replace(cap, toDash);
    // Handle `ms-xxx` -> `-ms-xxx`.
    if (to.slice(0, 3) === 'ms-') to = '-' + to;
    return to;
}
/**
 * Make `$0` dash cased.
 *
 * @param {string} $0
 *   Capitalized ASCII leter.
 * @returns {string}
 *   Dash and lower letter.
 */ function toDash($0) {
    return '-' + $0.toLowerCase();
}
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/shiki-B4NO99XD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>highlightHast,
    "i",
    ()=>highlight,
    "n",
    ()=>getHighlighter,
    "r",
    ()=>hastToJsx,
    "t",
    ()=>defaultThemes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$40$2$2e$3$2e$6$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)");
;
;
;
//#region src/highlight/shiki.ts
const defaultThemes = {
    light: "github-light",
    dark: "github-dark"
};
const highlighters = /* @__PURE__ */ new Map();
async function highlightHast(code, options) {
    const { lang: initialLang, fallbackLanguage, components: _, engine = "js", ...rest } = options;
    let lang = initialLang;
    let themes;
    let themesToLoad;
    if ("theme" in options && options.theme) {
        themes = {
            theme: options.theme
        };
        themesToLoad = [
            themes.theme
        ];
    } else {
        themes = {
            themes: "themes" in options && options.themes ? options.themes : defaultThemes
        };
        themesToLoad = Object.values(themes.themes).filter((v)=>v !== void 0);
    }
    const highlighter = await getHighlighter(engine, {
        langs: [],
        themes: themesToLoad
    });
    try {
        await highlighter.loadLanguage(lang);
    } catch  {
        lang = fallbackLanguage ?? "text";
        await highlighter.loadLanguage(lang);
    }
    return highlighter.codeToHast(code, {
        lang,
        ...rest,
        ...themes,
        defaultColor: "themes" in themes ? false : void 0
    });
}
function hastToJsx(hast, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$40$2$2e$3$2e$6$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJsxRuntime"])(hast, {
        jsx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"],
        jsxs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"],
        development: false,
        Fragment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
        ...options
    });
}
/**
* Get Shiki highlighter instance of Fumadocs (mostly for internal use, you should use Shiki directly over this).
*
* @param engineType - Shiki Regex engine to use.
* @param options - Shiki options.
*/ async function getHighlighter(engineType, options) {
    const { createHighlighter } = await __turbopack_context__.A("[externals]/shiki [external] (shiki, esm_import, [project]/node_modules/.pnpm/shiki@3.21.0/node_modules/shiki, async loader)");
    let highlighter = highlighters.get(engineType);
    if (!highlighter) {
        let engine;
        if (engineType === "js") engine = __turbopack_context__.A("[externals]/shiki/engine/javascript [external] (shiki/engine/javascript, esm_import, [project]/node_modules/.pnpm/shiki@3.21.0/node_modules/shiki, async loader)").then((res)=>res.createJavaScriptRegexEngine());
        else engine = __turbopack_context__.A("[externals]/shiki/engine/oniguruma [external] (shiki/engine/oniguruma, esm_import, [project]/node_modules/.pnpm/shiki@3.21.0/node_modules/shiki, async loader)").then((res)=>res.createOnigurumaEngine(__turbopack_context__.A("[externals]/shiki/wasm [external] (shiki/wasm, esm_import, [project]/node_modules/.pnpm/shiki@3.21.0/node_modules/shiki, async loader)")));
        highlighter = createHighlighter({
            ...options,
            engine
        });
        highlighters.set(engineType, highlighter);
        return highlighter;
    }
    return highlighter.then(async (instance)=>{
        await Promise.all([
            instance.loadLanguage(...options.langs),
            instance.loadTheme(...options.themes)
        ]);
        return instance;
    });
}
async function highlight(code, options) {
    return hastToJsx(await highlightHast(code, options), {
        components: options.components
    });
}
;
 //# sourceMappingURL=shiki-B4NO99XD.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/highlight/client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useShiki",
    ()=>useShiki
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$shiki$2d$B4NO99XD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/shiki-B4NO99XD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
//#region src/highlight/client.tsx
const promises = {};
/**
* get highlighted results, should be used with React Suspense API.
*
* note: results are cached with (lang, code) as keys, if this is not the desired behaviour, pass a `deps` instead.
*/ function useShiki(code, options, deps) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return deps ? JSON.stringify(deps) : `${options.lang}:${code}`;
    }, [
        code,
        deps,
        options.lang
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(promises[key] ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$shiki$2d$B4NO99XD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(code, options));
}
;
 //# sourceMappingURL=client.js.map
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.4.7_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2.8_fum_a0aa98b9eaafcfab2811d8db06cde78f/node_modules/fumadocs-ui/dist/components/dynamic-codeblock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicCodeBlock",
    ()=>DynamicCodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$codeblock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.4.7_@types+react-dom@19.2.3_@types+react@19.2.8__@types+react@19.2.8_fum_a0aa98b9eaafcfab2811d8db06cde78f/node_modules/fumadocs-ui/dist/components/codeblock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fumadocs$2b$ui$40$16$2e$4$2e$7_$40$types$2b$react$40$19$2e$2$2e$8_fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$or_964fa1c3b4be450de0f4d570a35ca762$2f$node_modules$2f40$fumadocs$2f$ui$2f$dist$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fumadocs+ui@16.4.7_@types+react@19.2.8_fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@or_964fa1c3b4be450de0f4d570a35ca762/node_modules/@fumadocs/ui/dist/cn.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$highlight$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.4.7_@mixedbread+sdk@0.50.1_@orama+core@1.2.16_@types+react@19.2.8_algo_e18cee3cf14aa26e5da8602b1a071a25/node_modules/fumadocs-core/dist/highlight/client.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
//#region src/components/dynamic-codeblock.tsx
const PropsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function DefaultPre(props) {
    const extraProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(PropsContext);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$codeblock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBlock"], {
        ...props,
        ...extraProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])("my-0", props.className, extraProps?.className),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$4$2e$7_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$8_$5f40$types$2b$react$40$19$2e$2$2e$8_fum_a0aa98b9eaafcfab2811d8db06cde78f$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$codeblock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pre"], {
            children: props.children
        })
    });
}
function DynamicCodeBlock({ lang, code, codeblock, options, wrapInSuspense = true }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const shikiOptions = {
        lang,
        ...options,
        components: {
            pre: DefaultPre,
            ...options?.components
        }
    };
    const children = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PropsContext, {
        value: codeblock,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Internal, {
            id,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeferredValue"])({
                code,
                options: shikiOptions
            })
        })
    });
    if (wrapInSuspense) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Placeholder, {
            code,
            components: shikiOptions.components
        }),
        children
    });
    return children;
}
function Placeholder({ code, components = {} }) {
    const { pre: Pre$1 = "pre", code: Code = "code" } = components;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Pre$1, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Code, {
            children: code.split("\n").map((line, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "line",
                    children: line
                }, i))
        })
    });
}
function Internal({ id, code, options }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$4$2e$7_$40$mixedbread$2b$sdk$40$0$2e$50$2e$1_$40$orama$2b$core$40$1$2e$2$2e$16_$40$types$2b$react$40$19$2e$2$2e$8_algo_e18cee3cf14aa26e5da8602b1a071a25$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$highlight$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useShiki"])(code, options, [
        id,
        options.lang,
        code
    ]);
}
;
 //# sourceMappingURL=dynamic-codeblock.js.map
}),
"[externals]/shiki [external] (shiki, esm_import, [project]/node_modules/.pnpm/shiki@3.21.0/node_modules/shiki)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("shiki-876776e5b28d95df");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f4df2fc._.js.map