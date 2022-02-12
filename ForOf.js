"use strict";

let items = ["pizza", "pasta", "burger", "roll"];

for (const item of items) console.log(item);

for (const item of items.entries()) //To get the indices
  console.log(`Item ${item[0] + 1} : Name ${item[1]}`);

for (const [i, el] of items.entries()) //Destructured
  console.log(`Item ${i + 1} : Name ${el}`);
