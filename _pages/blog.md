---
layout: page
title: Blog
permalink: /blog/
---

<div class="container reveal load-hidden up h-100 blogList">
    <div class="row h-100">
        <div class="col-lg-8 mx-auto">

  {% for post in site.posts %}
  <div class="post">
    <!-- <img src="{{ post.hero }}"> -->
    <a href="{{ post.url }}">
     <h2> {{ post.title }} </h2>
      </a>
    </div>
  {% endfor %}

        </div>
    </div>
</div>