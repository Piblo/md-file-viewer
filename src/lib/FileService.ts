import type { FileModel } from '@/model/FileModel'

export async function addFile(file: FileModel) {
  localStorage.setItem(`file:${file.id}`, JSON.stringify(file))
  return file
}

export function getFiles() {
  const files: FileModel[] = []
  for (const key in localStorage) {
    if (key.startsWith('file:')) {
      const fileJson = localStorage.getItem(key)
      if (fileJson) {
        files.push(JSON.parse(fileJson))
      }
    }
  }

  return files
}

export async function mapToFileModel(file: File): Promise<FileModel> {
  return {
    dateUploaded: new Date(),
    id: crypto.randomUUID(),
    markdown: await file.text(),
    name: file.name,
  }
}
