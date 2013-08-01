(function(window) {

"use strict";

var _ = window._;
var $ = window.jQuery;
var ScopedCss = window.ScopedCss;

// The View base class for the Component.
var Component = Backbone.Layout.extend({
  constructor: function(options) {
    if (!this.tagName) {
      throw new Error("tagName required to initialize component.");
    }

    // Ensure the View is correctly set up.
    Backbone.Layout.apply(this, arguments);
  },

  // FIXME Until shadow dom, keep content that's rendered.
  renderTemplate: function() {}, 

  afterRender: function() {
    // Seek out nested components and render them.
    Component.activateAll(this.$el);
  }
});

// Directly mix into the prototype.
_.extend(Component.prototype, {
  // By default the template property contains the contents of the template.
  fetchTemplate: function(path) {
    var done = this.async();

    // Fetch the template contents from the server, by a url.
    $.get(path, function(contents) {
      done(_.template(contents));
    }, "text")
  },

  // Fetch the CSS from the server.
  fetchStyle: function() {
    return $.get(this.style, $.noop, "text");
  }
});

// Augment the constructor.
_.extend(Component, {
  components: {},

  register: function(Component, identifier) {
    // Allow a manual override of the tagName to use.
    identifier = identifier || Component.prototype.tagName;

    // Create the scoped object outside of the fetch.
    var scopedStyles = new ScopedCss(Component.prototype.tagName);

    // Fetch CSS.
    Component.prototype.fetchStyle().then(function(cssText) {
      // Apply the CSS to be scoped.
      scopedStyles.cssText = scopedStyles.prepare(cssText);

      // Render scoped CSS to the Document body.
      scopedStyles.appendTo(document.body);
    });

    // Register a Component constructor, not an instance.
    return this.components[identifier] = Component;
  },

  unregister: function(identifier) {
    delete this.components[identifier];
  },

  activate: function($el) {
    var Component = this;

    // Convert all attributes on the Element into View properties.
    var attrs = _.reduce($el[0].attributes, function(attrs, attr) {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});

    // Associate the element as well.
    attrs.el = $el;

    // Create a new Component.
    var component = new Component(attrs);

    // By default use the template property provided, otherwise pull the
    // template contents from the DOM.
    if (!component.template) {
      component.template = _.template(_.unescape($el.html()));
    }

    // Now render and apply to the Document.
    component.render();
  },

  activateAll: function($el) {
    _.each(this.components, function(Component, tagName) {
      $el.children(tagName).each(function() {
        Component.activate($(this));
      });
    });
  }
});

Backbone.Component = Component;

})(this);
