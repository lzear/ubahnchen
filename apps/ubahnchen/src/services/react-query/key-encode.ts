import type { QueryKey } from '@tanstack/react-query'

export class KeyEncoder<K extends QueryKey, P> {
  constructor(
    private _encode: (params: P) => K,
    private _decode: (key: K) => P,
  ) {}

  public encode(params: P): K {
    return this._encode(params)
  }

  public decode(key: K): P {
    return this._decode(key)
  }

  public serialize(params: P): string {
    return JSON.stringify(this._encode(params))
  }

  public deserialize(key: string): P {
    return this._decode(JSON.parse(key) as K)
  }
}
