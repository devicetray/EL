import EL from "./el/main";

const x = EL.GRAB("next");
x.append(
  EL.GRAB("t1", {
    tag: "div",
    style: { backgroundColor: "green", color: "yellow" },
  })
);
console.log(x);

// new HTMLElement().appendChild

//#region El
// function cl(content) {
//     console.log(content);
//   }
//   function getEl(idName) {
//     return document.getElementById(idName);
//   }
//   function appendTo(container, content) {
//     switch (true) {
//       case Array.isArray(content):
//         content.map(function(item) {
//           container.appendChild(item);
//         });
//         break;
//       default:
//         container.appendChild(content);
//         break;
//     }
//   }
//   function toggleClass(element, className) {
//     var classList = element.className.split(/\s+/);
//     var iterator = 0;
//     var numberOfClasses = classList.length;
//     var notFound = true;
//     while (iterator < numberOfClasses && notFound) {
//       if (classList[iterator] === className) {
//         classList.splice(iterator, 1);
//         notFound = false;
//       }
//       iterator++;
//     }
//     // The class isn't there
//     if (notFound) {
//       classList.push(className);
//     }
//     // Set classes on element
//     element.className = classList.join(" ");
//   }
//   function removeProp(obj, prop) {
//     var newObj = Object.keys(obj).reduce(function(objWithoutType, key) {
//       if (key !== prop) {
//         objWithoutType[key] = obj[key];
//       }
//       return objWithoutType;
//     }, {});
//     return newObj;
//   }
//   function selectEl(config, choices) {
//     var newSelect = El("select", config);
//     choices.forEach(function(item) {
//       newSelect.add(El("option", item));
//     });
//     return newSelect;
//   }
//   function linkEl(config) {
//     let newLink = El("a", config);
//     return newLink;
//   }
