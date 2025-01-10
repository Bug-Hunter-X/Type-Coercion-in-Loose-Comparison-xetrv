function compare(a: any, b: any): boolean {
  return a === b; // Use strict equality
}

console.log(compare(0, false)); // false
console.log(compare(0, '0'));  // false
console.log(compare(1, true));  // false