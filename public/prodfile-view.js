(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prodfile-view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        id: '',
        name: '',
        email: '',
        password: '',
        created_at: ''
      })
    };
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  methods: {
    updateInfo: function updateInfo() {
      var _this = this;

      this.$Progress.start();

      if (this.form.password == '') {
        this.form.password = undefined;
      }

      this.form.put('api/profile').then(function (data) {
        _this.$Progress.finish();

        Toast.fire({
          icon: 'success',
          title: data.data.message
        });
      })["catch"](function (data) {
        _this.$Progress.fail();

        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    },
    updatePassword: function updatePassword() {
      var _this2 = this;

      this.$Progress.start();
      this.form.post('api/change-password').then(function (data) {
        //  Fire.$emit('AfterCreate');
        _this2.$Progress.finish();

        _this2.form.current_password = '';
        _this2.form.new_password = '';
        _this2.form.confirm_password = '';
        Toast.fire({
          icon: 'success',
          title: data.data.message
        });
      })["catch"](function () {
        _this2.$Progress.fail();

        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.$Progress.start();
    axios.get("api/profile").then(function (_ref) {
      var data = _ref.data;
      return _this3.form.fill(data.data);
    });
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "tab-content" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane active show",
                    attrs: { id: "settings" },
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.updateInfo.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 control-label",
                              attrs: { for: "inputName" },
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-12" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("name"),
                                },
                                attrs: {
                                  type: "",
                                  id: "inputName",
                                  placeholder: "Name",
                                },
                                domProps: { value: _vm.form.name },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "name" },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 control-label",
                              attrs: { for: "inputEmail" },
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-12" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.email,
                                    expression: "form.email",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("email"),
                                },
                                attrs: {
                                  type: "email",
                                  id: "inputEmail",
                                  placeholder: "Email",
                                },
                                domProps: { value: _vm.form.email },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "email",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "email" },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" },
                              },
                              [_vm._v("Update Profile")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "float-right d-sm-inline text-muted",
                              },
                              [
                                _vm._v("Member since: "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("myDate")(_vm.form.created_at)
                                    )
                                  ),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane", attrs: { id: "change-password" } },
                  [
                    _c("form", { staticClass: "form-horizontal" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-2 control-label",
                            attrs: { for: "current_password" },
                          },
                          [_vm._v("Current Password")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-12" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.current_password,
                                  expression: "form.current_password",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("current_password"),
                              },
                              attrs: {
                                type: "password",
                                id: "current_password",
                                placeholder: "Current Password",
                              },
                              domProps: { value: _vm.form.current_password },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "current_password",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.form,
                                field: "current_password",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-2 control-label",
                            attrs: { for: "new_password" },
                          },
                          [_vm._v("New Password")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-12" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.new_password,
                                  expression: "form.new_password",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("new_password"),
                              },
                              attrs: {
                                type: "password",
                                id: "new_password",
                                placeholder: "New Password",
                              },
                              domProps: { value: _vm.form.new_password },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "new_password",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "new_password" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-2 control-label",
                            attrs: { for: "confirm_password" },
                          },
                          [_vm._v("Confirm Password")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-12" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.confirm_password,
                                  expression: "form.confirm_password",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("confirm_password"),
                              },
                              attrs: {
                                type: "password",
                                id: "confirm_password",
                                placeholder: "Confirm Password",
                              },
                              domProps: { value: _vm.form.confirm_password },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "confirm_password",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.form,
                                field: "confirm_password",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-offset-2 col-sm-12" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.updatePassword.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [_vm._v("Update Password")]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#activity", "data-toggle": "tab" },
            },
            [_vm._v("Activity")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active show",
              attrs: { href: "#settings", "data-toggle": "tab" },
            },
            [_vm._v("Settings")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#change-password", "data-toggle": "tab" },
            },
            [_vm._v("Change Password")]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "activity" } }, [
      _c("h3", { staticClass: "text-center" }, [
        _vm._v("Display User Activity"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=25b9215a& */ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=template&id=25b9215a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=25b9215a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);