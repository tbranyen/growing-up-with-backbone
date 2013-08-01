(function(window, factory) {
  

  if (typeof exports === "object") {
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // enviroments that support module.exports, like Node.
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // Allow using this built library as an AMD module in another project. That
    // other project will only see this AMD call, not the internal modules in
    // the closure below.
    define(factory);
  } else {
    // Browser globals case. Just assign the result to a property on the
    // global.
    window.ScopedCss = factory();
  }
}(this, function() {
  



  // Single rule definition abstraction.
  var CssRule = function(cssRule, index) {
    this.rule = cssRule;
    this.index = index;
  };

  CssRule.prototype.applyPrefix = function(prefix) {
    var selectorText = this.rule.selectorText;
    var parentStyleSheet = this.rule.parentStyleSheet;
    var cssText = this.rule.cssText;

    // Coerce to single quotes.
    selectorText = selectorText.replace(/\"/g, "'");

    // Don't scope if it's the same selector.
    if (selectorText.indexOf(prefix) !== 0) {
      this.rule.selectorText = prefix + " " + selectorText;

      // Unable to write to the rule selector.
      if (this.rule.selectorText === selectorText) {
        parentStyleSheet.deleteRule(this.index);
        parentStyleSheet.insertRule(prefix + " " + cssText, this.index);
      }
    }
  };

  


  // Load in the stylesheet.
  var StyleSheet = function(styleTag) {
    this.styleTag = styleTag;
  };

  StyleSheet.prototype.getStyleSheet = function() {
    return this.styleTag.sheet;
  };

  // Place the internal style elemeent in whatever host element is provided.
  StyleSheet.prototype.cssRules = function() {
    var rules = Array.prototype.slice.call(this.getStyleSheet().cssRules);

    return rules.map(function(rule, index) {
      return new CssRule(rule, index);
    }, this);
  };

  


  // The selectorPrefix is the selector to prefix all style rules with.  The
  // cssText is simply the raw CSS to process.  The styleTag is useful to pass
  // if you already have created it already and need to augment.  All of these
  // constructor arguments are optional.  You can set them at any time.
  var ScopedCss = function(selectorPrefix, cssText, styleTag) {
    this.selectorPrefix = selectorPrefix;
    this.cssText = cssText;

    // Default to an internal <style> tag if one wasn't passed.
    this.styleTag = styleTag || document.createElement("style");
  };

  // Prepare cssText before pumping into a style tag.
  ScopedCss.prototype.prepare = function(cssText) {
    // Swap out the `@host` for the `tagName`.
    return cssText.replace(/\@host/g, this.selectorPrefix);
  };

  // Lets try and make this compatible with as many browsers as possible.
  ScopedCss.prototype.process = function() {
    // Temporary preprecossing code.
    if (this.styleTag.innerHTML.length) {
      this.styleTag.innerHTML = this.prepare(this.styleTag.innerHTML);
    }

    var styleSheet = new StyleSheet(this.styleTag);
    var cssRules = styleSheet.cssRules();

    cssRules.forEach(function(rule) {
      rule.applyPrefix(this.selectorPrefix);
    }, this);
  };

  // Place the internal style elemeent in whatever host element is provided.
  ScopedCss.prototype.appendTo = function(hostElement) {
    // Set the contents of the style tag which will be parsed.
    this.styleTag.innerHTML = this.cssText;

    // Add the style tag to the parent.
    hostElement.appendChild(this.styleTag);

    // If both the selectorPrefix and cssText are set, process the scope.
    if (this.selectorPrefix && this.cssText) {
      this.process();
    }
  };

  // This is the default selector to look for when monitoring.
  ScopedCss.defaultSelector = ":not([data-scopedcss]) style[scoped]";

  // This will process a given region containing scoped styles.
  ScopedCss.applyTo = function(hostElement) {
    // Default to the body element.
    hostElement = hostElement || document.body;

    // Query for all the scoped style tags that have not already been
    // processed.
    var elements = document.querySelectorAll(this.defaultSelector);

    // Coerce to an Array and iterate.
    Array.prototype.slice.call(elements).forEach(function(element) {
      // Create a custom identifier for this element, since scoped doesn't
      // actually exist yet.
      var id = (+new Date() * Math.random()).toString(16);
      element.parentNode.setAttribute("data-scopedcss", id);

      // Create a new scoped stylesheet that we will replace the existing with.
      new ScopedCss("[data-scopedcss='" + id +"']", null, element).process();
    });
  };

    return ScopedCss;
}));
