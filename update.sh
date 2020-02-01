#!/usr/bin/env bash
jekyll build
git checkout -b gh-pages-temp
git add -f build
git commit -m "gh-pages update"
git subtree split --prefix build -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git checkout master
git branch -D gh-pages-temp

