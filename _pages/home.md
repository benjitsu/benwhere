---
layout: page
title: Home
permalink: /
---


<!-- <div class="container-fluid reveal load-hidden d-none d-md-block mt-12">
<div class="row">
<div id="photoSlider" class="carousel slide w-100" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#photoSlider" data-slide-to="0" class="active"></li>
    <li data-target="#photoSlider" data-slide-to="1"></li>
    <li data-target="#photoSlider" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
  {% for post in site.posts limit:1 %}
    <div class="carousel-item active">
      <img class="d-block w-100" src="{{ post.hero }}" alt="{{ post.title }}">
    </div>
    {% endfor %}
    {% for post in site.posts limit:2 offset:1 %}
    <div class="carousel-item">
      <img class="d-block w-100" src="{{ post.hero }}" alt="{{ post.title }}">
    </div>
    {% endfor %}
  </div>
</div>
</div>
</div> -->



<div class="container-fluid reveal load-hidden d-none d-md-block mt-11">
 
        <!-- Photo Banner -->
            {% for post in site.posts limit:1 %}
            <a href="{{ post.url }}">
            <div class="row photoHero position-relative">
            <div class="details reveal up pl-6 pb-5">
                <div class="date mt-4">{{ post.date | date: "%m.%d.%y" }}</div>
                <h1 class="mt-3 mb-2"> {{ post.title }} </h1>
                <p>{{ post.exerpt }}</p>
            </div>
            <img src="{{ post.hero }}" alt="{{ post.title }}">
        </div>
    </a>
            {% endfor %}
</div>


<div class="container-fluid blogList my-11">
    <div class="row mx-auto">
        {% for post in site.posts limit:1 %}
        <div class="px-0 px-sm-6 col-lg-6 d-md-none mt-4">
          <div class="post reveal load-hidden up mb-11 mb-md-12">
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
        </div>
          {% endfor %}


        {% for post in site.posts offset:1 %}
<div class="px-0 px-sm-6 col-lg-6">
  <div class="post reveal load-hidden up mb-11 mb-md-12">
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



