import { getValueFile } from './cli.js'

const diff = (file1, file2) => {
    const result = {}

    const obj1 = getValueFile(file1)
    const obj2 = getValueFile(file2)

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    for (const key of keys1) {
        if (Object.hasOwn(obj2, key)) {
            if (obj1[key] === obj2[key]) {
                result[key] = obj1[key]
            } else {
                result['- ' + key] = obj1[key]
                result['+ ' + key] = obj2[key]
            }
        } else {
            result['- ' + key] = obj1[key]
        }
    }

    for (const key of keys2) {
        if (!Object.hasOwn(obj1, key)) {
            result['+ ' + key] = obj2[key]
        }
    }

    return result
}

export default diff