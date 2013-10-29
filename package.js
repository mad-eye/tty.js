Package.describe({
  summary: "Include tty.js"
});

Package.on_use(function (api, where) {
  api.add_files(["static/style.css", "static/term.js", "static/tty.js"], "client");
  api.export('tty', 'client');
});
