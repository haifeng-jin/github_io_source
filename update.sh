sh clean.sh
sh build.sh
rm -rf ../jhfjhf1.github.io/*
cp -r site/* ../jhfjhfj1.github.io/
git add --all
git commit -m $1
git push origin master
