/**
 * checks object for an object like property
 * @param {*} container o
 * @returns true if object contains an object like child
 * @example var obj = {
 * a:"just a string",
 * b:{c: "nested string within b"}
 * }
 *
 * console.log(grandObject(obj))
 * //prints true because b is an object
 */
export function grandObject(container) {
  if (typeof container === "object") {
    for (const key in container) {
      if (typeof container[key] === "object") {
        return true;
      }
    }
  }
  return false;
}

/**
 *adds properties of the config object to the conatiner 
 * @param {*} target 
 * @param {*} config 
 */
function propertyConfig(target, config) {
  if (typeof config === "object") {
    for (const key in config) {
      if (key in target) {
        if (grandObject(key)) {
          propertyConfig(target[key], config[key]);
        } else {
          if (typeof config[key] === "object") {
            for (var childKey in config[key]) {
              target[key][childKey] = config[key][childKey];
            }
          } else {
            target[key] = config[key];
          }
        }
      }
    }
  }
}
