let sda = prompt();
let list = sda.split(", ");

function last(list) {
  if (Array.isArray(list) && list.length > 0) {
    return list[list.length - 1];
  }
  return undefined;
}

function first(list) {
  if (Array.isArray(list) && list.length > 0) {
    return list[0];
  }
  return undefined;
}

console.log(last(list));
console.log(first(list));
