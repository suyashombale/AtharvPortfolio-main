<template>
  <div class="col-sm-12 like-body">
    <div class="row main-ct">
      <div class="fixed-ct d-none d-md-block d-lg-block col-md-4 col-lg-4">
        <div style="text-align: center; margin-top: 80px">
          <div
            style="width: 50%; margin: 0 auto; text-align: left"
            data-aos="fade-up-right"
          >
            <ul class="resume-list list-unstyled">
              <li
                style="padding: 10px"
                class="fixed-education"
                id="fixed-education"
              >
                Education
              </li>
              <li
                style="padding: 10px"
                class="fixed-experience"
                id="fixed-experience"
              >
                Experience
              </li>
              <li style="padding: 10px" class="fixed-skills" id="fixed-skills">
                Skills
              </li>
              <li
                style="padding: 10px"
                class="fixed-conferences"
                id="fixed-conferences"
              >
                Conferences
              </li>
              <li
                style="padding: 10px"
                class="fixed-achievements"
                id="fixed-achievements"
              >
                Achievements
              </li>
              <li
                style="padding: 10px"
                class="fixed-organizations"
                id="fixed-organizations"
              >
                Organizations
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <p class="resume-class" id="education" data-aos="fade-left">
          Education
        </p>
        <div class="container" data-aos="zoom-in">
          <table>
            <tr>
              <td></td>
              <td>
                <p class="edu-duration">2019-2023</p>
                <p class="edu-degree">
                  Bachelor of Engineering in Mechnaical Engineering 
                </p>
                <p class="edu-university">Savitribai Phule Pune University</p>
                <p class="edu-desc">MIT Academy of Engineering,Pune<br /></p>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        <div class="container" data-aos="zoom-in">
          <table>
            <tr>
              <td></td>
              <td>
                <p class="edu-duration">2017-2019</p>
                <p class="edu-degree">Jawahar Navoday Vidyalay</p>
                <p class="edu-university">CBSE Board</p>
                <p class="edu-desc">HSC</p>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        <div class="container" data-aos="zoom-in">
          <table>
            <tr>
              <td></td>
              <td>
                <p class="edu-duration">March 2017</p>
                <p class="edu-degree">Jawahar Navoday Vidyalay</p>
                <p class="edu-university">CBSE Board</p>
                <p class="edu-desc">SSC</p>
              </td>
            </tr>
          </table>
          <hr />
        </div>

        <p class="resume-class" id="experience" data-aos="fade-left">
          Experience
        </p>
        <div
          class="container"
          v-for="experience in experiences"
          data-aos="zoom-in"
        >
          <table>
            <tr>
              <td></td>
              <td>
                <p class="edu-duration">{{ experience.duration }}</p>
                <p class="edu-degree">{{ experience.designation }}</p>
                <p class="edu-university">{{ experience.name }}</p>
                <p class="edu-desc">
                  {{ experience.description1 }}
                  <br />
                  {{ experience.description }}
                </p>
                <div class="container" style="margin-top: 5px">
                  <div class="skill-chip" v-for="skill in experience.skills">
                    {{ skill }}
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        <p class="resume-class" id="skills" data-aos="fade-left">Skills</p>
        <div class="row" style="display: flex; justify-content: center">
          <div
            class="skills-container container col-sm-2"
            v-for="skill in skills"
          >
            <div class="skill-card card" data-aos="flip-right">
              <center>
                <img
                  class="card-img-top"
                  :src="skill.icon"
                  alt="{{skill.name}}"
                />
                <br />
                <span>{{ skill.name }}</span>
              </center>
            </div>
          </div>
        </div>
        <!--
        <p class="resume-class" id="conferences" data-aos="fade-left">
          Conferences
        </p>
        
          <div class="container">
          <table data-aos="zoom-in">
            <tr>
              <td></td>
              <td>
                <p class="edu-duration">Dec 2022</p>
                <p class="edu-degree">
                  Performance Analysis of PaaS for computing service in Multi
                  Cloud Environment
                </p>
                <p class="edu-university">Published : 12 December 2022</p>
                <p class="edu-university">YMER volume 12 , issue 12</p>
                <p class="edu-university">DOI no : 10.37896/YMER21.12/77</p>

                <p class="edu-desc">
                  <br />
                  <a target="blank" href="#">View Technical Paper</a> <br />
                  <a
                    target="blank"
                    href="https://drive.google.com/file/d/1JyMruncUfy5fY3x8ttMnOZOZ837d9ATK/view?usp=sharing"
                    >Presentor Certificate
                  </a>
                  <br />
                </p>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        -->
        <p class="resume-class" id="achievements" data-aos="fade-left">
          Achievements
        </p>
        <div class="container" v-for="achievement in achievements">
          <table data-aos="zoom-in">
            <tr>
              <td>
                <img
                  :src="achievement.icon"
                  style="height: 50px; margin-bottom: 80px; margin-right: 20px"
                />
              </td>
              <td>
                <p class="edu-duration">{{ achievement.duration }}</p>
                <p class="edu-degree">{{ achievement.rank }}</p>
                <p class="edu-university">{{ achievement.name }}</p>
                <p class="edu-desc">{{ achievement.description }}</p>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        
        <p class="resume-class" id="organizations" data-aos="fade-left">
          Organizations
        </p>
        <div class="container" v-for="organization in organizations">
          <table data-aos="zoom-in">
            <tr>
              <td>
                <img
                  :src="organization.icon"
                  style="
                    height: 30px;
                    margin-top: 10px;
                    margin-bottom: 80px;
                    margin-right: 20px;
                  "
                />
              </td>
              <td>
                <p class="edu-duration">{{ organization.duration }}</p>
                <p class="edu-degree">{{ organization.name }}</p>
                <p class="edu-university">{{ organization.designation }}</p>
                <p class="edu-desc">{{ organization.description }}</p>
              </td>
            </tr>
          </table>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ResumeBlock",
  data: function () {
    return {
      conferences: [
        {
          icon: "",
          name: "",
          publisher: "",
          duration: "",
        },
      ],
      experiences: [
        {
          name: "Creestaa Elevators India pvt ltd",
          designation: "Quality Enginner",
          duration: "June 2022 - July 2022",
          description1: "Internship",
          description:
            "Worked on Various Services of Quality management such has Solid works , Catia , Inspection , etc",
          skills: ["Testing", "Solidworks"],
          icon: "https://media.glassdoor.com/sql/2321380/celebal-technologies-squarelogo-1588749669479.png",
        },
      ],
      skills: [
       
        {
          name: "Python",
          icon: require("../assets/python.png"),
        },
  
        {
          name: "MySQL",
          icon: require("../assets/mysql.png"),
        },
        {
          name: "Bootstrap",
          icon: require("../assets/bootstrap.png"),
        },
        {
          name: "Autodesk",
          icon: require("../assets/proimg/autodesk.png"),
        },
        {
          name: "Autocad",
          icon: require("../assets/proimg/autocad.png"),
        },
        {
          name: "Fusion",
          icon: require("../assets/proimg/fusion.png"),
        },
        {
          name: "Catia",
          icon: require("../assets/proimg/catia.png"),
        },
        {
          name: "Soliodworks",
          icon: require("../assets/proimg/solidworks.png"),
        },
      ],
      achievements: [
        {
          name: "Ansys Cometetion Finalist, 2022",
          duration: "June 2022 - Aug 2022",
          description:
            "Winner of National Level Ansys Competetiton Rank 2.",
          rank: "Finalist",
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135728.png",
        },
      ],
      organizations: [
        {
          name: "MIT Academy of Engineering",
          duration: "June 2019 - Present",
          designation: "Student , 3D Designer",
          description:
            "Learning and Contributing as a Desiggner at MIT Academy of Engineering",
          icon: "https://api.free-apply.com/img/logo/1e9ab0f0-f33a-4124-a048-990fc7b654f8?w=150&h=150&fit=crop&s=25c34c009ba3467d4437c26b4d287e6a",
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
    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on("resize scroll", function () {
      $(".resume-class").each(function () {
        var activeColor = $(this).attr("id");
        if ($(this).isInViewport()) {
          // $('#fixed-' + activeColor).addClass(activeColor + '-active');
          document.getElementById("fixed-" + activeColor).style.color =
            "#2F58CD";
        } else {
          // $('#fixed-' + activeColor).removeClass(activeColor + '-active');
          document.getElementById("fixed-" + activeColor).style.color = "black";
        }
      });
    });
  },
};
</script>

<style scoped>
a {
  color: #2f58cd;
}
a:hover {
  text-decoration: none;
  font-weight: bold;
}
#skills {
  margin-bottom: 20px;
}
.skills-container {
  margin-left: 20px;
}
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
.skill-card {
  margin-bottom: 1.1rem;
  margin-left: 0.5rem;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  font-size: 0.9rem;
  border-width: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.5s;
}
.skill-card:hover {
  transform: scale(1.1);
}
.card-img-top {
  height: 46px;
  width: 46px;
  margin-bottom: 5px;
  align-self: center;
}
.main-ct {
  position: relative;
}
.fixed-ct {
  position: sticky;
  width: 100px;
  height: 120px;
  margin-bottom: 15%;
  top: 10px;
}

.container {
  padding: 0px;
  margin: 0px;
}
p {
  padding: 0px;
  margin: 0px;
}
.edu-duration {
  margin-top: 30px;
  font-weight: light;
}
.edu-degree {
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
}
.edu-university {
  color: #131313;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 5px;
}

.edu-desc {
  font-size: 1rem;
  color: #999999;
}
.resume-list {
  font-size: 1.2rem;
  font-weight: bold;
}
.resume-class {
  margin-top: 80px;
  font-size: 2rem;
  font-weight: bold;
  color: #2f58cd;
}
.skill-progress {
  margin-top: 20px;
}
/* {   min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    } */

@media screen and (max-width: 768px) {
  .resume-class {
    margin-left: 20px;
  }

  .col-sm-2 {
    width: 40%;
  }
  .skill-card {
    margin-bottom: 1rem;
    width: 6rem;
    height: 6rem;
    justify-content: center;
    font-size: 0.9rem;
    border-width: 0px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: transform 0.5s;
  }
  .skill-card:hover {
    transform: scale(1.1);
  }

  .skill-progress {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
  table {
    margin: 20px;
  }
}
</style>
