sh clean.sh
jekyll build
rm -r ../jhfjhfj1.github.io/*
cp -r _site/* ../jhfjhfj1.github.io/
sh update.sh $1
cd ../jhfjhfj1.github.io
git add --all
git commit -m $1
git push origin master -f
