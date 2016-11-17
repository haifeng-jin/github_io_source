sh clean.sh
jekyll build
cd ../jhfjhfj1.github.io
git pull
cd ../github_io_source
rm -r ../jhfjhfj1.github.io/*
cp -r _site/* ../jhfjhfj1.github.io/
sh update.sh $1
cd ../jhfjhfj1.github.io
sh update.sh $1
