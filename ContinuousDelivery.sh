#!/bin/sh


read -n 1 -s

cd C:/Users/Shippo/Documents/SoaringLeafWebsite



LOCAL=$(git rev-parse @)

REMOTE=$(git rev-parse @{u})

BASE=$(git merge-base @ @{u})



if [ $LOCAL = $REMOTE ]; then

	echo "Local: "$LOCAL
	echo "Remote: " $REMOTE
    echo "Up-to-date"

    read -n 1 -s

elif [ $LOCAL = $BASE ]; then

	taskkill -im node.exe -f

	git pull -r

	start C:/Users/Shippo/Desktop/StartWebServer.bat

	read -n 1 -s

fi