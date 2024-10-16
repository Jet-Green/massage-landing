<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
</script>
<template>
  <v-row class="d-flex justify-center">
    <v-col cols="11" md="8">
      <v-row class="main-info">
        <v-col
          cols="12"
          style="display: flex; justify-content: start; align-items: center; cursor: pointer;"
          @click="router.push('/')"
        >
        <span style="font-size: 20px;">
          <v-icon class="mr-4" icon="mdi-arrow-left"></v-icon>
        </span>
          <h1>Лимфодренажный массаж</h1>
        </v-col>
        <v-col cols="12" sm="6">
          <img src="/assets/images/main-page-img.jpg" alt="" style="width: 100%" />
        </v-col>
        <v-col>
          <h2>Эффект от массажа</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus
            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita
            natus vitae!
          </p>
        </v-col>
        <v-col cols="12">
          <h2>Какой результат</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus
            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita
            natus vitae!
          </p>
        </v-col>
      </v-row>
      <!-- <v-row class="card">
        <v-col>
          <h2>Какой результат</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus
            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita
            natus vitae!
          </p>
        </v-col>
        <v-col cols="6">
          <img src="/assets/images/массаж тема лютая.jpg" alt="" style="width: 100%" />
        </v-col>
      </v-row> -->

      <!-- <h1 class="heading">Название массажа</h1>
      <div class="about">
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
        <div class="wrapper">
          <h2>что дает</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus
            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita
            natus vitae!
          </p>
        </div>
      </div>
      <div class="about" style="padding-top: 10px; padding-bottom: 10px">
        <div class="wrapper">
          <h2>что дает</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem autem, iste veniam ratione esse veritatis
            repudiandae non necessitatibus nisi debitis sit vel pariatur beatae laborum facere, minima aut, illo
            obcaecati!
          </p>
        </div>
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
      </div>
      <div class="about">
        <div class="wrapper w-100">
          <h2>что дает</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim perferendis, obcaecati laboriosam
            sed ad aliquid laborum! Quo nesciunt laborum excepturi, nobis similique enim cupiditate rem, at, molestiae
            laboriosam earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam ullam quia voluptas
            nisi fuga beatae rerum veritatis cumque exercitationem at, dolorem rem minus quibusdam sed molestias sit in
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, at consequatur maxime iusto ab commodi
            animi? Pariatur minima repellat totam est atque, quidem deleniti quisquam nulla, perferendis reprehenderit
            dicta eum?
          </p>
        </div>
      </div> -->
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center " style="background-color: #809248; color: white">
    <v-col cols="11" md="8">
      <h2>Показания к массажу</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit incidunt nobis voluptatibus
        minima consequuntur in quaerat quia illum labore nam nostrum blanditiis quam ratione nulla sequi, vel officiis
        architecto?
      </p>
    </v-col>
    <v-col cols="11" md="8">
      <h2>Противопоказания</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tempore recusandae dolorum ab ut voluptates
        aspernatur. Voluptatem, quaerat voluptatibus. Commodi minus quo quam ab harum rem minima? Error, similique quas.
      </p>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
// .heading {
//   margin-top: 60px;
//   margin-bottom: 20px;
// }
// img {
//   max-width: 50%;
// }
// .about {
//   display: flex;

//   color: #303030;
// }
// .wrapper {
//   margin-left: 20px;
//   width: 50%;
// }
.main-info {
  // background-color: #eddb99;
  // color: #809248;
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
  img {
    border-radius: 8px;
  }
  p {
    color: black;
  }
}
</style>
