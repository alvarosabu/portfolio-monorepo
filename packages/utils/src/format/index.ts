import { isArray, isObject } from '../is'

/**
 * Returns slugify version of a string
 * @param  {string} text
 * @returns string
 */
export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '')

export type KeyObject = { [x: string]: any }

export const snakeToCamel = (myObj: KeyObject) => {
  const newObj: KeyObject = {}
  Object.keys(myObj).forEach(key => {
    if (isArray(myObj[key])) {
      newObj[key.replace(/(_\w)/g, m => m[1].toUpperCase())] = listSnakeToCamel(
        myObj[key],
      )
    } else if (isObject(myObj[key])) {
      newObj[key.replace(/(_\w)/g, m => m[1].toUpperCase())] = snakeToCamel(
        myObj[key],
      )
    } else {
      newObj[key.replace(/(_\w)/g, m => m[1].toUpperCase())] = myObj[key]
    }
    // do something with obj
  })
  return newObj
}

export const camelToSnake = (myObj: KeyObject) => {
  const newObj: KeyObject = {}
  Object.keys(myObj).forEach(key => {
    if (isArray(myObj[key])) {
      newObj[key.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`)] = myObj[
        key
      ] = listCamelToSnake(myObj[key])
    } else if (isObject(myObj[key])) {
      newObj[key.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`)] = myObj[
        key
      ] = camelToSnake(myObj[key])
    } else {
      newObj[key.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`)] = myObj[
        key
      ] = myObj[key]
    }
    // do something with obj
  })
  return newObj
}

export const listSnakeToCamel: any = (arr: any[]) =>
  arr.map((el: any) => {
    if (isArray(el)) {
      return listSnakeToCamel(el)
    }
    if (isObject(el)) {
      return snakeToCamel(el)
    }
    return el
  })

export const listCamelToSnake: any = (arr: any[]) =>
  arr.map((el: any) => {
    if (isArray(el)) {
      return listCamelToSnake(el)
    }
    if (isObject(el)) {
      return camelToSnake(el)
    }
    return el
  })
