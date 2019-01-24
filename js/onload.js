
/*** Globals ***/
function isIndex() {
  if ((window.location.pathname).indexOf('index.html') != -1 || window.location.pathname == '/') {
    return true;
  }
  else {
    return false;
  }
}

if (isIndex()) { var prepend = ''; }
else { var prepend = ''; }


var commonLibs = [
  'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.5/vue.min.js',
]

var personalScripts = [
  prepend + 'js/script.js'
]

var stylesheets = [
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  prepend + 'css/styles.css',
]

/*** Entry point to load common files ***/
function init() {
  // Adding all the header tags here for the sake of simpler html files
  document.title = 'David Senerchia'

  var meta = document.createElement('meta');
  meta.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(meta);

  meta = document.createElement('meta');
  meta.httpEquiv = 'X-UA-Compatible';
  meta.content = 'IE=edge,chrome=1';
  document.getElementsByTagName('head')[0].appendChild(meta);

  meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.getElementsByTagName('head')[0].appendChild(meta);

  // Adding all scripts
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
  script.onload = function() {
    for (var i = 0; i < stylesheets.length; i++) {
      loadStylesheet(stylesheets[i], 'head')
    }

    for (var i = 0; i < commonLibs.length; i++) {
      // Load the personal scripts last, after the other scripts have been added
      if (i == (commonLibs.length - 1)) {
        loadScript(commonLibs[i], 'head', function() {
          for (var i = 0; i < personalScripts.length; i++) {
            loadScript(personalScripts[i], 'body')
          }
        });
      }
      else {
        loadScript(commonLibs[i], 'head')
      }
    }
  };
  document.getElementsByTagName('head')[0].appendChild(script);
}

/*** Appends a script tag document ***/
function loadScript(url, tag, onloadFn) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  if (onloadFn) {
    script.onload = onloadFn;
  }
  document.getElementsByTagName(tag)[0].appendChild(script);
}

function loadStylesheet(url, tag) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.getElementsByTagName(tag)[0].appendChild(link);
}

init();
