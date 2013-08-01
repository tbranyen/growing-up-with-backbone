Never modify state of your objects inside the root application object.
==============================

<style scoped>
  @host {
    background-color: #84D374;
    color: #FFF;
  }
</style>

<script type="none" slide-notes>
  - This will affect testing and cause weird effects.

  - Unless you're patching other libraries that aren't being tested like
    Backbone.
</script>
