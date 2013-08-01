var SlideItem = Backbone.Component.extend({
  // Custom slide-item element.
  tagName: "slide-item",

  // Remote assets that are necessary to create a cohesive bundle.
  template: "components/slide-item/template.html",
  style: "components/slide-item/style.css",

  // This will compare the hash location to the current element's ID and if it
  // matches, will automatically clear the console and display the relevant
  // speaker notes.
  showSpeakerNotes: function() {
    var notes = this.$("[slide-notes]").html();

    // Determine if this is the correct slide. 
    if (location.hash.slice(1) === this.$el.attr("id")) {
      // Empty the console
      console.clear();

      var html = $.trim(this.$("[slide-notes]").html());

      // Display the speaker notes for this slide.
      console.log(notes ? html : "Good luck; look ma' no hands!");
    }
  },

  // Remove the global hashchange event listener if this slide is destroyed.
  cleanup: function() {
    window.removeEventListener("hashchange", this.boundShowSpeakerNotes);
  },

  initialize: function() {
    var view = this;

    // Create a bound event listener that can be unbound later.
    this.boundShowSpeakerNotes = this.showSpeakerNotes.bind(this);

    // Want to show speaker notes here.
    window.addEventListener("hashchange", this.boundShowSpeakerNotes);

    // Show the current slide that is active on load.
    this.showSpeakerNotes();
  }
});

Backbone.Component.register(SlideItem);
