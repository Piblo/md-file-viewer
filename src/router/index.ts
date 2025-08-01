import { useFileStore } from '@/stores/files'
import FileView from '@/views/FileView.vue'
import UploadView from '@/views/UploadView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: UploadView },
    {
      path: '/file/:id',
      component: FileView,
      beforeEnter: (to, from, next) => {
        const fileId = to.params.id as string
        const file = useFileStore().getFile(fileId)
        if (!file) {
          next('/')
        } else {
          next()
        }
      },
    },
  ],
})

export default router
