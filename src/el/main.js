/**
 * Base methods for handling html elements
 */

import grab from "./grab";
import make from "./make";

function EL() {
  return {
    Make: (_tag, optionalConfig = null) => make(_tag, optionalConfig),
    Grab: (_identifier, _optionalWrapper = null) =>
      grab(_identifier, _optionalWrapper),
    //ENTRY: (_entryPoint = "") => entry(_entryPoint ? _entryPoint : null),
    PARENT: (_parentNode = "") => parent(_parentNode ? _parentNode : null),
    SIBLINGS: () => siblings(),
    STYLE: (_style) => style(_style),
    CLASS: (_class) => className(_class),
    TAG: (_tag) => tag(_tag),
    APPEND: (_items, _container) => append(_items, _container),
  };
}

export default EL();
