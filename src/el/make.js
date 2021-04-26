//imports
import _ from "lodash";

//get document
const doc = document;

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
