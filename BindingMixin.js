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