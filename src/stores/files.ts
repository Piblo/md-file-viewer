import * as fileService from '@/lib/FileService'
import type { FileModel } from '@/model/FileModel'
import { defineStore } from 'pinia'

export const useFileStore = defineStore('file', {
  state: () => {
    return {
      files: fileService.getFiles(),
    }
  },
  getters: {
    getFile: (state) => (id: string) => {
      const file = state.files.find((file) => file.id === id)
      return file
    },
    getFiles: (state) => () => state.files,
  },
  actions: {
    addFile(file: FileModel) {
      this.files.push(file)
      fileService.addFile(file)
    },
    deleteFile(id: string) {
      this.files = this.files.filter((file) => file.id !== id)
      fileService.deleteFile(id)
    },
  },
})
