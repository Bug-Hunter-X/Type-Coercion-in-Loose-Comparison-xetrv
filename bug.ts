function compare(a: any, b: any): boolean {
  return a === b;
}

console.log(compare(0, false)); // true
console.log(compare(0, '0'));  // false
console.log(compare(1, true));  // true