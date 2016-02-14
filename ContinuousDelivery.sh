#!/bin/sh
cd C:/Users/Inuyasha/Documents/WebSite

read -n 1 -s
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})
BASE=$(git merge-base @ @{u})

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
    read -n 1 -s
elif [ $LOCAL = $BASE ]; then
	taskkill -im node.exe -f
	git pull -r
	start C:/Users/Inuyasha/Desktop/StartWebServer.bat
	read -n 1 -s
fi