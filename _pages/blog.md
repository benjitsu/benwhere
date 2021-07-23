---
layout: page
title: Blog
permalink: /blog/
---

<div class="container reveal load-hidden up h-100 blogList">
    <div class="row h-100">
        <div class="col-lg-7">

{% for post in site.posts %}

  <div class="post">
  <a href="{{ post.url }}">
    <img src="{{ post.hero }}">
     <h2 class="mt-5 mb-2"> {{ post.title }} </h2>
      <p>{{ post.exerpt }}</p>
      </a>
    </div>
  {% endfor %}

        </div>
    </div>

</div>
