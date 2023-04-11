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
  <div class="section content__rooms">
    <a href="#" class="content__rooms-item">
      <div class="img-wrapper">
        <img
          src="img/LiveMock.jpg"
          alt="Studio A"
          title="Studio A"
          class="content__rooms-img"
        />
      </div>

    <div class="content__rooms-title">Studio</div>
    </a>
    <a href="#" class="content__rooms-item">
      <div class="img-wrapper">
        <img
          src="img/RoomMock.jpg"
          alt="Studio B"
          title="Studio B"
          class="content__rooms-img"
        />
      </div>

      <div class="content__rooms-title">Amenities</div>
    </a>

  </div>
  <div class="section content__contact">
    <img src="img/cake/BurgTrans.png" class="cake" />
    <h2>Ready to get cooking?</h2>
    <p class="content__text">
      Contact us for a free consultation and site visit!
    </p>
    <a class="btn">Contact Us</a>
  </div>
