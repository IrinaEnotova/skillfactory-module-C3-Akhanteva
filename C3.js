function func(obj) {
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

function checkString(str, obj) {
  return str in obj
}

function createEmptyObj() {
  return Object.create(null);
}