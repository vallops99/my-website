import { defineConfig } from 'vitest/config'

// Separate from vite.config.js: the Cloudflare plugin must not load inside vitest.
// globalSetup builds dist/ once; the tests only read it.
export default defineConfig({
  test: { include: ['tests/**/*.test.js'], globalSetup: ['tests/global-setup.js'] },
})
