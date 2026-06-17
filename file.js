//property discriptors
const user = {};
//data discriptors
Object.defineProperty(user,'name', {
    value:'shivani',
    writable: false,
    enumerable: true,
    configurable: false
});
//access aceptors
console.log(user.name);
user.name ='ruby';

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    const [first, last] = value.split(' ');
    this.firstName = first;
    this.lastName = last;
  },
  enumerable: true,
  configurable: true
});
//array.prototype.include
console.log(person.fullName);

const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); 