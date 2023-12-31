/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/retris_bg.wasm": function() {
/******/ 			return {
/******/ 				"./retris_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_cursivewrapper_new": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_cursivewrapper_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_paint_a0878618a129a2b1": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_paint_a0878618a129a2b1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_9029196b662bc42a": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_instanceof_Window_9029196b662bc42a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_f7ace2b956f30a4f": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_document_f7ace2b956f30a4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_setTimeout_eb1a0d116c26d9f6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_setTimeout_eb1a0d116c26d9f6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_cc0e0d931b0d9a28": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_getElementById_cc0e0d931b0d9a28"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_5651108fc3ffeb6e": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_addEventListener_5651108fc3ffeb6e"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_settitle_8e7b5cc7fffc5477": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_settitle_8e7b5cc7fffc5477"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_keyCode_dfa86be31f5ef90c": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_keyCode_dfa86be31f5ef90c"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_a667a942dba6656e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_setwidth_a667a942dba6656e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setheight_a747d440760fe5aa": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_setheight_a747d440760fe5aa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_c48a774b022d20ac": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_crypto_c48a774b022d20ac"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_process_298734cf255a885d": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_process_298734cf255a885d"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_e2e78e134e3e5d01": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_versions_e2e78e134e3e5d01"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_1cd7a5d853dbea79": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_node_1cd7a5d853dbea79"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_bcb970640f50a1e8": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_msCrypto_bcb970640f50a1e8"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_8f08ceecec0f4fee": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_require_8f08ceecec0f4fee"]();
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_37fa2ca9e4e07fab": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_getRandomValues_37fa2ca9e4e07fab"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_dc1e9a60c158336d": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_randomFillSync_dc1e9a60c158336d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_581967eacc0e2604": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_newnoargs_581967eacc0e2604"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_cb65541d95d71282": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_call_cb65541d95d71282"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_self_1ff1d729e9aae938": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_self_1ff1d729e9aae938"]();
/******/ 					},
/******/ 					"__wbg_window_5f4faef6c12b79ec": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_window_5f4faef6c12b79ec"]();
/******/ 					},
/******/ 					"__wbg_globalThis_1d39714405582d3c": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_globalThis_1d39714405582d3c"]();
/******/ 					},
/******/ 					"__wbg_global_651f05c6a0944d1c": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_global_651f05c6a0944d1c"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_01734de55d61e11d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_call_01734de55d61e11d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_now_9c5990bda04c7e53": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_now_9c5990bda04c7e53"]();
/******/ 					},
/******/ 					"__wbg_new_43f1b47c28813cbd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_new_43f1b47c28813cbd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_53698b95aaf7fcf8": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_resolve_53698b95aaf7fcf8"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_f7e06ee3c11698eb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_then_f7e06ee3c11698eb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_b2267541e2a73865": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_then_b2267541e2a73865"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_085ec1f694018c4f": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_buffer_085ec1f694018c4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_6da8e527659b86aa": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_newwithbyteoffsetandlength_6da8e527659b86aa"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_8125e318e6245eed": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_new_8125e318e6245eed"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_5cf90238115182c3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_set_5cf90238115182c3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_e5d69174d6984cd7": function(p0i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_newwithlength_e5d69174d6984cd7"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_13db269f57aa838d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbg_subarray_13db269f57aa838d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper145": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_closure_wrapper145"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper266": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_closure_wrapper266"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper574": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/retris_bg.js"].exports["__wbindgen_closure_wrapper574"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/retris_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/retris_bg.wasm":"f150cf31f7704b1bef06"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });