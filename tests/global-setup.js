import { execSync } from 'node:child_process'
import { resolve } from 'node:path'

// Runs the real `npm run build` once for the whole test run.
export default function setup() {
  execSync('npm run build', { cwd: resolve(import.meta.dirname, '..'), stdio: 'pipe' })
}
