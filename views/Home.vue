<template>
     <section class="resume">
       <ResumeVue/>
    </section>
     <section class="projects">
       <ProjectsVue/>
    </section>
    <section class="contact">
       <ContactVue/>
    </section>
    <section class="footer">
       <FooterVue/>
    </section>
</template>
<script>
    import ResumeVue from "@/components/Resume.vue";
    import ContactVue from "@/components/Contact.vue";
    import ProjectsVue from "@/components/Projects.vue";
    import FooterVue from "@/components/Footer.vue";
      export default {
        name: "Home",
        components: {
     
            ResumeVue,
            ContactVue,
            ProjectsVue,
            FooterVue

        },
        mounted(){
            
        }
 
};
 
</script>