// Basic mappings and bindings for moving screens around

// Global configs: https://github.com/jigish/slate/wiki/Global-Configs
// Layouts doc: https://github.com/jigish/slate/wiki/Layouts
// Some examples: https://github.com/mikegrb/slate.js/blob/master/.slate.js
//                https://github.com/jigish/dotfiles/blob/master/slate.js
//                https://github.com/krismolendyke/slate.js/blob/master/slate.js


// CONFIGS
S.configAll({
  "defaultToCurrentScreen": true,
  "orderScreensLeftToRight" : true
});

// Monitors (external up, internal down)
var externalScreen = "0",
    internalScreen = "1";


// OPERATIONS

// fullscreen
var fullscreen = S.operation("move", {
  "x"     : "screenOriginX",
  "y"     : "screenOriginY",
  "width" : "screenSizeX",
  "height": "screenSizeY"
});

// fullscreen in external monitor
var fullscreenExternal = S.operation("move", {
  "screen": externalScreen,
  "x"     : "screenOriginX",
  "y"     : "screenOriginY",
  "width" : "screenSizeX",
  "height": "screenSizeY"
});

// left half screen
var leftHalf = S.operation("move", {
  "x"     : "screenOriginX",
  "y"     : "screenOriginY",
  "width" : "screenSizeX/2",
  "height": "screenSizeY"
});

// right half screen
var rightHalf = S.operation("move", {
  "x"     : "screenOriginX+screenSizeX/2",
  "y"     : "screenOriginY",
  "width" : "screenSizeX/2",
  "height": "screenSizeY"
});


// LAYOUTS
var externalMonitorLayout = slate.layout("externalMonitor", {
  "iTerm": {
    "operations": [function(windowObject) {
      windowObject.doOperation(fullscreen);
    }],
    "ignore-fail": true,
    "repeat"     : true
  },
  "Google Chrome": {
    "operations": [function(windowObject) {
      windowObject.doOperation(fullscreen);
    }],
    "ignore-fail": true,
    "repeat"     : true
  },
  "Atom": {
    "operations": [function(windowObject) {
      windowObject.doOperation(fullscreen);
    }],
    "ignore-fail": true,
    "repeat"     : true
  },
  "Sequel Pro": {
    "operations": [function(windowObject) {
      windowObject.doOperation(fullscreen);
    }],
    "ignore-fail": true,
    "repeat"     : true
  },
});


slate.eachApp(function(appObject) {
  slate.log(appObject.name() );
});

// DEFAULTS
// default the layout so it activates when I plug in an external monitor.
slate.default(2, externalMonitorLayout);
