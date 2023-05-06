type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T

// eslint-disable-next-line unicorn/prefer-native-coercion-functions
export const truthy = <T>(value: T): value is Truthy<T> => Boolean(value)
