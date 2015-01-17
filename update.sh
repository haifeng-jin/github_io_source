sh clean.sh
sh build.sh
cp -r site/* ../jhfjhfj1.github.io/
git add --all
git commit -m $1
git push origin master
