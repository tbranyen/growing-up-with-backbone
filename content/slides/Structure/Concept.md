# The concept behind building your application instead of delivering it raw is that you get a smaller bundle and more easily distribute more maintainable code.

<img src="images/gruntjs.png">

<style scoped>
  @host {
    background-color: hsl(192, 65%, 26%);
    color: #FFF;
  }

  img {
    border: none;
  }
</style>

<script type="none" slide-notes>
- Not new to a lot of developers who are already using
  transpilers/preprocessors.

- If you are new to something like this, it can seem rather daunting since you
  are either at the whim of your server guys who are deploying or rolling your
  own thing even though something that probably already does it exists.

- I greatly recommend using something like Grunt.  I've used Jake, Make, and
  rolled my own builder in the past.  I've found that Grunt was written by
  someone doing the tasks we need to do.

- Talking about Grunt rest of the slides since that's what Backbone Boilerplate
  uses and what I'm committed to using.
</script>
