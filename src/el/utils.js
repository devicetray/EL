/**
 * checks object for an object like property
 * @param {*} container object to check
 * @returns true if object contains an object like child; false otherwise
 * @example var obj = {
 * a:"just a string",
 * b:{c: "nested string within b"}
 * }
 *
 * console.log(grandObject(obj))
 * //prints true because b is an object
 */
function grandObject(container) {
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
 * adds properties of the config object to the target object
 * @param {*} target object to config
 * @param {*} config key/value mapping to apply to the target
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

export { grandObject, propertyConfig };
