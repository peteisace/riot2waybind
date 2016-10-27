# riot2waybind
A custom mixin for the AWESOME riotjs. This enables two-way binding for riotjs. Quite simply: once the tag is mounted, the mixin will look through the properties of the bound object. if it can find the DOM elements in the tag bound to each property, it will store a custom binding object on the DOM element. Then onblur: i.e. moving away from the element, we handle the event. Take the element object, retrieve the custom binding object and feed the value of the DOM object back into the model and update the tag.

Took < 1 hour to write, but it actually works: Two-way binding is now integrated into riot with a single line of code:

this.mixin(BindingMixin);

:)

pete. 

EXAMPLE:

To run the example you'll need:

    i) Browserify (to have the mixin available in the browser)
    ii) Bower (for riot itself)
    iii) Serve (to run the example)


Instructions:

i) Clone the repository

    git clone https://github.com/peteisace/riot2waybind.git

ii) Install the dependent node modules

    (i haven't done a dry run, you may need to install bower globally)

    npm install

iii) Run bower

    bower install

iv) Run Browserify

    Browserify example/main.js -o example/bundle.js

v) Serve it

    serve .

    (then browse to http://localhost:3000/example/index.html)

let me know if you have any problems.

Thx,

Pete. 