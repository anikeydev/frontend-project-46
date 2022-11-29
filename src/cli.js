import { readFileSync } from 'fs'
import PATH from 'path'

export const getValueFile = (path) => {
    // создание абсолютного пути для файла
    const pathFile = PATH.resolve(process.cwd(), path)

    // чтение файла и запись содержимого
    const valueFile = readFileSync(pathFile, 'utf8')

    // парсинг объекта JS из содержимого файла
    return JSON.parse(valueFile)
}