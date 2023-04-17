---
layout: "page-base"
hero: "./img/ControlA.jpg"
---

{% if hero %}

  <style>
    .hero {
      background: #fff url({{ hero }}) no-repeat center center/cover;
      z-index: -2;
    }
  </style>

{% endif %}

<div class="hero"></div>
<div class="section content__about">
  <h1>Welcome to The Bakery</h1>
  <p class="content__text reveal">
    Located in the blooming Scotts Addition neighborhood of Richmond,
    Virginia, The Bakery is within minutes of all the city has to offer. This
    tasty cornerstone is the collaborative effort of Open Your Ears Records
    founder, Adam Hickok, and awarded producer, Will Beasley. Fit with two
    studios, a full kitchen, and comfortable living quarters, The Bakery has
    everything you need to create your next masterpiece.
  </p>
  <p class="">Can you smell what's cookin'?</p>
</div>
<div class="section-img section-img--studioA"></div>
<h2>Studio A</h2>
<p>Our large room with 3 iso booths. Here is some more text about studio one. It’s number one. Not number two. Just like you. Nice</p>
<button class="btn">View Studio B</button>

<div class="section-img section-img--studioB"></div>
<h2>Studio B</h2>
<p>Some real nice text about studio two. It’s real nice. Got it? Nice</p>
<button class="btn">View Studio B</button>
