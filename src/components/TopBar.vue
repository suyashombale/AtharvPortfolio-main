<template>
  <div class="scroll-up-btn">
    <i class="fas fa-angle-up"></i>
  </div>
  <nav class="nav">
    <div class="container-fluid">
      <div data-aos="fade-right"></div>
      <div id="mainListDiv" class="main_list" data-aos="fade-left">
        <ul class="navlinks">
          <li>
            <a id="fixed-home" @click="$emit('go-section', 'home')">Home</a>
          </li>
          <li>
            <a id="fixed-about" @click="$emit('go-section', 'about')">About</a>
          </li>
          <li>
            <a id="fixed-resume" @click="$emit('go-section', 'resume')"
              >Resume</a
            >
          </li>
          <li>
            <a id="fixed-projects" @click="$emit('go-section', 'projects')"
              >Projects</a
            >
          </li>
          <li>
            <a id="fixed-contact" @click="$emit('go-section', 'contact')"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <span class="navTrigger">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";
export default {
  name: "TopBar",
  props: ["highlight"],
  created() {
    // props are exposed on `this`
    console.log(this.highlight);
  },
  mounted() {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
    );
    document.head.appendChild(recaptchaScript);

    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
      } else {
        $(".nav").removeClass("affix");
      }
    });

    $(".navTrigger").click(function () {
      $(this).toggleClass("active");
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });

    $(document).ready(function () {
      $(window).scroll(function () {
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
          $(".scroll-up-btn").addClass("show");
        } else {
          $(".scroll-up-btn").removeClass("show");
        }
      });
      // slide-up script
      $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
      });
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.navlinks {
  font-weight: 500;
}
.scroll-up-btn {
  position: fixed;
  height: 45px;
  width: 42px;
  background: #2f58cd;
  right: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 9999;
  font-size: 30px;
  border-radius: 6px;
  border-bottom-width: 2px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.scroll-up-btn.show {
  bottom: 30px;
  opacity: 1;
  pointer-events: auto;
  border-radius: 50%;
}
.scroll-up-btn:hover {
  filter: brightness(90%);
  transform: scale(1.1);
}
@media (max-width: 500px) {
  .scroll-up-btn {
    margin: 20px;
  }
}
</style>

<style scoped>
a {
  display: inline-block;
  position: relative;
  color: #2f58cd;
}
a:hover {
  cursor: pointer;
}
a:after {
  content: "";
  position: absolute;
  transform: scaleX(0);
  font-weight: bold;
  background-color: #2f58cd;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.lineeffect {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #2f58cd;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.nav {
  width: 100%;
  height: 60px;
  position: fixed;
  line-height: 10px;
  text-align: center;
  z-index: 999;
}

.affix {
  padding: 0;
  background-color: #fff;
}
.logo {
  float: left;
  padding-left: 20px;
  height: 100%;
  width: 120px;
}
@media screen and (max-width: 768px) {
  .logo {
    margin-top: 15px;
  }
}

.nav div.logo a:hover {
  color: #2f58cd;
}

.nav div.main_list {
  height: 50px;
  float: right;
}

.nav div.main_list ul {
  width: 100%;
  height: 50px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav div.main_list ul li {
  width: auto;
  height: 50px;
  padding: 0;
  padding-right: 3rem;
}

.nav div.main_list ul li a {
  text-decoration: none;
  color: #000018;
  line-height: 35px;
  font-size: 1.2rem;
  transition: transform 0.5s;
}

.nav div.main_list ul li a:hover {
  color: #2f58cd;
  font-weight: bold;
  transform: scale(1.2);
}

.navTrigger {
  display: none;
}

.nav {
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    margin: 0;
  }
}
.navTrigger {
  cursor: pointer;
  width: 30px;
  height: 25px;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 0;
  bottom: 0;
  margin-right: 20px;
}

.navTrigger i {
  background-color: #000018;
  border-radius: 2px;
  content: "";
  display: block;
  width: 100%;
  height: 4px;
}

@media screen and (max-width: 768px) {
  .nav {
    width: 100%;
    height: 50px;
    position: fixed;
    line-height: 10px;
    text-align: center;
    z-index: 999;
  }

  .affix {
    padding: 0;
    background-color: #fff;
  }

  .navTrigger {
    display: block;
    margin-top: 18px;
  }
  .nav div.main_list {
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .nav div.show_list {
    height: auto;
    display: none;
  }

  .nav div.main_list ul {
    flex-direction: column;
    width: 100%;
    height: 100%;
    right: 0;
    left: 0;
    bottom: 0;
    padding-bottom: 10px;
    background-color: #fff;
    /*same background color of navbar*/
    background-position: center top;
  }
  .nav div.main_list ul li {
    width: 100%;
    text-align: right;
  }
  .nav div.main_list ul li a {
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .nav div.media_button {
    display: block;
  }
}

.navTrigger i:nth-child(1) {
  -webkit-animation: outT 0.8s backwards;
  animation: outT 0.8s backwards;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

.navTrigger i:nth-child(2) {
  margin: 5px 0;
  -webkit-animation: outM 0.8s backwards;
  animation: outM 0.8s backwards;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

.navTrigger i:nth-child(3) {
  -webkit-animation: outBtm 0.8s backwards;
  animation: outBtm 0.8s backwards;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

.navTrigger.active i:nth-child(1) {
  -webkit-animation: inT 0.8s forwards;
  animation: inT 0.8s forwards;
}

.navTrigger.active i:nth-child(2) {
  -webkit-animation: inM 0.8s forwards;
  animation: inM 0.8s forwards;
}

.navTrigger.active i:nth-child(3) {
  -webkit-animation: inBtm 0.8s forwards;
  animation: inBtm 0.8s forwards;
}

@-webkit-keyframes inM {
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
  }
}

@keyframes inM {
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@-webkit-keyframes outM {
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
  }
}

@keyframes outM {
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@-webkit-keyframes inT {
  0% {
    -webkit-transform: translateY(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateY(9px) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(9px) rotate(135deg);
  }
}

@keyframes inT {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(9px) rotate(0deg);
  }
  100% {
    transform: translateY(9px) rotate(135deg);
  }
}

@-webkit-keyframes outT {
  0% {
    -webkit-transform: translateY(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateY(9px) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(9px) rotate(135deg);
  }
}

@keyframes outT {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(9px) rotate(0deg);
  }
  100% {
    transform: translateY(9px) rotate(135deg);
  }
}

@-webkit-keyframes inBtm {
  0% {
    -webkit-transform: translateY(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateY(-9px) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-9px) rotate(135deg);
  }
}

@keyframes inBtm {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-9px) rotate(0deg);
  }
  100% {
    transform: translateY(-9px) rotate(135deg);
  }
}

@-webkit-keyframes outBtm {
  0% {
    -webkit-transform: translateY(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateY(-9px) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-9px) rotate(135deg);
  }
}

@keyframes outBtm {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-9px) rotate(0deg);
  }
  100% {
    transform: translateY(-9px) rotate(135deg);
  }
}
</style>
