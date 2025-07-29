import FileView from '@/views/FileView.vue'
import UploadView from '@/views/UploadView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: UploadView },
    { path: '/file/:id', component: FileView },
  ],
})

export default router
