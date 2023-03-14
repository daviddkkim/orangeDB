import type { Data } from "./types";

export class InMemoryStorage {

  //To-do: Figure out what data structure to use for this storage.
  /*
  Questions to continue to ask myself = What do I want to optimize? What kind of database? 
  I think a document based database might be the easiest to work with for hte type of app I build.
  */
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