![](https://github.com/tbranyen/growing-up-with-backbone/raw/master/images/splash.png)

About
-----

This is a talk about structuring your application using modern tools and how to
futher enhance using ES6 modules (today) and the concept of Web Components
(templates, scoped css, and custom elements).

View the slides.
----------------

To view the slides, simply point a web server to the root directory.

Example:

``` bash
# After running this under Python 3.x, open: http://localhost:8000/
python -m http.server
```

Writing your own slides.
------------------------

``` bash
# Install the dependencies.
npm install

# Ensure `grunt-cli` is installed globally.  You may need to use sudo to gain
# elevated privileges.
npm install -g 

# Build the slides and run the slide server.
grunt
```

License
-------

MIT
