<template>
  <div>
    <nav class="z-depth-2">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo center logo">
        <img src="../assets/LOGO-MUR.png" alt="">
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.logo img {
  width: 220px;
  height: 70px;
  margin-top: 5px;
  opacity: .6;
}
.logo img:hover {
  opacity: .8;
}
  nav {
  background: #12c2e9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>