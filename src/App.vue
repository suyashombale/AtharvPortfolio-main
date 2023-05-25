<template>
  <!-- <router-view></router-view> -->
  <TopBarVue @go-section="goToSection" />

  <section ref="home" id="home" class="home nav-class">
    <LandingBlockVue />
  </section>

  <section ref="about" id="about" class="about nav-class">
    <AboutBlockVue />
  </section>

  <section ref="resume" id="resume" class="resume nav-class">
    <ResumeVue/>
  </section>

  <section ref="projects" id="projects" class="projects nav-class">
  </section>
  <ProjectsVue />

  <section ref="contact" id="contact" class="contact nav-class">
  </section>
  <ContactVue />

  <section ref="footer" class="footer nav-class">
    <FooterVue />
  </section>
</template>

<script>
import TopBarVue from "./components/TopBar.vue";
import LandingBlockVue from "./components/LandingBlock.vue";
import AboutBlockVue from "./components/AboutBlock.vue";
import ResumeVue from "./components/Resume.vue";
import ContactVue from "./components/Contact.vue";
import ProjectsVue from "./components/Projects.vue";
import FooterVue from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    TopBarVue,
    LandingBlockVue,
    AboutBlockVue,
    ResumeVue,
    ContactVue,
    ProjectsVue,
    FooterVue

  },

  methods: {
    goToSection(sectionRef) {
      var element = this.$refs[sectionRef];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
   
  }
};

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}

@font-face {
  font-family: "Poppins", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-weight: normal;
  font-style: normal;
}

body {
  font-size: 1rem;
}

.home {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #FFFFFF 50%, #ECF0FF 50%);
  background-position: center top;
  background-size: cover;
}

.about .resume .contact {
  width: 100%;
  height: 100%;
  background-position: center top;
  background-size: cover;
}


/* custom scroll bar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html, body {
    overflow-x: hidden;
    width: 100%;
}
</style>

