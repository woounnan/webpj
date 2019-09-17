import { Emoji, Picker } from 'emoji-mart-vue';
import moment from 'moment';

function scrollToBottom () {
  setTimeout(function () {
    var scrollContainer = document.getElementById('window__messages__container');
    var isScrolledToBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight <= scrollContainer.scrollTop + 1;
    if (!isScrolledToBottom) { scrollContainer.scrollTop = scrollContainer.scrollHeight; }
  }, 201);
}

//

var script = {
  name: 'MessageOwn',
  components: {
    Emoji: Emoji
  },
  props: {
    date: {
      type: String,
      default: '16:30:00',
      required: false
    },
    imageUrl: {
      type: String,
      default: '',
      required: false
    },
    contents: {
      type: String,
      default: '',
      required: false
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "message--own" }, [
    _c("div", { staticClass: "message__date" }, [
      _vm._v("\n    " + _vm._s(_vm.date) + "\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "message__contents" }, [
      _vm.imageUrl
        ? _c("img", {
            staticStyle: { width: "100%" },
            attrs: { src: _vm.imageUrl, alt: "" }
          })
        : _vm._e(),
      _vm._v("\n    " + _vm._s(_vm.contents) + "\n  ")
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-426301cd_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MessageOwn.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/messages/MessageOwn.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var MessageOwn = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
  name: 'MessageForeign',
  props: {
    author: {
      type: String,
      default: 'Person',
      required: false
    },
    date: {
      type: String,
      default: '16:30:00',
      required: false
    },
    imageUrl: {
      type: String,
      default: '',
      required: false
    },
    contents: {
      type: String,
      default: '',
      required: false
    }
  }
};

/* script */
            var __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "message--foreign" }, [
    _c("div", { staticClass: "message__author" }, [
      _vm._v("\n    " + _vm._s(_vm.author) + "\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "message__contents" }, [
      _vm.imageUrl
        ? _c("img", {
            staticStyle: { width: "100%" },
            attrs: { src: _vm.imageUrl, alt: "" }
          })
        : _vm._e(),
      _vm._v("\n    " + _vm._s(_vm.contents) + "\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "message__date" }, [
      _vm._v("\n    " + _vm._s(_vm.date) + "\n  ")
    ])
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-3a2c4561_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MessageForeign.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/messages/MessageForeign.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var MessageForeign = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

//

var script$2 = {
  name: 'MessagesList',
  components: {
    MessageOwn: MessageOwn,
    MessageForeign: MessageForeign
  },
  props: {
    feed: {
      type: Array,
      default: function () {
        return []
      },
      required: false
    },
    authorId: {
      type: Number,
      default: 0,
      required: false
    }
  }
};

/* script */
            var __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition-group",
    { attrs: { name: "messages-list", tag: "div" } },
    _vm._l(_vm.feed, function(message, index) {
      return _c(
        "div",
        { key: index, staticClass: "messages-list-item" },
        [
          message.id === _vm.authorId
            ? _c("message-own", {
                attrs: {
                  date: message.date,
                  "image-url": message.imageUrl,
                  contents: message.contents
                }
              })
            : _c("message-foreign", {
                attrs: {
                  author: message.author,
                  date: message.date,
                  "image-url": message.imageUrl,
                  contents: message.contents
                }
              })
        ],
        1
      )
    })
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-18752abd_0", { source: "\n/*# sourceMappingURL=MessagesList.vue.map */", map: {"version":3,"sources":["MessagesList.vue"],"names":[],"mappings":";AACA,4CAA4C","file":"MessagesList.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = "data-v-18752abd";
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/messages/MessagesList.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var MessagesList = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
  name: 'InputField',
  props: {
    value: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    send: function send (event) {
      this.$emit('newOwnMessage');
    }
  }
};

/* script */
            var __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "input__field" }, [
    _c("input", {
      attrs: {
        type: "text",
        name: "message",
        "aria-placeholder": "Type message...",
        placeholder: "Type message...",
        autofocus: ""
      },
      domProps: { value: _vm.value },
      on: {
        input: function($event) {
          _vm.$emit("input", $event.target.value);
        },
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          $event.preventDefault();
          return _vm.send($event)
        }
      }
    }),
    _c("br")
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-053504e8_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"InputField.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/input/InputField.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$3() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputField = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$3,
    undefined
  );

//
//
//
//
//
//
//
//


var script$4 = {
  name: 'InputButton',
  methods: {
    send: function send (event) {
      this.$emit('newOwnMessage');
    }
  }
};

/* script */
            var __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "input__button", on: { click: _vm.send } }, [
    _vm._v("\n  Send\n")
  ])
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  var __vue_inject_styles__$4 = function (inject) {
    if (!inject) { return }
    inject("data-v-26da32cb_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"InputButton.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/input/InputButton.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$4() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputButton = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    __vue_create_injector__$4,
    undefined
  );

//

var script$5 = {
  name: 'InputContainer',
  components: {
    InputField: InputField,
    InputButton: InputButton,
    Picker: Picker
  },
  props: {
    toggleEmojiPicker: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: function () {
    return {
      message: '',
      file: undefined,
      imagePreview: ''
    }
  },
  methods: {
    onNewOwnMessage: function onNewOwnMessage () {
      if ((!this.message || this.message === '') && !this.file) {
        return
      }

      this.$emit('newOwnMessage', this.message, this.file, this.imagePreview);

      this.message = '';

      this.file = undefined;

      this.imagePreview = '';
    },
    handleFileUpload: function handleFileUpload () {
      this.file = this.$refs.image.files[0];
      var reader = new FileReader();

      reader.addEventListener(
        'load',
        function () {
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
    openEmojiPicker: function openEmojiPicker () {
      this.$emit('openEmojiPicker', true);
    },
    emojiPicked: function emojiPicked (emoji) {
      this.message += emoji.native;
    }
  }
};

/* script */
            var __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "input__container" },
    [
      _c("img", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.file,
            expression: "file"
          }
        ],
        staticClass: "image--uploaded",
        attrs: { src: _vm.imagePreview }
      }),
      _vm._v(" "),
      _vm._t("input-field", [
        _c("input-field", {
          on: { newOwnMessage: _vm.onNewOwnMessage },
          model: {
            value: _vm.message,
            callback: function($$v) {
              _vm.message = $$v;
            },
            expression: "message"
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "features__container" },
        [
          _c("div", { staticClass: "input-images-upload" }, [
            _c(
              "div",
              {
                ref: "image",
                staticClass: "image",
                attrs: { id: "image", type: "file", accept: "image/*" },
                on: {
                  change: function($event) {
                    _vm.handleFileUpload();
                  }
                }
              },
              [
                _c(
                  "label",
                  { attrs: { for: "image" } },
                  [_c("font-awesome-icon", { attrs: { icon: "paperclip" } })],
                  1
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input-images-upload input-emoji-picker__icon" },
            [
              _c(
                "div",
                { attrs: { id: "emoji" }, on: { click: _vm.openEmojiPicker } },
                [
                  _c(
                    "label",
                    { attrs: { for: "emoji" } },
                    [_c("font-awesome-icon", { attrs: { icon: "smile" } })],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-emoji-picker__container",
              class: { visible: !_vm.toggleEmojiPicker }
            },
            [
              _c("picker", {
                attrs: {
                  "show-preview": false,
                  "show-skin-tones": false,
                  "show-categories": false,
                  "show-search": false,
                  native: ""
                },
                on: { select: _vm.emojiPicked }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._t("features")
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("input-button", [
        _c("input-button", { on: { newOwnMessage: _vm.onNewOwnMessage } })
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  var __vue_inject_styles__$5 = function (inject) {
    if (!inject) { return }
    inject("data-v-4554e2da_0", { source: "\n.visible[data-v-4554e2da] {\n  display: none;\n}\n\n/*# sourceMappingURL=InputContainer.vue.map */", map: {"version":3,"sources":["/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/input/InputContainer.vue","InputContainer.vue"],"names":[],"mappings":";AA0HA;EACA,cAAA;CACA;;ACzHA,8CAA8C","file":"InputContainer.vue","sourcesContent":[null,".visible {\n  display: none; }\n\n/*# sourceMappingURL=InputContainer.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$5 = "data-v-4554e2da";
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/input/InputContainer.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$5() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputContainer = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    __vue_create_injector__$5,
    undefined
  );

//

var script$6 = {
  name: 'BasicVueChat',
  components: {
    MessagesList: MessagesList,
    InputContainer: InputContainer
  },
  props: {
    title: {
      type: String,
      default: 'Team Maczan',
      required: false
    },
    initialAuthorId: {
      type: Number,
      default: 0,
      required: false
    },
    attachMock: {
      type: Boolean,
      default: false,
      required: false
    },
    initialFeed: {
      type: Array,
      default: function () {
        return []
      },
      required: false
    },
    newMessage: {
      type: Object,
      default: function () {
        return {}
      },
      required: false
    }
  },
  data: function () {
    return {
      feed: [],
      authorId: 0,
      toggleEmojiPicker: false
    }
  },
  watch: {
    newMessage: function (newValue, oldValue) {
      this.pushToFeed(newValue);
      scrollToBottom();
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    if (this.attachMock) {
      Promise.resolve().then(function () { return mockMessagesList$1; })
        .then(function (mockData) {
          this$1.feed = mockData.default.feed;
          this$1.setAuthorId(mockData.default.authorId);
        })
        .catch(function (error) {
          console.error('Failed to load mock data from file. ', error);
        });
    } else {
      this.feed = this.initialFeed;
      this.authorId = this.initialAuthorId;
    }
  },
  methods: {
    setEmojiPickerToggle: function setEmojiPickerToggle (toggle) {
      this.toggleEmojiPicker = toggle;
    },
    pushToFeed: function pushToFeed (element) {
      this.feed.push(element);
    },
    onNewOwnMessage: function onNewOwnMessage (message, image, imageUrl) {
      var newOwnMessage = {
        id: this.authorId,
        contents: message,
        image: image,
        imageUrl: imageUrl,
        date: moment().format('HH:mm:ss')
      };

      this.pushToFeed(newOwnMessage);

      scrollToBottom();

      this.$emit('newOwnMessage', message);
    },
    onOpenEmojiPicker: function onOpenEmojiPicker (toggle) {
      this.setEmojiPickerToggle(toggle);
    }
  }
};

/* script */
            var __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "basic-vue-chat",
      on: {
        click: function($event) {
          _vm.setEmojiPickerToggle(false);
        }
      }
    },
    [
      _c("section", { staticClass: "window" }, [
        _c(
          "header",
          { staticClass: "window__header__container" },
          [
            _vm._t("header", [
              _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass: "window__messages__container",
            attrs: { id: "window__messages__container" }
          },
          [
            _vm._t("default", [
              _c("messages-list", {
                staticClass: "messages-list",
                attrs: { feed: _vm.feed, "author-id": _vm.authorId }
              })
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "window__input__container" },
          [
            _vm._t("input-container", [
              _c("input-container", {
                attrs: { "toggle-emoji-picker": _vm.toggleEmojiPicker },
                on: {
                  newOwnMessage: _vm.onNewOwnMessage,
                  openEmojiPicker: _vm.onOpenEmojiPicker
                }
              })
            ])
          ],
          2
        )
      ])
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  var __vue_inject_styles__$6 = function (inject) {
    if (!inject) { return }
    inject("data-v-650bda5e_0", { source: "\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n.messages-list-item {\n  transition: all 0.2s;\n}\n.messages-list-enter, .messages-list-leave-to {\n  opacity: 0;\n  transform: translateY(30px);\n}\n.messages-list-leave-active {\n  position: absolute;\n}\nbody {\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  background-color: #FFFFFF;\n  color: #2C3E50;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n}\n.window__header__container {\n  background: linear-gradient(90deg, #6B63D8, #B284ED);\n  padding: 10px 5px;\n  color: #FAF9FF;\n  font-weight: 600;\n  z-index: 1;\n  -webkit-box-shadow: 0 2px 2px -2px #2C3E50;\n  box-shadow: 0 2px 2px -2px #2C3E50;\n}\n.features__container {\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  bottom: 0;\n}\n.window__input__container {\n  position: relative;\n  bottom: 0;\n}\n.window__input__container input[type=\"file\"] {\n    height: 0.1px !important;\n    width: 0.1px !important;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.window__input__container input[type=\"text\"] {\n    font-size: 12px;\n}\n.window__input__container .image--uploaded {\n    max-width: 50px;\n    max-height: 50px;\n    margin-right: 5px;\n    border-radius: 12px;\n}\n.window__input__container .image + label {\n    display: -webkit-flex;\n    display: flex;\n    align-self: center;\n    margin-right: 5px;\n    color: #6B63D8;\n    cursor: pointer;\n}\n.window__input__container .image:focus + label,\n  .window__input__container .image + label:hover {\n    color: #B284ED;\n    cursor: pointer;\n}\n.window__input__container .input__container {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 7px 5px;\n    align-items: center;\n}\n.window__input__container .input-images-upload {\n    display: -webkit-flex;\n    display: flex;\n    align-self: center;\n    margin-right: 5px;\n    color: #6B63D8;\n    cursor: pointer;\n}\n.window__input__container .input-emoji-picker__container {\n    position: absolute;\n    bottom: 30px;\n    right: 5px;\n    z-index: 3;\n}\n.window__input__container .input__field {\n    display: -webkit-flex;\n    display: flex;\n    flex-grow: 9999;\n    padding: 5px 10px;\n    margin-right: 5px;\n    border-radius: 12px;\n    background-color: #F2EFFF;\n}\n.window__input__container .input__field input {\n      border: none;\n      background-color: inherit;\n      color: #2C3E50;\n      width: 100%;\n}\n.window__input__container .input__field input:focus {\n        outline: none;\n}\n.window__input__container .input__button {\n    display: -webkit-flex;\n    display: flex;\n    padding: 5px 10px;\n    border-radius: 12px;\n    background-color: #6B63D8;\n    color: #FAF9FF;\n    font-weight: 600;\n    cursor: pointer;\n}\n.window .message--foreign, .window .message--own {\n  padding: 3px 5px;\n}\n.window .message--own .message__contents {\n    max-width: 200px !important;\n    word-wrap: break-word;\n}\n.window .message--foreign {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.window .message--foreign .message__author {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-weight: 600;\n    margin-right: 5px;\n}\n.window .message--foreign .message__contents {\n    border: 1px solid transparent;\n    border-radius: 12px;\n    color: inherit;\n    background-color: #FAF9FF;\n    padding: 3px 5px;\n    margin-right: 5px;\n}\n.window .message--foreign .message__date {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #CBC9D6;\n}\n.window .message--own {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.window .message--own .message__contents {\n    border: 1px solid transparent;\n    border-radius: 12px;\n    color: #FAF9FF;\n    background-color: #B284ED;\n    padding: 3px 5px;\n}\n.window .message--own .message__date {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #CBC9D6;\n    margin-right: 5px;\n}\n.window__messages__container {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 999;\n  overflow: auto;\n  padding: 3px 0;\n  border-left: 1px solid #F2EFFF;\n  border-right: 1px solid #F2EFFF;\n  border-bottom: 1px solid #F2EFFF;\n  transition: all 0.5s;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.window__messages__container::-webkit-scrollbar {\n    width: 0px;\n    /* remove scrollbar space */\n    background: transparent;\n    /* optional: just make scrollbar invisible */\n}\n.window__messages__container::-webkit-scrollbar {\n    width: 0;\n}\n.window__messages__container::-webkit-scrollbar-thumb {\n    background-color: transparent;\n}\n.emoji-mart {\n  height: 250px !important;\n}\n.window {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-box-shadow: 0 0 2px #2C3E50;\n  box-shadow: 0 0 2px #2C3E50;\n  max-width: 500px;\n  height: 400px;\n  border: 0px solid transparent;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=BasicVueChat.vue.map */", map: {"version":3,"sources":["BasicVueChat.vue"],"names":[],"mappings":";AAAA,uEAAuE;AACvE;EACE,qBAAqB;CAAE;AAEzB;EACE,WAAW;EACX,4BAA4B;CAAE;AAEhC;EACE,mBAAmB;CAAE;AAEvB;EACE,2CAA2C;EAC3C,iBAAiB;EACjB,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;EACf,oCAAoC;EACpC,mCAAmC;EACnC,mBAAmB;CAAE;AAEvB;EACE,qDAAqD;EACrD,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,2CAA2C;EAC3C,mCAAmC;CAAE;AAEvC;EACE,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,UAAU;CAAE;AAEd;EACE,mBAAmB;EACnB,UAAU;CAAE;AACZ;IACE,yBAAyB;IACzB,wBAAwB;IACxB,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;CAAE;AAChB;IACE,gBAAgB;CAAE;AACpB;IACE,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CAAE;AACxB;IACE,sBAAsB;IACtB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;CAAE;AACpB;;IAEE,eAAe;IACf,gBAAgB;CAAE;AACpB;IACE,sBAAsB;IACtB,cAAc;IACd,oBAAoB;IACpB,+BAA+B;IAC/B,iBAAiB;IACjB,oBAAoB;CAAE;AACxB;IACE,sBAAsB;IACtB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;CAAE;AACpB;IACE,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,WAAW;CAAE;AACf;IACE,sBAAsB;IACtB,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;CAAE;AAC5B;MACE,aAAa;MACb,0BAA0B;MAC1B,eAAe;MACf,YAAY;CAAE;AACd;QACE,cAAc;CAAE;AACtB;IACE,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;IAC1B,eAAe;IACf,iBAAiB;IACjB,gBAAgB;CAAE;AAEtB;EACE,iBAAiB;CAAE;AACnB;IACE,4BAA4B;IAC5B,sBAAsB;CAAE;AAE5B;EACE,sBAAsB;EACtB,cAAc;EACd,oBAAoB;EACpB,4BAA4B;CAAE;AAC9B;IACE,sBAAsB;IACtB,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;CAAE;AACtB;IACE,8BAA8B;IAC9B,oBAAoB;IACpB,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;CAAE;AACtB;IACE,sBAAsB;IACtB,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;CAAE;AAErB;EACE,sBAAsB;EACtB,cAAc;EACd,oBAAoB;EACpB,0BAA0B;CAAE;AAC5B;IACE,8BAA8B;IAC9B,oBAAoB;IACpB,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;CAAE;AACrB;IACE,sBAAsB;IACtB,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;IACf,kBAAkB;CAAE;AAExB;EACE,sBAAsB;EACtB,cAAc;EACd,uBAAuB;EACvB,4BAA4B;EAC5B,eAAe;EACf,eAAe;EACf,eAAe;EACf,+BAA+B;EAC/B,gCAAgC;EAChC,iCAAiC;EACjC,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;CAAE;AACrB;IACE,WAAW;IACX,4BAA4B;IAC5B,wBAAwB;IACxB,6CAA6C;CAAE;AACjD;IACE,SAAS;CAAE;AACb;IACE,8BAA8B;CAAE;AAEpC;EACE,yBAAyB;CAAE;AAE7B;EACE,sBAAsB;EACtB,cAAc;EACd,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,4BAA4B;EAC5B,iBAAiB;EACjB,cAAc;EACd,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAAE;;AAErB,4CAA4C","file":"BasicVueChat.vue","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n.messages-list-item {\n  transition: all 0.2s; }\n\n.messages-list-enter, .messages-list-leave-to {\n  opacity: 0;\n  transform: translateY(30px); }\n\n.messages-list-leave-active {\n  position: absolute; }\n\nbody {\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  background-color: #FFFFFF;\n  color: #2C3E50;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center; }\n\n.window__header__container {\n  background: linear-gradient(90deg, #6B63D8, #B284ED);\n  padding: 10px 5px;\n  color: #FAF9FF;\n  font-weight: 600;\n  z-index: 1;\n  -webkit-box-shadow: 0 2px 2px -2px #2C3E50;\n  box-shadow: 0 2px 2px -2px #2C3E50; }\n\n.features__container {\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  bottom: 0; }\n\n.window__input__container {\n  position: relative;\n  bottom: 0; }\n  .window__input__container input[type=\"file\"] {\n    height: 0.1px !important;\n    width: 0.1px !important;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1; }\n  .window__input__container input[type=\"text\"] {\n    font-size: 12px; }\n  .window__input__container .image--uploaded {\n    max-width: 50px;\n    max-height: 50px;\n    margin-right: 5px;\n    border-radius: 12px; }\n  .window__input__container .image + label {\n    display: -webkit-flex;\n    display: flex;\n    align-self: center;\n    margin-right: 5px;\n    color: #6B63D8;\n    cursor: pointer; }\n  .window__input__container .image:focus + label,\n  .window__input__container .image + label:hover {\n    color: #B284ED;\n    cursor: pointer; }\n  .window__input__container .input__container {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 7px 5px;\n    align-items: center; }\n  .window__input__container .input-images-upload {\n    display: -webkit-flex;\n    display: flex;\n    align-self: center;\n    margin-right: 5px;\n    color: #6B63D8;\n    cursor: pointer; }\n  .window__input__container .input-emoji-picker__container {\n    position: absolute;\n    bottom: 30px;\n    right: 5px;\n    z-index: 3; }\n  .window__input__container .input__field {\n    display: -webkit-flex;\n    display: flex;\n    flex-grow: 9999;\n    padding: 5px 10px;\n    margin-right: 5px;\n    border-radius: 12px;\n    background-color: #F2EFFF; }\n    .window__input__container .input__field input {\n      border: none;\n      background-color: inherit;\n      color: #2C3E50;\n      width: 100%; }\n      .window__input__container .input__field input:focus {\n        outline: none; }\n  .window__input__container .input__button {\n    display: -webkit-flex;\n    display: flex;\n    padding: 5px 10px;\n    border-radius: 12px;\n    background-color: #6B63D8;\n    color: #FAF9FF;\n    font-weight: 600;\n    cursor: pointer; }\n\n.window .message--foreign, .window .message--own {\n  padding: 3px 5px; }\n  .window .message--own .message__contents {\n    max-width: 200px !important;\n    word-wrap: break-word; }\n\n.window .message--foreign {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start; }\n  .window .message--foreign .message__author {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-weight: 600;\n    margin-right: 5px; }\n  .window .message--foreign .message__contents {\n    border: 1px solid transparent;\n    border-radius: 12px;\n    color: inherit;\n    background-color: #FAF9FF;\n    padding: 3px 5px;\n    margin-right: 5px; }\n  .window .message--foreign .message__date {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #CBC9D6; }\n\n.window .message--own {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n  .window .message--own .message__contents {\n    border: 1px solid transparent;\n    border-radius: 12px;\n    color: #FAF9FF;\n    background-color: #B284ED;\n    padding: 3px 5px; }\n  .window .message--own .message__date {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #CBC9D6;\n    margin-right: 5px; }\n\n.window__messages__container {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 999;\n  overflow: auto;\n  padding: 3px 0;\n  border-left: 1px solid #F2EFFF;\n  border-right: 1px solid #F2EFFF;\n  border-bottom: 1px solid #F2EFFF;\n  transition: all 0.5s;\n  overflow: scroll;\n  overflow-x: hidden; }\n  .window__messages__container::-webkit-scrollbar {\n    width: 0px;\n    /* remove scrollbar space */\n    background: transparent;\n    /* optional: just make scrollbar invisible */ }\n  .window__messages__container::-webkit-scrollbar {\n    width: 0; }\n  .window__messages__container::-webkit-scrollbar-thumb {\n    background-color: transparent; }\n\n.emoji-mart {\n  height: 250px !important; }\n\n.window {\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-box-shadow: 0 0 2px #2C3E50;\n  box-shadow: 0 0 2px #2C3E50;\n  max-width: 500px;\n  height: 400px;\n  border: 0px solid transparent;\n  border-radius: 15px;\n  overflow: hidden; }\n\n/*# sourceMappingURL=BasicVueChat.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/jmaczan/development/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$6() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BasicVueChat = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    __vue_create_injector__$6,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install (Vue) {
  if (install.installed) { return }
  install.installed = true;
  Vue.component('BasicVueChat', BasicVueChat);
}

// Create module definition for Vue.use()
var plugin = {
  install: install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

var mockMessagesList = {
  authorId: 1,
  feed: [
    {
      id: 0,
      author: 'Person',
      contents: 'hi there',
      date: '16:30'
    },
    {
      id: 1,
      author: 'Me',
      contents: 'hello',
      date: '16:30'
    },
    {
      id: 1,
      author: 'Me',
      contents: 'lol',
      date: '16:31'
    }
  ]
};

var mockMessagesList$1 = /*#__PURE__*/Object.freeze({
  default: mockMessagesList
});

export default BasicVueChat;
export { install };
