#!/bin/sh
cd C:/Users/Inuyasha/Documents/WebSite


LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})
BASE=$(git merge-base @ @{u})

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
elif [ $LOCAL = $BASE ]; then
	taskkill -im node.exe -f
	git pull -r
	start C:/Users/Inuyasha/Desktop/StartWebServer.bat
fi