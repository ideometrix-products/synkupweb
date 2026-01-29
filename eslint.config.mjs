// import { FlatCompat } from '@eslint/eslintrc';
// import prettier from 'eslint-plugin-prettier';
// import pluginReact from 'eslint-plugin-react';
// import autoPrefix from 'eslint-plugin-simple-import-sort';
// import unusedImports from 'eslint-plugin-unused-imports';
// import globals from 'globals';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   // Next.js-specific ESLint configurations
//   ...compat.extends('next/core-web-vitals'),
//   ...compat.extends('next/typescript'),

//   // Apply Prettier for formatting
//   ...compat.extends('prettier'),

//   // TypeScript recommended configurations
//   ...compat.extends('@typescript-eslint/recommended'),

//   // File-specific configurations
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       sourceType: 'module',
//       globals: globals.browser,
//     },
//   },

//   {
//     plugins: {
//       'unused-imports': unusedImports,
//       'simple-import-sort': autoPrefix,
//       prettier,
//     },
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//       'no-console': ['error', { allow: ['warn', 'error'] }],
//       '@typescript-eslint/no-unused-vars': 'error',
//       'unused-imports/no-unused-imports': 'error',
//       'unused-imports/no-unused-vars': [
//         'warn',
//         {
//           vars: 'all',
//           varsIgnorePattern: '^_',
//           args: 'after-used',
//           argsIgnorePattern: '^_',
//         },
//       ],
//       'simple-import-sort/imports': 'error',
//       'simple-import-sort/exports': 'error',
//       'prettier/prettier': [
//         'error',
//         {
//           singleQuote: true,
//           jsxSingleQuote: true,
//           tabWidth: 2,
//           endOfLine: 'auto',
//         },
//       ],
//       curly: 'error',
//     },
//   },
// ];

// export default eslintConfig;
