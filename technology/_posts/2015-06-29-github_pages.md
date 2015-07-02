---
title: Jekyll on GitHub Pages
layout: post
---

You can certainly follow the [instructions on GitHub](https://help.github.com/articles/using-jekyll-with-pages/). 
However, this article will provide you a much easier way to both build and maintain the website.

First, [create](https://help.github.com/articles/creating-new-files/) a repository and name it "username.github.io" (replace username with your own username).

Second, create a file named ".nojekyll" in the repository.

Third, [clone](https://help.github.com/articles/importing-a-git-repository-using-the-command-line/) the repository to your computer.

Fourth, copy all the files in "_site" directory of your jekyll project to the repository you cloned.

Finally, add, commit and push using the following command after you cd to the repository.

    git add --all
    git commit -m "initial"
    git push origin master

Now, you can check your website at "username.github.io".
