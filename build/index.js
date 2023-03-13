import { InMemoryStorage } from "./storage/InMemoryStorage";
const storage = new InMemoryStorage();
console.log(storage.data);
storage.push("haha");
console.log(storage.data);
storage.pop();
console.log(storage.data);
