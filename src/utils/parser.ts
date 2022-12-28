const isString = (param: unknown): param is string => {
  return typeof param === 'string' || param instanceof String
}

const isNumber = (param: unknown): param is string => {
  return !Number.isNaN(Number(param))
}

export const parseString = (text: unknown): string => {
  if (!text) throw new Error('Missing field')
  if (!isString(text)) throw new Error('Not a valid string')
  return text
}

export const parseNumber = (number: unknown): number => {
  if (!number) throw new Error('Missing field')
  if (!isNumber(number)) throw new Error('Not a valid number')
  return Number(number)
}