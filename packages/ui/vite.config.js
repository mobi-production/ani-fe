import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.{ts,tsx}']
    })
  ],
  resolve: {
    alias: {
      '@repo/ui': resolve(__dirname, './src'),
      '@repo/util': resolve(__dirname, '../../packages/util/src')
    }
  },
  build: {
    lib: {
      entry: {
        client: resolve(__dirname, 'src/client.ts'),
        server: resolve(__dirname, 'src/server.ts')
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
