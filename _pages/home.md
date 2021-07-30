---
layout: page
title: Home
permalink: /
---

<div class="container blogList my-14">
    <div class="row">
        <div class="col-lg-7 mx-auto">

{% for post in site.posts %}

  <div class="post reveal load-hidden up mb-11">
    <a href="{{ post.url }}">
        <div class="postImg position-relative">
            <div class="overlay"></div>
            <img src="{{ post.hero }}">
        </div>
        <div class="date mt-4">{{ post.date | date: "%m.%d.%y" }}</div>
        <h2 class="mt-3 mb-2"> {{ post.title }} </h2>
        <p>{{ post.exerpt }}</p>
    </a>
  </div>

  {% endfor %}

        
    


<!-- <div class="row">
{% for post in site.posts offset:1 %}
    <div class="col-md-6">
        <div class="post reveal load-hidden up mb-11">
        <a href="{{ post.url }}">
        <div class="postImg position-relative">
            <div class="overlay"></div>
            <img src="{{ post.hero }}">
        </div>
        <div class="date mt-4">{{ post.date | date: "%m.%d.%y" }}</div>
        <h3 class="mt-3 mb-2"> {{ post.title }} </h3>
        <p>{{ post.exerpt }}</p>
       </a>
        </div>
    </div>
{% endfor %}
</div> -->
</div>
</div>
</div>



