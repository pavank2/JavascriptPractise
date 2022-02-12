function freezeObj(){
  "use strict";

  
  const obj = {
      "PI":"3.14"
  }
  Object.freeze(obj);
  try {
    obj.PI = 99;
  } catch (ex) {
       console.log("Cannot change const");
  }
}

const PI = freezeObj();
