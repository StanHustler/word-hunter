import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'Word Hunter',
  description: "Discover new words you don't know",
  version: '1.0.4',
  manifest_version: 3,
  icons: {
    '16': 'icon.png',
    '32': 'icon.png',
    '48': 'icon.png',
    '128': 'icon.png'
  },
  action: {
    default_popup: 'src/popup.html',
    default_icon: 'icon.png'
  },
  options_page: 'src/options.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module'
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/content/content.ts'],
      all_frames: true
    }
  ],
  permissions: ['storage', 'activeTab', 'scripting']
})
