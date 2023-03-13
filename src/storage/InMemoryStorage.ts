export class InMemoryStorage {

  data: any[]

  constructor(data?: any[]) {
    this.data = data ? data : []
  }

  push(data: any[] | any) {
    this.data.push(data);
  }

  pop() {
    this.data.pop()
  }

}