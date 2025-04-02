import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  },
  async viteFinal(config) {
    config.resolve = config.resolve || {} // Garante que config.resolve existe
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': `${process.cwd()}/src` // Adiciona alias para facilitar imports
    }
    return config
  }
}
export default config
