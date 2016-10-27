(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var BindingMixin = (function() {

    var model = null;
    var tag = null;

    // initialize: "special function" will be called by the mixin call.        
    function init() {
        // decide on target
        var target = this.opts;

        // check the model.
        if(target['model'] != null) {
            target = target['model'];
        }

        // set our model
        model = target;
        tag = this;

        var bindings = [];
        
        // now we need to enumerate on the properties of the model.
        for(var prop in target) {
            //check to see if we have the control.
            if(this[prop] != null) {
                bindings.push({ tag: this, parent: target, property: prop, element: this[prop] });
            }
        }

        // and now with our bindings, let's add the function.
        bindings.forEach(function(binding) {
            binding.element.onblur = handleEvent;
            binding.element.riotBinding = binding;            
        }, this);
    }

    // event handler for when we change focus.
    function handleEvent() {
        // let's grab the binding out of our attribute.            
        var binding = this.riotBinding;
        // grab the value. TODO -> use custom function if required.
        var elementValue = this.value;
        // and now set the object.
        var target = binding.parent;
        target[binding.property] = elementValue;        
        // update...
        binding.tag.update();
    }

    return {
        init: init
    };
});

module.exports = BindingMixin;
},{}],2:[function(require,module,exports){
"use strict"

var Person = require('./person.js');
var BindingMixin = require('../BindingMixin.js');
var p = new Person();

var tags = riot.mount('edit-person', { model: p });
window.mixin = BindingMixin;


},{"../BindingMixin.js":1,"./person.js":3}],3:[function(require,module,exports){
function Person() {
    this.firstName = "firstName";
    this.lastName = "lastName";
    this.jobTitle = "jobTitle";
    this.address = "address";
};

module.exports = Person;
},{}]},{},[2]);
