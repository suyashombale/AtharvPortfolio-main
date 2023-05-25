<template>
  <div class="container">
    <h1 class="contact-me-msg" data-aos="fade-up">Recent Projects</h1>
    <!-- <p class="contact-me-msg-1"> </p> -->
  </div>

  <div class="row" style="display: flex; justify-content: center">
    <div class="container col-sm-12 col-md-3" v-for="project in projects">
      <div class="project-card card" :data-aos="project.anime">
        <img class="card-img-top" :src="project.icon" alt="SeatScore" />
        <div class="card-body">
          <p class="card-title">{{ project.title }}</p>
          <p class="card-text">{{ project.description }}</p>
          <div class="container">
            <div class="skill-chip" v-for="skill in project.skills">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
</template>

<script>
export default {
  name: "ProjectBlock",
  data: function () {
    return {
      projects: [
        {
          title: "Performance analysis of evaporator for direct expansion solar assisted heat pump.",
          description:
            "To compare the coeficent of performance of system for 3 modes of opteration solar mode,Air source mode,solar-air source mode..",
          icon: require("../assets/proimg/heatpump.png"),
          skills: [
            "3D Design",
            "Heat Transfer",
          ],
          anime: "fade-right",
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  },
};
</script>

<style scoped>
.skill-chip {
  background-color: #f9f5eb;
  border-radius: 30px;
  padding: 5px 12px 5px 12px;
  font-size: 0.8rem;
  margin-right: 7px;
  color: #002b5b;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: transform 0.5s;
}

.skill-chip:hover {
  transform: scale(1.1);
}

.project-card {
  transition: transform 0.5s;
  height: 100%;
  width: 100%;
  border-width: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.project-card:hover {
  transform: scale(1.05);
}
.contact-me-msg {
  text-align: center;
  margin-top: 100px;
  font-weight: bold;
}
.contact-me-msg-1 {
  text-align: center;
  color: #999999;
}
.card-img-top {
  height: 100px;
  width: 125px;
  margin-top: 40px;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
}
.card-title {
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
}
.card-text {
  font-size: 0.9rem;
  text-align: center;
  text-justify: inter-word;
  color: #999999;
}

.col-md-3 {
  margin-top: 80px;
  padding: 0px;
}
.col-sm-12 {
  margin: 20px;
}
.row {
  padding: 0px;
  margin: 0px;
}
</style>
