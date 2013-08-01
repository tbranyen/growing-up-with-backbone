Decorators, melting pot example.
================================

``` markup
<style>
details {
    decorator: url(#details-closed);
}
details[open] {
    decorator: url(#details-open);
}
</style>

<decorator id="details-closed">
    <script>
        function clicked(event) {
            event.target.setAttribute('open', 'open');
        }
        [{selector: '#summary', type: 'click', handler: clicked}];
    </script>
    <template>
        <a id="summary">
            &blacktriangleright; <content select="summary"></content>
        </a>
    </template>
</decorator>

<decorator id="details-open">
    <!-- as illustrated above -->
```

<style scoped>
  @host {
    background: hsl(0, 51%, 56%);
    color: #FFF;
  }
</style>
