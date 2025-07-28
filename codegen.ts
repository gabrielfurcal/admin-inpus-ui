import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:8080/graphql', // Your GraphQL API endpoint
  documents: 'src/graphql/**/*.ts', // Path to your GraphQL queries/mutations
  generates: {
    'src/graphql/schema.ts': { // Ensure the target is a directory with a trailing slash
      plugins: [
        'typescript',                 // Generate base TypeScript types
        'typescript-operations',      // Generate types for operations (queries/mutations)
        'typescript-react-apollo'
      ],
    },
  },
  config: {
    withHooks: true,                 // Use React Apollo hooks
  },
};

export default config;
