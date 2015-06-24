cp -r common home/_includes/
cp -r common codeforces/_includes/
cp -r common chinese/_includes/
jekyll build -s home/ -d site/
jekyll build -s codeforces/ -d site/codeforces/
jekyll build -s chinese/ -d site/chinese/
