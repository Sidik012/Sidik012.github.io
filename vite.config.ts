import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
<<<<<<< HEAD
      base: '/', // AJOUTE CETTE LIGNE
=======
      base: '/',
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
<<<<<<< HEAD
      },
      build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'framer-motion'],
                    three: ['three', '@react-three/fiber', '@react-three/drei']
                }
            }
        }
      }
    };
});
=======
      }
    };
});
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
