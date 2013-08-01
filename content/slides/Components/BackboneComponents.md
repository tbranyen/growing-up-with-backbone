Dynamic Components.
===================

An alternative to piecing together DOM snippets to define a dynamic component,
take it more 

``` javascript
var MyComponent = Backbone.Component.extend({
  // Define a custom element or selector.
  tagName: "my-component",

  // Custom styles to be applied only to this component.
  style: "@host { font-weight: bold; } p { color: red; }",

  // Bind DOM events to only instances of this component.
  events: {
    "click p": "showAlert"
  },

  // Event handlers are exactly the same as Backbone.View.
  showAlert: function(ev) {
    alert(ev.target.innerHTML);
  }
});
```

<style scoped>
  @host {
    background: hsl(0, 60%, 66%);
    color: #FFF;
  }

  pre {
    width: 100%;
  }

  pre code {
    line-height: 23px;
  }
</style>
