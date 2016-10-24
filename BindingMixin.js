 var BindingMixin = {
           
            init: function() {
                // here we will create our binding map.                
                this.target = this.opts

                // check to see if we have a model property also. 
                if(this.opts['model'] != null) {                    
                    this.target = this.opts.model;
                } 
                
                var bindings = [];
                
                // loop through.
                for(var prop in this.target) {                    
                    if(this[prop] != null) {
                        // if we see a match, it's probably a binding.
                        // so let's get the element.                        
                        var element = this[prop];

                        // now let's add an event to it
                        element.onchange = function() {
                            alert('in onChange');
                            var currentValue = element.value;
                            alert('trying to set this.target[' + prop + '] to ' + currentValue); 

                            this.target[prop] = currentValue;

                            return true;
                        };
                    }                     
                }
            }
        }