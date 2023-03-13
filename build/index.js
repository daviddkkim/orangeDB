"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryStorage_1 = require("./storage/InMemoryStorage");
const storage = new InMemoryStorage_1.InMemoryStorage();
console.log(storage.list());
storage.push("haha");
console.log(storage.list());
storage.pop();
console.log(storage.list());
