****OSX****
+ **[Dropbox](https://www.dropbox.com/home)**
  + https://www.dropbox.com/install?os=mac
+ **[BetterTouchTool](http://www.bettertouchtool.net/)**
+ **Xcode**
  + https://developer.apple.com/downloads/index.action?name=Xcode
+ **[Homebrew](http://brew.sh/)**
  + `which brew || ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" | ruby`
  + `brew install libxml2 readline`
    `brew install git`
  + `brew install rbenv ruby-build`
  + `brew install rbenv-gem-rehash`
  + `brew install node`
  + `brew install pianobar`
+ **[Ruby](https://www.ruby-lang.org/en/)**
  + `rbenv install stable`
  + `rbenv global [version installed]`
  + `gem install bundler && bundle`
  + `gem install rails`
+ **[node](https://nodejs.org/)**
  + `npm install express`
+ **[z-shell](http://www.zsh.org/)**
    + `url -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh`
+ **[Atom](https://atom.io/)**
  + Packages
    + atom-lint
    + autocomplete-plus
    + color-picker
    + highlight-line
      + Enable Underline
      + Hide Highlight On Select
    + keybinding-cheatsheet
    + autocomplete-paths
    + merge-conflicts

+ **[iTerm2](http://iterm2.com/)**
  + keybindings
    + load dropbox profile: `Preferences --> load from /Users/thooper/Dropbox/dev/config/iterm2`
      + option + delete --> Send Hex Codes: 0x1b 0x08
      + control + option + up --> Select Split Plane Above
      + control + option + down --> Select Split Plane Below
      + control + option + left --> Select Split Plane on Left
      + control + option + right --> Select Split Plane on Right
      + command + up --> Scroll One Line Up
      + command + down --> Scroll One Line Down
      + option + left --> Send ^[b
      + option + right --> Send ^[f
      + option + command + left --> Previous Tab
      + option + command + right --> Next Tab
      + control + option + command + left --> Move Tab Left
      + control + option + command + right --> Move Tab Right
      + command + left --> Send Hex Codes: 0x01
      + command + right --> Send Hex Codes: 0x05
      + command + delete --> Send Hex Codes: 0x15
+ **[cDock](http://sourceforge.net/projects/cdock/)**
  + Dock theme: Dark
  + Icon Size: 40
+ **[Alfred 2](http://www.alfredapp.com/)**
  + hotkey: command + space
+ **[Slate](http://pythonhackers.com/p/jigish/slate)**
  + `cd /Applications && curl http://www.ninjamonkeysoftware.com/slate/versions/slate-latest.tar.gz | tar -xz`
  + `touch ~/.slate.js`
+ **Terminal Commands**
  + `sudo rm -rf /Applications/iTunes.app`
  + Set dock to never come out `defaults write com.apple.dock autohide-delay -float 10.0;killall Dock`
  + Change cursor speed `defaults write NSGlobalDomain KeyRepeat -int 2 && defaults write NSGlobalDomain InitialKeyRepeat -int 20`
  + Link Atom keybindings from dropbox: `ln -s ~/Dropbox/dev/config/atom/keymap.cson ~/.atom/keymap.cson`
  + Link Slate config from dropbox: `ln -s ~/Dropbox/dev/config/slate/keymap.cson ~/.atom/keymap.cson`
+ **System Preferences**
  + Spotlight
    + Spotlight search keyboard shortcut: uncheck
