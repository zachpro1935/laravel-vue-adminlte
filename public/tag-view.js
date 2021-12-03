(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tag-view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Tag.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product/Tag.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editmode: false,
      tags: {},
      form: new Form({
        id: '',
        name: ''
      })
    };
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get('/api/tag?page=' + page).then(function (_ref) {
        var data = _ref.data;
        return _this.tags = data.data;
      });
      this.$Progress.finish();
    },
    updateTag: function updateTag() {
      var _this2 = this;

      this.$Progress.start(); // console.log('Editing data');

      this.form.put('/api/tag/' + this.form.id).then(function (response) {
        // success
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this2.$Progress.finish(); //  Fire.$emit('AfterCreate');


        _this2.loadTags();
      })["catch"](function () {
        _this2.$Progress.fail();
      });
    },
    editModal: function editModal(tag) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(tag);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    loadTags: function loadTags() {
      var _this3 = this;

      if (this.$gate.isAdmin()) {
        axios.get("/api/tag").then(function (_ref2) {
          var data = _ref2.data;
          return _this3.tags = data.data;
        });
      }
    },
    createTag: function createTag() {
      var _this4 = this;

      this.form.post('/api/tag').then(function (response) {
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this4.$Progress.finish();

        _this4.loadTags();
      })["catch"](function () {
        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  created: function created() {
    this.$Progress.start();
    this.loadTags();
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Tag.vue?vue&type=template&id=1277e5aa&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product/Tag.vue?vue&type=template&id=1277e5aa& ***!
  \*********************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-12" }, [
          _vm.$gate.isAdmin()
            ? _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h3", { staticClass: "card-title" }, [_vm._v("Tag List")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-tools" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.newModal },
                      },
                      [
                        _c("i", { staticClass: "fa fa-plus-square" }),
                        _vm._v(
                          "\n                    Add New\n                "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body table-responsive p-0" }, [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.tags.data, function (tag) {
                        return _c("tr", { key: tag.id }, [
                          _c("td", [_vm._v(_vm._s(tag.id))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-capitalize" }, [
                            _vm._v(_vm._s(tag.name)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(tag.created_at))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function ($event) {
                                    return _vm.editModal(tag)
                                  },
                                },
                              },
                              [_c("i", { staticClass: "fa fa-edit blue" })]
                            ),
                          ]),
                        ])
                      }),
                      0
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-footer" },
                  [
                    _c("pagination", {
                      attrs: { data: _vm.tags },
                      on: { "pagination-change-page": _vm.getResults },
                    }),
                  ],
                  1
                ),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      !_vm.$gate.isAdmin() ? _c("div", [_c("not-found")], 1) : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "addNew",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "addNew",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.editmode,
                          expression: "!editmode",
                        },
                      ],
                      staticClass: "modal-title",
                    },
                    [_vm._v("Create New Tag")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editmode,
                          expression: "editmode",
                        },
                      ],
                      staticClass: "modal-title",
                    },
                    [_vm._v("Update Tag")]
                  ),
                  _vm._v(" "),
                  _vm._m(1),
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        _vm.editmode ? _vm.updateTag() : _vm.createTag()
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Name")]),
                          _vm._v(" "),
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
                            attrs: { type: "text", name: "name" },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
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
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editmode,
                              expression: "editmode",
                            },
                          ],
                          staticClass: "btn btn-success",
                          attrs: { type: "submit" },
                        },
                        [_vm._v("Update")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.editmode,
                              expression: "!editmode",
                            },
                          ],
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" },
                        },
                        [_vm._v("Create")]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/product/Tag.vue":
/*!********************************************!*\
  !*** ./resources/js/views/product/Tag.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tag_vue_vue_type_template_id_1277e5aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.vue?vue&type=template&id=1277e5aa& */ "./resources/js/views/product/Tag.vue?vue&type=template&id=1277e5aa&");
/* harmony import */ var _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.vue?vue&type=script&lang=js& */ "./resources/js/views/product/Tag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tag_vue_vue_type_template_id_1277e5aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tag_vue_vue_type_template_id_1277e5aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product/Tag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/product/Tag.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/product/Tag.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Tag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product/Tag.vue?vue&type=template&id=1277e5aa&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/product/Tag.vue?vue&type=template&id=1277e5aa& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_1277e5aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tag.vue?vue&type=template&id=1277e5aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Tag.vue?vue&type=template&id=1277e5aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_1277e5aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_1277e5aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);