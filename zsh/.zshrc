# Path to your Oh My Zsh installation.
export ZSH="$HOME/.config/.oh-my-zsh"

# Robbyrussell would give a prompt but I wanted something more sleek, so starship

ZSH_THEME=""

plugins=(
	git
	zsh-syntax-highlighting
	zsh-autosuggestions
	eza
)

source $ZSH/oh-my-zsh.sh

# Prompt

eval "$(starship init zsh)"

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8

# Paths

export PATH=$PATH:/home/aditirao/.spicetify
export HELIX_RUNTIME=Builds/helix/runtime
export TASKRC=~/.config/taskwarrior/taskrc 
export TASKDATA=~/.task task list

# Aliases

alias brv=brave-browser
alias mic="micro"
alias config="cd $HOME/.config"

alias cp="cp -v"
alias batch-rename="batch-rename -v"
alias ln="ln -v"
alias mkdir="mkdir -v"
alias mv="mv -v"
alias rm="rm -v"
alias trash="trash -v"

function mkcd {
       mkdir -p "$@" 
        cd "$@" 
}

alias cls="clear"
alias cna="create-next-app"
