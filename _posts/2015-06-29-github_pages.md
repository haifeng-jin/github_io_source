---
title: Jekyll on GitHub Pages
category: technology
layout: post
---

You can certainly follow the [instructions on GitHub](https://help.github.com/articles/using-jekyll-with-pages/). 
However, this article will provide you a much easier way to both build and maintain the website.

Before reading this article, I assume you already have a jekyll project. This tutorial will help you deploy it on GitHub Pages.

First, [create a repository](https://help.github.com/articles/creating-a-new-repository/) and name it "username.github.io" (replace username with your own username).

Second, [create a file](https://help.github.com/articles/creating-new-files/) named ".nojekyll" in the repository.

Third, [clone](https://help.github.com/articles/importing-a-git-repository-using-the-command-line/) the repository to your computer.

Fourth, copy all the files in "_site" directory of your already exist jekyll project to the local directory you just cloned.

Finally, add, commit and push using the following command after you cd to the repository.

    git add --all
    git commit -m "initial"
    git push origin master

Now, you can check your website at "username.github.io".

### Explanation

The steps above is to build a website using Jekyll locally and upload the necessary files to GitHub.
The second step is to block the auto-build command of GitHub Pages. Otherwise, it would take your website as a Jekyll project and build it for you.

I strongly recommend not use GitHub to build your Jekyll project. You have to run Jekyll locally to test your website before you post it. Jekyll varies greatly from version to version. What looks fine locally may have bugs when posted if you let GitHub run its Jekyll for your site. In order to unify the version we use, we do not need a second build on GitHub.
