// eslint-disable-next-line @typescript-eslint/no-var-requires
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: "src/graphql/*.ts",
  generates: {
    "src/graphql/generated/gql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
  },
};
