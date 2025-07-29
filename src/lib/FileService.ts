import type { FileModel } from '@/model/FileModel'

export async function addFile(file: File) {
  const fileText = await file.text()

  const fileModel: FileModel = {
    dateUploaded: new Date(),
    id: crypto.randomUUID(),
    markdown: fileText,
    name: file.name,
  }

  localStorage.setItem(`file:${fileModel.id}`, JSON.stringify(fileModel))

  return fileModel
}

export function getFile(id: string) {
  const fileJson = localStorage.getItem(`file:${id}`)
  if (!fileJson) {
    throw new FileNotFoundError(`Could not find file with id ${id}`)
  }

  const file: FileModel = JSON.parse(fileJson)
  return file
}

class FileNotFoundError extends Error {}
