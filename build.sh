cp layouts/* home/_layouts/
cp layouts/* codeforces/_layouts/
cp layouts/* chinese/_layouts/
cp layouts/* technology/_layouts/
cp -r common home/_includes/
cp -r common codeforces/_includes/
cp -r common chinese/_includes/
cp -r common technology/_includes/
jekyll build -s home/ -d site/
jekyll build -s codeforces/ -d site/codeforces/
jekyll build -s chinese/ -d site/chinese/
jekyll build -s technology/ -d site/technology/
