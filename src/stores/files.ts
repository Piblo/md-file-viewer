import { addFile, getFiles } from '@/lib/FileService'
import { FileNotFoundError } from '@/model/errors'
import type { FileModel } from '@/model/FileModel'
import { defineStore } from 'pinia'

export const useFileStore = defineStore('file', {
  state: () => {
    return {
      files: getFiles(),
    }
  },
  getters: {
    getFile: (state) => (id: string) => {
      const file = state.files.find((file) => file.id === id)
      if (!file) {
        throw new FileNotFoundError(`Could not find file with id ${id}`)
      }

      return file
    },
  },
  actions: {
    addFile(file: FileModel) {
      this.files.push(file)
      addFile(file)
    },
  },
})
