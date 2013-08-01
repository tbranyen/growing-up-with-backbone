Universal Module Definition
===========================

``` javascript
(function(window, factory) {
  if (typeof exports === "object") {
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // enviroments that support module.exports, like Node.
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // Allow using this built library as an AMD module in another project. That
    // other project will only see this AMD call, not the internal modules in
    // the closure below.
    define(factory);
  } else {
    // Browser globals case. Just assign the result to a property on the
    // global.
    window.WebApp = factory();
  }
}(this, function() {

  // Your code goes here.

}));
```

<style scoped>
  @host {
    background-color: #5CB14C;
    color: #FFF;
  }
</style>

<script type="none" slide-notes>
No wonder why nobody wants to do write cross compatible modules in JavaScript.
</script>
