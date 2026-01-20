self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/docs/:path*.mdx",
        "destination": "/llms.mdx/:path*"
      },
      {
        "source": "/docs.mdx",
        "destination": "/llms.mdx"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()