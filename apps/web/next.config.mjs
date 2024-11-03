import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, '..', '..', 'packages', 'ui', 'src', 'styles')
    ],
    additionalData: "@use '@repo/ui/styles';"
  }
}

export default nextConfig
