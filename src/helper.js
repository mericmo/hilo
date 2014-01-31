  
  // Extends an object *obj* with the properties of 
  // another object *aObj*

  function extend (obj, aObj) {
    var _prop;

    if (typeof obj !== "object" || typeof aObj !== "object") {
      return;
    }

    for (_prop in aObj) {
      if (aObj.hasOwnProperty(_prop)) {
        obj[_prop] = aObj[_prop];
      }
    }

    return obj;
  }

  