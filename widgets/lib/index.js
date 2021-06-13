'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

/**
 * Check if a string ends with something
 * @private
 */
function endsWith (string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value minus its unit (or the original value if an invalid string is passed). Optionally returns an array containing the stripped value and the original unit of measure.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px'),
 *   '--unit': stripUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 *   --unit: ${stripUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */

function stripUnit(value, unitReturn) {
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value;
  var matchedValue = value.match(cssRegex);

  if (unitReturn) {
    if (matchedValue) return [parseFloat(value), matchedValue[2]];
    return [value, undefined];
  }

  if (matchedValue) return parseFloat(value);
  return value;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new PolishedError(69, to, pxval);
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new PolishedError(70, to, base);
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new PolishedError(71, pxval, to);
    }

    if (typeof newBase === 'string') {
      throw new PolishedError(72, base, to);
    }

    return "" + newPxval / newBase + to;
  };
};

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em =
/*#__PURE__*/
pxtoFactory('em');

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}

function constructGradientValue(literals) {
  var template = '';

  for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i];

    if (i === substitutions.length - 1 && substitutions[i]) {
      var definedValues = substitutions.filter(function (substitute) {
        return !!substitute;
      }); // Adds leading coma if properties preceed color-stops

      if (definedValues.length > 1) {
        template = template.slice(0, -1);
        template += ", " + substitutions[i]; // No trailing space if color-stops is the only param provided
      } else if (definedValues.length === 1) {
        template += "" + substitutions[i];
      }
    } else if (substitutions[i]) {
      template += substitutions[i] + " ";
    }
  }

  return template.trim();
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["linear-gradient(", "", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
function linearGradient(_ref) {
  var colorStops = _ref.colorStops,
      fallback = _ref.fallback,
      _ref$toDirection = _ref.toDirection,
      toDirection = _ref$toDirection === void 0 ? '' : _ref$toDirection;

  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(56);
  }

  return {
    backgroundColor: fallback || colorStops[0].split(' ')[0],
    backgroundImage: constructGradientValue(_templateObject(), toDirection, colorStops.join(', '))
  };
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      backgroundColor: 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(lighten);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(transparentize);

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  float: left;\n  min-height: 1px;\n  width: ", "%;\n  padding: 0 ", "px;\n\n/* sm screen like iphone */\n@media all and (width < 768px){\n  ", "\n}\n\n/* xs screen */\n  @media all and (width < 576px){\n    ", "\n  }\n\n/* md screen like ipad */\n   @media all and (768px <= width < 1200px){\n    ", "\n  }\n\n/* lg screen for most desktop */\n   @media all and (1200px <= width <= 1920px){\n    ", "\n  }\n\n  /* xl sreen like customized display */\n   @media all and (width > 1920px){\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  margin: ", ";\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Row = styled__default.div(_templateObject$1(), clearFix(), function (props) {
  return props.margin ? props.margin : "20px 0";
}, function (props) {
  return props.justify && "\n    display: flex;\n    justify-content: ".concat(props.justify, ";\n  ");
});
var Col = styled__default.div(_templateObject2(), function (props) {
  return props.span * 100 / 12;
}, function (props) {
  return props.gutter === undefined ? 15 : props.gutter;
}, function (props) {
  return props.sm && "\n    width: ".concat(props.sm * 100 / 12, "%;\n  ");
}, function (props) {
  return props.xs && "\n      width: ".concat(props.xs * 100 / 12, "%;\n    ");
}, function (props) {
  return props.md && "\n      width: ".concat(props.md * 100 / 12, "%;\n    ");
}, function (props) {
  return props.lg && "\n      width: ".concat(props.lg * 100 / 12, "%;\n    ");
}, function (props) {
  return props.xl && "\n      width: ".concat(props.xl * 100 / 12, "%;\n    ");
}); // 12栅格系统

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1.875em 1.25em;\n  z-index: 999;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Mask = styled__default.div(_templateObject$2(), function (props) {
  return !props.minmal && cover();
}, function (props) {
  return !props.minmal && 'position: fixed;';
}, curriedTransparentize(0.4, '#000'));

var theme = {
  opacity: 0.6,
  colors: {
    primary: '#29c588',
    primaryDark: '#0FB48B',
    blue: '#6492FF',
    yellow: '#FFB931',
    red: '#FF5F5F',
    background: '#F5F5F5',
    gray: '#EEEEEE'
  }
};
var ANIME = {
  spring: {
    noWobble: 'spring(1, 170, 26, 0)',
    // { stiffness: 170, damping: 26 }
    gentle: 'spring(1, 120, 14, 0)',
    // { stiffness: 120, damping: 14 },
    wobbly: 'spring(1, 180, 12, 0)',
    // { stiffness: 180, damping: 12 },
    stiff: 'spring(1, 210, 20, 0)' // { stiffness: 210, damping: 20 }

  }
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  html {\n    /* \u9002\u914D\u624B\u673A\uFF0C\u5BF9\u4E8E\u624B\u673A\u8BBE\u5907\uFF0C\u6309\u5C4F\u5E55\u6BD4\u4F8B\u8BBE\u7F6E\u5B57\u4F53\u5BF9\u5E94\u7684\u57FA\u51C6 */\n    overflow-x: hidden;\n\n    /* \u5BF9\u4E8E\u5BBD\u4E8Eipad\u7684\u8BBE\u5907\uFF0C\u8BA4\u4E3A\u662F\u684C\u9762\u8BBE\u5907 */\n    @media (min-width: 768px) {\n    }\n  }\n\n  body {\n    background: ", ";\n    color: ", ";\n    margin: 0;\n    font-family: \"PingFang SC\", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-x: hidden;\n  }\n\n  div, section {\n    box-sizing: border-box;\n  }\n\n  h1 {\n    font-size: 1.4rem;\n  }\n\n  h2 {\n    font-size: 1.2rem;\n  }\n\n  label {\n    display: block;\n    margin: 0.5em 0;\n  }\n\n  input {\n    background: ", ";\n    box-sizing: border-box;\n    font-size: 1rem;\n    color: ", ";\n    padding: 1em;\n    border: none;\n    border-radius: 2em;\n    outline: none;\n    vertical-align: middle;\n    ::placeholder {\n      vertical-align: middle;\n    }\n    :invalid{\n      box-shadow: ", " 0px 0px 1.5px 1px;\n    }\n  }\n\n  button, input[type='button'] {\n    ", "\n    color: white;\n    border: none;\n    box-sizing: border-box;\n    cursor: pointer;\n    outline: none;\n    height: 2.7em;\n    border-radius: 1.35em;\n    padding: 0 1em;\n    border: 1px solid ", ";\n    :hover {\n      opacity: ", ";\n      border: 1px solid currentColor;\n    }\n    :active {\n      background: ", ";\n    }\n    :disabled {\n      color: currentColor;\n      opacity: ", ";\n      background: ", ";\n      border: 1px solid ", ";\n      cursor: not-allowed;\n    }\n  }\n\n  input[type=radio],[type=checkbox] {\n    ", "\n  }\n\n  input[type='radio'],[type='checkbox'] {\n    width: 1em;\n    height: 1em;\n    border: 1px solid ", ";\n    background: transparent;   \n    :checked {\n      background: ", ";\n    }\n    :indeterminate {\n      /* TODO */\n    }\n  }\n\n  input[type='radio'] {\n    border-radius: 1em;\n  }\n\n  input[type='color'] {\n    width: 2em;\n    height: 2em;\n    padding: 0.5em;\n    border-radius: 0.325em;\n  }\n\n  a {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  }\n\n  ul {\n    padding-inline-start: 0;\n    list-style: none;\n    li {\n      box-sizing: border-box;\n      border-bottom: 1px solid ", ";\n    }\n  }\n\n\n  svg {\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    height: 1em;\n    vertical-align: middle;\n  }\n\n  .datetime-reset-button {\n    fill: currentColor;\n    opacity: .5;\n    background-color: transparent;\n    border: none;\n    align-self: center;\n    flex: none;\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var hideUserAgentApperance = "\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n";
function createDefaultStyle(style) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return styled.createGlobalStyle(_templateObject$3(), normalize(), function (props) {
    return props.theme.colors.background;
  }, curriedLighten(0.2, '#000'), function (props) {
    return props.theme.colors.background;
  }, curriedLighten(0.4, '#000'), function (props) {
    return props.theme.colors.red;
  }, function (props) {
    return linearGradient({
      colorStops: [curriedTransparentize(1 - props.theme.opacity, props.theme.colors.primary), props.theme.colors.primary]
    });
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.opacity;
  }, function (props) {
    return props.theme.colors.primaryDark;
  }, function (props) {
    return props.theme.opacity;
  }, function (props) {
    return props.theme.colors.gray;
  }, function (props) {
    return props.theme.colors.gray;
  }, hideUserAgentApperance, function (props) {
    return props.theme.colors.gray;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.background;
  }, styled.css.apply(void 0, [style].concat(interpolations)));
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  min-height: 100vh;\n  overflow-x: hidden;\n  width: 100%;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  &>div {\n    margin: 1.875em 1.25em;\n    position: relative;\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = createDefaultStyle(_templateObject$4());
var StyledDiv = styled__default.div(_templateObject2$1());
var Page = function Page(props) {
  return React__default.createElement(StyledDiv, props, React__default.createElement("div", null, props.children));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  cursor: pointer;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled__default.span(_templateObject$5(), function (props) {
  return props.last && styled.css(["font-size:1.2rem;"]);
});

var BreadCrumbs = function BreadCrumbs(props) {
  var data = props.data;

  var handleClick = function handleClick(index) {
    props.onChange(data[index].path);
  };

  return React__default.createElement("div", {
    className: props.className
  }, data.map(function (item, index) {
    return React__default.createElement(Text, {
      key: item.label,
      last: index === data.length - 1,
      onClick: function onClick() {
        return handleClick(index);
      }
    }, "".concat(item.label, " ").concat(index === data.length - 1 ? '' : '/', " "));
  }));
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  padding: 1.875em 1.25em;\n  border-radius: 0.625em;\n  margin: 0.6em 0;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Card = styled__default.section(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 2em;\n  border: 1px solid ", ";\n  ", "\n  &>div {\n    display: inline-flex;\n    height: 3em;\n    align-items: center;\n    padding: 0.5em;\n  }\n  input {\n    width: 100%;\n    border-radius: 0;\n    :invalid {\n      box-shadow: none;\n    }\n  }\n  input[type=number] { \n    width: ", ";\n    -moz-appearance: textfield;\n    -webkit-appearance: textfield;\n    appearance: textfield;\n  }\n  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var InputWrapper = styled__default.div(_templateObject$7(), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return !props.valid && styled.css(["box-shadow:", " 0px 0px 1.5px 1px;"], function (props) {
    return props.theme.colors.red;
  });
}, function (props) {
  var _props$placeholder, _props$max;

  return Math.max(4, ((_props$placeholder = props.placeholder) === null || _props$placeholder === void 0 ? void 0 : _props$placeholder.length) || 0, ((_props$max = props.max) === null || _props$max === void 0 ? void 0 : _props$max.length) || 0) + 2 + 'em';
});

var Input = function Input(props) {
  var ref = React.useRef();
  var wrapper = React.useRef();

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      valid = _useState2[0],
      setValid = _useState2[1];

  var prefix = props.prefix,
      suffix = props.suffix,
      value = props.value,
      type = props.type,
      list = props.list,
      className = props.className,
      pattern = props.pattern,
      example = props.example,
      onChange = props.onChange,
      others = _objectWithoutProperties(props, ["prefix", "suffix", "value", "type", "list", "className", "pattern", "example", "onChange"]); // 某些类型屏蔽掉list使用


  var canUseList = function canUseList() {
    switch (type) {
      case 'number':
        return false;

      default:
        return true;
    }
  };

  var handleChange = function handleChange(e) {
    // @ts-ignore 确定是完整输入的状态
    if (example && /insert/.test(e.nativeEvent.inputType) && !e.nativeEvent.isComposing) {
      // @ts-ignore 
      var fallback = e.target.value.replace(new RegExp("".concat(e.nativeEvent.data, "$")), '');
      var re = new RegExp("^.{".concat(e.target.value.length, "}"));
      var expect = example.replace(re, e.target.value); // 屏蔽非法输入

      if (!pattern.test(expect)) {
        e.target.value = fallback;
      }

      setValid(ref.current.checkValidity());
    }

    onChange && onChange(e);
  }; // 拦截单字符的非法输入


  var handleKeyDown = function handleKeyDown(e) {
    if (e.key.length === 1) {
      type === 'number' && !/^[0-9.]$/.test(e.key) && e.preventDefault();
      type === 'tel' && !/^[0-9-+]$/.test(e.key) && e.preventDefault();
    }
  };

  return React__default.createElement(InputWrapper, {
    ref: wrapper,
    className: className,
    placeholder: props.placeholder,
    max: props.type === 'number' && props.max ? props.max.toString() : undefined,
    valid: valid
  }, prefix && React__default.createElement("div", null, prefix), React__default.createElement("input", _extends({
    ref: ref,
    type: type,
    value: value,
    list: canUseList() ? list : undefined,
    pattern: pattern === null || pattern === void 0 ? void 0 : pattern.source
  }, others, {
    onChange: handleChange,
    onKeyDown: handleKeyDown
  })), suffix && React__default.createElement("div", null, suffix));
};

/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.round(t * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.1.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  bottom: auto;\n  font-weight: normal;\n  text-align: center;\n  margin: 0;\n  height: 55px;\n  line-height: 55px;\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem 1.5rem;\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position: fixed;\n  background: white;\n  overflow: hidden;\n  top: auto;\n  bottom: 0;\n  height: 0;\n  border-radius: 1.5rem 1.5rem 0 0;\n  z-index: 999;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCard = styled__default.div(_templateObject$8(), cover());
var Children = styled__default.div(_templateObject2$2(), function (props) {
  return props.title && styled.css(["padding-top:calc(55px + 2rem);"]);
});
var Title = styled__default.h2(_templateObject3(), cover(), function (props) {
  return props.theme.colors.background;
});
var Popup = (function (props) {
  var visible = props.visible,
      onClose = props.onClose,
      confirmed = props.confirmed,
      title = props.title;
  var ref = React.useRef(null);

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      maskVisible = _useState2[0],
      setMaskVisible = _useState2[1];

  React.useEffect(function () {
    var _ref$current, _ref$current$querySel;

    // children && ref.current && setHeight(ref.current.clientHeight)
    visible && anime({
      targets: ref.current,
      height: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$querySel = _ref$current.querySelector('div')) === null || _ref$current$querySel === void 0 ? void 0 : _ref$current$querySel.clientHeight,
      easing: ANIME.spring.gentle
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  React.useEffect(function () {
    if (visible !== undefined) {
      setMaskVisible(visible);
    }
  }, [visible]);
  React.useEffect(function () {
    confirmed && close(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmed]);

  var close = function close() {
    visible && anime({
      targets: ref.current,
      height: 0,
      easing: ANIME.spring.stiff,
      update: function update(animation) {
        animation.progress > 70 && onClose && onClose();
      }
    });
  };

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    close();
  };

  return visible ? React__default.createElement(React__default.Fragment, null, maskVisible && React__default.createElement(Mask, {
    onClick: handleClick
  }), React__default.createElement(StyledCard, {
    ref: ref,
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, title && React__default.createElement(Title, null, title), React__default.createElement(Children, {
    title: title,
    className: props.className,
    style: props.style
  }, props.children))) : null;
});

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: ", "px;\n  display: flex;\n  justify-content: space-around;\n  padding: ", "px 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", "px;\n  width: 100%;\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  /* \u4E00\u534A\u7684\u9AD8\u5EA6-\u534A\u683C\u957F\u5EA6\u4E3A\u4E2D\u95F4\u4F4D\u7F6E */\n  top: ", "px;\n  pointer-events: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: ", "px;\n  line-height: ", "px;\n  color: ", ";\n  text-align: center;\n  background: transparent;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  touch-action: none;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 2.0rem;\n  color: ", ";\n  cursor: pointer;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  height: ", "px;\n  line-height: ", "px;\n  width: 100%;\n  color: ", ";\n  text-align: center;\n  border-radius: 1.5rem 1.5rem 0 0;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var height = 250;
var ITEM_HEIGHT = 45;
var headerHeight = 60;
var Header = styled__default.div(_templateObject$9(), function (props) {
  return props.theme.colors.background;
}, headerHeight, headerHeight, curriedLighten(0.2, '#000'));
var StyledSpan = styled__default.span(_templateObject2$3(), function (props) {
  return props.theme.colors.primary;
});
var TouchListener = styled__default.div(_templateObject3$1()); // hightlight selected item

var StyledItem = styled__default.div(_templateObject4(), ITEM_HEIGHT, ITEM_HEIGHT, function (props) {
  return props.active ? props.theme.colors.primary : curriedLighten(0.6, '#000');
});
var SelectedBar = styled__default.div(_templateObject5(), ITEM_HEIGHT, curriedLighten(0.8, '#000'), curriedLighten(0.8, '#000'), (height - ITEM_HEIGHT) / 2 - 1);
var StylePopup = styled__default(Popup)(_templateObject6());
var ColumnsWrapper = styled__default.div(_templateObject7(), height, (height - 5 * ITEM_HEIGHT) / 2);

var Column = function Column(props) {
  var items = props.items,
      initialIndex = props.initialIndex,
      onChange = props.onChange;
  var ref = React.useRef(null);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      y = _useState2[0],
      setY = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      offset = _useState4[0],
      setOffset = _useState4[1]; // offset 记录了位置应该在原始位置的基础上平移多少


  var _useState5 = React.useState(Date.now()),
      _useState6 = _slicedToArray(_useState5, 2),
      time = _useState6[0],
      setTime = _useState6[1];

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      speed = _useState8[0],
      setSpeed = _useState8[1];

  var _useState9 = React.useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      index = _useState10[0],
      setIndex = _useState10[1];

  var _useState11 = React.useState(true),
      _useState12 = _slicedToArray(_useState11, 2),
      light = _useState12[0],
      setLight = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      touching = _useState14[0],
      setTouching = _useState14[1];

  var animation = null; // props.index变化，计算应该到达的新位置，根据应该到达的位置，设置offset值

  React.useEffect(function () {
    ref.current && init();
    if (typeof initialIndex !== 'number' || index === initialIndex) return;
    var tempOffset = -ITEM_HEIGHT * props.initialIndex;
    setIndex(initialIndex);
    setOffset(tempOffset); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialIndex, items]);
  React.useEffect(function () {
    var _animation, _animation2;

    init();
    if (touching) (_animation = animation) === null || _animation === void 0 ? void 0 : _animation.seek(animation.duration);else (_animation2 = animation) === null || _animation2 === void 0 ? void 0 : _animation2.restart(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  React.useEffect(function () {
    light && onChange(items[index], index); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [light]);

  var init = function init() {
    var _ref$current;

    if (!animation) animation = anime({
      targets: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelector('div'),
      translateY: offset,
      easing: ANIME.spring.noWobble,
      begin: function begin() {
        setLight(false);
      },
      update: function update(animation) {
        animation.progress > 70 && setLight(true);
      },
      autoplay: false
    });
  };

  var handleTouchStart = function handleTouchStart(e) {
    e.preventDefault();
    if (items.length === 0) return; // 将offset与其对应的index累积保持,保证多次滑动效果

    setTouching(true);
    setY(e.changedTouches[0].pageY);
    setSpeed(0);
  };

  var handleTouchMove = function handleTouchMove(e) {
    e.preventDefault();
    if (items.length === 0) return;
    var diff = e.changedTouches[0].pageY - y;
    setOffset(offset + diff);
    setSpeed(diff / (Date.now() - time));
    setTime(Date.now());
    setY(e.changedTouches[0].pageY);
  };

  var handleTouchEnd = function handleTouchEnd() {
    setTouching(false);
    if (items.length === 0) return; // 根据滑动结束时的速度做相应的惯性滑行

    var targetY = offset + speed * speed * speed * 100;
    var limit = (props.items.length - 1) * ITEM_HEIGHT; // 超出整个数列长度，则需保证还在可渲染到数列的范围内

    if (targetY > 0) {
      targetY = 0;
    } else if (Math.abs(targetY) > limit) {
      targetY = -limit;
    } else {
      // 映射所在的index, 保证选项渲染在SelectedBar中间位置
      var units = Math.round(targetY / ITEM_HEIGHT);
      targetY = units * ITEM_HEIGHT;
    }

    setOffset(targetY);
    setIndex(-targetY / ITEM_HEIGHT);
  };

  var handleItemClick = function handleItemClick(i) {
    setIndex(i);
    setOffset(-i * ITEM_HEIGHT);
  }; // TODO: 兼容无TouchEvents的设备，如PC


  return React__default.createElement(TouchListener, {
    ref: ref,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }, React__default.createElement("div", null, React__default.createElement(StyledItem, null), React__default.createElement(StyledItem, null), props.items.map(function (item, i) {
    return React__default.createElement(StyledItem, {
      key: _typeof(item) === 'object' ? item.id : i,
      active: index === i && light,
      onClick: function onClick() {
        return handleItemClick(i);
      }
    }, _typeof(item) === 'object' ? item.name : item);
  }), React__default.createElement(StyledItem, null), React__default.createElement(StyledItem, null)));
};

var Picker = (function (props) {
  var _props$initialIndice = props.initialIndice,
      initialIndice = _props$initialIndice === void 0 ? [0, 0, 0] : _props$initialIndice,
      visible = props.visible,
      columns = props.columns,
      onConfirm = props.onConfirm,
      data = props.data,
      title = props.title,
      onClose = props.onClose;
  if (data.length === 0) return React__default.createElement(React__default.Fragment, null);

  var _useState15 = React.useState(initialIndice || [0, 0, 0]),
      _useState16 = _slicedToArray(_useState15, 2),
      indice = _useState16[0],
      setIndice = _useState16[1];

  var _useState17 = React.useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      confirmed = _useState18[0],
      setConfirmed = _useState18[1];

  React.useEffect(function () {
    !visible && setIndice([0, 0, 0]);
  }, [visible]);

  var handleColumn0Change = function handleColumn0Change(_, index) {
    setIndice([index, 0, 0]);
  };

  var handleColumn1Change = function handleColumn1Change(_, index) {
    setIndice([indice[0], index, 0]);
  };

  var handleColumn2Change = function handleColumn2Change(_, index) {
    setIndice([indice[0], indice[1], index]);
  };

  var handleConfirm = function handleConfirm() {
    setConfirmed(true);

    switch (columns) {
      case 2:
        return onConfirm([indice[0], indice[1]]);

      case 3:
        return onConfirm(indice);

      default:
        return onConfirm([indice[0]]);
    }
  };

  var contents;

  if (visible) {
    switch (columns) {
      case 2:
        contents = React__default.createElement(React__default.Fragment, null, React__default.createElement(Column, {
          items: data,
          initialIndex: initialIndice[0],
          onChange: handleColumn0Change
        }), React__default.createElement(Column, {
          items: data[indice[0]].children || [],
          initialIndex: initialIndice[1],
          onChange: handleColumn1Change
        }));
        break;

      case 3:
        contents = React__default.createElement(React__default.Fragment, null, React__default.createElement(Column, {
          items: data,
          initialIndex: initialIndice[0],
          onChange: handleColumn0Change
        }), React__default.createElement(Column, {
          items: data[indice[0]].children || [],
          initialIndex: initialIndice[1],
          onChange: handleColumn1Change
        }), React__default.createElement(Column // @ts-ignore
        , {
          items: data[indice[0]].children[indice[1]].children,
          initialIndex: initialIndice[2],
          onChange: handleColumn2Change
        }));
        break;

      default:
        contents = React__default.createElement(Column, {
          items: data,
          initialIndex: initialIndice[0],
          onChange: handleColumn0Change
        });
    }
  }

  var handlePopupClose = function handlePopupClose() {
    setConfirmed(false);
    onClose && onClose();
  };

  return React__default.createElement(StylePopup, {
    visible: visible,
    confirmed: confirmed,
    onClose: handlePopupClose
  }, React__default.createElement(Header, null, title, React__default.createElement(StyledSpan, {
    onClick: handleConfirm
  }, "\u786E\u5B9A")), React__default.createElement(ColumnsWrapper, null, visible && contents, React__default.createElement(SelectedBar, {
    onTouchEnd: function onTouchEnd(e) {
      return e.preventDefault();
    }
  })));
});

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);\n  mask-position: center;\n  mask-size: cover;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  animation: weuiLoading 1s steps(12, end) infinite;\n  background: ", ";\n  background-size: 100%;\n\n  @keyframes weuiLoading {\n    0% {\n        transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n        transform: rotate3d(0, 0, 1, 360deg);\n    }\n}\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  width: 2em;\n  height: 2em;\n  margin: 0 auto;\n  margin-bottom: 4px;\n  vertical-align: middle;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: 1em;\n  border-radius: 0.4em;\n  color: ", ";\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var loadingIcon = "transparent url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") no-repeat";
var Page$1 = styled__default.div(_templateObject$a(), cover());
var Masked = styled__default(Mask)(_templateObject2$4(), theme.colors.background);
var StyledIcon = styled__default.div(_templateObject3$2());
var Loading = styled__default(StyledIcon)(_templateObject4$1(), loadingIcon);
var Success = styled__default(StyledIcon)(_templateObject5$1(), theme.colors.background);

var Toast = function Toast(props) {
  return React__default.createElement(Page$1, null, React__default.createElement(Masked, {
    minmal: true
  }, props.type === 'loading' && React__default.createElement(Loading, null), props.type === 'success' && React__default.createElement(Success, null), props.children));
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref = /*#__PURE__*/React.createElement("path", {
  d: "M509.867 32C245.333 32 32 247.467 32 512s213.333 480 477.867 480 477.866-215.467 477.866-480S774.4 32 509.867 32zm0 896C281.6 928 96 742.4 96 512S281.6 96 509.867 96s413.866 185.6 413.866 416-185.6 416-413.866 416z"
});

var _ref2 = /*#__PURE__*/React.createElement("path", {
  d: "M693.333 330.667c-12.8-12.8-32-12.8-44.8 0L512 467.2 375.467 330.667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L467.2 512 330.667 648.533c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.534 23.466 8.534s17.067-2.134 23.467-8.534L514.133 556.8l136.534 136.533c6.4 6.4 14.933 8.534 23.466 8.534s17.067-2.134 23.467-8.534c12.8-12.8 12.8-32 0-44.8L556.8 512l136.533-136.533c12.8-12.8 12.8-32 0-44.8z"
});

function SvgClose(props) {
  return React.createElement("svg", _extends$2({
    className: "close_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 200,
    height: 200
  }, props), _ref, _ref2);
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  height: 3em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  ::before{\n    content: '';\n    display: block;\n    width: 100%;\n    height: 1px;\n    background: ", ";\n    position: absolute;\n    top: 0;\n    transform: scaleX(0.98);\n  }\n  ::after {\n    content: '';\n    display: block;\n    width: 1px;\n    height: 100%;\n    background: ", ";\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-0.5px);\n  }\n  button {\n    border: none;\n    background: transparent;\n    width: 50%;\n    color: ", ";\n    border-radius: 0;\n    height: 100%;\n  }\n  button:last-child {\n    color: ", ";\n  }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  text-align: center;\n  position: relative;\n  overflow: visible; \n  ", "\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.6em;\n  width: 1em;\n\theight: 1em;\n  fill: ", ";\n  cursor: pointer;\n  :hover {\n    opacity: 1;\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Icon = styled__default(SvgClose)(_templateObject$b(), function (props) {
  return props.theme.colors.red;
});
var StyledCard$1 = styled__default(Card)(_templateObject2$5(), function (props) {
  return props.padding ? props.padding : '2em 2em';
}, function (props) {
  return props.needConfirm && styled.css(["width:80%;padding-bottom:5em;"]);
});
var CancelConfirm = styled__default.div(_templateObject3$3(), curriedLighten(0.8, '#000'), curriedLighten(0.8, '#000'), curriedLighten(0.6, '#000'), function (props) {
  return props.theme.colors.primary;
});
var Modal = (function (props) {
  var visible = props.visible,
      onClose = props.onClose,
      padding = props.padding,
      children = props.children,
      closable = props.closable,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      others = _objectWithoutProperties(props, ["visible", "onClose", "padding", "children", "closable", "onConfirm", "onCancel"]);

  var ref = React.useRef(null);

  var _useState = React.useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      shown = _useState2[0],
      setShown = _useState2[1];

  React.useEffect(function () {
    return setShown(visible);
  }, [visible]);
  React.useEffect(function () {
    var _ref$current;

    var card = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelector('section');
    shown && anime({
      targets: card,
      scaleX: [0, 1],
      scaleY: [0, 1],
      opacity: [0, 1],
      easing: ANIME.spring.noWobble
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]);

  var handleClose = function handleClose() {
    setShown(false);
    onClose && onClose();
  };

  var handleCancel = function handleCancel() {
    onCancel && onCancel();
  };

  var handleConfirm = function handleConfirm() {
    onConfirm && onConfirm();
  };

  return shown ? React__default.createElement(Mask, {
    ref: ref
  }, React__default.createElement(StyledCard$1, _extends({}, others, {
    padding: padding,
    needConfirm: !!onConfirm
  }), children, onConfirm && React__default.createElement(CancelConfirm, null, React__default.createElement("button", {
    onClick: handleCancel
  }, "\u53D6\u6D88"), React__default.createElement("button", {
    onClick: handleConfirm
  }, "\u786E\u8BA4"))), closable && React__default.createElement(Icon, {
    onClick: handleClose
  })) : null;
});

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #fff;\n  margin: 0 4px;\n  display: inline-block;\n  ", "\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0.5em;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  height: 10em;\n  display: inline-flex;\n  width: ", "%;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 300%;\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  touch-action: none;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled__default.div(_templateObject$c());
var ChildrenWrapper = styled__default.div(_templateObject2$6());
var ChildWrapper = styled__default.div(_templateObject3$4(), 100 / 3);
var DotWrapper = styled__default.div(_templateObject4$2());
var Dot = styled__default.div(_templateObject5$2(), function (props) {
  return !props.active && styled.css(["opacity:0.5;"]);
}); // TODO：目前未适配PC端，需要进行desktop适配

var Carousel = (function (props) {
  var children = props.children,
      className = props.className,
      _props$autoplay = props.autoplay,
      autoplay = _props$autoplay === void 0 ? true : _props$autoplay,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 3000 : _props$interval,
      others = _objectWithoutProperties(props, ["children", "className", "autoplay", "interval"]);

  var ref = React.useRef(null);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      offset = _useState2[0],
      setOffset = _useState2[1]; // offset 记录了位置应该在原始位置的基础上平移多少


  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = React.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      x = _useState6[0],
      setX = _useState6[1];

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      speed = _useState8[0],
      setSpeed = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      touching = _useState10[0],
      setTouching = _useState10[1];

  var _useState11 = React.useState(Date.now()),
      _useState12 = _slicedToArray(_useState11, 2),
      time = _useState12[0],
      setTime = _useState12[1];

  React.useEffect(function () {
    var _ref$current, _ref$current2;

    var animation = anime({
      targets: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelector('div'),
      translateX: -((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.clientWidth),
      autoplay: false
    });
    animation.seek(animation.duration); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // index改变时，根据offset设置伪偏移值，从伪偏移值过渡为正常显示区

  React.useEffect(function () {
    var _ref$current3, _ref$current4;

    var wrapperWidth = (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.clientWidth;
    offset !== 0 && anime({
      targets: ref.current.querySelector('div'),
      translateX: [(offset > 0 ? -1 : 1) * offset, -wrapperWidth],
      easing: ANIME.spring.noWobble,
      complete: function complete() {
        return setOffset(0);
      }
    });
    offset === 0 && anime({
      targets: (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.querySelector('div'),
      translateX: [0, -wrapperWidth],
      easing: ANIME.spring.noWobble,
      complete: function complete() {
        return setOffset(0);
      }
    });
    var timer;

    if (autoplay) {
      timer = setTimeout(function () {
        setIndex(index === children.length - 1 ? 0 : index + 1);
      }, interval);
    }

    return function () {
      return clearTimeout(timer);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]); // 控制touch过程中的响应未造成index值变化的恢复

  React.useEffect(function () {
    if (offset === 0) return;
    var wrapperWidth = ref.current.clientWidth;

    if (touching) {
      var animation = anime({
        targets: ref.current.querySelector('div'),
        translateX: offset - wrapperWidth,
        autoplay: false
      });
      animation.seek(animation.duration);
    } else if (offset > -wrapperWidth / 2 && offset < wrapperWidth / 2) {
      anime({
        targets: ref.current.querySelector('div'),
        translateX: -wrapperWidth,
        easing: ANIME.spring.noWobble,
        complete: function complete() {
          return setOffset(0);
        }
      });
    }
  }, [offset, touching]);

  var handleTouchStart = function handleTouchStart(e) {
    e.preventDefault();
    if (children.length === 0) return;
    setTouching(true);
    setX(e.changedTouches[0].pageX);
    setSpeed(0);
  };

  var handleTouchMove = function handleTouchMove(e) {
    e.preventDefault();
    if (children.length === 0) return;
    var diff = e.changedTouches[0].pageX - x;
    setOffset(offset + diff);
    setSpeed(diff / (Date.now() - time));
    setTime(Date.now());
    setX(e.changedTouches[0].pageX);
  }; // 此时计算目标窗口，每次目标窗口变更都将计算伪偏移值


  var handleTouchEnd = function handleTouchEnd() {
    var _ref$current5;

    setTouching(false);
    if (children.length === 0) return;
    var targetX = offset + speed * speed * speed * 100;
    setOffset(targetX);
    var wrapperWidth = (_ref$current5 = ref.current) === null || _ref$current5 === void 0 ? void 0 : _ref$current5.clientWidth; // 将当前窗口移后一定阈值，进入下一屏

    if (targetX < -wrapperWidth / 2) setIndex(index === children.length - 1 ? 0 : index + 1);
    if (targetX > wrapperWidth / 2) setIndex(index === 0 ? children.length - 1 : index - 1);
  };

  return React__default.createElement(Wrapper, {
    ref: ref,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }, React__default.createElement(ChildrenWrapper, null, React__default.createElement(ChildWrapper, _extends({
    className: className
  }, others), index === 0 ? children[children.length - 1] : children[0]), React__default.createElement(ChildWrapper, _extends({
    className: className
  }, others), children[index]), React__default.createElement(ChildWrapper, _extends({
    className: className
  }, others), index === children.length - 1 ? children[0] : children[index + 1])), React__default.createElement(DotWrapper, null, children.map(function (_, i) {
    return React__default.createElement(Dot, {
      active: index === i,
      key: i
    });
  })));
});

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  padding: 0;\n  background-color: white;\n  width: 20px;\n  height: 20px;\n  background: white;\n  color: #000000;\n  border-radius: unset;\n  margin-right: 24px;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var FoldButton = styled__default.button(_templateObject$d());
var FoldIcon = (function (_ref) {
  var onToggle = _ref.onToggle;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleClick = function handleClick() {
    setShow(!show);
    onToggle(!show);
  };

  return React__default.createElement("div", null, React__default.createElement(FoldButton, {
    onClick: handleClick
  }, show ? '-' : '+'));
});

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  /* \u5F53\u5C42\u7EA7\u6570\u975E\u7B2C\u4E00\u5C42\uFF0C\u5224\u8BFB\u662F\u5426\u4F7F\u7528\u81EA\u5B9A\u4E49\u7F29\u8FDB\u53C2\u6570 */\n  padding-left: ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var TreeBody = styled__default.div(_templateObject$e(), function (props) {
  return props.level ? props.indent ? props.indent : '30px' : 0;
});

var TreeItem = function TreeItem(CustomFoldIcon) {
  return function (_ref) {
    var data = _ref.data,
        dataTypes = _ref.dataTypes,
        level = _ref.level,
        indent = _ref.indent;
    var current = dataTypes[0];
    var next = dataTypes.length > 1 ? dataTypes[1] : null;

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showChildren = _useState2[0],
        setShowChildren = _useState2[1];

    var hasChildren = next && data && data[next.dataIndex] && data[next.dataIndex].length > 0;
    var fixedStyle = {
      display: 'flex',
      verticalAlign: 'top',
      flexWrap: 'wrap'
    };
    return React__default.createElement("div", null, React__default.createElement("div", {
      style: current.style ? Object.assign(fixedStyle, current.style) : fixedStyle
    }, React__default.createElement("div", {
      style: {
        visibility: hasChildren ? 'visible' : 'hidden'
      }
    }, CustomFoldIcon ? React__default.createElement(CustomFoldIcon, {
      onToggle: function onToggle(val) {
        return setShowChildren(val);
      }
    }) : React__default.createElement(FoldIcon, {
      onToggle: function onToggle(val) {
        return setShowChildren(val);
      }
    })), React__default.createElement("div", {
      style: {
        flexGrow: 1
      }
    }, current.render(data))), next && showChildren && React__default.createElement(Tree, {
      data: data[next.dataIndex],
      dataTypes: dataTypes.slice(1),
      level: level + 1,
      indent: indent,
      foldIcon: CustomFoldIcon
    }));
  };
};

function Tree(_ref2) {
  var data = _ref2.data,
      dataTypes = _ref2.dataTypes,
      _ref2$indent = _ref2.indent,
      indent = _ref2$indent === void 0 ? '30px' : _ref2$indent,
      _ref2$level = _ref2.level,
      level = _ref2$level === void 0 ? 0 : _ref2$level,
      foldIcon = _ref2.foldIcon;
  var TreeItemWithFoldIcon = TreeItem(foldIcon);
  return React__default.createElement(TreeBody, {
    level: level,
    style: {
      flexShrink: 0,
      width: '100%'
    },
    indent: indent
  }, data.map(function (item, index) {
    return React__default.createElement(TreeItemWithFoldIcon, {
      key: index,
      data: item,
      dataTypes: dataTypes,
      level: level,
      indent: indent
    });
  }));
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  width: ", "%;\n  display: flex;\n  height: 100%;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position: fixed;\n  top: ", "px;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  width: ", "%;\n  height: 100%;\n  overflow-y: scroll;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  top: 80%;\n  position: absolute;\n  height: 1px;\n  background: ", ";\n  box-shadow: 1px 1px 2px ", ", 1px 1px 2px ", ";\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position: fixed;\n  background: #fff;\n  bottom: auto;\n  height: ", ";\n  padding: 0 ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1;\n  > * {\n    cursor: pointer;\n  }\n  ", "\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  > nav {\n    /* \u7528\u4E8E\u8986\u76D6\u6807\u9898\u7684\u6837\u5F0F */\n  }\n  > section {\n    /* \u7528\u4E8E\u8986\u76D6\u89C6\u7A97\u7684\u6837\u5F0F */\n  }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$1 = styled__default.div(_templateObject$f());
var LabelWrapper = styled__default.nav(_templateObject2$7(), cover(), em(60), em(15), function (props) {
  return styled.css([">:nth-child(", "){font-weight:bold;}"], props.index + 1);
});
var Indicator = styled__default.div(_templateObject3$5(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var ChildWindow = styled__default.div(_templateObject4$3(), function (props) {
  return 100 / props.length;
});
var ChildrenWindow = styled__default.section(_templateObject5$3(), cover(), function (props) {
  return props.top;
});
var ChildrenWrapper$1 = styled__default.div(_templateObject6$1(), function (props) {
  return props.children.length * 100;
});
var Tabs = (function (props) {
  var tabs = props.tabs,
      children = props.children,
      index = props.index,
      _props$indicator = props.indicator,
      indicator = _props$indicator === void 0 ? true : _props$indicator,
      others = _objectWithoutProperties(props, ["tabs", "children", "index", "indicator"]);

  var ref = React.useRef(null);
  var translator = React.useRef(null);
  var indicatoref = React.useRef(null);

  var _useState = React.useState(60),
      _useState2 = _slicedToArray(_useState, 2),
      barHeight = _useState2[0],
      setBarHeight = _useState2[1];

  React.useEffect(function () {
    var _ref$current;

    setBarHeight(((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.clientHeight) || 60);
  }, []);
  React.useEffect(function () {
    var _ref$current2;

    // tabbar标题交互动画效果
    var tab = (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.querySelector(":nth-child(".concat(index + 1, ")"));
    var translateX = (tab === null || tab === void 0 ? void 0 : tab.offsetLeft) || 0;
    var width = (tab === null || tab === void 0 ? void 0 : tab.clientWidth) || 0;
    anime({
      targets: indicatoref.current,
      easing: ANIME.spring.noWobble,
      left: translateX,
      width: width,
      scaleX: [0.3, 0.7]
    }); // 移动视窗至index所在tab的数据窗口

    if (!children) return;
    anime({
      targets: translator.current,
      translateX: "".concat(-index * 100 / children.length, "%"),
      easing: ANIME.spring.noWobble
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, tabs.length]);
  return React__default.createElement(Wrapper$1, others, React__default.createElement(LabelWrapper, {
    ref: ref,
    index: index
  }, tabs, indicator && React__default.createElement(Indicator, {
    ref: indicatoref
  })), children && React__default.createElement(ChildrenWindow, {
    top: barHeight
  }, React__default.createElement(ChildrenWrapper$1, {
    ref: translator
  }, children.map(function (child) {
    return React__default.createElement(ChildWindow, {
      key: child.key,
      length: children.length
    }, child);
  }))));
});

exports.BreadCrumbs = BreadCrumbs;
exports.Card = Card;
exports.Carousel = Carousel;
exports.Col = Col;
exports.Input = Input;
exports.Mask = Mask;
exports.Modal = Modal;
exports.Page = Page;
exports.Picker = Picker;
exports.Popup = Popup;
exports.Row = Row;
exports.Tabs = Tabs;
exports.Toast = Toast;
exports.Tree = Tree;
exports.createDefaultStyle = createDefaultStyle;
//# sourceMappingURL=index.js.map
