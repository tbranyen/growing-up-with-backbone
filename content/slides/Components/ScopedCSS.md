Scoped CSS.
===========

Currently part of the HTML5 specification.

Inline scoped CSS.

``` markup
<h1>Hi</h1>
<div>
  <h1>You</h1>
  <style scoped>
    h1 { color: red; }
  </style>
</div>
```

Dynamically scoped CSS.

``` javascript
new ScopedCss(".some-selector", "someCss").appendTo($("body"));
```

<style scoped>
  @host {
    background: #FFF;
    color: #333;
  }

  pre {
    width: 100%;
  }

  pre code {
    line-height: 23px;
  }
</style>
