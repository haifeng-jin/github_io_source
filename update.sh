sh clean.sh
sh build.sh
cp -r site/* ../temp/
git add --all
git commit -m $1
git push origin master
