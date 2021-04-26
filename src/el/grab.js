//imports
import make from "./make";

//get document
const doc = document;

/**
 * Generator function to search the dom for the identifier
 * @param {*} _identifier id or class name to search for
 * @returns found element(s) or null
 */
function* Claw(_identifier) {
  yield doc.getElementById(_identifier)
    ? { el: doc.getElementById(_identifier), type: "id" }
    : null;
  yield doc.getElementsByClassName(_identifier).length > 0
    ? { el: doc.getElementsByClassName(_identifier), type: "class" }
    : null;
}

/**
 * function to extract elements from htmlcollection into a wrapper
 * @param {*} _htmlCollection html collection of elements
 * @param {*} _wrapParams options to configure the wrapper; include a tag prop to specify the type of element to wrap the collection
 * @returns elements wrapped by a parent element
 */
function wrapCollection(_htmlCollection, _wrapParams = { tag: "div" }) {
  const count = _htmlCollection.length;
  let wrap = make(_wrapParams.tag ? _wrapParams.tag : "div", {
    className: "collection-wrapper",
    ..._wrapParams,
  });

  for (let index = 0; index < count; index++) {
    wrap.append(_htmlCollection.item(0));
  }
  return wrap;
}

/**
 * pops items from collection into an array
 * @param {*} _htmlCollection HTMLCollection object
 * @returns array of html elements
 */
function arrayFromCollection(_htmlCollection) {
  const count = _htmlCollection.length;
  const arrayOfElements = [];
  for (let index = 0; index < count; index++) {
    arrayOfElements.push(_htmlCollection.item(index));
  }
  return arrayOfElements;
}

/**
 * grabs elements from the dom with the specified identifier
 * @param {*} _identifier id or class name
 * @param {*} _wrapOptions optional wrapper around the returned (a 'make' config object w/ the tag prop included)
 * @returns the results of the search or an element with an error message
 */
export default function grab(_identifier, _wrapOptions = null) {
  const claw = Claw(_identifier);
  var isCollection = false;
  var results;
  var resultReturn;

  try {
    for (let index = 0; index < 2; index++) {
      let fromClaw = claw.next().value;
      if (fromClaw) {
        isCollection = fromClaw.type === "class" && fromClaw.el.length > 1;
        results =
          fromClaw.type === "id"
            ? fromClaw.el
            : fromClaw.type === "class" && fromClaw.el.length === 1
            ? fromClaw.el[0]
            : fromClaw.type === "class" && _wrapOptions
            ? wrapCollection(fromClaw.el, _wrapOptions)
            : arrayFromCollection(fromClaw.el);
        break;
      }
    }

    if (!isCollection && _wrapOptions) {
      const singleWrap = make(_wrapOptions.tag, { ..._wrapOptions });
      singleWrap.append(results);
      resultReturn = singleWrap;
    } else {
      resultReturn = results;
    }

    if (results) {
      return resultReturn;
    } else {
      const err = Error("No matching elements.");
      console.error(err.message);
      throw err;
    }
  } catch (error) {
    return make("div", {
      innerText: `${error.message}. Check spelling or identifiers`,
      style: { backgroundColor: "red", color: "whitesmoke", width: "100%" },
    });
  }
}
