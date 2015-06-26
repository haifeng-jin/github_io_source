---
title: Learn Jekyll Really Quick
layout: post
tags: [jekyll]
---

This article is helping you learn the basics of Jekyll and setup your blog right now.
The boring minutiaes which can easily learned when you use it is not mentioned at all.

<br/>

###What is it?  
Jekyll is a software allowing you to setup and manage your blog with some HTML templates and snippets and nothing else.

<br/>

###Build your blog
Here is [an easy example](https://github.com/jhfjhfj1/jekyll_easy_example) to show the basic usage of Jekyll.

I suggest you star it on GitHub, unless you can remember it forever. You can fork or download it to work on it.

<br/>

###Explaination

<br/>

####YAML Heads
We can see that nearly every file have something like the following in their heads.

	---
	layout: default
	title: my post
	---

They are called YAML. This defines some properties of the files for us to load when use them in jekyll projects.

You can define some properties of the project by writing YAML in "_config.yml".

<br/>

####Layouts
In the directory of "_layouts" are some HTML template files. They all have the keyword {{ "{{ content " }}}}. It marks where the content of the file using the layout is to be inserted.
You can write "layout: layout_file_name" in the YAML to set the layout of the file.

<br/>

####Includes
In the directory of "_includes" are some "*.ext" files. They are the HTML snippets to include in other files.
Use the following code to insert the snippets.

	{{ "{% include file_name.ext " }}%}

<br/>

####Posts
In the directory of "_posts" are the articles in the blog. They can be written in HTML. Their names must be in the format of "yyyy-mm-dd-title.html".

<br/>

####Index
We need to include the list of our posts in "index.html" by the following code.

	{{ "{% for post in site.posts " }}%}
	<p>
	<a href="{{ "{{post.url" }}}}">{{ "{{ post.title " }}}}</a>Posted on {{ "{{ post.date | date_to_string " }}}}
	</p>
	{{ "{% endfor " }}%}

This is a loop generating the title and link of each post.
