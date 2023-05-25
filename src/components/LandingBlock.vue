<template>
  <div class="center-horizontal-vertical">
    <div class="text-1" data-aos="fade-down">HEY! I AM</div>
    <div>
      <div class="text-2" data-aos="fade-right">Suyash</div>
      <div class="text-2" data-aos="fade-left">&nbsp;Ombale</div>
    </div>
    <div class="text-3" data-aos="fade-up">
      I'm a <span class="typing"></span>
    </div>
  </div>
  <span id="visits" hidden></span>
</template>

<script>
export default {
  name: "LandingBlock",
  mounted() {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
    var options = {
      strings: ["Student", "Mechanical Engineer","3D Designer"],
      typeSpeed: 90,
      backSpeed: 60,
      loop: true,
    };
    var typed = new Typed(".typing", options);
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      'https://api.countapi.xyz/hit/vrushaket.ml/1f486b10-0a68-4eeb-841c-72f2c424edb8?callback=websiteVisits"'
    );
    document.head.appendChild(recaptchaScript);
    function websiteVisits(response) {
      document.querySelector("#visits").textContent = response.value;
    }
  },
};
</script>

<style scoped>
.center-horizontal-vertical {
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text-1 {
  color: #2f58cd;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 4px;
}
.text-2 {
  color: #000;
  display: inline-block;
  vertical-align: middle;
  font-size: 3.5rem;
  font-weight: bold;
}
.text-3 {
  font-size: 2rem;
  font-style: underline;
  font-weight: bold;
}
.typing {
  color: #2f58cd;
}
</style>
