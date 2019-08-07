BASEDIR=$(basename $(pwd))

if [ "$BASEDIR" != "docs" ]; then
	echo "INCORRECT DIRECTORY"
# elif [ "$BASEDIR"="$CORRECTDIR" ]; then
else
	# abort on errors
	set -e
	
	# build
	npm run docs:build
	
	# put buil archives on root directory
	cp -rf markdown/.vuepress/dist/* ./
	# cp -rf docs/assets/img/* ./assets/img
	rm -rf markdown/.vuepress/dist
fi
exit