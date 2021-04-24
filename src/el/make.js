//imports
import _ from "lodash";

//const var
const doc = document;

function grandObject(container) {
  for (const key in container) {
    if (typeof container[key] === "object") {
      return true;
    }
  }
  return false;
}

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

function makeEl(_tag = null, _optionalParams = null) {
  const newEl = doc.createElement(_tag ? _tag : "div");
  if (_tag && Object.keys(_optionalParams).length > 0) {
    propertyConfig(newEl, _optionalParams);
    return newEl;
  } else {
    return newEl;
  }
}

export { makeEl };
