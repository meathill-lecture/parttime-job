import { getSearchParams, load } from './helper';

let query = getSearchParams(location.search);

Reveal.initialize({
  history: true,
  controls: 'controls' in query ? query.controls : true,
  transition: query.transition || 'slide',
  dependencies: [
    {
      src: BASE_DIR + '/plugin/markdown/marked.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: BASE_DIR + '/plugin/markdown/markdown.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: BASE_DIR + '/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});

if (query.print) {
  load(BASE_DIR + '/css/print/pdf.css');
}

if (query.platform) {
  document.body.classList.add(query.platform);
}
