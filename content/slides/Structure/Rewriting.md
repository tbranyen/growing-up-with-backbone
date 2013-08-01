Rewriting sources.
==================

A common task is being able to rewrite your development source from your
production source.  This is especially true when using something like
RequireJS.

``` bash
npm install grunt-processhtml
```

``` markup
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>GitHub Viewer</title>

  <!-- Application styles. -->
  <!-- build:[href] /styles.css -->
  <link rel="stylesheet" href="/app/styles/index.css">
  <!-- /build -->
</head>

<body>
  <!-- Application container. -->
  <main role="main" id="main"></main>

  <!-- Application source. -->
  <!-- build:[src] /source.min.js -->
  <script data-main="/app/main" src="/vendor/bower/requirejs/require.js"></script>
  <!-- /build -->
</body>
</html>
```

<style scoped>
  @host {
    background-color: hsl(192, 43%, 34%);
  }

  pre {
    width: 900px;
  }
</style>

<script type="none" slide-notes>
- Plugin: https://github.com/dciccale/grunt-processhtml

- There are other completely valid ways of doing this, I've just found it works
  incredibly well (since I've already been using something similar, called
  grunt-targethtml).

- Main benefit is that you can stay in HTML and do not require any special
  processing of your HTML during development.
</script>
