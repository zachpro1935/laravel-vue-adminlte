(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Products.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product/Products.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      editmode: false,
      products: {},
      form: new Form({
        id: '',
        category: '',
        name: '',
        description: '',
        tags: [],
        photo: '',
        category_id: '',
        price: '',
        photoUrl: ''
      }),
      categories: [],
      tag: '',
      autocompleteItems: []
    };
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get('api/product?page=' + page).then(function (_ref) {
        var data = _ref.data;
        return _this.products = data.data;
      });
      this.$Progress.finish();
    },
    loadProducts: function loadProducts() {
      var _this2 = this;

      // if(this.$gate.isAdmin()){
      axios.get("api/product").then(function (_ref2) {
        var data = _ref2.data;
        return _this2.products = data.data;
      }); // }
    },
    loadCategories: function loadCategories() {
      var _this3 = this;

      axios.get("/api/category/list").then(function (_ref3) {
        var data = _ref3.data;
        return _this3.categories = data.data;
      });
    },
    loadTags: function loadTags() {
      var _this4 = this;

      axios.get("/api/tag/list").then(function (response) {
        _this4.autocompleteItems = response.data.data.map(function (a) {
          return {
            text: a.name,
            id: a.id
          };
        });
      })["catch"](function () {
        return console.warn('Oh. Something went wrong');
      });
    },
    editModal: function editModal(product) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(product);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    createProduct: function createProduct() {
      var _this5 = this;

      this.$Progress.start();
      this.form.post('api/product').then(function (data) {
        if (data.data.success) {
          $('#addNew').modal('hide');
          Toast.fire({
            icon: 'success',
            title: data.data.message
          });

          _this5.$Progress.finish();

          _this5.loadProducts();
        } else {
          Toast.fire({
            icon: 'error',
            title: 'Some error occured! Please try again'
          });

          _this5.$Progress.failed();
        }
      })["catch"](function () {
        Toast.fire({
          icon: 'error',
          title: 'Some error occured! Please try again'
        });
      });
    },
    updateProduct: function updateProduct() {
      var _this6 = this;

      this.$Progress.start();
      this.form.put('api/product/' + this.form.id).then(function (response) {
        // success
        $('#addNew').modal('hide');
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });

        _this6.$Progress.finish(); //  Fire.$emit('AfterCreate');


        _this6.loadProducts();
      })["catch"](function () {
        _this6.$Progress.fail();
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this7 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        // Send request to the server
        if (result.value) {
          _this7.form["delete"]('api/product/' + id).then(function () {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success'); // Fire.$emit('AfterCreate');

            _this7.loadProducts();
          })["catch"](function (data) {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      });
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.$Progress.start();
    this.loadProducts();
    this.loadCategories();
    this.loadTags();
    this.$Progress.finish();
  },
  filters: {
    truncate: function truncate(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this8 = this;

      return this.autocompleteItems.filter(function (i) {
        return i.text.toLowerCase().indexOf(_this8.tag.toLowerCase()) !== -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Products.vue?vue&type=template&id=6d9964ba&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product/Products.vue?vue&type=template&id=6d9964ba& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Product List")]),
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
                    _vm._v("\n                    Add New\n                "),
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
                  _vm._l(_vm.products.data, function (product) {
                    return _c("tr", { key: product.id }, [
                      _c("td", [_vm._v(_vm._s(product.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("truncate")(product.description, 30, "...")
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.category.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.price))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.editModal(product)
                              },
                            },
                          },
                          [_c("i", { staticClass: "fa fa-edit blue" })]
                        ),
                        _vm._v(
                          "\n                      /\n                      "
                        ),
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.deleteProduct(product.id)
                              },
                            },
                          },
                          [_c("i", { staticClass: "fa fa-trash red" })]
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
                  attrs: { data: _vm.products },
                  on: { "pagination-change-page": _vm.getResults },
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
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
                    [_vm._v("Create New Product")]
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
                    [_vm._v("Edit Product")]
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
                        _vm.editmode ? _vm.updateProduct() : _vm.createProduct()
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
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.description,
                                expression: "form.description",
                              },
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("description"),
                            },
                            attrs: { type: "text", name: "description" },
                            domProps: { value: _vm.form.description },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "description",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "description" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Price")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.price,
                                expression: "form.price",
                              },
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("price"),
                            },
                            attrs: { type: "text", name: "price" },
                            domProps: { value: _vm.form.price },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "price", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "price" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.category_id,
                                  expression: "form.category_id",
                                },
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "category_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            _vm._l(_vm.categories, function (cat, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: {
                                    value: index,
                                    selected: index == _vm.form.category_id,
                                  },
                                },
                                [_vm._v(_vm._s(cat))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "category_id" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Tags")]),
                          _vm._v(" "),
                          _c("vue-tags-input", {
                            attrs: {
                              tags: _vm.form.tags,
                              "autocomplete-items": _vm.filteredItems,
                            },
                            on: {
                              "tags-changed": function (newTags) {
                                return (_vm.form.tags = newTags)
                              },
                            },
                            model: {
                              value: _vm.form.tag,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "tag", $$v)
                              },
                              expression: "form.tag",
                            },
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "tags" },
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
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
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

/***/ "./resources/js/views/product/Products.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/product/Products.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_6d9964ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=6d9964ba& */ "./resources/js/views/product/Products.vue?vue&type=template&id=6d9964ba&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/product/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_6d9964ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_6d9964ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/product/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/product/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product/Products.vue?vue&type=template&id=6d9964ba&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/product/Products.vue?vue&type=template&id=6d9964ba& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6d9964ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=6d9964ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product/Products.vue?vue&type=template&id=6d9964ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6d9964ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6d9964ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);