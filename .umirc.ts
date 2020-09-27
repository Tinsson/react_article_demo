import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    dark: false
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/todo', component: '@/pages/todo' },
    { path: '/user', component: '@/pages/user'}
  ]
});
