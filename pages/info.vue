<script setup lang="ts"></script>
<template>
  <v-row class="d-flex justify-center">
    <v-col cols="11" md="10" style="min-height: 100vh">
      <h1 class="heading">Название массажа</h1>
      <div class="about">
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
        <div class="wrapper">
          <h2>что дает</h2>
          <p>dfkjbfjkf</p>
        </div>
      </div>
      <div class="about" style="padding-top: 10px; padding-bottom: 10px">
        <div class="wrapper">
          <h2>что дает</h2>
          <p>dfkjbfjkf</p>
        </div>
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
      </div>
      <div class="about">
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
        <div class="wrapper">
          <h2>что дает</h2>
          <p>dfkjbfjkf</p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.heading {
  // margin-top: 20px;
  margin-bottom: 20px;
}
img {
  max-width: 50%;
}
.about {
  display: flex;
  background-color: #e0d5c3;
}
.wrapper {
  margin-left: 20px;
  width: 50%;
}
</style>
