import { InMemoryStorage } from "./storage/InMemoryStorage";


const storage = new InMemoryStorage();

console.log(storage.list());
storage.push("haha")
console.log(storage.list());
storage.pop()
console.log(storage.list());
