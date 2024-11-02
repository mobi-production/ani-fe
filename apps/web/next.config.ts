import { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, '..', '..', 'packages', 'ui', 'src', 'styles')
    ],
    additionalData: "@import '@repo/ui/styles';"
  }
}

export default nextConfig
