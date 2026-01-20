module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/components/feedback/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actionResponse",
    ()=>actionResponse,
    "blockFeedback",
    ()=>blockFeedback,
    "pageFeedback",
    ()=>pageFeedback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/mini/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/mini/index.js [app-rsc] (ecmascript)");
;
const blockFeedback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    blockId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    /** the referenced text of block */ blockBody: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
});
const pageFeedback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    opinion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'good',
        'bad'
    ]),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
const actionResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    githubUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
});
}),
"[project]/lib/github.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "$$RSC_SERVER_ACTION_1",
    ()=>$$RSC_SERVER_ACTION_1,
    "DocsCategory",
    ()=>DocsCategory,
    "onBlockFeedbackAction",
    ()=>onBlockFeedbackAction,
    "onPageFeedbackAction",
    ()=>onPageFeedbackAction,
    "owner",
    ()=>owner,
    "repo",
    ()=>repo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_@opentelemetry+api@1.9.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401840cea0e1440c0e5634d9c54c9cfe9c9f3eda5d":"$$RSC_SERVER_ACTION_1","40f3f5fc2f3410718dd8fef8b3efdebd8ce68d065d":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$octokit$40$5$2e$0$2e$5$2f$node_modules$2f$octokit$2f$dist$2d$bundle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/octokit@5.0.5/node_modules/octokit/dist-bundle/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$feedback$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/feedback/schema.ts [app-rsc] (ecmascript)");
;
;
;
const repo = 'fumadocs';
const owner = 'fuma-nama';
const DocsCategory = 'Docs Feedback';
let instance;
async function getOctokit() {
    if (instance) return instance;
    const appId = process.env.GITHUB_APP_ID;
    const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;
    if (!appId || !privateKey) {
        throw new Error('No GitHub keys provided for Github app, docs feedback feature will not work.');
    }
    const app = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$octokit$40$5$2e$0$2e$5$2f$node_modules$2f$octokit$2f$dist$2d$bundle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"]({
        appId,
        privateKey
    });
    const { data } = await app.octokit.request('GET /repos/{owner}/{repo}/installation', {
        owner,
        repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    instance = await app.getInstallationOctokit(data.id);
    return instance;
}
let cachedDestination;
async function getFeedbackDestination() {
    if (cachedDestination) return cachedDestination;
    const octokit = await getOctokit();
    const { repository } = await octokit.graphql(`
  query {
    repository(owner: "${owner}", name: "${repo}") {
      id
      discussionCategories(first: 25) {
        nodes { id name }
      }
    }
  }
`);
    return cachedDestination = repository;
}
const $$RSC_SERVER_ACTION_0 = async function onPageFeedbackAction(feedback) {
    feedback = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$feedback$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageFeedback"].parse(feedback);
    return createDiscussionThread(feedback.url, `[${feedback.opinion}] ${feedback.message}\n\n> Forwarded from user feedback.`);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40f3f5fc2f3410718dd8fef8b3efdebd8ce68d065d", null);
var onPageFeedbackAction = $$RSC_SERVER_ACTION_0;
const $$RSC_SERVER_ACTION_1 = async function onBlockFeedbackAction(feedback) {
    feedback = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$feedback$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blockFeedback"].parse(feedback);
    return createDiscussionThread(feedback.url, `> ${feedback.blockBody ?? feedback.blockId}\n\n${feedback.message}\n\n> Forwarded from user feedback.`);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_1, "401840cea0e1440c0e5634d9c54c9cfe9c9f3eda5d", null);
var onBlockFeedbackAction = $$RSC_SERVER_ACTION_1;
async function createDiscussionThread(pageId, body) {
    const octokit = await getOctokit();
    const destination = await getFeedbackDestination();
    const category = destination.discussionCategories.nodes.find((category)=>category.name === DocsCategory);
    if (!category) throw new Error(`Please create a "${DocsCategory}" category in GitHub Discussion`);
    const title = `Feedback for ${pageId}`;
    const { search: { nodes: [discussion] } } = await octokit.graphql(`
          query {
            search(type: DISCUSSION, query: ${JSON.stringify(`${title} in:title repo:${owner}/${repo} author:@me`)}, first: 1) {
              nodes {
                ... on Discussion { id, url }
              }
            }
          }`);
    if (discussion) {
        const result = await octokit.graphql(`
            mutation {
              addDiscussionComment(input: { body: ${JSON.stringify(body)}, discussionId: "${discussion.id}" }) {
                comment { id, url }
              }
            }`);
        return {
            githubUrl: result.addDiscussionComment.comment.url
        };
    } else {
        const result = await octokit.graphql(`
            mutation {
              createDiscussion(input: { repositoryId: "${destination.id}", categoryId: "${category.id}", body: ${JSON.stringify(body)}, title: ${JSON.stringify(title)} }) {
                discussion { id, url }
              }
            }`);
        return {
            githubUrl: result.discussion.url
        };
    }
}
}),
"[project]/.next-internal/server/app/[lang]/(home)/sponsors/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/github.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/github.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/[lang]/(home)/sponsors/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/github.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401840cea0e1440c0e5634d9c54c9cfe9c9f3eda5d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_1"],
    "40f3f5fc2f3410718dd8fef8b3efdebd8ce68d065d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$home$292f$sponsors$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(home)/sponsors/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/github.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/github.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0aa4da52._.js.map