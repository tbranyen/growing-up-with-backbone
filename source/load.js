// Scope inline CSS.
ScopedCss.applyTo(document.body);

// Activate all rendered components.
Backbone.Component.activateAll($("body"));

// Prevents weird animations from happening on page load.
document.addEventListener("DOMContentLoaded", function() {
  if (!location.hash) {
    location.hash = 1;
  }

  window.setTimeout(function() {
    document.body.classList.remove("preload");
  }, 50);
});

// Enable left/right controls.
document.addEventListener("keyup", function(evt) {
  var keyCode = evt.keyCode;
  var index = Number(location.hash.slice(1)) || 1;
  var slideItems = document.querySelectorAll("slide-item");
  var isLeft = keyCode === 37;

  // If the left button, right button, or space button (acting like right) are
  // pressed, update the location.
  if (isLeft || keyCode === 39 || keyCode === 32) {
    // Increment or decrement based on the direction.
    index = index - (isLeft ? 1 : -1);

    // Never below 0.
    index = index < 1 ? 1 : index;
    // Never greater than the number of items.
    index = index > slideItems.length ? slideItems.length : index;

    // Update with the correct index.
    location.hash = index;
  }
}, true);
