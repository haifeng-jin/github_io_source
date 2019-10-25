jekyll build
git add build
git commit -m "update"
git subtree split --prefix build -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
rm -rf build

