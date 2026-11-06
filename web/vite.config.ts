import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const services = {
    access: env.ACCESS_API_URL || 'http://localhost:5101',
    'tasks-printing': env.TASKS_PRINTING_API_URL || 'http://localhost:5102',
    submissions: env.SUBMISSIONS_API_URL || 'http://localhost:5103',
  };

  return {
    plugins: [react()],
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true,
      proxy: Object.fromEntries(
        Object.entries(services).map(([name, target]) => [
          `/api/${name}`,
          {
            target,
            changeOrigin: true,
            rewrite: (path: string) => path.replace(`/api/${name}`, ''),
          },
        ]),
      ),
    },
  };
});
