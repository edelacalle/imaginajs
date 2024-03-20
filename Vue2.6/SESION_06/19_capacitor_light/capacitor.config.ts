import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.calleasesores.cap1',
  appName: 'mobile',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
