import { expect, it, suite } from 'vitest'
import { snakeToCamel, camelToSnake, listCamelToSnake, listSnakeToCamel, slugify } from './index'

suite('Slugify', () => {
  it('should replace all spaces with -', () => {
    const phrase = 'My blog Post'
    expect(slugify(phrase)).toBe('my-blog-post')
  })
  it('should lowercase the entry string', () => {
    expect(slugify('SheIsMyFriendAndSheIsCrazy')).toBe('sheismyfriendandsheiscrazy')
  })
  it('should remove all non-word chars', () => {
    expect(slugify('Awiwi$%&$')).toBe('awiwi')
  })
  it('should replace multiple - with single -', () => {
    expect(slugify('class--bem')).toBe('class-bem')
  })
  it('should trim spaces from start', () => {
    expect(slugify(' i have a space ')).toBe('i-have-a-space')
  })
})

suite('🐍 & 🐫', () => {
  it('should convert all properties from object from snake to camel', () => {
    const mySnakeObj = {
      status_id: 1,
      name: 'pingui',
      last_updated: 'today',
    }

    expect(snakeToCamel(mySnakeObj)).toStrictEqual({
      statusId: 1,
      name: 'pingui',
      lastUpdated: 'today',
    })
  })

  it('should convert all properties from object from snake to camel recursively', () => {
    const mySnakeObj = {
      status_id: 1,
      character: {
        name: 'pingui',
        last_updated: 'today',
      },
    }

    expect(snakeToCamel(mySnakeObj)).toStrictEqual({
      statusId: 1,
      character: {
        name: 'pingui',
        lastUpdated: 'today',
      },
    })
  })

  it('should convert all properties from object from camel to snake', () => {
    const myCamelObj = {
      statusId: 1,
      name: 'pingui',
      lastUpdated: 'today',
    }

    expect(camelToSnake(myCamelObj)).toStrictEqual({
      status_id: 1,
      name: 'pingui',
      last_updated: 'today',
    })
  })

  it('should convert all properties from object from camel to snake recusively', () => {
    const myCamelObj = {
      statusId: 1,
      character: {
        name: 'pingui',
        lastUpdated: 'today',
      },
    }

    expect(camelToSnake(myCamelObj)).toStrictEqual({
      status_id: 1,
      character: {
        name: 'pingui',
        last_updated: 'today',
      },
    })
  })

  it('should convert a list of objects with snakeCase properties to CamelCase', () => {
    const mySnakeArray = [
      {
        name: 'Bulbasaur',
        has_evolved: false,
      },
      {
        name: 'Charizard',
        has_evolved: true,
      },
    ]
    expect(listSnakeToCamel(mySnakeArray)).toStrictEqual([
      {
        name: 'Bulbasaur',
        hasEvolved: false,
      },
      {
        name: 'Charizard',
        hasEvolved: true,
      },
    ])
  })
  it('should convert a list of objects with snakeCase properties to CamelCase', () => {
    const mySnakeArray = [
      {
        name: 'Bulbasaur',
        hasEvolved: false,
      },
      {
        name: 'Charizard',
        hasEvolved: true,
      },
    ]
    expect(listCamelToSnake(mySnakeArray)).toStrictEqual([
      {
        name: 'Bulbasaur',
        has_evolved: false,
      },
      {
        name: 'Charizard',
        has_evolved: true,
      },
    ])
  })
})
