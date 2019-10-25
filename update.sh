jekyll build
git checkout -b build
git add build
git commit -m "build"
git subtree split --prefix build -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D gh-pages
git branch -D build
rm -rf build

