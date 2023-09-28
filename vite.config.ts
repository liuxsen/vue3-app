import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const envFolder = path.join(process.cwd(), 'env')
  // 加载VITE_ ENV_ 开头的变量
  return {
    server: {
      port: 8081,
    },
    envDir: envFolder,
    envPrefix: ['VITE_', 'ENV_'],
    define: {
    },
  }
})
