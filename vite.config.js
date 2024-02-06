import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/' // Replace <REPO-NAME> with your GitHub repository name
    : '/',
	base: '/portfolio/',
	plugins: [vue()]
});
