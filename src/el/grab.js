import { makeEl } from "./make";

//get document
const doc = document;

//create a way to test multiple conditions
function* Claw(_identifier) {
  yield doc.getElementById(_identifier)
    ? { el: doc.getElementById(_identifier), type: "id" }
    : null;
  yield doc.getElementsByClassName(_identifier).length > 0
    ? { el: doc.getElementsByClassName(_identifier), type: "class" }
    : null;
}

//return collection within a wrapper
function wrapCollection(_htmlCollection, _wrapParams = { tag: "div" }) {
  console.log(_wrapParams);
  const count = _htmlCollection.length;
  let wrap = makeEl(_wrapParams.tag, {
    className: `${_wrapParams.tag}-wrap`,
    ..._wrapParams,
  });

  for (let index = 0; index < count; index++) {
    wrap.append(_htmlCollection.item(0));
  }
  return wrap;
}

//full function
function grab(_identifier, _wrapOptions = null) {
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
            : _wrapOptions
            ? wrapCollection(fromClaw.el, _wrapOptions)
            : wrapCollection(fromClaw.el);
        break;
      }
    }

    if (!isCollection && _wrapOptions) {
      const singleWrap = makeEl(_wrapOptions.tag, { ..._wrapOptions });
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
    return makeEl("div", {
      innerText: `${error.message}. Check spelling or identifiers`,
      style: { backgroundColor: "red", color: "whitesmoke", width: "100%" },
    });
  }
}

export default grab;

//#region Unused
// yield doc.getElementsByTagName(_identifier).length > 0
//   ? { el: doc.getElementsByTagName(_identifier), type: "tag" }
//   : null;
//#endregion
