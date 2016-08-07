sh clean.sh
git add --all
git commit -m $1
git push origin master
rm -r ../jhfjhfj1.github.io/*
cp -r _site/* ../jhfjhfj1.github.io/
