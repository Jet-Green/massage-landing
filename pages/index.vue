<script lang="ts" setup>
const router = useRouter()
</script>

<template>
  <v-row class="super-blur-image">
    <v-col cols="12">
      <v-row class="d-flex justify-center">
        <v-col cols="10" md="8" class="pt-8">
          <v-carousel hide-delimiters cycle style="border-radius: 8px">
            <template v-slot:prev="{ props }">
              <v-btn class="carousel-btn" @click="props.onClick" icon="mdi-chevron-left"></v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn class="carousel-btn" @click="props.onClick" icon="mdi-chevron-right"></v-btn>
            </template>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="10" md="8">
          <ul class="mass">
            <li class="mass_types card" @click="router.push('/info')">
              <img src="/assets/images/массаж тема лютая.jpg" alt="" />
              <h2>fibfghiuf</h2>
              <p>gjkgjkgffj</p>
            </li>
            <li class="mass_types card" @click="router.push('/info')">
              <img src="/assets/images/массаж тема лютая.jpg" alt="" />
              <h2>fibfghiuf</h2>
              <p>gjkgjkgffj</p>
            </li>
            <li class="mass_types card" @click="router.push('/info')">
              <img src="/assets/images/массаж тема лютая.jpg" alt="" />
              <h2>fibfghiuf</h2>
              <p>gjkgjkgffj</p>
            </li>
            <li class="mass_types card" @click="router.push('/info')">
              <img src="/assets/images/массаж тема лютая.jpg" alt="" />
              <h2>fibfghiuf</h2>
              <p>gjkgjkgffj</p>
            </li>
            <li class="mass_types card" @click="router.push('/info')">
              <img src="/assets/images/массаж тема лютая.jpg" alt="" />
              <h2>fibfghiuf</h2>
              <p>gjkgjkgffj</p>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.mass {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
  // color: white;

  // Добавляем отступы между элементами
  li {
    margin-bottom: 20px; // Отступ между элементами списка
    flex: 1 1 calc(33% - 20px); // Настройка ширины элементов

    @media (max-width: 768px) {
      flex: 1 1 calc(50% - 20px); // 2 элемента в ряд на планшетах
    }

    @media (max-width: 480px) {
      flex: 1 1 100%; // 1 элемент в ряд на мобильных устройствах
    }

    // Стилизация изображений и других элементов
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px; // Пример стилизации для изображения
    }

    h2 {
      font-size: 1.5rem;
      margin: 10px;
    }

    p {
      font-size: 1rem;
      color: #666;
      margin: 10px;
    }
  }
}
.super-blur-image {
  background-image: url("../assets/images/background2.jpg");
  background-size: cover;
}
.card {
  background-color: #eddb99;
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
