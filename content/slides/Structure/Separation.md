Third party rules.
==================

Separate <span class="your">your code</span> from any <span
class="third">third-party code</span> in your application.

``` markup
.
├── app
│   └── modules
└── vendor

3 directories, 0 files
```

<style scoped>
  @host {
    background-color: hsl(192, 64%, 29%);
    color: #FFF;
  }

  .your, .third {
    opacity: .5;
    text-decoration: underline;
  }

</style>

<script type="none" slide-notes>
- What you mean here is that there is a separation from where you are putting
  your modular code, from say, where a third party vendor's code is.

- This is useful for a number of reasons, including treating your code with a
  higher standard of quality by using stricter linting.  You may want to
  transpile your code from ES6 into AMD.  CoffeeScript into JavaScript.
  
- Keep it separate and globbing becomes much easier.
</script>
