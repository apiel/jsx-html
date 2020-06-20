export let NODE_TYPE;

(function (NODE_TYPE) {
  NODE_TYPE["ELEMENT"] = "element";
  NODE_TYPE["TEXT"] = "text";
  NODE_TYPE["COMPONENT"] = "component";
  NODE_TYPE["FRAGMENT"] = "fragment";
})(NODE_TYPE || (NODE_TYPE = {}));

;