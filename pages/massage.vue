<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
const massageStore = useMassage()
let { massages } = storeToRefs(massageStore)

const currentMassageId = router.currentRoute.value.query?._id

let massage = ref(massages.value.find((m) => m._id == currentMassageId))
</script>
<template>
  <v-row class="d-flex justify-center" v-if="massage?._id">
    <v-col cols="11" md="8">
      <v-row class="main-info">
        <v-col
          cols="12"
          style="display: flex; justify-content: start; align-items: center; cursor: pointer"
          @click="router.push('/')"
        >
          <span style="font-size: 16px">
            <v-icon class="mr-4" icon="mdi-arrow-left"></v-icon>
          </span>
          <p class="title">{{ massage.name }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <img src="/assets/images/main-page-img.jpg" alt="" style="width: 100%" />
        </v-col>
        <v-col>
          <h2>Эффект от массажа</h2>
          <p>
            {{ massage.effect }}
          </p>
        </v-col>
        <v-col cols="12">
          <h2>Какой результат</h2>
          <p>
            {{ massage.result }}
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
  <v-row v-if="massage?._id" class="d-flex justify-center" style="background-color: #809248; color: white">
    <v-col cols="11" md="8">
      <h2>Показания к массажу</h2>
      <p>
        {{ massage.indications }}
      </p>
    </v-col>
    <v-col cols="11" md="8">
      <h2>Противопоказания</h2>
      <p>
        {{ massage.contraindications }}
      </p>
    </v-col>
  </v-row>
  <v-row v-if="!massage?._id">
    <v-col cols="12" class="d-flex justify-center align-center" style="min-height: 60vh;">
      <v-progress-circular color="#809248" indeterminate :size="100"></v-progress-circular>
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
.title {
  font-weight: 500;
  font-size: clamp(1.25rem, 0.8897rem + 1.0294vw, 2.125rem);
}
</style>
