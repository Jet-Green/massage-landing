<script lang="ts" setup>
const router = useRouter();

const items = [
  {
    title: "выаав",
    subtitle: "ыавав",
    image:
      "https://i.pinimg.com/736x/13/e8/86/13e886fbec6287235522bb2a81b35f97.jpg",
  },
  {
    title: "выаав",
    subtitle: "ыавав",
    image:
      "https://i.pinimg.com/736x/13/e8/86/13e886fbec6287235522bb2a81b35f97.jpg",
  },
  {
    title: "выаав",
    subtitle: "ыавав",
    image:
      "https://i.pinimg.com/736x/13/e8/86/13e886fbec6287235522bb2a81b35f97.jpg",
  },
  {
    title: "выаав",
    subtitle: "ыавав",
    image:
      "https://i.pinimg.com/736x/13/e8/86/13e886fbec6287235522bb2a81b35f97.jpg",
  },
];
</script>

<template>
  <v-row class="super-blur-image">
    <v-col cols="12">
      <v-row class="d-flex justify-center">
        <v-col cols="11" md="8" class="pt-8">
          <v-carousel hide-delimiters cycle style="border-radius: 8px">
            <template v-slot:prev="{ props }">
              <v-btn
                class="carousel-btn"
                @click="props.onClick"
                icon="mdi-chevron-left"
              ></v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn
                class="carousel-btn"
                @click="props.onClick"
                icon="mdi-chevron-right"
              ></v-btn>
            </template>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center text-center mt-5 mb-5">
        <v-col cols="12" md="10" lg="8">
          <h3 class="headline">
            Мы — команда квалифицированных преподавателей. <br />
            У нас вы найдете индивидуальный подход, дружескую теплую атмосферу,
            уютные и чистые залы.
          </h3>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="10" md="8">
          <ul class="cardd">
            <li class="cardd__ite" v-for="(item, index) in items" :key="index">
              <img :src="item.image" alt="" />
              <p class="title">{{ item.title }}</p>
              <p class="subtitle">{{ item.subtitle }}</p>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.cardd {
  text-align: center;
  list-style: none;
  display: flex;
  flex-wrap: wrap; // добавлено для обтекания элементов
  justify-content: center; // центрирование элементов
  margin: 0 -10px; // убираем отступы по бокам
}

.cardd__ite {
  margin: 10px; // отступ между элементами
  flex: 1 0 45%; // адаптивная ширина для карточек
  max-width: 250px; // максимальная ширина карточки
}

img {
  width: 100%; // изображение занимает всю ширину карточки
  border-radius: 8px; // скругленные края изображения
}

.title {
  font-weight: 600;
  font-size: clamp(1rem, 1.162rem + 0.2817vw, 1.5rem);
}

.headline {
  font-size: clamp(1.25rem, 0.7528rem + 1.4205vw, 1.875rem);
  color: #303030;
}

.super-blur-image {
  background-size: cover;
}

.card {
  background-color: #efdeb3;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  color: #809248;
}

.carousel-btn {
  background-color: #eddb99;
  color: #809248;
}
</style>
