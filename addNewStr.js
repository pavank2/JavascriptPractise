//Add 'New' at the beginning if it is not present
const addNewStr = (str) => (str.startsWith("New") ? str : `New${str}`);

console.log(addNewStr("NewString"));
