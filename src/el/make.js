//imports
import { propertyConfig } from "./utils";

//get document
const doc = document;

/**
 * creates an html element
 * @param {String} _tag type of element to create
 * @param {Object} _configurations properties to apply to the element
 * @returns an html element; 
 */
export default function make(_tag = null, _configurations = null) {
  const newEl = doc.createElement(_tag ? _tag : "div");
  if (_tag && Object.keys(_configurations).length > 0) {
    propertyConfig(newEl, _configurations);
    return newEl;
  } else {
    return newEl;
  }
}