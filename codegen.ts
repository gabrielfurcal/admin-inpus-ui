import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:8080/graphql', // Your GraphQL API endpoint
  documents: ['src/graphql/{queries,mutations}.ts'], // Path to your GraphQL queries/mutations (excludes schema.ts)
  generates: {
    'src/graphql/gql/': { // Ensure the target is a directory with a trailing slash
      preset: "client"
    },
  }
};

export default config;
