<template>
  <div class="footer container-fluid">
    <span>Developed By Suyash Omabale | &#169; 2023 All rights reserved.</span>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
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
.footer {
  text-align: center;
  color: white;
  padding: 20px;
  background-color: #000018;
}
</style>
