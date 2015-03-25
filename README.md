**OSX**
+ **[BetterTouchTool](http://www.bettertouchtool.net/)**
+ **[Dropbox](https://www.dropbox.com/home)**
  + https://www.dropbox.com/install?os=mac
+ **Terminal Commands**
  + `sudo rm -rf /Applications/iTunes.app`
  + Set dock to never come out `defaults write com.apple.dock autohide-delay -float 10.0;killall Dock`
  + Change cursor speed `defaults write NSGlobalDomain KeyRepeat -int 2 && defaults write NSGlobalDomain InitialKeyRepeat -int 20`
  + Link Atom settings from dropbox: `rm -r ~/.atom; ln -s ~/Dropbox/dev/config/atom ~/.atom`
  + Link Pry aliases `ln -s ~/Dropbox/dev/config/pry/pryrc ~/.pryrc`
  + Link Slate config from dropbox: `ln -s ~/Dropbox/dev/config/slate/keymap.cson ~/.slate.js`
  + Link PianoBar login: `mkdir -p ~/.config; ln -s ~/Dropbox/dev/config/pianobar ~/.config`
+ **Xcode**
  + https://developer.apple.com/downloads/index.action?name=Xcode
+ **[Atom](https://atom.io/)**
  + Packages
    + atom-lint
    + autocomplete-paths
    + autocomplete-plus
    + color-picker
    + git-blame
    + highlight-line
    + keybinding-cheatsheet
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
      + command + up --> Scroll To Top
      + command + down --> Scroll To End
      + option + up --> Scroll One Line Up
      + option + down --> Scroll One Line Down
+ **[z-shell](https://github.com/robbyrussell/oh-my-zsh)**
    + `curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh`
+ **[Homebrew](http://brew.sh/)**
  + ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  + `brew install libxml2 readline`
  + `brew install rbenv ruby-build`
  + `brew install rbenv-gem-rehash`
  + `brew install node`
  + `brew install pianobar`
  + `brew install cabal-install`
  + `brew install shellcheck`
+ **[Ruby](https://www.ruby-lang.org/en/)**
  + `rbenv install stable`
  + `rbenv global [version installed]`
  + `gem install bundler && bundle`
  + `gem install rails`
+ **[node](https://nodejs.org/)**
  + `npm install express`
+ **[cDock](http://sourceforge.net/projects/cdock/)**
  + Dock theme: Dark
  + Icon Size: 40
+ **[Alfred 2](http://www.alfredapp.com/)**
  + hotkey: command + space
+ **[Slate](http://pythonhackers.com/p/jigish/slate)**
  + `cd /Applications && curl http://www.ninjamonkeysoftware.com/slate/versions/slate-latest.tar.gz | tar -xz`
  + `touch ~/.slate.js`
+ **System Preferences**
  + Spotlight
    + Spotlight search keyboard shortcut: uncheck
