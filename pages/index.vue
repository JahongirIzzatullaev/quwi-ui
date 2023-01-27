<template>
  <section class="home-page">
    <div class="container">
      <div class="screen">
        <div class="text-section">
          <h1 class="title">Task tracking has never been easier</h1>
          <p class="text">
            Quwi is a simple robust platform that makes it easy to work remotely
            with your team. We built Quwi to create a quick and easy to use
            platform, but powerful enough to manage a big team and large
            projects.
          </p>
          <p class="text">Check out our features to work comfortable:</p>
        </div>
        <div class="img-section">
          <img :src="screen_img" alt="Screen Img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import screenImg from "assets/images/screen-img.webp";
export default {
  data() {
    return {
      screen_img: screenImg,
    };
  },
};
</script>
