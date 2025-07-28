import { FlatCompat } from '@eslint/eslintrc'
 
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
 
const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/typescript'],
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  }),
]

 
export default eslintConfig