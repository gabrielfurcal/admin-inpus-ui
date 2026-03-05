import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        svgr(),
    ],

    server: {
        port: 3000,
        strictPort: true,
    },

    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        css: true,
        include: [
            'src/**/*.{test,spec}.{ts,tsx}',
        ],
        clearMocks: true,
        restoreMocks: true,
    }
})