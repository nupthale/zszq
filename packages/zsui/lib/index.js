"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const antDesignVue = require("ant-design-vue");
const lottieWebVue = require("lottie-web-vue");
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}
function _defineProperty$4(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty$4(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
const tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
const withInstall = (comp) => {
  const c2 = comp;
  c2.install = function(app) {
    app.component(c2.displayName || c2.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}
const defaultIconPrefixCls = "anticon";
const configProviderKey = Symbol("configProvider");
const defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  },
  iconPrefixCls: vue.computed(() => defaultIconPrefixCls),
  getPopupContainer: vue.computed(() => () => document.body),
  direction: vue.computed(() => "ltr")
};
const useConfigContextInject = () => {
  return vue.inject(configProviderKey, defaultConfigProvider);
};
const DisabledContextKey = Symbol("DisabledContextKey");
const useInjectDisabled = () => {
  return vue.inject(DisabledContextKey, vue.ref(void 0));
};
const isArray$1 = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject$1 = (val) => val !== null && typeof val === "object";
function classNames() {
  const classes = [];
  for (let i2 = 0; i2 < arguments.length; i2++) {
    const value = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (!value) continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray$1(value)) {
      for (let i3 = 0; i3 < value.length; i3++) {
        const inner = classNames(value[i3]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject$1(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
const Pagination = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
const locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const locale = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, locale$2),
  timePickerLocale: _extends({}, locale$1)
};
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
};
const LocaleReceiver = vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = vue.inject("localeData", {});
    const locale2 = vue.computed(() => {
      const {
        componentName = "global",
        defaultLocale
      } = props;
      const locale3 = defaultLocale || localeValues[componentName || "global"];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    const localeCode = vue.computed(() => {
      const {
        antLocale
      } = localeData;
      const localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return localeValues.locale;
      }
      return localeCode2;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
const SPLIT = "%";
class Entity {
  constructor(instanceId) {
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(Array.isArray(keys) ? keys.join(SPLIT) : keys) || null;
  }
  update(keys, valueFn) {
    const path = Array.isArray(keys) ? keys.join(SPLIT) : keys;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}
const ATTR_TOKEN = "data-token-hash";
const ATTR_MARK = "data-css-hash";
const ATTR_CACHE_PATH = "data-cache-path";
const CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    const styles = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [];
    const {
      firstChild
    } = document.head;
    Array.from(styles).forEach((style) => {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });
    const styleHash = {};
    Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach((style) => {
      var _a;
      const hash = style.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Entity(cssinjsInstanceId);
}
const StyleContextKey = Symbol("StyleContextKey");
const getCache = () => {
  var _a, _b, _c;
  const instance = vue.getCurrentInstance();
  let cache;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache = globalCache;
    } else {
      cache = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache;
      }
    }
  } else {
    cache = createCache();
  }
  return cache;
};
const defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: "low"
};
const useStyleInject = () => {
  const cache = getCache();
  return vue.inject(StyleContextKey, vue.shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache
  })));
};
const useStyleProvider = (props) => {
  const parentContext = useStyleInject();
  const context = vue.shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  vue.watch([() => vue.unref(props), parentContext], () => {
    const mergedContext = _extends({}, parentContext.value);
    const propsValue = vue.unref(props);
    Object.keys(propsValue).forEach((key) => {
      const value = propsValue[key];
      if (propsValue[key] !== void 0) {
        mergedContext[key] = value;
      }
    });
    const {
      cache
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  vue.provide(StyleContextKey, context);
  return context;
};
const styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
withInstall(vue.defineComponent({
  name: "AStyleProvider",
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));
function useProdHMR() {
  return false;
}
let webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
const useHMR = process.env.NODE_ENV === "production" ? useProdHMR : useDevHMR;
if (process.env.NODE_ENV !== "production" && typeof module !== "undefined" && module && module.hot && typeof window !== "undefined") {
  const win = window;
  if (typeof win.webpackHotUpdate === "function") {
    const originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function() {
      webpackHMR = true;
      setTimeout(() => {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate(...arguments);
    };
  }
}
function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = vue.shallowRef("");
  const res = vue.shallowRef();
  vue.watchEffect(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join("%");
  });
  const HMRUpdate = useHMR();
  const clearCache = (pathStr) => {
    styleContext.value.cache.update(pathStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
        return null;
      }
      return [times - 1, cache];
    });
  };
  vue.watch(fullPathStr, (newStr, oldStr) => {
    if (oldStr) clearCache(oldStr);
    styleContext.value.cache.update(newStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      let tmpCache = cache;
      if (process.env.NODE_ENV !== "production" && cache && HMRUpdate) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  vue.onBeforeUnmount(() => {
    clearCache(fullPathStr.value);
  });
  return res;
}
function canUseDom$1() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function contains$1(root2, n2) {
  if (!root2) {
    return false;
  }
  if (root2.contains) {
    return root2.contains(n2);
  }
  return false;
}
const APPEND_ORDER$1 = "data-vc-order";
const MARK_KEY$1 = `vc-util-key`;
const containerCache$1 = /* @__PURE__ */ new Map();
function getMark$1() {
  let {
    mark
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY$1;
}
function getContainer$1(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function getOrder$1(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles$1(container) {
  return Array.from((containerCache$1.get(container) || container).children).filter((node2) => node2.tagName === "STYLE");
}
function injectCSS$1(css) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom$1()) {
    return null;
  }
  const {
    csp,
    prepend
  } = option;
  const styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER$1, getOrder$1(prepend));
  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer$1(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    if (prepend === "queue") {
      const existStyle = findStyles$1(container).filter((node2) => ["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER$1)));
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode$1(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const container = getContainer$1(option);
  return findStyles$1(container).find((node2) => node2.getAttribute(getMark$1(option)) === key);
}
function removeCSS(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const existNode = findExistNode$1(key, option);
  if (existNode) {
    const container = getContainer$1(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer$1(container, option) {
  const cachedRealContainer = containerCache$1.get(container);
  if (!cachedRealContainer || !contains$1(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS$1("", option);
    const {
      parentNode
    } = placeholderStyle;
    containerCache$1.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS$1(css, key) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _a, _b, _c;
  const container = getContainer$1(option);
  syncRealContainer$1(container, option);
  const existNode = findExistNode$1(key, option);
  if (existNode) {
    if (((_a = option.csp) === null || _a === void 0 ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) === null || _b === void 0 ? void 0 : _b.nonce)) {
      existNode.nonce = (_c = option.csp) === null || _c === void 0 ? void 0 : _c.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS$1(css, option);
  newNode.setAttribute(getMark$1(option), key);
  return newNode;
}
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i2 = 0; i2 < left.length; i2++) {
    if (left[i2] !== right[i2]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache) {
        cache = void 0;
      } else {
        cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache === null || cache === void 0 ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative2, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative2);
        if (!cacheValue) {
          cache.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
let warned = {};
function warning$2(valid, message) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    console.error(`Warning: ${message}`);
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$2, valid, message);
}
function noop$1() {
}
let warning$1 = noop$1;
if (process.env.NODE_ENV !== "production") {
  warning$1 = (valid, component, message) => {
    warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
    if (process.env.NODE_ENV === "test") {
      resetWarned();
    }
  };
}
let uuid = 0;
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning$1(derivatives.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function.");
    }
    uuid += 1;
  }
  getDerivativeToken(token2) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token2, result), void 0);
  }
}
const cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  let str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach((key) => {
      const value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return murmur2(`${salt}_${flattenToken(token2)}`);
}
const randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(/\./g, "");
const checkContent = "_bAmBoO_";
function supportSelector(styleStr, handleElement, supportCheck) {
  var _a, _b;
  if (canUseDom$1()) {
    updateCSS$1(styleStr, randomSelectorKey);
    const ele = document.createElement("div");
    ele.style.position = "fixed";
    ele.style.left = "0";
    ele.style.top = "0";
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
    document.body.appendChild(ele);
    if (process.env.NODE_ENV !== "production") {
      ele.innerHTML = "Test";
      ele.style.zIndex = "9999999";
    }
    const support = supportCheck ? supportCheck(ele) : (_a = getComputedStyle(ele).content) === null || _a === void 0 ? void 0 : _a.includes(checkContent);
    (_b = ele.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
let canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector(`@layer ${randomSelectorKey} { .${randomSelectorKey} { content: "${checkContent}"!important; } }`, (ele) => {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}
const EMPTY_OVERRIDE = {};
const isProduction = process.env.NODE_ENV === "production";
const isPrerender = process.env.NODE_ENV === "prerender";
const hashPrefix = !isProduction && !isPrerender ? "css-dev-only-do-not-override" : "css";
const tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key}"]`);
    styles.forEach((style) => {
      var _a;
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
      }
    });
  }
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key) => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
const getComputedToken = (originToken, overrideToken, theme, format) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = _extends(_extends({}, derivativeToken), overrideToken);
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vue.ref({});
  const style = useStyleInject();
  const mergedToken = vue.computed(() => _extends({}, ...tokens.value));
  const tokenStr = vue.computed(() => flattenToken(mergedToken.value));
  const overrideTokenStr = vue.computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache("token", vue.computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = "",
      override = EMPTY_OVERRIDE,
      formatToken: formatToken2,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken2);
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId];
  }, (cache) => {
    var _a;
    cleanTokenStyle(cache[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2, siblings) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else {
                switch (atrule) {
                  case 99:
                    if (charat(characters2, 3) === 110) break;
                  case 108:
                    if (charat(characters2, 2) === 97) break;
                  default:
                    offset = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                else parse(characters2, reference, reference, reference, [""], children, 0, points, children);
              }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root2, parent, siblings) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root2, parent, length2, siblings) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case NAMESPACE:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function lintWarning(message, info) {
  const {
    path,
    parentSelectors
  } = info;
  warningOnce(false, `[Ant Design Vue CSS-in-JS] ${path ? `Error in '${path}': ` : ""}${message}${parentSelectors.length ? ` Selector info: ${parentSelectors.join(" -> ")}` : ""}`);
}
const linter$1 = (key, value, info) => {
  if (key === "content") {
    const contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    const contentValues = ["normal", "none", "initial", "inherit", "unset"];
    if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${value}"'\`.`, info);
    }
  }
};
const linter = (key, value, info) => {
  if (key === "animation") {
    if (info.hashId && value !== "none") {
      lintWarning(`You seem to be using hashed animation '${value}', in which case 'animationName' with Keyframe as value is recommended.`, info);
    }
  }
};
const ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
const CSS_FILE_STYLE = "_FILE_STYLE__";
let cachePathMap;
let fromCSSFile = true;
function prepare() {
  var _a;
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom$1()) {
      const div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      let content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach((item) => {
        const [path, hash] = item.split(":");
        cachePathMap[path] = hash;
      });
      const inlineMapStyle = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
      if (inlineMapStyle) {
        fromCSSFile = false;
        (_a = inlineMapStyle.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash = cachePathMap[path];
  let styleStr = null;
  if (hash && canUseDom$1()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      const style = document.querySelector(`style[${ATTR_MARK}="${cachePathMap[path]}"]`);
      if (style) {
        styleStr = style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}
const isClientSide = canUseDom$1();
const SKIP_CHECK = "_skip_check_";
const MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys = key.split(",").map((k2) => {
    var _a;
    const fullPath = k2.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys.join(",");
}
const globalEffectStyleKeys = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" ? () => globalEffectStyleKeys.clear() : void 0;
const parseStyle = function(interpolation) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let {
    root: root2,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root2 ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev2, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev2)) || prev2;
      }, style);
      Object.keys(mergedStyle).forEach((key) => {
        var _a;
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root2 || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            if (process.env.NODE_ENV !== "production" && (typeof value !== "object" || !(value === null || value === void 0 ? void 0 : value[SKIP_CHECK]))) {
              [linter$1, linter, ...linters].forEach((linter2) => linter2(cssKey, cssValue, {
                path,
                hashId,
                parentSelectors
              }));
            }
            const styleName = cssKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root2) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join("%")}${styleStr}`);
}
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = vue.computed(() => info.value.token._tokenKey);
  const fullPath = vue.computed(() => [tokenKey.value, ...info.value.path]);
  let isMergedClientSide = isClientSide;
  if (process.env.NODE_ENV !== "production" && styleContext.value.mock !== void 0) {
    isMergedClientSide = styleContext.value.mock === "client";
  }
  useClientCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const {
        path,
        hashId,
        layer,
        nonce,
        clientOnly,
        order = 0
      } = info.value;
      const cachePath = fullPath.value.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const {
        hashPriority,
        container,
        transformers,
        linters,
        cache
      } = styleContext.value;
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath.value, styleStr);
      if (isMergedClientSide) {
        const mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: order
        };
        const nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        const style = updateCSS$1(styleStr, styleId, mergedCSSConfig);
        style[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style.setAttribute(ATTR_TOKEN, tokenKey.value);
        if (process.env.NODE_ENV !== "production") {
          style.setAttribute(ATTR_CACHE_PATH, fullPath.value.join("|"));
        }
        Object.keys(effectStyle).forEach((effectKey) => {
          if (!globalEffectStyleKeys.has(effectKey)) {
            globalEffectStyleKeys.add(effectKey);
            updateCSS$1(normalizeStyle(effectStyle[effectKey]), `_effect-${effectKey}`, {
              mark: ATTR_MARK,
              prepend: "queue",
              attachTo: container
            });
          }
        });
      }
      return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (_ref, fromHMR) => {
      let [, , styleId] = _ref;
      if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }
  );
  return (node2) => {
    return node2;
  };
}
const version = "4.2.6";
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var s2 = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s2 = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, l: l2 };
}
function hue2rgb(p, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p + (q2 - p) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t2) * 6;
  }
  return p;
}
function hslToRgb(h2, s2, l2) {
  var r2;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  if (s2 === 0) {
    g2 = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p = 2 * l2 - q2;
    r2 = hue2rgb(p, q2, h2 + 1 / 3);
    g2 = hue2rgb(p, q2, h2);
    b2 = hue2rgb(p, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s2 = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, v: v2 };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p = v2 * (1 - s2);
  var q2 = v2 * (1 - f2 * s2);
  var t2 = v2 * (1 - (1 - f2) * s2);
  var mod = i2 % 6;
  var r2 = [v2, q2, p, p, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p, p][mod];
  var b2 = [p, p, t2, v2, v2, q2][mod];
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a2, allow4Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = (
  /** @class */
  function() {
    function TinyColor2(color, opts) {
      if (color === void 0) {
        color = "";
      }
      if (opts === void 0) {
        opts = {};
      }
      var _a;
      if (color instanceof TinyColor2) {
        return color;
      }
      if (typeof color === "number") {
        color = numberInputToObject(color);
      }
      this.originalInput = color;
      var rgb = inputToRGB(color);
      this.originalInput = color;
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;
      this.a = rgb.a;
      this.roundA = Math.round(100 * this.a) / 100;
      this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
      this.gradientType = opts.gradientType;
      if (this.r < 1) {
        this.r = Math.round(this.r);
      }
      if (this.g < 1) {
        this.g = Math.round(this.g);
      }
      if (this.b < 1) {
        this.b = Math.round(this.b);
      }
      this.isValid = rgb.ok;
    }
    TinyColor2.prototype.isDark = function() {
      return this.getBrightness() < 128;
    };
    TinyColor2.prototype.isLight = function() {
      return !this.isDark();
    };
    TinyColor2.prototype.getBrightness = function() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    };
    TinyColor2.prototype.getLuminance = function() {
      var rgb = this.toRgb();
      var R2;
      var G;
      var B2;
      var RsRGB = rgb.r / 255;
      var GsRGB = rgb.g / 255;
      var BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) {
        R2 = RsRGB / 12.92;
      } else {
        R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }
      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }
      if (BsRGB <= 0.03928) {
        B2 = BsRGB / 12.92;
      } else {
        B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * R2 + 0.7152 * G + 0.0722 * B2;
    };
    TinyColor2.prototype.getAlpha = function() {
      return this.a;
    };
    TinyColor2.prototype.setAlpha = function(alpha) {
      this.a = boundAlpha(alpha);
      this.roundA = Math.round(100 * this.a) / 100;
      return this;
    };
    TinyColor2.prototype.isMonochrome = function() {
      var s2 = this.toHsl().s;
      return s2 === 0;
    };
    TinyColor2.prototype.toHsv = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor2.prototype.toHsvString = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      var h2 = Math.round(hsv.h * 360);
      var s2 = Math.round(hsv.s * 100);
      var v2 = Math.round(hsv.v * 100);
      return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHsl = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor2.prototype.toHslString = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      var h2 = Math.round(hsl.h * 360);
      var s2 = Math.round(hsl.s * 100);
      var l2 = Math.round(hsl.l * 100);
      return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHex = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    TinyColor2.prototype.toHexString = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return "#" + this.toHex(allow3Char);
    };
    TinyColor2.prototype.toHex8 = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor2.prototype.toHex8String = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return "#" + this.toHex8(allow4Char);
    };
    TinyColor2.prototype.toHexShortString = function(allowShortChar) {
      if (allowShortChar === void 0) {
        allowShortChar = false;
      }
      return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    TinyColor2.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toRgbString = function() {
      var r2 = Math.round(this.r);
      var g2 = Math.round(this.g);
      var b2 = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toPercentageRgb = function() {
      var fmt = function(x2) {
        return "".concat(Math.round(bound01(x2, 255) * 100), "%");
      };
      return {
        r: fmt(this.r),
        g: fmt(this.g),
        b: fmt(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toPercentageRgbString = function() {
      var rnd = function(x2) {
        return Math.round(bound01(x2, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toName = function() {
      if (this.a === 0) {
        return "transparent";
      }
      if (this.a < 1) {
        return false;
      }
      var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
      for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (hex === value) {
          return key;
        }
      }
      return false;
    };
    TinyColor2.prototype.toString = function(format) {
      var formatSet = Boolean(format);
      format = format !== null && format !== void 0 ? format : this.format;
      var formattedString = false;
      var hasAlpha = this.a < 1 && this.a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
      if (needsAlphaFormat) {
        if (format === "name" && this.a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    };
    TinyColor2.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor2.prototype.clone = function() {
      return new TinyColor2(this.toString());
    };
    TinyColor2.prototype.lighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.brighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var rgb = this.toRgb();
      rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
      rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
      rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
      return new TinyColor2(rgb);
    };
    TinyColor2.prototype.darken = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.tint = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("white", amount);
    };
    TinyColor2.prototype.shade = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("black", amount);
    };
    TinyColor2.prototype.desaturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.saturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.greyscale = function() {
      return this.desaturate(100);
    };
    TinyColor2.prototype.spin = function(amount) {
      var hsl = this.toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.mix = function(color, amount) {
      if (amount === void 0) {
        amount = 50;
      }
      var rgb1 = this.toRgb();
      var rgb2 = new TinyColor2(color).toRgb();
      var p = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b,
        a: (rgb2.a - rgb1.a) * p + rgb1.a
      };
      return new TinyColor2(rgba);
    };
    TinyColor2.prototype.analogous = function(results, slices) {
      if (results === void 0) {
        results = 6;
      }
      if (slices === void 0) {
        slices = 30;
      }
      var hsl = this.toHsl();
      var part = 360 / slices;
      var ret = [this];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(new TinyColor2(hsl));
      }
      return ret;
    };
    TinyColor2.prototype.complement = function() {
      var hsl = this.toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.monochromatic = function(results) {
      if (results === void 0) {
        results = 6;
      }
      var hsv = this.toHsv();
      var h2 = hsv.h;
      var s2 = hsv.s;
      var v2 = hsv.v;
      var res = [];
      var modification = 1 / results;
      while (results--) {
        res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
        v2 = (v2 + modification) % 1;
      }
      return res;
    };
    TinyColor2.prototype.splitcomplement = function() {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      return [
        this,
        new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
        new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
      ];
    };
    TinyColor2.prototype.onBackground = function(background) {
      var fg = this.toRgb();
      var bg = new TinyColor2(background).toRgb();
      var alpha = fg.a + bg.a * (1 - fg.a);
      return new TinyColor2({
        r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
        g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
        b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
        a: alpha
      });
    };
    TinyColor2.prototype.triad = function() {
      return this.polyad(3);
    };
    TinyColor2.prototype.tetrad = function() {
      return this.polyad(4);
    };
    TinyColor2.prototype.polyad = function(n2) {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      var result = [this];
      var increment = 360 / n2;
      for (var i2 = 1; i2 < n2; i2++) {
        result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
      }
      return result;
    };
    TinyColor2.prototype.equals = function(color) {
      return this.toRgbString() === new TinyColor2(color).toRgbString();
    };
    return TinyColor2;
  }()
);
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r2 = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r2, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r2 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r2, g2, b2, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i2, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i2, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i2;
  } else if (i2 === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i2;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i2 === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue$1(hsv, i2, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i2;
  } else {
    value = hsv.v - brightnessStep2 * i2;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i2, true),
      s: getSaturation(hsv, i2, true),
      v: getValue$1(hsv, i2, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue$1(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var blue = presetPalettes.blue;
const genControlHeight = (token2) => {
  const {
    controlHeight
  } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
function genSizeMapToken(token2) {
  const {
    sizeUnit,
    sizeStep
  } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  return _extends(_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
function genCommonMapToken(token2) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token2;
  return _extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius(borderRadius));
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors2 = generate$1(baseColor);
  return {
    1: colors2[0],
    2: colors2[1],
    3: colors2[2],
    4: colors2[3],
    5: colors2[4],
    6: colors2[5],
    7: colors2[6],
    8: colors2[4],
    9: colors2[5],
    10: colors2[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_2, index) => {
    const i2 = index - 1;
    const baseSize = base * Math.pow(2.71828, i2 / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
function derivative(token2) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors2 = generate$1(token2[colorKey]);
    return new Array(10).fill(1).reduce((prev2, _2, i2) => {
      prev2[`${colorKey}-${i2 + 1}`] = colors2[i2];
      return prev2;
    }, {});
  }).reduce((prev2, cur) => {
    prev2 = _extends(_extends({}, prev2), cur);
    return prev2;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token2), colorPalettes), genColorMapToken(token2, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken(token2.fontSize)), genSizeMapToken(token2)), genControlHeight(token2)), genCommonMapToken(token2));
}
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r2 = Math.round((fR - bR * (1 - fA)) / fA);
    const g2 = Math.round((fG - bG * (1 - fA)) / fA);
    const b2 = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
      return new TinyColor({
        r: r2,
        g: g2,
        b: b2,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$1 = function(s2, e2) {
  var t2 = {};
  for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0) t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
    if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2])) t2[p[i2]] = s2[p[i2]];
  }
  return t2;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$1(derivativeToken, ["override"]);
  const overrideTokens = _extends({}, override);
  Object.keys(seedToken).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = _extends(_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2e3;
  const aliasToken = _extends(_extends(_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
const genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: token2.colorLinkHover
    },
    "&:active": {
      color: token2.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token2.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token2, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token2;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token2) => ({
  outline: `${token2.lineWidthBold}px solid ${token2.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token2) => ({
  "&:focus-visible": _extends({}, genFocusOutline(token2))
});
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return (_prefixCls) => {
    const prefixCls = vue.computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token2, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = vue.computed(() => getPrefixCls());
    const sharedInfo = vue.computed(() => {
      return {
        theme: theme.value,
        token: token2.value,
        hashId: hashId.value,
        path: ["Shared", rootPrefixCls.value]
      };
    });
    useStyleRegister(sharedInfo, () => [{
      // Link
      "&": genLinkStyle(token2.value)
    }]);
    const componentInfo = vue.computed(() => {
      return {
        theme: theme.value,
        token: token2.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token2.value);
      const defaultComponentToken = getDefaultToken;
      const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token2.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token2.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token2.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}
const enableStatistic = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return _extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
function noop() {
}
function statisticToken(token2) {
  let tokenKeys2;
  let proxy = token2;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      ({
        global: Array.from(tokenKeys2),
        component: componentToken
      });
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: seedToken,
  hashed: true
};
const DesignTokenContextKey = Symbol("DesignTokenContext");
const globalDesignTokenApi = vue.shallowRef();
const useDesignTokenProvider = (value) => {
  vue.provide(DesignTokenContextKey, value);
  vue.watch(value, () => {
    globalDesignTokenApi.value = vue.unref(value);
    vue.triggerRef(globalDesignTokenApi);
  }, {
    immediate: true,
    deep: true
  });
};
vue.defineComponent({
  props: {
    value: objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider(vue.computed(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function useToken() {
  const designTokenContext = vue.inject(DesignTokenContextKey, vue.computed(() => globalDesignTokenApi.value || defaultConfig));
  const salt = vue.computed(() => `${version}-${designTokenContext.value.hashed || ""}`);
  const mergedTheme = vue.computed(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, vue.computed(() => [seedToken, designTokenContext.value.token]), vue.computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken
  })));
  return [mergedTheme, vue.computed(() => cacheToken.value[0]), vue.computed(() => designTokenContext.value.hashed ? cacheToken.value[1] : "")];
}
const Empty$2 = vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token2] = useToken();
    const themeStyle = vue.computed(() => {
      const bgColor = new TinyColor(token2.value.colorBgBase);
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => vue.createVNode("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [vue.createVNode("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [vue.createVNode("g", {
      "transform": "translate(24 31.67)"
    }, [vue.createVNode("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), vue.createVNode("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), vue.createVNode("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), vue.createVNode("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), vue.createVNode("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), vue.createVNode("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), vue.createVNode("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [vue.createVNode("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), vue.createVNode("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
const Simple = vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token2] = useToken();
    const color = vue.computed(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token2.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => vue.createVNode("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [vue.createVNode("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [vue.createVNode("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), vue.createVNode("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [vue.createVNode("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), vue.createVNode("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
const isValid = (value) => {
  return value !== void 0 && value !== null && value !== "";
};
const initDefaultProps = (types, defaultProps) => {
  const propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach((k2) => {
    const prop = propTypes[k2];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k2];
      } else if (prop.def) {
        prop.def(defaultProps[k2]);
      } else {
        propTypes[k2] = {
          type: prop,
          default: defaultProps[k2]
        };
      }
    } else {
      throw new Error(`not have ${k2} prop`);
    }
  });
  return propTypes;
};
const skipFlattenKey = Symbol("skipFlatten");
const flattenChildren = function() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty2));
    } else if (child && child.type === vue.Fragment) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty2));
      }
    } else if (child && vue.isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
};
const findDOMNode = (instance) => {
  var _a;
  let node2 = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node2 && !node2.tagName) {
    node2 = node2.nextSibling;
  }
  return node2;
};
function isEmptyElement(c2) {
  return c2 && (c2.type === vue.Comment || c2.type === vue.Fragment && c2.children.length === 0 || c2.type === vue.Text && c2.children.trim() === "");
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === vue.Fragment) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter((c2) => !isEmptyElement(c2));
}
const genSharedEmptyStyle = (token2) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token2;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token2.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token2.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Empty", (token2) => {
  const {
    componentCls,
    controlHeightLG
  } = token2;
  const emptyToken = merge(token2, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0) t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
    if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2])) t2[p[i2]] = s2[p[i2]];
  }
  return t2;
};
const emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
});
const Empty = vue.defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject("empty", props);
    const [wrapSSR, hashId] = useStyle$3(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = _extends(_extends({}, props), attrs), {
        image: mergedImage = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || vue.h(Empty$2),
        description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
        imageStyle,
        class: className = ""
      } = _c, restProps = __rest(_c, ["image", "description", "imageStyle", "class"]);
      const image = typeof mergedImage === "function" ? mergedImage() : mergedImage;
      const isNormal = typeof image === "object" && "type" in image && image.type.PRESENTED_IMAGE_SIMPLE;
      return wrapSSR(vue.createVNode(LocaleReceiver, {
        "componentName": "Empty",
        "children": (locale2) => {
          const des = typeof description !== "undefined" ? description : locale2.description;
          const alt = typeof des === "string" ? des : "empty";
          let imageNode = null;
          if (typeof image === "string") {
            imageNode = vue.createVNode("img", {
              "alt": alt,
              "src": image
            }, null);
          } else {
            imageNode = image;
          }
          return vue.createVNode("div", _objectSpread2({
            "class": classNames(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: isNormal,
              [`${prefixCls}-rtl`]: direction.value === "rtl"
            })
          }, restProps), [vue.createVNode("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && vue.createVNode("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && vue.createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = () => vue.h(Empty$2);
Empty.PRESENTED_IMAGE_SIMPLE = () => vue.h(Simple);
const Empty$1 = withInstall(Empty);
const DefaultRenderEmpty = (props) => {
  const {
    prefixCls
  } = useConfigInject("empty", props);
  const renderHtml = (componentName) => {
    switch (componentName) {
      case "Table":
      case "List":
        return vue.createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return vue.createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return vue.createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props.componentName);
};
const SizeContextKey = Symbol("SizeContextKey");
const useInjectSize = () => {
  return vue.inject(SizeContextKey, vue.ref(void 0));
};
const useConfigInject = (name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = vue.inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (name2) => vue.h(DefaultRenderEmpty, {
      componentName: name2
    })
  }));
  const prefixCls = vue.computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = vue.computed(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = vue.computed(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = vue.computed(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = vue.computed(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = vue.computed(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = vue.computed(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = vue.computed(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = vue.computed(() => {
    var _a;
    return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = vue.computed(() => props.size || sizeContext.value);
  const autocomplete = vue.computed(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = vue.computed(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = vue.computed(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = vue.computed(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
};
const isVisible = (element) => {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    const box = element.getBBox();
    if (box.width || box.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    const box = element.getBoundingClientRect();
    if (box.width || box.height) {
      return true;
    }
  }
  return false;
};
const genWaveStyle = (token2) => {
  const {
    componentCls,
    colorPrimary
  } = token2;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = vue.ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
function isNotGrey(color) {
  const match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
  color !== "transparent";
}
function getTargetWaveColor(node2) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node2);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
let raf = (callback) => setTimeout(callback, 16);
let caf = (num) => clearTimeout(num);
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = (callback) => window.requestAnimationFrame(callback);
  caf = (handle) => window.cancelAnimationFrame(handle);
}
let rafUUID = 0;
const rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  let times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  const id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      const realId = raf(() => {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = (id) => {
  const realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = vue.defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(props) {
    const divRef = vue.shallowRef(null);
    const [color, setWaveColor] = useState(null);
    const [borderRadius, setBorderRadius] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [enabled, setEnabled] = useState(false);
    function syncPos() {
      const {
        target
      } = props;
      const nodeStyle = getComputedStyle(target);
      setWaveColor(getTargetWaveColor(target));
      const isStatic = nodeStyle.position === "static";
      const {
        borderLeftWidth,
        borderTopWidth
      } = nodeStyle;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius
      } = nodeStyle;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
    }
    let resizeObserver;
    let rafId;
    let timeoutId;
    const clear = () => {
      clearTimeout(timeoutId);
      wrapperRaf.cancel(rafId);
      resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
    };
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
      if (holder) {
        vue.render(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    vue.onMounted(() => {
      clear();
      timeoutId = setTimeout(() => {
        removeDom();
      }, 5e3);
      const {
        target
      } = props;
      if (target) {
        rafId = wrapperRaf(() => {
          syncPos();
          setEnabled(true);
        });
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(syncPos);
          resizeObserver.observe(target);
        }
      }
    });
    vue.onBeforeUnmount(() => {
      clear();
    });
    const onTransitionend = (e2) => {
      if (e2.propertyName === "opacity") {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
      };
      if (color) {
        waveStyle["--wave-color"] = color.value;
      }
      return vue.createVNode(vue.Transition, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [vue.createVNode("div", {
          "ref": divRef,
          "class": props.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node2, className) {
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node2 === null || node2 === void 0 ? void 0 : node2.insertBefore(holder, node2 === null || node2 === void 0 ? void 0 : node2.firstChild);
  vue.render(vue.createVNode(WaveEffect, {
    "target": node2,
    "className": className
  }, null), holder);
  return () => {
    vue.render(null, holder);
    if (holder.parentElement) {
      holder.parentElement.removeChild(holder);
    }
  };
}
function useWave(className, wave) {
  const instance = vue.getCurrentInstance();
  let stopWave;
  function showWave() {
    var _a;
    const node2 = findDOMNode(instance);
    stopWave === null || stopWave === void 0 ? void 0 : stopWave();
    if (((_a = wave === null || wave === void 0 ? void 0 : wave.value) === null || _a === void 0 ? void 0 : _a.disabled) || !node2) {
      return;
    }
    stopWave = showWaveEffect(node2, className.value);
  }
  vue.onBeforeUnmount(() => {
    stopWave === null || stopWave === void 0 ? void 0 : stopWave();
  });
  return showWave;
}
const Wave = vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const instance = vue.getCurrentInstance();
    const {
      prefixCls,
      wave
    } = useConfigInject("wave", props);
    const [, hashId] = useStyle$2(prefixCls);
    const showWave = useWave(vue.computed(() => classNames(prefixCls.value, hashId.value)), wave);
    let onClick;
    const clear = () => {
      const node2 = findDOMNode(instance);
      node2.removeEventListener("click", onClick, true);
    };
    vue.onMounted(() => {
      vue.watch(() => props.disabled, () => {
        clear();
        vue.nextTick(() => {
          const node2 = findDOMNode(instance);
          node2 === null || node2 === void 0 ? void 0 : node2.removeEventListener("click", onClick, true);
          if (!node2 || node2.nodeType !== 1 || props.disabled) {
            return;
          }
          onClick = (e2) => {
            if (e2.target.tagName === "INPUT" || !isVisible(e2.target) || // No need wave
            !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
              return;
            }
            showWave();
          };
          node2.addEventListener("click", onClick, true);
        });
      }, {
        immediate: true,
        flush: "post"
      });
    });
    vue.onBeforeUnmount(() => {
      clear();
    });
    return () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      return children;
    };
  }
});
function e(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function t(t2, n2, r2) {
  return r2 && e(t2, r2), t2;
}
function n() {
  return (n = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
}
function i(e2, t2) {
  if (null == e2) return {};
  var n2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++) t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
  return i2;
}
function o(e2) {
  return 1 == (null != (t2 = e2) && "object" == typeof t2 && false === Array.isArray(t2)) && "[object Object]" === Object.prototype.toString.call(e2);
  var t2;
}
var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
function l(e2) {
  var t2, n2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
  if (n2) {
    var r2 = n2.toString().match(c);
    return r2 ? r2[1] : "";
  }
  return "";
}
var s = function(e2) {
  var t2, n2;
  return false !== o(e2) && "function" == typeof (t2 = e2.constructor) && false !== o(n2 = t2.prototype) && false !== n2.hasOwnProperty("isPrototypeOf");
}, v$1 = function(e2) {
  return e2;
}, y = v$1;
if ("production" !== process.env.NODE_ENV) {
  var p = "undefined" != typeof console;
  y = p ? function(e2) {
    console.warn("[VueTypes warn]: " + e2);
  } : v$1;
}
var d = function(e2, t2) {
  return f.call(e2, t2);
}, h$1 = Number.isInteger || function(e2) {
  return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
}, b = Array.isArray || function(e2) {
  return "[object Array]" === a.call(e2);
}, O = function(e2) {
  return "[object Function]" === a.call(e2);
}, g = function(e2) {
  return s(e2) && d(e2, "_vueTypes_name");
}, m = function(e2) {
  return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
    return d(e2, t2);
  }));
};
function j(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function _(e2, t2, n2) {
  var r2;
  var i2 = true, o2 = "";
  r2 = s(e2) ? e2 : { type: e2 };
  var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
  if (m(r2) && null !== r2.type) {
    if (void 0 === r2.type || true === r2.type) return i2;
    if (!r2.required && void 0 === t2) return i2;
    b(r2.type) ? (i2 = r2.type.some(function(e3) {
      return true === _(e3, t2);
    }), o2 = r2.type.map(function(e3) {
      return l(e3);
    }).join(" or ")) : i2 = "Array" === (o2 = l(r2)) ? b(t2) : "Object" === o2 ? s(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e3) {
      if (null == e3) return "";
      var t3 = e3.constructor.toString().match(c);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof r2.type;
  }
  if (!i2) {
    var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
    return a2;
  }
  if (d(r2, "validator") && O(r2.validator)) {
    var f2 = y, v2 = [];
    if (y = function(e3) {
      v2.push(e3);
    }, i2 = r2.validator(t2), y = f2, !i2) {
      var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
      return v2.length = 0, p;
    }
  }
  return i2;
}
function T(e2, t2) {
  var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
    return this.required = true, this;
  } }, def: { value: function(e3) {
    return void 0 !== e3 || this.default ? O(e3) || true === _(this, e3) ? (this.default = b(e3) ? function() {
      return [].concat(e3);
    } : s(e3) ? function() {
      return Object.assign({}, e3);
    } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
  } } }), r2 = n2.validator;
  return O(r2) && (n2.validator = j(r2, n2)), n2;
}
function w$1(e2, t2) {
  var n2 = T(e2, t2);
  return Object.defineProperty(n2, "validate", { value: function(e3) {
    return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
  } });
}
function k(e2, t2, n2) {
  var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
    o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
  }), Object.defineProperties({}, o2));
  if (u2._vueTypes_name = e2, !s(n2)) return u2;
  var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
  if (O(c2)) {
    var v2 = u2.validator;
    v2 && (v2 = null !== (f2 = (a2 = v2).__original) && void 0 !== f2 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
      return v2.call(this, e3) && c2.call(this, e3);
    } : c2, u2);
  }
  return Object.assign(u2, l2);
}
function P(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w$1("any", {});
}, A = function() {
  return w$1("function", { type: Function });
}, E = function() {
  return w$1("boolean", { type: Boolean });
}, N = function() {
  return w$1("string", { type: String });
}, q = function() {
  return w$1("number", { type: Number });
}, S = function() {
  return w$1("array", { type: Array });
}, V = function() {
  return w$1("object", { type: Object });
}, F = function() {
  return T("integer", { type: Number, validator: function(e2) {
    return h$1(e2);
  } });
}, D = function() {
  return T("symbol", { validator: function(e2) {
    return "symbol" == typeof e2;
  } });
};
function L(e2, t2) {
  if (void 0 === t2 && (t2 = "custom validation failed"), "function" != typeof e2) throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
    var r2 = e2(n2);
    return r2 || y(this._vueTypes_name + " - " + t2), r2;
  } });
}
function Y(e2) {
  if (!b(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
    if (null != t3) {
      var n3 = t3.constructor;
      -1 === e3.indexOf(n3) && e3.push(n3);
    }
    return e3;
  }, []);
  return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
    var r2 = -1 !== e2.indexOf(n3);
    return r2 || y(t2), r2;
  } });
}
function B(e2) {
  if (!b(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
    var i2 = e2[r2];
    if (m(i2)) {
      if (g(i2) && "oneOf" === i2._vueTypes_name) {
        n2 = n2.concat(i2.type);
        continue;
      }
      if (O(i2.validator) && (t2 = true), true !== i2.type && i2.type) {
        n2 = n2.concat(i2.type);
        continue;
      }
    }
    n2.push(i2);
  }
  return n2 = n2.filter(function(e3, t3) {
    return n2.indexOf(e3) === t3;
  }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
    var n3 = [], r3 = e2.some(function(e3) {
      var r4 = _(g(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3);
      return "string" == typeof r4 && n3.push(r4), true === r4;
    });
    return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P(n3.join("\n"))), r3;
  } } : { type: n2 });
}
function I(e2) {
  return T("arrayOf", { type: Array, validator: function(t2) {
    var n2, r2 = t2.every(function(t3) {
      return true === (n2 = _(e2, t3));
    });
    return r2 || y("arrayOf - value validation error:\n" + P(n2)), r2;
  } });
}
function J(e2) {
  return T("instanceOf", { type: e2 });
}
function M(e2) {
  return T("objectOf", { type: Object, validator: function(t2) {
    var n2, r2 = Object.keys(t2).every(function(r3) {
      return true === (n2 = _(e2, t2[r3]));
    });
    return r2 || y("objectOf - value validation error:\n" + P(n2)), r2;
  } });
}
function R(e2) {
  var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
    var n3;
    return !!(null === (n3 = e2[t3]) || void 0 === n3 ? void 0 : n3.required);
  }), r2 = T("shape", { type: Object, validator: function(r3) {
    var i2 = this;
    if (!s(r3)) return false;
    var o2 = Object.keys(r3);
    if (n2.length > 0 && n2.some(function(e3) {
      return -1 === o2.indexOf(e3);
    })) {
      var u2 = n2.filter(function(e3) {
        return -1 === o2.indexOf(e3);
      });
      return y(1 === u2.length ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
    }
    return o2.every(function(n3) {
      if (-1 === t2.indexOf(n3)) return true === i2._vueTypes_isLoose || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
      var o3 = _(e2[n3], r3[n3]);
      return "string" == typeof o3 && y('shape - "' + n3 + '" property validation error:\n ' + P(o3)), true === o3;
    });
  } });
  return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
    return this._vueTypes_isLoose = true, this;
  } }), r2;
}
var $ = function() {
  function e2() {
  }
  return e2.extend = function(e3) {
    var t2 = this;
    if (b(e3)) return e3.forEach(function(e4) {
      return t2.extend(e4);
    }), this;
    var n2 = e3.name, r2 = e3.validate, o2 = void 0 !== r2 && r2, u2 = e3.getter, a2 = void 0 !== u2 && u2, f2 = i(e3, ["name", "validate", "getter"]);
    if (d(this, n2)) throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
    var c2, l2 = f2.type;
    return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
      return k(n2, l2, f2);
    } } : { value: function() {
      var e4, t3 = k(n2, l2, f2);
      return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
    } })) : (c2 = a2 ? { get: function() {
      var e4 = Object.assign({}, f2);
      return o2 ? w$1(n2, e4) : T(n2, e4);
    }, enumerable: true } : { value: function() {
      var e4, t3, r3 = Object.assign({}, f2);
      return e4 = o2 ? w$1(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
    }, enumerable: true }, Object.defineProperty(this, n2, c2));
  }, t(e2, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), e2;
}();
function z(e2) {
  var i2;
  return void 0 === e2 && (e2 = { func: function() {
  }, bool: true, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (i2 = function(i3) {
    function o2() {
      return i3.apply(this, arguments) || this;
    }
    return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(t2) {
      this.defaults = false !== t2 ? n({}, true !== t2 ? t2 : e2) : {};
    } }]), o2;
  }($)).defaults = n({}, e2), i2;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(e2, t2) {
  return true === _(t2, e2);
}, toType: function(e2, t2, n2) {
  return void 0 === n2 && (n2 = false), n2 ? w$1(e2, t2) : T(e2, t2);
} };
(function(e2) {
  function t2() {
    return e2.apply(this, arguments) || this;
  }
  return r(t2, e2), t2;
})(z());
const PropTypes = z({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
});
const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var contextKey = Symbol("iconContext");
var useInjectIconContext = function useInjectIconContext2() {
  return vue.inject(contextKey, {
    prefixCls: vue.ref("anticon"),
    rootClassName: vue.ref(""),
    csp: vue.ref()
  });
};
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function contains(root2, n2) {
  if (!root2) {
    return false;
  }
  if (root2.contains) {
    return root2.contains(n2);
  }
  return false;
}
var APPEND_ORDER = "data-vc-order";
var MARK_KEY = "vc-icon-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
    return node2.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend;
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp && csp.nonce) {
    styleNode.nonce = csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (prepend === "queue") {
      var existStyle = findStyles(container).filter(function(node2) {
        return ["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER));
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node2) {
    return node2.getAttribute(getMark(option)) === key;
  });
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    if (option.csp && option.csp.nonce && existNode.nonce !== option.csp.nonce) {
      existNode.nonce = option.csp.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function warn(valid, message) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    console.error("Warning: ".concat(message));
  }
}
function warning(valid, message) {
  warn(valid, "[@ant-design/icons-vue] ".concat(message));
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function generate(node2, key, rootProps) {
  if (!rootProps) {
    return vue.h(node2.tag, _objectSpread$3({
      key
    }, node2.attrs), (node2.children || []).map(function(child, index) {
      return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
    }));
  }
  return vue.h(node2.tag, _objectSpread$3({
    key
  }, rootProps, node2.attrs), (node2.children || []).map(function(child, index) {
    return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
function getRoot(ele) {
  return ele && ele.getRootNode && ele.getRootNode();
}
function inShadow(ele) {
  if (!canUseDom()) {
    return false;
  }
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}
var useInsertStyles = function useInsertStyles2() {
  var _useInjectIconContext = useInjectIconContext(), prefixCls = _useInjectIconContext.prefixCls, csp = _useInjectIconContext.csp;
  var instance = vue.getCurrentInstance();
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }
  vue.nextTick(function() {
    if (!canUseDom()) {
      return;
    }
    var ele = instance.vnode.el;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-vue-icons", {
      prepend: true,
      csp: csp.value,
      attachTo: shadowRoot
    });
  });
};
var _excluded$1 = ["icon", "primaryColor", "secondaryColor"];
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var twoToneColorPalette = vue.reactive({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
});
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread$2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props, context) {
  var _props$context$attrs = _objectSpread$2({}, props, context.attrs), icon = _props$context$attrs.icon, primaryColor = _props$context$attrs.primaryColor, secondaryColor = _props$context$attrs.secondaryColor, restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);
  var colors2 = twoToneColorPalette;
  if (primaryColor) {
    colors2 = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread$2({}, target, {
      icon: target.icon(colors2.primaryColor, colors2.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread$2({}, restProps, {
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = "IconBase";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2) break;
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
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors2 = IconBase.getTwoToneColors();
  if (!colors2.calculated) {
    return colors2.primaryColor;
  }
  return [colors2.primaryColor, colors2.secondaryColor];
}
var InsertStyles = vue.defineComponent({
  name: "InsertStyles",
  setup: function setup() {
    useInsertStyles();
    return function() {
      return null;
    };
  }
});
var _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2) break;
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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
setTwoToneColor(blue.primary);
var Icon = function Icon2(props, context) {
  var _classObj;
  var _props$context$attrs = _objectSpread$1({}, props, context.attrs), cls = _props$context$attrs["class"], icon = _props$context$attrs.icon, spin = _props$context$attrs.spin, rotate = _props$context$attrs.rotate, tabindex = _props$context$attrs.tabindex, twoToneColor = _props$context$attrs.twoToneColor, onClick = _props$context$attrs.onClick, restProps = _objectWithoutProperties(_props$context$attrs, _excluded);
  var _useInjectIconContext = useInjectIconContext(), prefixCls = _useInjectIconContext.prefixCls, rootClassName = _useInjectIconContext.rootClassName;
  var classObj = (_classObj = {}, _defineProperty$1(_classObj, rootClassName.value, !!rootClassName.value), _defineProperty$1(_classObj, prefixCls.value, true), _defineProperty$1(_classObj, "".concat(prefixCls.value, "-").concat(icon.name), Boolean(icon.name)), _defineProperty$1(_classObj, "".concat(prefixCls.value, "-spin"), !!spin || icon.name === "loading"), _classObj);
  var iconTabIndex = tabindex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return vue.createVNode("span", _objectSpread$1({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick,
    "class": [classObj, cls],
    "tabindex": iconTabIndex
  }), [vue.createVNode(IconBase, {
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null), vue.createVNode(InsertStyles, null, null)]);
};
Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = "AntdIcon";
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LoadingOutlined = function LoadingOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return vue.createVNode(Icon, _objectSpread({}, p, {
    "icon": LoadingOutlined$1
  }), null);
};
LoadingOutlined.displayName = "LoadingOutlined";
LoadingOutlined.inheritAttrs = false;
const getCollapsedWidth = (node2) => {
  if (node2) {
    node2.style.width = "0px";
    node2.style.opacity = "0";
    node2.style.transform = "scale(0)";
  }
};
const getRealWidth = (node2) => {
  vue.nextTick(() => {
    if (node2) {
      node2.style.width = `${node2.scrollWidth}px`;
      node2.style.opacity = "1";
      node2.style.transform = "scale(1)";
    }
  });
};
const resetStyle = (node2) => {
  if (node2 && node2.style) {
    node2.style.width = null;
    node2.style.opacity = null;
    node2.style.transform = null;
  }
};
const LoadingIcon = vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(props) {
    return () => {
      const {
        existIcon,
        prefixCls,
        loading
      } = props;
      if (existIcon) {
        return vue.createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [vue.createVNode(LoadingOutlined, null, null)]);
      }
      const visible = !!loading;
      return vue.createVNode(vue.Transition, {
        "name": `${prefixCls}-loading-icon-motion`,
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": (node2) => {
          setTimeout(() => {
            getCollapsedWidth(node2);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: () => [visible ? vue.createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [vue.createVNode(LoadingOutlined, null, null)]) : null]
      });
    };
  }
});
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = (token2) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token2;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -lineWidth,
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
function compactItemBorder(token2, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token2.lineWidth
    },
    "&-item": _extends(_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token2) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token2;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: _extends(_extends({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
function compactItemVerticalBorder(token2, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: -token2.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token2) {
  const compactCls = `${token2.componentCls}-compact-vertical`;
  return {
    [compactCls]: _extends(_extends({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
  };
}
const genSharedButtonStyle = (token2) => {
  const {
    componentCls,
    iconCls
  } = token2;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${token2.lineWidth}px ${token2.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: token2.lineHeight,
      color: token2.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token2.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": _extends({}, genFocusStyle(token2)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -token2.lineWidth,
            insetInlineStart: -token2.lineWidth,
            display: "inline-block",
            width: token2.lineWidth,
            height: `calc(100% + ${token2.lineWidth * 2}px)`,
            backgroundColor: token2.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -token2.lineWidth,
              insetInlineStart: -token2.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${token2.lineWidth * 2}px)`,
              height: token2.lineWidth,
              backgroundColor: token2.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  "&:not(:disabled)": {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token2) => ({
  minWidth: token2.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token2) => ({
  borderRadius: token2.controlHeight,
  paddingInlineStart: token2.controlHeight / 2,
  paddingInlineEnd: token2.controlHeight / 2
});
const genDisabledStyle = (token2) => ({
  cursor: "not-allowed",
  borderColor: token2.colorBorder,
  color: token2.colorTextDisabled,
  backgroundColor: token2.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: _extends(_extends({
    color: textColor || void 0,
    backgroundColor: "transparent",
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, hoverStyle), _extends({
    backgroundColor: "transparent"
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
const genSolidDisabledButtonStyle = (token2) => ({
  "&:disabled": _extends({}, genDisabledStyle(token2))
});
const genSolidButtonStyle = (token2) => _extends({}, genSolidDisabledButtonStyle(token2));
const genPureDisabledButtonStyle = (token2) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: token2.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token2) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token2)), {
  backgroundColor: token2.colorBgContainer,
  borderColor: token2.colorBorder,
  boxShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: token2.colorPrimaryHover,
  borderColor: token2.colorPrimaryHover
}, {
  color: token2.colorPrimaryActive,
  borderColor: token2.colorPrimaryActive
})), genGhostButtonStyle(token2.componentCls, token2.colorBgContainer, token2.colorBgContainer, token2.colorTextDisabled, token2.colorBorder)), {
  [`&${token2.componentCls}-dangerous`]: _extends(_extends(_extends({
    color: token2.colorError,
    borderColor: token2.colorError
  }, genHoverActiveButtonStyle({
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorBorderHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder)), genSolidDisabledButtonStyle(token2))
});
const genPrimaryButtonStyle = (token2) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token2)), {
  color: token2.colorTextLightSolid,
  backgroundColor: token2.colorPrimary,
  boxShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`
}), genHoverActiveButtonStyle({
  color: token2.colorTextLightSolid,
  backgroundColor: token2.colorPrimaryHover
}, {
  color: token2.colorTextLightSolid,
  backgroundColor: token2.colorPrimaryActive
})), genGhostButtonStyle(token2.componentCls, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
  color: token2.colorPrimaryHover,
  borderColor: token2.colorPrimaryHover
}, {
  color: token2.colorPrimaryActive,
  borderColor: token2.colorPrimaryActive
})), {
  [`&${token2.componentCls}-dangerous`]: _extends(_extends(_extends({
    backgroundColor: token2.colorError,
    boxShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: token2.colorErrorHover
  }, {
    backgroundColor: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genSolidDisabledButtonStyle(token2))
});
const genDashedButtonStyle = (token2) => _extends(_extends({}, genDefaultButtonStyle(token2)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token2) => _extends(_extends(_extends({
  color: token2.colorLink
}, genHoverActiveButtonStyle({
  color: token2.colorLinkHover
}, {
  color: token2.colorLinkActive
})), genPureDisabledButtonStyle(token2)), {
  [`&${token2.componentCls}-dangerous`]: _extends(_extends({
    color: token2.colorError
  }, genHoverActiveButtonStyle({
    color: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive
  })), genPureDisabledButtonStyle(token2))
});
const genTextButtonStyle = (token2) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
  color: token2.colorText,
  backgroundColor: token2.colorBgTextHover
}, {
  color: token2.colorText,
  backgroundColor: token2.colorBgTextActive
})), genPureDisabledButtonStyle(token2)), {
  [`&${token2.componentCls}-dangerous`]: _extends(_extends({
    color: token2.colorError
  }, genPureDisabledButtonStyle(token2)), genHoverActiveButtonStyle({
    color: token2.colorErrorHover,
    backgroundColor: token2.colorErrorBg
  }, {
    color: token2.colorErrorHover,
    backgroundColor: token2.colorErrorBg
  }))
});
const genDisabledButtonStyle = (token2) => _extends(_extends({}, genDisabledStyle(token2)), {
  [`&${token2.componentCls}:hover`]: _extends({}, genDisabledStyle(token2))
});
const genTypeButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token2),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
    [`${componentCls}-link`]: genLinkButtonStyle(token2),
    [`${componentCls}-text`]: genTextButtonStyle(token2),
    [`${componentCls}-disabled`]: genDisabledButtonStyle(token2)
  };
};
const genSizeButtonStyle = function(token2) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token2;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token2.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
        },
        [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
          marginInlineEnd: token2.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token2)
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token2)
    }
  ];
};
const genSizeBaseButtonStyle = (token2) => genSizeButtonStyle(token2);
const genSizeSmallButtonStyle = (token2) => {
  const smallToken = merge(token2, {
    controlHeight: token2.controlHeightSM,
    padding: token2.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token2.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, `${token2.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token2) => {
  const largeToken = merge(token2, {
    controlHeight: token2.controlHeightLG,
    fontSize: token2.fontSizeLG,
    borderRadius: token2.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, `${token2.componentCls}-lg`);
};
const genBlockButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Button", (token2) => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token2;
  const buttonToken = merge(token2, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle(buttonToken),
    // Space Compact
    genCompactItemStyle(token2, {
      focus: false
    }),
    genCompactItemVerticalStyle(token2)
  ];
});
function createContext(defaultValue) {
  const contextKey2 = Symbol("contextKey");
  const useProvide = (props, newProps) => {
    const mergedProps = vue.reactive({});
    vue.provide(contextKey2, mergedProps);
    vue.watchEffect(() => {
      _extends(mergedProps, props, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return vue.inject(contextKey2, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
const buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
});
const GroupSizeContext = createContext();
vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("btn-group", props);
    const [, , hashId] = useToken();
    GroupSizeContext.useProvide(vue.reactive({
      size: vue.computed(() => props.size)
    }));
    const classes = vue.computed(() => {
      const {
        size
      } = props;
      let sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          devWarning(!size, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-${sizeCls}`]: sizeCls,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [hashId.value]: true
      };
    });
    return () => {
      var _a;
      return vue.createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
const genSpaceCompactStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
};
const useStyle = genComponentStyleHook("Space", (token2) => [genSpaceStyle(token2), genSpaceCompactStyle(token2)]);
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var nativeObjectToString$1 = objectProto$6.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$5 = Object.prototype;
var nativeObjectToString = objectProto$5.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isArray = Array.isArray;
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$4 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$3 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag$2 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var Map$1 = getNative(root, "Map");
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$1 = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var mapTag = "[object Map]", setTag = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
});
const SpaceCompactItemContext = createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = SpaceCompactItemContext.useInject();
  const compactItemClassnames = vue.computed(() => {
    if (!compactItemContext || isEmpty(compactItemContext)) return "";
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames({
      [`${prefixCls.value}-compact${separator}item`]: true,
      [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === "rtl"
    });
  });
  return {
    compactSize: vue.computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize),
    compactDirection: vue.computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection),
    compactItemClassnames
  };
};
vue.defineComponent({
  name: "NoCompactStyle",
  setup(_2, _ref) {
    let {
      slots
    } = _ref;
    SpaceCompactItemContext.useProvide(null);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
});
const CompactItem = vue.defineComponent({
  name: "CompactItem",
  props: spaceCompactItemProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    SpaceCompactItemContext.useProvide(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
vue.defineComponent({
  name: "ASpaceCompact",
  inheritAttrs: false,
  props: spaceCompactProps(),
  setup(props, _ref3) {
    let {
      attrs,
      slots
    } = _ref3;
    const {
      prefixCls,
      direction: directionConfig
    } = useConfigInject("space-compact", props);
    const compactItemContext = SpaceCompactItemContext.useInject();
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const clx = vue.computed(() => {
      return classNames(prefixCls.value, hashId.value, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-block`]: props.block,
        [`${prefixCls.value}-vertical`]: props.direction === "vertical"
      });
    });
    return () => {
      var _a;
      const childNodes = flattenChildren(((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []);
      if (childNodes.length === 0) {
        return null;
      }
      return wrapSSR(vue.createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": [clx.value, attrs.class]
      }), [childNodes.map((child, i2) => {
        var _a2;
        const key = child && child.key || `${prefixCls.value}-item-${i2}`;
        const noCompactItemContext = !compactItemContext || isEmpty(compactItemContext);
        return vue.createVNode(CompactItem, {
          "key": key,
          "compactSize": (_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "middle",
          "compactDirection": props.direction,
          "isFirstItem": i2 === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
          "isLastItem": i2 === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
        }, {
          default: () => [child]
        });
      })]));
    };
  }
});
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
vue.defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonProps(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const {
      prefixCls,
      autoInsertSpaceInButton,
      direction,
      size
    } = useConfigInject("btn", props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const groupSizeContext = GroupSizeContext.useInject();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = vue.computed(() => {
      var _a;
      return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
    });
    const buttonNodeRef = vue.shallowRef(null);
    const delayTimeoutRef = vue.shallowRef(void 0);
    let isNeedInserted = false;
    const innerLoading = vue.shallowRef(false);
    const hasTwoCNChar = vue.shallowRef(false);
    const autoInsertSpace = vue.computed(() => autoInsertSpaceInButton.value !== false);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const loadingOrDelay = vue.computed(() => typeof props.loading === "object" && props.loading.delay ? props.loading.delay || true : !!props.loading);
    vue.watch(loadingOrDelay, (val) => {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    const classes = vue.computed(() => {
      const {
        type,
        shape = "default",
        ghost,
        block,
        danger
      } = props;
      const pre = prefixCls.value;
      const sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: void 0
      };
      const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === void 0 ? void 0 : groupSizeContext.size) || size.value;
      const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return [compactItemClassnames.value, {
        [hashId.value]: true,
        [`${pre}`]: true,
        [`${pre}-${shape}`]: shape !== "default" && shape,
        [`${pre}-${type}`]: type,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === "rtl"
      }];
    });
    const fixTwoCNChar = () => {
      const node2 = buttonNodeRef.value;
      if (!node2 || autoInsertSpaceInButton.value === false) {
        return;
      }
      const buttonText = node2.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    const handleClick = (event) => {
      if (innerLoading.value || mergedDisabled.value) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    const handleMousedown = (event) => {
      emit("mousedown", event);
    };
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === vue.Text) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return vue.createVNode("span", null, [text]);
      }
      return child;
    };
    vue.watchEffect(() => {
      devWarning(!(props.ghost && isUnBorderedButtonType(props.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    vue.onMounted(fixTwoCNChar);
    vue.onUpdated(fixTwoCNChar);
    vue.onBeforeUnmount(() => {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    const focus = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a, _b;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      const children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props.type);
      const {
        type,
        htmlType,
        href,
        title,
        target
      } = props;
      const iconType = innerLoading.value ? "loading" : icon;
      const buttonProps2 = _extends(_extends({}, attrs), {
        title,
        disabled: mergedDisabled.value,
        class: [classes.value, attrs.class, {
          [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
        }],
        onClick: handleClick,
        onMousedown: handleMousedown
      });
      if (!mergedDisabled.value) {
        delete buttonProps2.disabled;
      }
      const iconNode = icon && !innerLoading.value ? icon : vue.createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      const kids = children.map((child) => insertSpace(child, isNeedInserted && autoInsertSpace.value));
      if (href !== void 0) {
        return wrapSSR(vue.createVNode("a", _objectSpread2(_objectSpread2({}, buttonProps2), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]));
      }
      let buttonNode = vue.createVNode("button", _objectSpread2(_objectSpread2({}, buttonProps2), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (!isUnBorderedButtonType(type)) {
        const _buttonNode = /* @__PURE__ */ function() {
          return buttonNode;
        }();
        buttonNode = vue.createVNode(Wave, {
          "ref": "wave",
          "disabled": !!innerLoading.value
        }, {
          default: () => [_buttonNode]
        });
      }
      return wrapSSR(buttonNode);
    };
  }
});
const propsDef$5 = buttonProps() && {
  type: String
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: propsDef$5,
  setup(__props) {
    const props = __props;
    const className = vue.computed(() => `zsui-text-button--${props.type}`);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(antDesignVue.Button), {
        type: "text",
        class: vue.normalizeClass(["zsui-text-button", className.value])
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const expandableTextPropsDef = {
  lineClamp: {
    type: Number,
    default: 1
  },
  ellipsisSymbol: {
    type: String,
    default: "..."
  },
  fontSize: {
    type: Number,
    default: 12
  },
  overlayColor: {
    type: String,
    default: "#fff"
  }
};
const _hoisted_1$7 = { class: "zsui-ellipsis-text__foldAction" };
const _hoisted_2$5 = {
  key: 1,
  class: "zsui-ellipsis-text__unfold"
};
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: expandableTextPropsDef,
  setup(__props) {
    vue.useCssVars((_ctx) => ({
      "4ffb5711": beforeStyle.value,
      "2114aba7": boxShadowStyle.value
    }));
    const lineHeightMap = {
      12: 20,
      14: 22
    };
    const props = __props;
    const lineHeight = vue.computed(() => lineHeightMap[props.fontSize]);
    const hasOverflowChildren = vue.ref(false);
    const isFold = vue.ref(true);
    const targetRef = vue.ref(null);
    const containerStyle = vue.computed(() => ({
      fontSize: `${props.fontSize}px`,
      lineHeight: `${lineHeight.value}px`
    }));
    const foldStyle = vue.computed(() => ({
      maxHeight: `${lineHeight.value * props.lineClamp}px`
    }));
    const foldWrapStyle = vue.computed(() => ({
      lineHeight: `${lineHeight.value}px`
    }));
    const foldButtonStyle = vue.computed(() => ({
      fontSize: `${props.fontSize}px`,
      lineHeight: `${lineHeight.value}px`,
      height: `${lineHeight.value}px`
    }));
    const beforeStyle = vue.computed(() => `calc(100% - ${lineHeight.value}px)`);
    const boxShadowStyle = vue.computed(
      () => `inset calc(100px - 999vw) calc(${lineHeight.value} - 999vw) 0 0 ${props.overlayColor}`
    );
    ({
      fontSize: `${props.fontSize}px`,
      lineHeight: `${lineHeight.value}px`,
      maxHeight: `${lineHeight.value * props.lineClamp}px`,
      foldBtnLH: `${lineHeight.value - 4}px`
    });
    const update = () => {
      if (!targetRef.value)
        return;
      setTimeout(() => {
        hasOverflowChildren.value = Boolean(targetRef.value) && targetRef.value.offsetHeight / lineHeight.value > props.lineClamp;
      }, 0);
    };
    vue.onMounted(() => {
      update();
    });
    vue.watch(
      () => [props.lineClamp, props.fontSize],
      () => {
        hasOverflowChildren.value = false;
        update();
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "zsui-ellipsis-text--expandable",
        style: vue.normalizeStyle(containerStyle.value)
      }, [
        hasOverflowChildren.value ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          isFold.value ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "zsui-ellipsis-text__fold",
            style: vue.normalizeStyle(foldStyle.value)
          }, [
            vue.createElementVNode("div", {
              class: "zsui-ellipsis-text__foldWrap",
              style: vue.normalizeStyle(foldWrapStyle.value)
            }, [
              vue.createElementVNode("span", _hoisted_1$7, [
                vue.createTextVNode(vue.toDisplayString(_ctx.ellipsisSymbol) + " ", 1),
                vue.createVNode(_sfc_main$h, {
                  size: "small",
                  type: "primary",
                  class: "zsui-ellipsis-text__foldButton",
                  style: vue.normalizeStyle(foldButtonStyle.value),
                  onClick: _cache[0] || (_cache[0] = ($event) => isFold.value = false)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("展开")
                  ]),
                  _: 1
                }, 8, ["style"])
              ]),
              vue.renderSlot(_ctx.$slots, "default")
            ], 4)
          ], 4)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$5, [
            vue.renderSlot(_ctx.$slots, "default"),
            vue.createVNode(_sfc_main$h, {
              size: "small",
              type: "primary",
              class: "zsui-ellipsis-text__foldButton",
              style: vue.normalizeStyle(foldButtonStyle.value),
              onClick: _cache[1] || (_cache[1] = ($event) => isFold.value = true)
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("收起")
              ]),
              _: 1
            }, 8, ["style"])
          ]))
        ], 64)) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          ref_key: "targetRef",
          ref: targetRef
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512))
      ], 4);
    };
  }
});
const tipTextPropsDef = {
  lineClamp: {
    type: Number,
    default: 1
  },
  title: String,
  disabled: Boolean
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: tipTextPropsDef,
  setup(__props) {
    const props = __props;
    const hasOverflowChildren = vue.ref(false);
    const containerStyle = vue.computed(() => ({
      lineClamp: props.lineClamp || 1
    }));
    const targetRef = vue.ref(null);
    const handleUpdateOverflow = () => {
      const el = targetRef.value;
      if (!el) {
        return;
      }
      if (!hasOverflowChildren.value && el.scrollHeight > el.clientHeight) {
        hasOverflowChildren.value = true;
      } else {
        hasOverflowChildren.value = false;
      }
    };
    vue.onMounted(() => {
      handleUpdateOverflow();
    });
    vue.watch(
      () => [props.lineClamp],
      async () => {
        hasOverflowChildren.value = false;
        await vue.nextTick();
        handleUpdateOverflow();
      }
    );
    return (_ctx, _cache) => {
      return hasOverflowChildren.value ? (vue.openBlock(), vue.createBlock(vue.unref(antDesignVue.Tooltip), {
        key: 0,
        title: _ctx.title,
        "destroy-tooltip-on-hide": ""
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            style: vue.normalizeStyle(containerStyle.value),
            class: "zsui-ellipsis-text--tip"
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 4)
        ]),
        _: 3
      }, 8, ["title"])) : (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        ref_key: "targetRef",
        ref: targetRef,
        style: vue.normalizeStyle(containerStyle.value),
        class: "zsui-ellipsis-text--tip"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4));
    };
  }
});
const propsDef$4 = {
  ...expandableTextPropsDef,
  ...tipTextPropsDef,
  expandable: Boolean
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: propsDef$4,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.expandable ? (vue.openBlock(), vue.createBlock(_sfc_main$g, vue.normalizeProps(vue.mergeProps({ key: 0 }, _ctx.$props)), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : (vue.openBlock(), vue.createBlock(_sfc_main$f, vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$props)), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16));
    };
  }
});
function hex2rgb$1(hex) {
  let color = hex;
  color = color.replace(/ |#/g, "");
  if (color.length === 3) {
    color = color.replace(/(.)/g, "$1$1");
  }
  color = color.match(/../g) || [];
  return [
    parseInt(color[0], 16),
    parseInt(color[1], 16),
    parseInt(color[2], 16)
  ].join(",");
}
const colors$1 = ["#1e80ff", "#0fbf60", "#ff8b07", "#10C3A9"];
const nameToColor$1 = (name = "") => {
  if (!name) {
    return "rgb(208, 211, 214)";
  }
  const index = parseInt(String(name.charCodeAt(name.length - 1)), 10) % colors$1.length;
  const hexColor = colors$1[index];
  const rgbColor = hex2rgb$1(`${hexColor}`);
  const startColor = `rgba(${rgbColor}, 0.6)`;
  const endColor = `rgba(${rgbColor}, 1)`;
  return `radial-gradient(circle at 18.7% 37.8%, ${startColor} 0%, ${endColor} 90%)`;
};
var SizeEnum$1 = /* @__PURE__ */ ((SizeEnum2) => {
  SizeEnum2["SMALL"] = "small";
  SizeEnum2["DEFAULT"] = "default";
  SizeEnum2["XLARGE"] = "xlarge";
  return SizeEnum2;
})(SizeEnum$1 || {});
const propsDef$3 = {
  username: String,
  showText: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: SizeEnum$1.DEFAULT
  }
};
const _hoisted_1$6 = { class: "zsui-user" };
const _hoisted_2$4 = { class: "zsui-user__name" };
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: propsDef$3,
  setup(__props) {
    const props = __props;
    const avatarSizeMap = {
      [SizeEnum$1.SMALL]: 20,
      [SizeEnum$1.DEFAULT]: 24,
      [SizeEnum$1.XLARGE]: 80
    };
    const fontSizeMap = {
      [SizeEnum$1.SMALL]: 12,
      [SizeEnum$1.DEFAULT]: 14,
      [SizeEnum$1.XLARGE]: 24
    };
    const slicedName = vue.computed(() => {
      var _a;
      return (_a = props.username) == null ? void 0 : _a.slice(-2);
    });
    const avatarSize = vue.computed(() => avatarSizeMap[props.size]);
    const textStyle = vue.computed(() => ({
      fontSize: `${fontSizeMap[props.size]}px`,
      lineHeight: `${avatarSizeMap[props.size]}px`
    }));
    const avatarStyle = vue.computed(() => ({
      fontSize: `${fontSizeMap[props.size]}px`,
      background: nameToColor$1(props.username)
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", _hoisted_1$6, [
        vue.createVNode(vue.unref(antDesignVue.Avatar), {
          size: avatarSize.value,
          class: "zsui-user__avatar",
          style: vue.normalizeStyle(avatarStyle.value)
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(slicedName.value), 1)
          ]),
          _: 1
        }, 8, ["size", "style"]),
        _ctx.showText ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "zsui-user__namewrap",
          style: vue.normalizeStyle(textStyle.value)
        }, [
          vue.createElementVNode("span", _hoisted_2$4, vue.toDisplayString(_ctx.username), 1)
        ], 4)) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
function hex2rgb(hex) {
  let color = hex;
  color = color.replace(/ |#/g, "");
  if (color.length === 3) {
    color = color.replace(/(.)/g, "$1$1");
  }
  color = color.match(/../g) || [];
  return [
    parseInt(color[0], 16),
    parseInt(color[1], 16),
    parseInt(color[2], 16)
  ].join(",");
}
const colors = ["#1e80ff", "#0fbf60", "#ff8b07", "#10C3A9", "#FFCD2A", "#9747FF", "#13AD5C", "#F34821"];
const nameToColor = (name = "") => {
  if (!name) {
    return "rgb(208, 211, 214)";
  }
  const index = parseInt(String(name.charCodeAt(name.length - 1)), 10) % colors.length;
  const hexColor = colors[index];
  const rgbColor = hex2rgb(`${hexColor}`);
  const startColor = `rgba(${rgbColor}, 0.6)`;
  const midColor = `rgba(${rgbColor}, 0.8)`;
  const endColor = `rgba(${rgbColor}, 1)`;
  return `conic-gradient(from 210deg, ${startColor} 0deg, ${midColor} 180deg, ${endColor} 360deg)`;
};
const pinyinMap = {
  // A
  "阿": "A",
  "艾": "A",
  "安": "A",
  "敖": "A",
  // B  
  "白": "B",
  "包": "B",
  "鲍": "B",
  "毕": "B",
  "边": "B",
  "卞": "B",
  "班": "B",
  "贝": "B",
  "薄": "B",
  "卜": "B",
  // C
  "蔡": "C",
  "曹": "C",
  "陈": "C",
  "程": "C",
  "崔": "C",
  "常": "C",
  "车": "C",
  "成": "C",
  "池": "C",
  "仇": "C",
  "褚": "C",
  // D
  "戴": "D",
  "邓": "D",
  "丁": "D",
  "董": "D",
  "杜": "D",
  "段": "D",
  "窦": "D",
  "狄": "D",
  "刁": "D",
  "东": "D",
  // E
  "鄂": "E",
  // F
  "范": "F",
  "方": "F",
  "费": "F",
  "冯": "F",
  "符": "F",
  "傅": "F",
  "樊": "F",
  "房": "F",
  "封": "F",
  "丰": "F",
  // G
  "高": "G",
  "葛": "G",
  "龚": "G",
  "古": "G",
  "关": "G",
  "郭": "G",
  "顾": "G",
  "谷": "G",
  "管": "G",
  "国": "G",
  // H
  "韩": "H",
  "何": "H",
  "贺": "H",
  "洪": "H",
  "侯": "H",
  "胡": "H",
  "华": "H",
  "黄": "H",
  "霍": "H",
  "花": "H",
  "惠": "H",
  "和": "H",
  "桓": "H",
  "扈": "H",
  "哈": "H",
  // I
  // J
  "贾": "J",
  "江": "J",
  "姜": "J",
  "蒋": "J",
  "金": "J",
  "纪": "J",
  "季": "J",
  "计": "J",
  "简": "J",
  "焦": "J",
  "解": "J",
  "井": "J",
  "景": "J",
  "鞠": "J",
  // K
  "康": "K",
  "柯": "K",
  "孔": "K",
  "空": "K",
  "寇": "K",
  // L
  "赖": "L",
  "李": "L",
  "梁": "L",
  "廖": "L",
  "林": "L",
  "刘": "L",
  "龙": "L",
  "卢": "L",
  "陆": "L",
  "罗": "L",
  "路": "L",
  "骆": "L",
  "蓝": "L",
  "雷": "L",
  "黎": "L",
  "厉": "L",
  "连": "L",
  "廉": "L",
  "凌": "L",
  "柳": "L",
  "娄": "L",
  "鲁": "L",
  "栾": "L",
  "乐": "L",
  "吕": "L",
  // M
  "马": "M",
  "毛": "M",
  "梅": "M",
  "孟": "M",
  "莫": "M",
  "米": "M",
  "闵": "M",
  "明": "M",
  "缪": "M",
  "苗": "M",
  "牧": "M",
  "慕": "M",
  // N
  "倪": "N",
  "聂": "N",
  "牛": "N",
  "年": "N",
  "宁": "N",
  "钮": "N",
  // O
  "欧": "O",
  "欧阳": "O",
  // P
  "潘": "P",
  "彭": "P",
  "蒲": "P",
  "皮": "P",
  "平": "P",
  "浦": "P",
  // Q
  "齐": "Q",
  "钱": "Q",
  "强": "Q",
  "秦": "Q",
  "邱": "Q",
  "戚": "Q",
  "祁": "Q",
  "屈": "Q",
  "全": "Q",
  "权": "Q",
  // R
  "饶": "R",
  "任": "R",
  "冉": "R",
  "戎": "R",
  "容": "R",
  "茹": "R",
  "阮": "R",
  // S
  "沈": "S",
  "盛": "S",
  "石": "S",
  "宋": "S",
  "苏": "S",
  "孙": "S",
  "司": "S",
  "松": "S",
  "索": "S",
  "沙": "S",
  "山": "S",
  "商": "S",
  "尚": "S",
  "韶": "S",
  "申": "S",
  "慎": "S",
  "师": "S",
  "时": "S",
  "史": "S",
  "舒": "S",
  "水": "S",
  "宿": "S",
  "施": "S",
  // T
  "谭": "T",
  "汤": "T",
  "唐": "T",
  "陶": "T",
  "田": "T",
  "童": "T",
  "涂": "T",
  "谈": "T",
  "滕": "T",
  "铁": "T",
  "通": "T",
  "佟": "T",
  // U
  // V
  // W
  "王": "W",
  "魏": "W",
  "吴": "W",
  "伍": "W",
  "武": "W",
  "万": "W",
  "汪": "W",
  "韦": "W",
  "卫": "W",
  "文": "W",
  "闻": "W",
  "翁": "W",
  "巫": "W",
  "乌": "W",
  "邬": "W",
  "毋": "W",
  // X
  "夏": "X",
  "萧": "X",
  "谢": "X",
  "徐": "X",
  "许": "X",
  "薛": "X",
  "席": "X",
  "习": "X",
  "奚": "X",
  "郗": "X",
  "郤": "X",
  "咸": "X",
  "相": "X",
  "向": "X",
  "项": "X",
  "肖": "X",
  "辛": "X",
  "邢": "X",
  "幸": "X",
  "熊": "X",
  "修": "X",
  "须": "X",
  "宣": "X",
  "荀": "X",
  // Y
  "杨": "Y",
  "姚": "Y",
  "叶": "Y",
  "易": "Y",
  "尹": "Y",
  "余": "Y",
  "袁": "Y",
  "岳": "Y",
  "严": "Y",
  "颜": "Y",
  "燕": "Y",
  "羊": "Y",
  "阳": "Y",
  "养": "Y",
  "要": "Y",
  "伊": "Y",
  "衣": "Y",
  "依": "Y",
  "仪": "Y",
  "夷": "Y",
  "宜": "Y",
  "乙": "Y",
  "义": "Y",
  "益": "Y",
  "阴": "Y",
  "殷": "Y",
  "印": "Y",
  "应": "Y",
  "英": "Y",
  "营": "Y",
  "雍": "Y",
  "永": "Y",
  "尤": "Y",
  "游": "Y",
  "於": "Y",
  "于": "Y",
  "鱼": "Y",
  "俞": "Y",
  "虞": "Y",
  "禹": "Y",
  "玉": "Y",
  "郁": "Y",
  "元": "Y",
  "原": "Y",
  "云": "Y",
  // Z
  "曾": "Z",
  "詹": "Z",
  "张": "Z",
  "章": "Z",
  "赵": "Z",
  "郑": "Z",
  "钟": "Z",
  "周": "Z",
  "朱": "Z",
  "祝": "Z",
  "邹": "Z",
  "左": "Z",
  "臧": "Z",
  "湛": "Z",
  "长孙": "Z",
  "甄": "Z",
  "支": "Z",
  "知": "Z",
  "直": "Z",
  "植": "Z",
  "止": "Z",
  "只": "Z",
  "志": "Z",
  "制": "Z",
  "治": "Z",
  "智": "Z",
  "中": "Z",
  "仲": "Z",
  "重": "Z",
  "诸": "Z",
  "庄": "Z",
  "卓": "Z",
  "宗": "Z",
  "祖": "Z",
  "佐": "Z",
  "作": "Z"
};
const getChineseNameInitial = (name = "") => {
  if (!name) return "";
  const firstChar = name.charAt(0);
  if (/[a-zA-Z]/.test(firstChar)) {
    return firstChar.toUpperCase();
  }
  if (pinyinMap[firstChar]) {
    return pinyinMap[firstChar];
  }
  return firstChar;
};
var SizeEnum = /* @__PURE__ */ ((SizeEnum2) => {
  SizeEnum2["SMALL"] = "small";
  SizeEnum2["DEFAULT"] = "default";
  SizeEnum2["XLARGE"] = "xlarge";
  return SizeEnum2;
})(SizeEnum || {});
const propsDef$2 = {
  username: String,
  showText: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: SizeEnum.DEFAULT
  }
};
const _hoisted_1$5 = { class: "zsui-user" };
const _hoisted_2$3 = { class: "zsui-user__name" };
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: propsDef$2,
  setup(__props) {
    const props = __props;
    const avatarSizeMap = {
      [SizeEnum.SMALL]: 20,
      [SizeEnum.DEFAULT]: 24,
      [SizeEnum.XLARGE]: 80
    };
    const fontSizeMap = {
      [SizeEnum.SMALL]: 12,
      [SizeEnum.DEFAULT]: 14,
      [SizeEnum.XLARGE]: 24
    };
    const slicedName = vue.computed(() => getChineseNameInitial(props.username));
    const avatarSize = vue.computed(() => avatarSizeMap[props.size]);
    const textStyle = vue.computed(() => ({
      fontSize: `${fontSizeMap[props.size]}px`,
      lineHeight: `${avatarSizeMap[props.size]}px`
    }));
    const avatarStyle = vue.computed(() => ({
      fontSize: `12px`,
      background: nameToColor(props.username)
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", _hoisted_1$5, [
        vue.createVNode(vue.unref(antDesignVue.Avatar), {
          size: avatarSize.value,
          class: "zsui-user__avatar",
          style: vue.normalizeStyle(avatarStyle.value)
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(slicedName.value), 1)
          ]),
          _: 1
        }, 8, ["size", "style"]),
        _ctx.showText ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "zsui-user__namewrap",
          style: vue.normalizeStyle(textStyle.value)
        }, [
          vue.createElementVNode("span", _hoisted_2$3, vue.toDisplayString(_ctx.username), 1)
        ], 4)) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
const propsDef$1 = {
  color: {
    type: String,
    default: "neutral"
  },
  size: {
    type: String,
    default: "default"
  }
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: propsDef$1,
  setup(__props) {
    const props = __props;
    const colorMap = {
      neutral: {
        color: "#646a73",
        background: "#1f23291a"
      },
      blue: {
        color: "#245bdb",
        background: "#3370ff33"
      },
      red: {
        color: "#d83931",
        background: "#f54a4533"
      },
      green: {
        color: "#237b19",
        background: "#34c72433"
      },
      orange: {
        color: "#b26206",
        background: "#f803"
      }
    };
    const customStyle = vue.computed(() => colorMap[props.color] || colorMap.neutral);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["zsui-tag", `zsui-tag--${_ctx.size}`]),
        style: vue.normalizeStyle(customStyle.value)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const _imports_0 = "data:image/png;base64,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";
const propsDef = {
  username: String,
  width: {
    type: String,
    default: "320px"
  },
  height: {
    type: String,
    default: "520px"
  }
};
const _hoisted_1$4 = /* @__PURE__ */ vue.createElementVNode("div", { class: "zsui-profile-headerBg" }, null, -1);
const _hoisted_2$2 = { class: "zsui-profile-base" };
const _hoisted_3$2 = { class: "zsui-profile-avatar" };
const _hoisted_4$2 = {
  key: 0,
  class: "zsui-profile-username"
};
const _hoisted_5$2 = { class: "zsui-profile-shrinkHeaderBg" };
const _hoisted_6$2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "zsui-profile-shrinkHeaderMask" }, null, -1);
const _hoisted_7$1 = { class: "zsui-profile-shrinkHeader-avatar" };
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: propsDef,
  setup(__props) {
    const isShrink = vue.ref(false);
    const scrollRef = vue.ref(null);
    const headerRef = vue.ref(null);
    const bodyRef = vue.ref(null);
    const handleMouseWheel = (e2) => {
      if (!headerRef.value || !scrollRef.value) {
        return;
      }
      const headerHeight = headerRef.value.clientHeight;
      if (e2.wheelDelta > 0) {
        if (isShrink.value) {
          scrollRef.value.style.marginTop = "0";
          isShrink.value = false;
        }
      } else {
        if (!isShrink.value) {
          scrollRef.value.style.marginTop = `-${headerHeight - 48}px`;
          isShrink.value = true;
        }
      }
    };
    const shrinkHeaderStyle = vue.computed(() => ({
      opacity: isShrink.value ? "1" : 0,
      background: isShrink.value ? "#fff" : "#0000"
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(antDesignVue.Popover), {
        overlayClassName: "zsui-profile-popover",
        trigger: "click"
      }, {
        content: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: "zsui-profile",
            onMousewheel: handleMouseWheel,
            style: vue.normalizeStyle({ width: _ctx.width, height: _ctx.height })
          }, [
            vue.createElementVNode("div", {
              ref_key: "scrollRef",
              ref: scrollRef,
              class: "zsui-profile-scroll"
            }, [
              vue.createElementVNode("div", {
                class: "zsui-profile-header",
                ref_key: "headerRef",
                ref: headerRef
              }, [
                _hoisted_1$4,
                vue.createElementVNode("div", _hoisted_2$2, [
                  vue.createElementVNode("div", _hoisted_3$2, [
                    vue.createVNode(_sfc_main$d, {
                      showText: false,
                      username: _ctx.username,
                      size: vue.unref(SizeEnum$1).XLARGE
                    }, null, 8, ["username", "size"])
                  ]),
                  vue.renderSlot(_ctx.$slots, "header"),
                  !_ctx.$slots.header ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$2, vue.toDisplayString(_ctx.username), 1)) : vue.createCommentVNode("", true)
                ])
              ], 512),
              vue.createElementVNode("div", {
                class: "zsui-profile-shrinkHeader",
                style: vue.normalizeStyle(shrinkHeaderStyle.value)
              }, [
                vue.createElementVNode("div", _hoisted_5$2, [
                  vue.createElementVNode("img", {
                    src: _imports_0,
                    style: vue.normalizeStyle({ width: _ctx.width })
                  }, null, 4),
                  _hoisted_6$2
                ]),
                vue.createElementVNode("div", _hoisted_7$1, [
                  vue.createVNode(_sfc_main$d, { username: _ctx.username }, null, 8, ["username"])
                ])
              ], 4),
              vue.createElementVNode("div", {
                class: "zsui-profile-body",
                ref_key: "bodyRef",
                ref: bodyRef
              }, [
                vue.renderSlot(_ctx.$slots, "profile")
              ], 512)
            ], 512)
          ], 36)
        ]),
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "user")
        ]),
        _: 3
      });
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(antDesignVue.Alert), vue.mergeProps({ class: "zsui-alert" }, _ctx.$attrs), vue.createSlots({ _: 2 }, [
        vue.renderList(_ctx.$slots, (item, key) => {
          return {
            name: key,
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, key)
            ])
          };
        })
      ]), 1040);
    };
  }
});
const v = "5.0.1";
const fr = 10;
const ip = 0;
const op = 20;
const w = 800;
const h = 600;
const ddd = 0;
const assets = [];
const layers = [
  {
    ind: 3,
    nm: "Layer 3",
    ks: {
      p: {
        a: 1,
        k: [
          {
            t: 0,
            s: [
              456.419,
              423.252,
              0
            ],
            to: [
              -161.825,
              -53.536,
              0
            ],
            ti: [
              -62.867,
              94.219,
              0
            ],
            i: {
              x: [
                0.15
              ],
              y: [
                0.86
              ]
            },
            o: {
              x: [
                0.785
              ],
              y: [
                0.135
              ]
            },
            e: [
              371.703,
              167.513,
              0
            ]
          },
          {
            t: 10,
            s: [
              371.703,
              167.513,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ],
            i: {
              x: [
                0.15
              ],
              y: [
                0.86
              ]
            },
            o: {
              x: [
                0.785
              ],
              y: [
                0.135
              ]
            },
            e: [
              456.419,
              423.252,
              0
            ]
          },
          {
            t: 20,
            s: [
              456.419,
              423.252,
              0
            ]
          }
        ]
      },
      a: {
        a: 0,
        k: [
          -24.5,
          -24.5,
          0
        ]
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ]
      },
      r: {
        a: 0,
        k: -43.065
      },
      o: {
        a: 0,
        k: 100
      }
    },
    ao: 0,
    ip: 0,
    op: 20,
    st: 0,
    bm: 3,
    sr: 1,
    ty: 4,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: {
              a: 0,
              k: [
                210.919,
                210.919
              ]
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ]
            }
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0,
                0.698,
                1,
                1
              ]
            },
            hd: false,
            o: {
              a: 0,
              k: 100
            },
            r: 1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ]
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ]
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ]
            },
            r: {
              a: 0,
              k: 0
            },
            o: {
              a: 0,
              k: 100
            },
            sk: {
              a: 0,
              k: 0
            },
            sa: {
              a: 0,
              k: 0
            }
          }
        ],
        nm: "Object",
        hd: false
      }
    ]
  },
  {
    ind: 2,
    nm: "Layer 2",
    ks: {
      p: {
        a: 1,
        k: [
          {
            t: 0,
            s: [
              361.777,
              165.918,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ],
            i: {
              x: [
                0.15
              ],
              y: [
                0.86
              ]
            },
            o: {
              x: [
                0.785
              ],
              y: [
                0.135
              ]
            },
            e: [
              214.784,
              406.838,
              0
            ]
          },
          {
            t: 10,
            s: [
              214.784,
              406.838,
              0
            ],
            to: [
              -83.035,
              -34.503,
              0
            ],
            ti: [
              0,
              0,
              0
            ],
            i: {
              x: [
                0.15
              ],
              y: [
                0.86
              ]
            },
            o: {
              x: [
                0.785
              ],
              y: [
                0.135
              ]
            },
            e: [
              361.777,
              165.918,
              0
            ]
          },
          {
            t: 20,
            s: [
              361.777,
              165.918,
              0
            ]
          }
        ]
      },
      a: {
        a: 0,
        k: [
          -66.5,
          -66.5,
          0
        ]
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ]
      },
      r: {
        a: 0,
        k: -43.065
      },
      o: {
        a: 0,
        k: 100
      }
    },
    ao: 0,
    ip: 0,
    op: 20,
    st: 0,
    bm: 3,
    sr: 1,
    ty: 4,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: {
              a: 0,
              k: [
                236,
                236
              ]
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ]
            }
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.012,
                0,
                0.38,
                1
              ]
            },
            hd: false,
            o: {
              a: 0,
              k: 100
            },
            r: 1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ]
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ]
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ]
            },
            r: {
              a: 0,
              k: 0
            },
            o: {
              a: 0,
              k: 100
            },
            sk: {
              a: 0,
              k: 0
            },
            sa: {
              a: 0,
              k: 0
            }
          }
        ],
        nm: "Object",
        hd: false
      }
    ]
  },
  {
    ind: 1,
    nm: "Layer 1",
    ks: {
      p: {
        a: 1,
        k: [
          {
            t: 0,
            s: [
              263.776,
              342.564,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ],
            i: {
              x: [
                0.15
              ],
              y: [
                0.86
              ]
            },
            o: {
              x: [
                0.785
              ],
              y: [
                0.135
              ]
            },
            e: [
              545.716,
              355.446,
              0
            ]
          },
          {
            t: 10,
            s: [
              545.716,
              355.446,
              0
            ],
            to: [
              -7.345,
              74.699,
              0
            ],
            ti: [
              0,
              0,
              0
            ],
            i: {
              x: [
                0.15
              ],
              y: [
                0.86
              ]
            },
            o: {
              x: [
                0.785
              ],
              y: [
                0.135
              ]
            },
            e: [
              263.776,
              342.564,
              0
            ]
          },
          {
            t: 20,
            s: [
              263.776,
              342.564,
              0
            ]
          }
        ]
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ]
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ]
      },
      r: {
        a: 0,
        k: -43.065
      },
      o: {
        a: 0,
        k: 100
      }
    },
    ao: 0,
    ip: 0,
    op: 20,
    st: 0,
    bm: 3,
    sr: 1,
    ty: 4,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: {
              a: 0,
              k: [
                150.135,
                150.135
              ]
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ]
            }
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.298,
                0.255,
                0.714,
                1
              ]
            },
            hd: false,
            o: {
              a: 0,
              k: 100
            },
            r: 1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ]
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ]
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ]
            },
            r: {
              a: 0,
              k: 0
            },
            o: {
              a: 0,
              k: 100
            },
            sk: {
              a: 0,
              k: 0
            },
            sa: {
              a: 0,
              k: 0
            }
          }
        ],
        nm: "Object",
        hd: false
      }
    ]
  }
];
const markers = [];
const LoadingJSON = {
  v,
  fr,
  ip,
  op,
  w,
  h,
  ddd,
  assets,
  layers,
  markers
};
const _hoisted_1$3 = { class: "zsui-loading" };
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
        vue.createVNode(vue.unref(lottieWebVue.LottieAnimation), {
          "animation-data": vue.unref(LoadingJSON),
          "auto-play": true,
          loop: true,
          speed: 1,
          ref: "anim"
        }, null, 8, ["animation-data"])
      ]);
    };
  }
});
if (globalThis) {
  globalThis._iconfont_svg_string_4599145 = '<svg><symbol id="icon-icon_file-zip_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#3370FF" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#245BDB" opacity=".7" ></path><path d="M658.304 405.333333c13.44 0 24.362667 10.752 24.362667 24.021334v335.957333c0 13.269333-10.922667 24.021333-24.362667 24.021333H365.653333A24.192 24.192 0 0 1 341.333333 765.312v-336c0-13.226667 10.922667-23.978667 24.362667-23.978667h292.608z m-97.536 264.021334h-97.536v83.968h97.536v-83.968z m-24.405333 23.978666v27.733334H487.68v-27.733334h48.725333z m25.514666-192H512v48h-48.768V597.333333H512v48h49.92V597.333333h-48.810667v-48h48.768V501.333333zM512 453.333333h-48.768v48H512v-48z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-pdf_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.151111 12.515555l231.025778 230.968889a42.666667 42.666667 0 0 1 12.487111 30.179556V896a85.333333 85.333333 0 0 1-85.333333 85.333333h-597.333334a85.333333 85.333333 0 0 1-85.333333-85.333333v-768z" fill="#F54A45" ></path><path d="M640 56.405333a5.688889 5.688889 0 0 1 9.699556-4.039111l236.600888 236.600889a5.688889 5.688889 0 0 1-4.039111 9.699556H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V56.405333z" fill="#D83931" ></path><path d="M748.828444 663.523556c-10.581333-12.401778-32.284444-18.432-66.360888-18.432-19.825778 0-47.104 0.483556-74.524445 4.551111-74.922667-53.987556-92.472889-112.014222-92.472889-112.014223s12.8-32.113778 13.596445-84.565333c0.512-33.137778-4.750222-57.884444-18.147556-68.494222-5.688889-4.551111-13.994667-8.334222-22.357333-8.334222-6.513778 0-12.600889 1.905778-17.607111 5.489777-38.940444 28.103111 3.584 160.568889 4.721777 164.096a1177.486222 1177.486222 0 0 1-65.365333 133.347556c-7.736889 13.482667-7.736889 13.738667-12.942222 19.854222 0 0-68.152889 33.820444-100.124445 71.310222-18.062222 21.162667-18.659556 35.697778-17.692444 46.620445 1.536 13.084444 18.204444 24.746667 34.986667 24.746667 0.682667 0 1.393778 0 2.076444-0.056889 17.066667-1.052444 36.010667-5.745778 57.116445-25.685334 15.274667-14.449778 32.426667-53.703111 54.528-92.103111 63.345778-17.749333 119.096889-30.435556 165.831111-37.632 34.275556 18.204444 85.248 38.769778 119.950222 38.769778 11.662222 0 21.020444-2.332444 27.847111-6.940444 8.163556-5.546667 11.633778-12.401778 13.795556-25.144889 2.133333-12.743111-0.853333-22.385778-6.826667-29.383111z m-74.467555 19.911111c31.630222 0 48.782222 5.603556 57.571555 10.268444 2.702222 1.450667 4.693333 2.844444 6.087112 3.982222-2.474667 1.962667-7.367111 4.380444-16.184889 4.380445-14.620444 0-33.792-6.200889-57.173334-18.460445 3.299556-0.113778 6.542222-0.170667 9.671111-0.170666z m-181.731556-279.125334l0.056889-0.142222c4.949333 3.640889 7.253333 29.184 6.769778 44.003556-0.597333 19.911111-0.768 27.591111-3.242667 39.793777-6.769778-25.486222-7.253333-71.253333-3.584-83.655111z m1.564445 186.026667c15.416889 25.429333 34.986667 51.2 57.059555 70.826667-43.064889 9.244444-78.791111 17.692444-104.504889 26.709333a795.875556 795.875556 0 0 0 47.445334-97.507556z m-173.795556 215.381333c3.896889-5.745778 14.535111-16.924444 41.528889-38.485333-14.506667 33.336889-30.72 38.513778-45.852444 46.535111 1.137778-2.645333 2.56-5.404444 4.323555-8.049778z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-video_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#3370FF" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#245BDB" opacity=".7" ></path><path d="M298.666667 458.666667a32 32 0 0 1 32-32H554.666667a32 32 0 0 1 32 32v37.973333l48.298666-27.136a32 32 0 0 1 47.701334 27.861333v146.602667a32 32 0 0 1-47.701334 27.861333l-48.298666-27.178666V682.666667a32 32 0 0 1-32 32H330.666667A32 32 0 0 1 298.666667 682.666667v-224zM394.666667 554.666667a32 32 0 1 0 0-64 32 32 0 0 0 0 64z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-text_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#3370FF" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#245BDB" opacity=".7" ></path><path d="M535.296 457.685333v320a5.802667 5.802667 0 0 1-5.845333 5.802667h-34.901334a5.802667 5.802667 0 0 1-5.802666-5.802667v-320h-145.493334a5.802667 5.802667 0 0 1-5.802666-5.802666v-34.901334c0-3.242667 2.602667-5.845333 5.845333-5.845333h337.450667c3.2 0 5.802667 2.602667 5.802666 5.845333v34.901334a5.802667 5.802667 0 0 1-5.802666 5.802666h-145.493334z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-image_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#FFC60A" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#DC9B04" opacity=".6" ></path><path d="M357.205333 426.666667a42.666667 42.666667 0 0 0-42.666666 42.666666v7.765334a42.666667 42.666667 0 0 0 42.666666 42.666666h7.722667a42.666667 42.666667 0 0 0 42.666667-42.666666V469.333333a42.666667 42.666667 0 0 0-42.666667-42.666666h-7.722667zM712.32 544.426667a25.6 25.6 0 0 1 44.373333 17.408V789.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H315.776a17.066667 17.066667 0 0 1-13.098667-28.032l124.842667-148.906667a42.666667 42.666667 0 0 1 65.365333 0l64.981334 77.482667 154.453333-166.826667z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-word_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#3370FF" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#245BDB" opacity=".7" ></path><path d="M512.170667 522.666667l-62.890667 232.789333a6.485333 6.485333 0 0 1-6.272 4.778667h-37.034667a6.485333 6.485333 0 0 1-6.229333-4.693334l-85.333333-301.226666a6.485333 6.485333 0 0 1 6.229333-8.234667h37.162667c2.986667 0 5.546667 1.962667 6.272 4.821333l60.714666 234.837334 63.061334-234.88a6.485333 6.485333 0 0 1 6.229333-4.778667h36.224c2.944 0 5.504 1.962667 6.272 4.778667l62.634667 234.794666 60.672-234.752a6.485333 6.485333 0 0 1 6.272-4.821333h37.162666a6.485333 6.485333 0 0 1 6.229334 8.234667l-85.333334 301.226666a6.485333 6.485333 0 0 1-6.186666 4.693334h-37.077334a6.485333 6.485333 0 0 1-6.229333-4.778667l-62.549333-232.832z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-ps_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#3370FF" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#245BDB" opacity=".7" ></path><path d="M358.485333 780.885333a9.514667 9.514667 0 0 1-9.301333 9.685334h-28.416a9.472 9.472 0 0 1-9.216-9.685334v-331.904c0-5.333333 4.096-9.685333 9.216-9.685333h110.549333c20.693333 0 37.845333 2.56 51.626667 7.808 14.165333 5.290667 25.472 12.757333 33.92 22.314667a81.066667 81.066667 0 0 1 17.706667 33.024c3.157333 11.861333 4.736 24.234667 4.736 37.12 0 19.84-3.84 36.437333-11.648 49.749333-7.68 13.056-17.664 23.424-29.866667 30.976a119.125333 119.125333 0 0 1-40.192 15.36 227.370667 227.370667 0 0 1-43.52 4.224H358.485333v141.013333z m56.448-186.538666c12.970667 0 24.533333-0.853333 34.730667-2.56 9.429333-1.621333 17.322667-4.522667 23.68-8.789334a39.68 39.68 0 0 0 13.952-16.426666c3.413333-7.125333 5.12-16.938667 5.12-29.226667 0-17.536-5.034667-30.250667-15.274667-38.869333-10.666667-9.002667-28.757333-13.653333-53.802666-13.653334h-64.853334v109.525334h56.448z m257.194667 168.832c-15.701333 0-27.434667-3.114667-35.2-9.173334-7.594667-5.888-12.629333-13.226667-15.786667-28.970666a8.874667 8.874667 0 0 0-8.618666-7.253334h-23.893334l-0.213333 0.042667a8.96 8.96 0 0 0-8.32 9.557333c0.554667 10.922667 2.432 17.792 6.442667 27.306667a77.056 77.056 0 0 0 43.52 42.24c10.197333 3.968 21.76 5.973333 34.688 5.973333 12.586667 0 24.192-1.365333 34.858666-4.053333a86.613333 86.613333 0 0 0 28.586667-12.714667 64 64 0 0 0 19.797333-22.016c4.864-8.96 7.338667-19.2 7.338667-30.634666 0-15.488-3.882667-27.946667-11.690667-37.12a76.8 76.8 0 0 0-26.88-20.138667 157.909333 157.909333 0 0 0-32.768-10.752 282.368 282.368 0 0 1-30.165333-7.978667c-7.68-2.688-17.066667-7.168-22.101333-13.184-5.034667-5.973333-5.034667-10.922667-5.034667-17.450666 0-7.936 2.688-13.952 8.362667-18.773334 6.058667-5.077333 15.445333-7.68 28.16-7.68 13.056 0 23.594667 2.773333 31.786666 8.277334 7.424 4.992 12.501333 15.36 14.250667 28.757333 0.128 0.981333 0.426667 1.92 0.853333 2.773333 1.408 3.029333 4.437333 5.12 7.893334 5.12h23.637333l1.066667-0.085333a9.045333 9.045333 0 0 0 7.68-10.154667c-3.157333-25.898667-13.098667-46.208-28.8-57.770666-15.104-11.136-34.474667-16.64-58.026667-16.64-24.533333 0-43.904 6.186667-57.856 18.773333-14.208 12.8-21.418667 29.44-21.418667 49.408 0 15.744 2.133333 29.013333 10.752 40.533333 8.618667 11.434667 19.072 18.218667 28.074667 22.570667 8.96 4.309333 21.077333 7.381333 32.768 9.514667 10.837333 1.92 20.864 4.266667 30.122667 6.954666 8.533333 2.517333 15.488 5.888 20.906666 10.112 4.053333 3.114667 5.973333 7.978667 5.973334 15.36a25.002667 25.002667 0 0 1-2.218667 10.496 27.989333 27.989333 0 0 1-6.912 9.216 35.413333 35.413333 0 0 1-12.330667 6.826667 59.818667 59.818667 0 0 1-19.285333 2.730667z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-audio_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#34C724" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#2EA121" opacity=".5" ></path><path d="M639.189333 412.16a21.333333 21.333333 0 0 1 16.341334 18.688l3.968 40.533333a21.333333 21.333333 0 0 1-25.813334 22.869334l-98.218666-21.632a8.533333 8.533333 0 0 0-10.325334 9.130666l22.954667 241.066667a15.786667 15.786667 0 0 1-1.28 7.594667 93.098667 93.098667 0 1 1-36.522667-77.866667l-21.589333-246.954667a21.333333 21.333333 0 0 1 26.154667-22.613333l124.330666 29.184z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-csv_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#34C724" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#2EA121" opacity=".5" ></path><path d="M515.285333 445.994667c38.485333 0 70.144 12.501333 94.890667 34.048 12.032 10.410667 22.442667 28.501333 29.866667 43.904 6.314667 13.226667-3.754667 27.562667-18.432 27.562666h-8.149334a23.04 23.04 0 0 1-19.029333-10.538666c-5.973333-8.96-15.104-21.333333-24.149333-27.733334-14.634667-10.794667-33.450667-16.469333-56.362667-16.469333-34.389333 0-60.032 13.013333-77.482667 38.485333-16 22.485333-25.898667 53.418667-25.898666 93.568 0 41.130667 9.898667 73.386667 25.472 95.36 16.938667 23.509333 43.52 37.845333 79.274666 37.845334a90.453333 90.453333 0 0 0 57.301334-20.181334c9.130667-7.765333 17.28-22.4 22.528-33.194666a23.125333 23.125333 0 0 1 20.522666-13.397334h9.557334c13.994667 0 23.978667 13.226667 18.986666 26.24-7.253333 18.773333-18.773333 43.008-34.005333 56.149334-27.264 23.466667-48.981333 32.810667-94.890667 34.005333-52.736 1.450667-94.848-19.882667-121.472-56.106667-23.338667-31.36-34.816-73.429333-34.816-126.293333 0-51.925333 11.946667-94.506667 36.224-126.805333 27.477333-37.205333 67.84-56.448 120.064-56.448z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-sheet_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#34C724" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#2EA121" opacity=".5" ></path><path d="M341.333333 384a42.666667 42.666667 0 0 0-42.666666 42.666667v341.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h341.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-341.333333a42.666667 42.666667 0 0 0-42.666666-42.666667H341.333333z m21.333334 64h74.666666V512H362.666667v-64z m138.666666 0h160V512h-160v-64z m-64 128v170.666667H362.666667v-170.666667h74.666666z m64 170.666667v-170.666667h160v170.666667h-160z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-unknow_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#8F959E" opacity=".9" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#646A73" opacity=".6" ></path><path d="M609.578667 420.864c-23.253333-22.058667-53.845333-32.981333-91.818667-32.981333-42.666667 0-76.16 13.653333-100.394667 41.557333-20.522667 23.978667-31.573333 46.933333-33.194666 83.114667l-0.085334 4.266666a10.581333 10.581333 0 0 0 10.624 10.666667h25.216a10.752 10.752 0 0 0 10.709334-10.581333c0-1.749333 0.085333-3.285333 0.128-4.096 1.237333-25.002667 7.722667-38.101333 19.370666-52.650667 14.72-19.626667 36.266667-29.226667 65.877334-29.226667 26.410667 0 46.208 6.741333 59.861333 20.394667 13.056 13.568 19.84 32.042667 19.84 55.253333 0 15.786667-5.717333 30.890667-17.408 45.866667-3.712 4.650667-9.045333 10.154667-26.282667 27.392-27.178667 23.765333-43.989333 43.136-52.906666 62.165333a108.8 108.8 0 0 0-11.008 48.981334v12.032c0 5.888 4.778667 10.666667 10.666666 10.666666h25.813334a10.666667 10.666667 0 0 0 10.666666-10.666666v-12.032c0-15.104 3.712-28.629333 11.434667-41.813334 5.76-9.813333 13.184-17.536 26.112-28.842666 25.898667-23.466667 40.234667-37.418667 46.677333-45.610667a112.554667 112.554667 0 0 0 23.381334-69.333333c0-35.285333-11.093333-63.573333-33.28-84.48z m-110.208 339.370667a10.666667 10.666667 0 0 0-10.666667 10.666666v25.216c0 5.888 4.778667 10.666667 10.666667 10.666667h25.216a10.666667 10.666667 0 0 0 10.666667-10.666667v-25.173333a10.666667 10.666667 0 0 0-10.666666-10.666667h-25.173334z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_file-ppt_colorful1" viewBox="0 0 1024 1024"><path d="M128 128a85.333333 85.333333 0 0 1 85.333333-85.333333h409.002667a42.666667 42.666667 0 0 1 30.165333 12.501333l230.997334 230.997333a42.666667 42.666667 0 0 1 12.501333 30.165334V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128z" fill="#FF8800" ></path><path d="M640 63.274667a8.533333 8.533333 0 0 1 14.549333-6.058667L881.493333 284.16a8.533333 8.533333 0 0 1-6.058666 14.549333H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V63.274667z" fill="#DE7802" opacity=".5" ></path><path d="M443.008 789.12V636.16h72.618667c17.450667 0 34.816-1.536 52.053333-4.608a148.650667 148.650667 0 0 0 47.36-16.469333c14.208-8.021333 25.813333-18.986667 34.730667-32.853334 9.045333-14.037333 13.482667-31.658667 13.482666-52.736 0-13.909333-1.877333-27.221333-5.632-39.978666a83.2 83.2 0 0 0-20.394666-34.773334c-9.813333-10.069333-22.954667-17.92-39.381334-23.552-16.256-5.589333-36.693333-8.362667-61.226666-8.362666H401.664a6.016 6.016 0 0 0-6.058667 6.016v360.32c0 3.328 2.730667 6.058667 6.058667 6.058666h35.328a6.016 6.016 0 0 0 5.973333-6.058666z m116.693333-197.205333a284.586667 284.586667 0 0 1-43.093333 2.944h-73.6v-130.816h83.882667c31.829333 0 54.698667 5.546667 68.608 16.213333 13.568 10.453333 20.394667 25.813333 20.394666 46.677333 0 14.464-2.304 25.941333-6.741333 34.517334-4.437333 8.533333-10.666667 15.146667-18.773333 20.053333-8.277333 5.077333-18.474667 8.533333-30.677334 10.410667z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_delete-trash_outlined" viewBox="0 0 1024 1024"><path d="M341.333333 170.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667h228.650666c9.514667 0 12.970667 0.981333 16.426667 2.858666a19.370667 19.370667 0 0 1 8.106667 8.064c1.834667 3.456 2.816 6.912 2.816 16.426667v30.634667c0 9.514667-0.981333 12.970667-2.858667 16.426666a19.370667 19.370667 0 0 1-8.064 8.106667c-3.456 1.834667-6.912 2.816-16.426667 2.816H853.333333v640a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V256H112.682667c-9.514667 0-12.970667-0.981333-16.426667-2.858667a19.370667 19.370667 0 0 1-8.106667-8.064C86.357333 241.621333 85.333333 238.165333 85.333333 228.693333v-30.634666c0-9.514667 0.981333-12.970667 2.858667-16.426667a19.370667 19.370667 0 0 1 8.064-8.106667C99.712 171.690667 103.168 170.666667 112.64 170.666667H341.333333zM256 256v597.333333h512V256H256z m149.333333 128h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v298.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-298.666667a21.333333 21.333333 0 0 1 21.333333-21.333333z m170.666667 0h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v298.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-298.666667a21.333333 21.333333 0 0 1 21.333333-21.333333z"  ></path></symbol><symbol id="icon-icon_download_outlined" viewBox="0 0 1024 1024"><path d="M896 789.333333V896a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-106.666667a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333333V853.333333h597.333334v-64a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333333z m-341.333333-190.464l128.426666-128.426666a21.333333 21.333333 0 0 1 30.208 0l30.165334 30.122666a21.333333 21.333333 0 0 1 0 30.208l-211.2 211.2a21.290667 21.290667 0 0 1-30.165334 0l-211.2-211.2a21.333333 21.333333 0 0 1 0-30.208l30.165334-30.165333a21.333333 21.333333 0 0 1 30.165333 0L469.333333 588.501333V128a21.333333 21.333333 0 0 1 21.333334-21.333333h42.666666a21.333333 21.333333 0 0 1 21.333334 21.333333v470.869333z"  ></path></symbol><symbol id="icon-icon_original_outlined" viewBox="0 0 1024 1024"><path d="M89.6 128h844.8c25.941333 0 46.933333 20.224 46.933333 45.184v677.632c0 24.96-20.992 45.184-46.933333 45.184H89.6c-25.941333 0-46.933333-20.224-46.933333-45.184V173.184C42.666667 148.224 63.658667 128 89.6 128zM128 213.333333v597.333334h768V213.333333H128z m341.333333 341.333334h85.333334v85.333333h-85.333334v-85.333333z m0-170.666667h85.333334v85.333333h-85.333334V384z m-256 58.88V389.632a21.333333 21.333333 0 0 1 10.88-18.56l47.829334-26.965333A21.333333 21.333333 0 0 1 282.496 341.333333H341.333333a21.333333 21.333333 0 0 1 21.333334 21.333334v298.666666a21.333333 21.333333 0 0 1-21.333334 21.333334H298.24a21.290667 21.290667 0 0 1-21.333333-21.333334V425.002667l-47.658667 27.136A10.666667 10.666667 0 0 1 213.333333 442.88z m42.666666 384a341.333333 341.333333 0 0 0 341.333334-341.333334 341.333333 341.333333 0 0 0-341.333334-341.333333 341.333333 341.333333 0 0 0-341.333333 341.333333 341.333333 341.333333 0 0 0 341.333333 341.333334z" fill="#FFFFFF" ></path></symbol><symbol id="icon-icon_rotate_outlined" viewBox="0 0 1024 1024"><path d="M533.333333 170.666667h149.418667a256 256 0 0 1 256 256v21.333333a21.290667 21.290667 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333V426.666667a170.666667 170.666667 0 0 0-170.666667-170.666667H533.333333v42.666667a21.333333 21.333333 0 0 1-34.133333 17.066666l-113.749333-85.333333a21.333333 21.333333 0 0 1 0-34.133333l113.749333-85.333334a21.333333 21.333333 0 0 1 34.133333 17.066667v42.666667zM85.333333 896V448a42.666667 42.666667 0 0 1 42.666667-42.666667h533.333333a42.666667 42.666667 0 0 1 42.666667 42.666667V896a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667z m85.333334-42.666667h448v-362.666666H170.666667V853.333333z"  ></path></symbol><symbol id="icon-icon_zoom-out_outlined" viewBox="0 0 1024 1024"><path d="M799.701333 739.328l169.6 169.642667a21.333333 21.333333 0 0 1 0 30.165333l-30.165333 30.165333a21.333333 21.333333 0 0 1-30.165333 0l-169.642667-169.642666A424.917333 424.917333 0 0 1 469.333333 896C233.685333 896 42.666667 704.981333 42.666667 469.333333S233.685333 42.666667 469.333333 42.666667s426.666667 191.018667 426.666667 426.666666a424.874667 424.874667 0 0 1-96.298667 269.994667zM426.666667 426.666667V320a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333333V426.666667h106.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.290667 21.290667 0 0 1-21.333333 21.333333H512v106.666667a21.290667 21.290667 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333V512H320a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333H426.666667z m42.666666 384a341.333333 341.333333 0 0 0 341.333334-341.333334 341.333333 341.333333 0 0 0-341.333334-341.333333 341.333333 341.333333 0 0 0-341.333333 341.333333 341.333333 341.333333 0 0 0 341.333333 341.333334z"  ></path></symbol><symbol id="icon-icon_zoom-in_outlined" viewBox="0 0 1024 1024"><path d="M799.701333 739.328l169.6 169.642667a21.333333 21.333333 0 0 1 0 30.165333l-30.165333 30.165333a21.333333 21.333333 0 0 1-30.165333 0l-169.642667-169.642666A424.917333 424.917333 0 0 1 469.333333 896C233.685333 896 42.666667 704.981333 42.666667 469.333333S233.685333 42.666667 469.333333 42.666667s426.666667 191.018667 426.666667 426.666666a424.874667 424.874667 0 0 1-96.298667 269.994667zM469.333333 810.666667a341.333333 341.333333 0 0 0 341.333334-341.333334 341.333333 341.333333 0 0 0-341.333334-341.333333 341.333333 341.333333 0 0 0-341.333333 341.333333 341.333333 341.333333 0 0 0 341.333333 341.333334z m-149.333333-384h298.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.290667 21.290667 0 0 1-21.333333 21.333333h-298.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333z"  ></path></symbol><symbol id="icon-icon_close_outlined" viewBox="0 0 1024 1024"><path d="M512 451.669333l286.634667-286.634666a21.333333 21.333333 0 0 1 30.165333 0l30.165333 30.165333a21.333333 21.333333 0 0 1 0 30.165333L572.330667 512l286.634666 286.634667a21.333333 21.333333 0 0 1 0 30.165333l-30.165333 30.165333a21.333333 21.333333 0 0 1-30.165333 0L512 572.330667l-286.592 286.634666a21.333333 21.333333 0 0 1-30.208 0l-30.165333-30.165333a21.333333 21.333333 0 0 1 0-30.165333L451.669333 512 165.034667 225.365333a21.333333 21.333333 0 0 1 0-30.165333l30.165333-30.165333a21.333333 21.333333 0 0 1 30.208 0L512 451.669333z"  ></path></symbol></svg>', // Only run client-side code when document is available
  function(t2) {
    if (typeof document === "undefined") {
      return;
    }
    var a2 = (l2 = (l2 = document.getElementsByTagName("script"))[l2.length - 1]).getAttribute("data-injectcss"), l2 = l2.getAttribute("data-disable-injectsvg");
    if (!l2) {
      let d2 = function() {
        if (!e2) {
          e2 = true;
          h2();
        }
      }, p = function() {
        try {
          c2.documentElement.doScroll("left");
        } catch (a3) {
          setTimeout(p, 50);
          return;
        }
        d2();
      };
      var o2, i2, h2, c2, e2, n2 = function(a3, l3) {
        l3.parentNode.insertBefore(a3, l3);
      };
      if (a2 && !t2.__iconfont__svg__cssinject__) {
        t2.__iconfont__svg__cssinject__ = true;
        try {
          document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (a3) {
          console && console.log(a3);
        }
      }
      o2 = function() {
        var a3, l3 = document.createElement("div");
        l3.innerHTML = t2._iconfont_svg_string_4599145;
        (l3 = l3.getElementsByTagName("svg")[0]) && (l3.setAttribute("aria-hidden", "true"), l3.style.position = "absolute", l3.style.width = 0, l3.style.height = 0, l3.style.overflow = "hidden", l3 = l3, (a3 = document.body).firstChild ? n2(l3, a3.firstChild) : a3.appendChild(l3));
      };
      if (document.addEventListener) {
        if (["complete", "loaded", "interactive"].indexOf(document.readyState) !== -1) {
          setTimeout(o2, 0);
        } else {
          i2 = function() {
            document.removeEventListener("DOMContentLoaded", i2, false);
            o2();
          };
          document.addEventListener("DOMContentLoaded", i2, false);
        }
      } else if (document.attachEvent) {
        h2 = o2;
        c2 = t2.document;
        e2 = false;
        p();
        c2.onreadystatechange = function() {
          if (c2.readyState === "complete") {
            c2.onreadystatechange = null;
            d2();
          }
        };
      }
    }
  }(globalThis);
}
const _hoisted_1$2 = ["xlink:href"];
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    icon: String,
    size: String
  },
  setup(__props) {
    const props = __props;
    const icon = vue.computed(() => `#icon-icon_${props.icon}`);
    const style = vue.computed(() => ({
      width: props.size,
      height: props.size
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("svg", {
        class: "es-iconfont",
        style: vue.normalizeStyle(style.value),
        "aria-hidden": "true"
      }, [
        vue.createElementVNode("use", { "xlink:href": icon.value }, null, 8, _hoisted_1$2)
      ], 4);
    };
  }
});
const _hoisted_1$1 = { class: "zsui-imagePreview" };
const _hoisted_2$1 = { class: "zsui-imagePreviewHeader" };
const _hoisted_3$1 = { class: "zsui-imagePreviewHeader__title" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "zsui-imagePreviewActionBar" };
const _hoisted_6$1 = { class: "zsui-imagePreviewPercentage" };
const _hoisted_7 = /* @__PURE__ */ vue.createElementVNode("div", { class: "zsui-imagePreviewAction__divider" }, null, -1);
const MIN_SCALE = 0.1;
const MAX_SCALE = 3;
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    src: {
      type: String,
      default: ""
    },
    filename: {
      type: String,
      default: "-"
    }
  },
  emits: ["close", "download"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isLoading = vue.ref(true);
    const isMouseMove = vue.ref(false);
    const scale = vue.ref(1);
    const rotate = vue.ref(0);
    const translate3d = vue.ref([0, 0]);
    const imageStyle = vue.computed(() => ({
      transform: `rotate(${rotate.value}deg) translate3d(${translate3d.value[0]}px, ${translate3d.value[1]}px, 1px) scale(${scale.value})`
    }));
    vue.watch([props.src], () => {
      isLoading.value = true;
      const $img = document.createElement("img");
      $img.src = props.src;
      $img.onload = () => {
        isLoading.value = false;
      };
    }, {
      immediate: true
    });
    const scaleUp = () => scale.value = Math.min(scale.value + 0.1, MAX_SCALE);
    const scaleDown = () => scale.value = Math.max(scale.value - 0.1, MIN_SCALE);
    const scaleReset = () => {
      scale.value = 1;
      rotate.value = 0;
      translate3d.value = [0, 0];
    };
    const handleWheel = (e2) => {
      if (e2.deltaY > 0) {
        scaleDown();
      } else {
        scaleUp();
      }
    };
    const handleRotate = () => rotate.value = (rotate.value - 90) % 360;
    const handleMouseDown = () => {
      isMouseMove.value = true;
    };
    const handleMouseMove = (e2) => {
      if (!isMouseMove.value) return;
      translate3d.value = [
        translate3d.value[0] + e2.movementX,
        translate3d.value[1] + e2.movementY
      ];
    };
    const handleMouseUp = () => {
      isMouseMove.value = false;
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
        vue.createElementVNode("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("div", _hoisted_3$1, vue.toDisplayString(__props.filename), 1),
            vue.createElementVNode("div", {
              class: "zsui-imagePreviewHeader__close",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
            }, [
              vue.createVNode(_sfc_main$7, { icon: "close_outlined" })
            ])
          ]),
          vue.withDirectives(vue.createElementVNode("div", null, [
            vue.createVNode(_sfc_main$8)
          ], 512), [
            [vue.vShow, isLoading.value]
          ]),
          vue.withDirectives(vue.createElementVNode("div", {
            class: "zsui-imagePreviewBody",
            onTouchstart: handleMouseDown,
            onTouchend: handleMouseUp,
            onTouchmove: handleMouseMove,
            onWheel: handleWheel,
            onMousedown: handleMouseDown,
            onMousemove: handleMouseMove,
            onMouseup: handleMouseUp
          }, [
            vue.createElementVNode("img", {
              src: __props.src,
              class: "zsui-imagePreview__image",
              style: vue.normalizeStyle(imageStyle.value)
            }, null, 12, _hoisted_4$1)
          ], 544), [
            [vue.vShow, !isLoading.value]
          ]),
          vue.createElementVNode("div", _hoisted_5$1, [
            vue.createVNode(vue.unref(antDesignVue.Tooltip), { title: "放大" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "zsui-imagePreviewAction",
                  onClick: scaleUp
                }, [
                  vue.createVNode(_sfc_main$7, { icon: "zoom-out_outlined" })
                ])
              ]),
              _: 1
            }),
            vue.createElementVNode("div", _hoisted_6$1, vue.toDisplayString(parseInt(scale.value * 100 + "")) + "% ", 1),
            vue.createVNode(vue.unref(antDesignVue.Tooltip), { title: "缩小" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "zsui-imagePreviewAction",
                  onClick: scaleDown
                }, [
                  vue.createVNode(_sfc_main$7, { icon: "zoom-in_outlined" })
                ])
              ]),
              _: 1
            }),
            vue.createVNode(vue.unref(antDesignVue.Tooltip), { title: "还原" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "zsui-imagePreviewAction",
                  onClick: scaleReset
                }, [
                  vue.createVNode(_sfc_main$7, { icon: "original_outlined" })
                ])
              ]),
              _: 1
            }),
            _hoisted_7,
            vue.createVNode(vue.unref(antDesignVue.Tooltip), { title: "旋转" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "zsui-imagePreviewAction",
                  onClick: handleRotate
                }, [
                  vue.createVNode(_sfc_main$7, { icon: "rotate_outlined" })
                ])
              ]),
              _: 1
            }),
            vue.createVNode(vue.unref(antDesignVue.Tooltip), { title: "下载" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "zsui-imagePreviewAction",
                  onClick: _cache[1] || (_cache[1] = ($event) => emit("download"))
                }, [
                  vue.createVNode(_sfc_main$7, { icon: "download_outlined" })
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const FileMimeSuffix = {
  Image: ["jpg", "jpeg", "png"],
  Pdf: ["pdf"],
  Word: ["doc", "docx"],
  Excel: ["xlsx", "xls"],
  PPT: ["ppt", "pptx"],
  Audio: ["mp3"],
  Video: ["mp4", "mov", "avi"],
  Zip: ["zip", "rar"]
};
const getFileSuffix = (fileName) => {
  if (!fileName) {
    return "";
  }
  const arr = fileName.split(".");
  const suffix = arr.pop();
  if (suffix === fileName) {
    return "";
  }
  const lowerSuffix = suffix.toLowerCase();
  return lowerSuffix;
};
const isPdf = (fileName = "") => FileMimeSuffix.Pdf.includes(getFileSuffix(fileName));
const isWord = (fileName = "") => FileMimeSuffix.Word.includes(getFileSuffix(fileName));
const isImage = (fileName = "") => FileMimeSuffix.Image.includes(getFileSuffix(fileName));
const isExcel = (fileName = "") => FileMimeSuffix.Excel.includes(getFileSuffix(fileName));
const isPPT = (fileName = "") => FileMimeSuffix.PPT.includes(getFileSuffix(fileName));
const isAudio = (fileName = "") => FileMimeSuffix.Audio.includes(getFileSuffix(fileName));
const isVideo = (fileName = "") => FileMimeSuffix.Video.includes(getFileSuffix(fileName));
const isZip = (fileName = "") => FileMimeSuffix.Zip.includes(getFileSuffix(fileName));
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "FileIcon",
  props: {
    fileName: String
  },
  setup(__props) {
    const props = __props;
    const fileNameRef = vue.toRef(props, "fileName");
    const fileIcon = vue.computed(() => {
      const name = fileNameRef.value || "";
      if (isPdf(name)) {
        return "file-pdf_colorful1";
      }
      if (isWord(name)) {
        return "file-word_colorful1";
      }
      if (isImage(name)) {
        return "file-image_colorful1";
      }
      if (isExcel(name)) {
        return "file-sheet_colorful1";
      }
      if (isPPT(name)) {
        return "file-ppt_colorful1";
      }
      if (isAudio(name)) {
        return "file-audio_colorful1";
      }
      if (isVideo(name)) {
        return "file-video_colorful1";
      }
      if (isZip(name)) {
        return "file-zip_colorful1";
      }
      return "file-unknow_colorful1";
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(_sfc_main$7, {
        class: "zsui-fileIcon",
        icon: fileIcon.value
      }, null, 8, ["icon"]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const FileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d84f071f"]]);
const _hoisted_1 = { class: "zsui-file" };
const _hoisted_2 = { class: "zsui-file__main" };
const _hoisted_3 = { class: "zsui-file__info" };
const _hoisted_4 = { class: "zsui-file__namewrap" };
const _hoisted_5 = { class: "zsui-file__name" };
const _hoisted_6 = {
  key: 0,
  class: "zsui-file__percentbar"
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    fileName: String,
    showPercentBar: Boolean,
    percent: Number
  },
  setup(__props) {
    vue.computed(() => {
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createVNode(FileIcon, {
            fileName: __props.fileName,
            class: "zsui-file__icon"
          }, null, 8, ["fileName"]),
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("div", _hoisted_4, [
              vue.createElementVNode("div", _hoisted_5, [
                vue.createVNode(_sfc_main$e, {
                  title: __props.fileName,
                  lineClamp: 1
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("span", null, vue.toDisplayString(__props.fileName), 1)
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              vue.renderSlot(_ctx.$slots, "nameExtra", { class: "zsui-file__nameExtra" })
            ]),
            vue.renderSlot(_ctx.$slots, "extra")
          ])
        ]),
        vue.renderSlot(_ctx.$slots, "actions", { class: "zsui-file__actions" }),
        __props.showPercentBar ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
          vue.createElementVNode("div", {
            class: "zsui-file__percent",
            style: vue.normalizeStyle({ width: `${__props.percent || 0}%` })
          }, null, 4)
        ])) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
const componentMap = /* @__PURE__ */ new Map();
componentMap.set("Input", {
  component: antDesignVue.Input,
  parseValue: (e2) => e2.target.value,
  valueText: (_item, e2) => {
    return e2.target.value;
  }
});
componentMap.set("InputNumber", {
  component: antDesignVue.InputNumber,
  parseValue: (e2) => e2.target.value,
  valueText: (_item, e2) => {
    return e2.target.value;
  }
});
componentMap.set("Select", {
  component: antDesignVue.Select,
  parseValue: (value) => value,
  valueText: (_item, _value, options) => {
    var _a;
    if (options instanceof Array) {
      return (_a = options.map((item) => item.label)) == null ? void 0 : _a.join("、");
    }
    return options.label ?? "";
  }
});
componentMap.set("RadioGroup", {
  component: antDesignVue.Radio.Group,
  parseValue: (e2) => e2.target.value,
  valueText: (item, e2) => {
    var _a, _b;
    const options = ((_a = item.componentProps) == null ? void 0 : _a.options) || [];
    const value = e2.target.value;
    return ((_b = options.find((option) => option.value === value)) == null ? void 0 : _b.label) ?? "";
  }
});
componentMap.set("CheckboxGroup", {
  component: antDesignVue.Checkbox.Group,
  parseValue: (value) => value,
  valueText: (item, values) => {
    var _a, _b;
    const options = ((_a = item.componentProps) == null ? void 0 : _a.options) || [];
    return ((_b = values == null ? void 0 : values.map((value) => {
      const option = options.find((option2) => option2.value === value);
      return option.label;
    })) == null ? void 0 : _b.join("、")) ?? "";
  }
});
componentMap.set("DatePicker", {
  component: antDesignVue.DatePicker,
  parseValue: (value) => value,
  valueText: (item, value) => {
    const { format } = item.componentProps || {};
    return value == null ? void 0 : value.format(format);
  }
});
componentMap.set("DateRangePicker", {
  component: antDesignVue.DatePicker.RangePicker,
  parseValue: (value) => value,
  valueText: (item, value) => {
    var _a, _b;
    const { format } = item.componentProps || {};
    return `[${(_a = value == null ? void 0 : value[0]) == null ? void 0 : _a.format(format)}, ${(_b = value == null ? void 0 : value[1]) == null ? void 0 : _b.format(format)}]`;
  }
});
function regsiter(compName, component) {
  componentMap.set(compName, component);
}
function unregister(compName) {
  componentMap.delete(compName);
}
const useFormComp = (formState, queryTags) => {
  const renderComponent = (item) => {
    const Comp = componentMap.get(item.component);
    const FormComp = Comp == null ? void 0 : Comp.component;
    const valueText = Comp == null ? void 0 : Comp.valueText;
    const parseValue = Comp == null ? void 0 : Comp.parseValue;
    if (!FormComp) return vue.createVNode("div", null, null);
    const baseProps = {
      getPopupContainer: (node2) => node2.parentNode
    };
    return vue.createVNode(FormComp, vue.mergeProps({
      "value": formState.value[item.field],
      "onChange": (value, ...rest) => {
        formState.value[item.field] = (parseValue == null ? void 0 : parseValue(value)) ?? value;
        formState.value["_isReset"] = false;
        if (queryTags) {
          queryTags.value[item.field] = {
            field: item.field,
            label: item.label,
            valueText: (valueText == null ? void 0 : valueText(item, value, ...rest)) ?? value
          };
        }
      }
    }, baseProps, item.componentProps), null);
  };
  return {
    renderComponent
  };
};
function _isSlot$2(s2) {
  return typeof s2 === "function" || Object.prototype.toString.call(s2) === "[object Object]" && !vue.isVNode(s2);
}
const FormItem$2 = antDesignVue.Form.Item;
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    initialValue: {
      type: Object,
      default: {}
    },
    values: {
      type: Object,
      default: {}
    }
  },
  emits: ["search"],
  setup(props, {
    emit
  }) {
    const formState = vue.ref({
      ...props.values || {}
    });
    const schemaRef = vue.toRef(props, "schema");
    const {
      renderComponent
    } = useFormComp(formState);
    const handleSearch = () => {
      emit("search", formState.value);
    };
    const handleReset = () => {
      const value = {
        ...props.initialValue,
        _isReset: true
      };
      formState.value = value;
      emit("search", {
        ...value
      });
    };
    return () => vue.createVNode(antDesignVue.Form, {
      "class": "zsui-inlineQuery zsui-queryCustom"
    }, {
      default: () => {
        var _a;
        return [vue.createVNode("div", {
          "class": "zsui-inlineQuery-wrap"
        }, [(_a = schemaRef.value) == null ? void 0 : _a.map((item) => {
          let _slot;
          return vue.createVNode("div", {
            "class": "zsui-queryCustom-item",
            "style": {
              width: `${item.width}px`
            }
          }, [vue.createVNode("div", {
            "class": "zsui-queryCustom-itemLabel"
          }, [item.label]), vue.createVNode(FormItem$2, {
            "noStyle": true
          }, _isSlot$2(_slot = renderComponent(item)) ? _slot : {
            default: () => [_slot]
          })]);
        }), vue.createVNode(antDesignVue.Space, null, {
          default: () => [vue.createVNode(antDesignVue.Button, {
            "onClick": handleSearch,
            "type": "primary"
          }, {
            default: () => [vue.createTextVNode("查询")]
          }), vue.createVNode(antDesignVue.Button, {
            "onClick": handleReset
          }, {
            default: () => [vue.createTextVNode("重置")]
          })]
        })])];
      }
    });
  }
});
function _isSlot$1(s2) {
  return typeof s2 === "function" || Object.prototype.toString.call(s2) === "[object Object]" && !vue.isVNode(s2);
}
const FormItem$1 = antDesignVue.Form.Item;
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  props: {
    schema: {
      type: Array,
      default: () => []
    }
  },
  emits: ["change"],
  setup(props, {
    emit,
    slots,
    expose
  }) {
    const drawerVisible = vue.ref(true);
    const queryTags = vue.ref({});
    const formState = vue.ref({});
    const schemaRef = vue.toRef(props, "schema");
    const {
      renderComponent
    } = useFormComp(formState, queryTags);
    const handleOpenDrawer = () => {
      drawerVisible.value = true;
    };
    const handleOk = () => {
      emit("change", formState.value, {
        ...queryTags.value
      });
      drawerVisible.value = false;
    };
    const handleReset = () => {
      formState.value = {};
      queryTags.value = {};
      emit("change", formState.value, {
        ...queryTags.value
      });
    };
    expose({
      reset: handleReset,
      resetField: (field, value) => {
        formState.value[field] = value;
        delete queryTags.value[field];
        emit("change", formState.value, {
          ...queryTags.value
        });
      }
    });
    return () => {
      var _a;
      return vue.createVNode("div", {
        "onClick": handleOpenDrawer
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots), vue.createVNode(antDesignVue.Drawer, {
        "class": "zsui-sideQueryDrawer",
        "open": drawerVisible.value,
        "closable": false,
        "mask": false
      }, {
        default: () => [vue.createVNode("div", {
          "class": "zsui-sideQueryDrawer-header"
        }, [vue.createVNode("div", null, [vue.createTextVNode("筛选条件")]), vue.createVNode(_sfc_main$h, {
          "size": "large",
          "onClick": () => drawerVisible.value = false
        }, {
          default: () => [vue.createVNode(_sfc_main$7, {
            "icon": "close_outlined"
          }, null)]
        })]), vue.createVNode("div", {
          "class": "zsui-sideQueryDrawer-body"
        }, [vue.createVNode(antDesignVue.Form, {
          "layout": "vertical"
        }, {
          default: () => {
            var _a2;
            return [(_a2 = schemaRef.value) == null ? void 0 : _a2.map((item) => {
              let _slot;
              return vue.createVNode(FormItem$1, {
                "label": item.label
              }, _isSlot$1(_slot = renderComponent(item)) ? _slot : {
                default: () => [_slot]
              });
            })];
          }
        })]), vue.createVNode("div", {
          "class": "zsui-sideQueryDrawer-footer"
        }, [vue.createVNode(antDesignVue.Space, null, {
          default: () => [vue.createVNode(antDesignVue.Button, {
            "onClick": handleReset
          }, {
            default: () => [vue.createTextVNode("重置")]
          }), vue.createVNode(antDesignVue.Button, {
            "type": "primary",
            "onClick": handleOk
          }, {
            default: () => [vue.createTextVNode("查看结果")]
          })]
        })])]
      })]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  props: {
    tags: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["remove", "clearAll"],
  setup(props, {
    emit
  }) {
    const tags = vue.computed(() => {
      return Object.keys(props.tags).map((key) => props.tags[key]);
    });
    const handleCloseTag = (tag) => {
      emit("remove", tag.field);
    };
    const handleClearAll = () => {
      emit("clearAll");
    };
    return () => {
      var _a;
      return ((_a = tags.value) == null ? void 0 : _a.length) ? vue.createVNode("div", {
        "class": "zsui-queryTags"
      }, [vue.createVNode("div", {
        "class": "zsui-queryTags-tags"
      }, [tags.value.map((tag) => vue.createVNode(antDesignVue.Tag, {
        "key": tag.field,
        "closable": true,
        "bordered": false,
        "onClose": () => handleCloseTag(tag)
      }, {
        default: () => [vue.createVNode("div", {
          "class": "zsui-queryTags-tag"
        }, [tag.label, vue.createTextVNode(":  "), tag.valueText])]
      })), vue.createVNode(_sfc_main$h, {
        "class": "zsui-queryTags__clearBtn",
        "size": "small",
        "onClick": handleClearAll
      }, {
        default: () => [vue.createVNode(_sfc_main$7, {
          "icon": "delete-trash_outlined",
          "class": "zsui-queryTags__clearBtnIcon"
        }, null), vue.createTextVNode("清空")]
      })])]) : "";
    };
  }
});
function _isSlot(s2) {
  return typeof s2 === "function" || Object.prototype.toString.call(s2) === "[object Object]" && !vue.isVNode(s2);
}
const FormItem = antDesignVue.Form.Item;
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    gridColumns: {
      type: Number,
      default: 4
    },
    initialValue: {
      type: Object,
      default: {}
    },
    values: {
      type: Object,
      default: {}
    }
  },
  emits: ["search"],
  setup(props, {
    emit
  }) {
    const formState = vue.ref({
      ...props.values || {}
    });
    const schemaRef = vue.toRef(props, "schema");
    const {
      renderComponent
    } = useFormComp(formState);
    const gridTemplateColumns = vue.computed(() => {
      return `repeat(${props.gridColumns}, 1fr)`;
    });
    const handleSearch = () => {
      emit("search", formState.value);
    };
    const handleReset = () => {
      const value = {
        ...props.initialValue,
        _isReset: true
      };
      formState.value = value;
      emit("search", {
        ...value
      });
    };
    return () => vue.createVNode(antDesignVue.Form, {
      "class": "zsui-gridQuery zsui-queryCustom"
    }, {
      default: () => {
        var _a;
        return [vue.createVNode("div", {
          "class": "zsui-gridQuery-wrap",
          "style": {
            gridTemplateColumns: gridTemplateColumns.value
          }
        }, [(_a = schemaRef.value) == null ? void 0 : _a.map((item) => {
          let _slot;
          return vue.createVNode("div", {
            "class": "zsui-queryCustom-item"
          }, [vue.createVNode("div", {
            "class": "zsui-queryCustom-itemLabel"
          }, [item.label]), vue.createVNode(FormItem, {
            "noStyle": true
          }, _isSlot(_slot = renderComponent(item)) ? _slot : {
            default: () => [_slot]
          })]);
        })]), vue.createVNode(antDesignVue.Space, {
          "class": "zsui-gridQuery-actions"
        }, {
          default: () => [vue.createVNode(antDesignVue.Button, {
            "onClick": handleSearch,
            "type": "primary"
          }, {
            default: () => [vue.createTextVNode("查询")]
          }), vue.createVNode(antDesignVue.Button, {
            "onClick": handleReset
          }, {
            default: () => [vue.createTextVNode("重置")]
          })]
        })];
      }
    });
  }
});
const queryComponent = {
  componentMap,
  regsiter,
  unregister
};
exports.Alert = _sfc_main$9;
exports.EllipsisText = _sfc_main$e;
exports.File = _sfc_main$4;
exports.GridQuery = _sfc_main;
exports.ImagePreview = _sfc_main$6;
exports.InlineQuery = _sfc_main$3;
exports.Loading = _sfc_main$8;
exports.QueryTags = _sfc_main$1;
exports.SideQuery = _sfc_main$2;
exports.Tag = _sfc_main$b;
exports.TextButton = _sfc_main$h;
exports.User = _sfc_main$d;
exports.UserAvatar = _sfc_main$c;
exports.UserProfile = _sfc_main$a;
exports.queryComponent = queryComponent;
