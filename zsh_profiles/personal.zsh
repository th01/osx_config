#!/bin/zsh

# source $HOME/Dropbox/dev/zsh_profiles/personal.zsh

alias akeys="\$EDITOR ~/.atom/keymap.cson"
alias be='bundle exec'
alias cdz='cd $HOME/Dropbox/dev/config/zsh_profiles'
alias config='cd ~/Dropbox/dev/config'
alias dev='cd ~/Dropbox/dev/projects'
alias dropbox='cd ~/Dropbox'
alias g='git'
alias gco='git checkout'
alias gd='git diff'
alias gs='git status'
alias notes="\$EDITOR ~/Dropbox/notes"
alias pb='pianobar && pianokeys'
alias projects='cd ~/Dropbox/dev/projects'
alias pz="\$EDITOR \$HOME/Dropbox/dev/config/zsh_profiles/personal.zsh"
alias server='open http://localhost:8000 && python -m SimpleHTTPServer'
alias tmp='cd ~/tmp'
alias z="\$EDITOR ~/.zshrc"

export EDITOR='atom'
export HOMEBREW_CASK_OPTS="--appdir=/Applications"

source "$HOME/Dropbox/dev/config/zsh_profiles/bindkey.zsh"

eval "$(rbenv init -)"

function cd() {
    new_directory="$*";
    if [ $# -eq 0 ]; then
        new_directory=${HOME};
    fi;
    builtin cd "${new_directory}" && ls
}

function rdoc() {
    local version=""
    version=$(
        bundle exec ruby -rbundler/cli -rbundler/cli/common \
            -e "puts Bundler::CLI::Common.select_spec('${1}').version" 2> /dev/null
    )

    if (( $? != 0 )); then
        echo "Bundler could not find the ${1} gem."
        return 1
    fi

    if [[ $1 == "rails" ]]; then
        open "http://api.rubyonrails.org/v${version}"
    else
        open "http://www.rubydoc.info/gems/${1}/${version}"
    fi
}

# reload zshrc
function src() {
  local cache="$ZSH/cache"
  autoload -U compinit zrecompile
  compinit -d "$cache/zcomp-$HOST"

  for f in ~/.zshrc "$cache/zcomp-$HOST"; do
    zrecompile -p "$f" && command rm -f "$f".zwc.old
  done

  source ~/.zshrc
}

function text() {
  curl http://textbelt.com/text -d number="${1}" -d message="${2}"
}
