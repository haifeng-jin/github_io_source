#!/usr/bin/env bash
git branch -D gh-pages
git checkout -b gh-pages
git add .
git commit -m "gh-pages update"
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D gh-pages
