import type { Data } from "./types";

export class InMemoryStorage {

  #data: Data[]

  constructor(data?: Data[]) {
    this.#data = data ? data : []
  }

  push(data: Data[] | Data) {
    this.#data.push(data);
  }

  pop() {
    this.#data.pop()
  }

  list() {
    return this.#data
  }
}