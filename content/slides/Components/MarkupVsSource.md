Markup or Source driven definitions?
====================================

Can either be assembled in the client markup:

``` markup
<element>
  <template></template>
  <style></style>
  <script>({ someMethod: function() {} })</script>
</element>
```

Or can be assembled entirely in script:

``` javascript
Component.extend({
  template: "",
  style: "",

  // This is the script.
  someMethod: function() {}
});
```

<style scoped>
  @host {
    background: hsl(0, 49%, 48%);
    color: #FFF;
  }
</style>
