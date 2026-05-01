import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.instant.app',
  appName: 'Instant',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
