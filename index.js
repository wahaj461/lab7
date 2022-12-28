function* generateRegistrationNumbers(value) {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const ids = generateRegistrationNumbers();

console.log(ids.next().value); // 0
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3
console.log(ids.next().value); // 4
console.log(ids.next().value);

