import { readFileSync } from 'fs'
import PATH from 'path'

export const getValueFile = (path, format) => {
    // создание абсолютного пути для файла
    const pathFile = PATH.resolve(process.cwd(), path)

    // чтение файла и запись содержимого
    const valueFile = readFileSync(pathFile, 'utf8')

    // парсинг объекта JS из содержимого файла
    if (format === 'json') {
        return JSON.parse(valueFile)
    }

    return JSON.parse(valueFile)
}

// gendiff C:\Users\Thinkpad\Desktop\Programming\Отличия\frontend-project-46\src\files\f\f1.json src/files/file2.json
// gendiff /home/kunzut/diff/frontend-project-46/src/files/file1.json src/files/file2.json --format json