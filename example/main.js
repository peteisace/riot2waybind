"use strict"

var Person = require('./person.js');
var BindingMixin = require('../BindingMixin.js');
var p = new Person();

var tags = riot.mount('edit-person', { model: p });
window.mixin = BindingMixin;

