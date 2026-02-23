import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import vitest from 'eslint-plugin-vitest'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore build output
  globalIgnores(['dist']),

  // Base config for JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // Vitest-specific config for test files
  {
    files: ['**/*.test.{js,jsx}'],
    plugins: { vitest },
    extends: [vitest.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.node,
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
