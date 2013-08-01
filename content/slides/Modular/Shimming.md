Shimming.
=========

How would you load JavaScript that wasn't compatible with your module loader?

``` javascript
require.config({
  paths: {
    "some-plugin": "./path/to/some-plugin"
  },

  shim: {
    "some-plugin": {
      deps: ["jquery"],
      exports: "SomePlugin"
    }
  }
});
```

<style scoped>
  @host {
    background-color: #60B84F;
    color: #FFF;
  }
</style>

<script type="none" slide-notes>
  - Necessary because there is no other way to load this JS.

  1: Mapping the source to a friendly name.
  2: Using that friendly name to make a definition.

  - Effectively allows you to map global JavaScript to a module system.
</script>
