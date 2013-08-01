Making your JavaScript as small as possible and still debuggable.
=================================================================

<img src="images/network.png">

<span class="styled">VVVV</span>

<img src="images/debug.png">

<style scoped>
  @host {
    background-color: hsl(192, 34%, 43%);
  }

  h1 {
    color: #FFF;
  }

  .styled {
    color: #FFF;
    opacity: .4;
    opacity: .4;
  }

  pre {
    min-width: 0 !important;
  }
</style>

<script type="none" slide-notes>
Source Maps support:

Shaky at best right now.  Two different implementations:

https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit

The generated code may include a line at the end of the source, with the following form:

//# sourceMappingURL=<url>

Note: The prefix for this annotation was initially “//@” however this conflicts with Internet Explorer’s Conditional Compilation and was changed to “//#”.  It is reasonable for tools to also accept “//@” but “//#” is preferred.



* Django: https://github.com/miracle2k/webassets
* Rails: https://github.com/rails/sprockets-rails/ (Not much information on it).
* Node: https://github.com/mishoo/UglifyJS2
</script>
