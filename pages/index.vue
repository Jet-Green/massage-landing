<script lang="ts" setup>
const router = useRouter()

const items = [
  {
    title: "выаав",
    subtitle: "ыавав",
    image: "https://yogaperm.ru/wp-content/uploads/yoga-v-permi-yoga-v-gamakah.jpg",
  },
  {
    title: "выаав",
    subtitle: "ыавав",
    image: "https://yogaperm.ru/wp-content/uploads/yoga-v-permi-yoga-v-gamakah.jpg",
  },
  {
    title: "выаав",
    subtitle: "ыавав",
    image: "https://yogaperm.ru/wp-content/uploads/yoga-v-permi-yoga-v-gamakah.jpg",
  },
  {
    title: "выаав",
    subtitle: "ыавав",
    image: "https://yogaperm.ru/wp-content/uploads/yoga-v-permi-yoga-v-gamakah.jpg",
  },
]
</script>

<template>
  <v-row class="super-blur-image">
    <v-col cols="12">
      <v-row class="d-flex justify-center">
        <v-col cols="12">
          <v-carousel hide-delimiters cycle>
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

      <v-row class="d-flex justify-center text-center mt-5 mb-5">
        <v-col cols="12" md="10" lg="8">
          <p class="glav" style="padding: 50px 0 40px 0">MASSAGE</p>
          <p class="headline">
            Мы — команда квалифицированных преподавателей. <br />
            У нас вы найдете индивидуальный подход, дружескую теплую атмосферу, уютные и чистые залы.
          </p>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center" style="margin-bottom: 50px">
        <v-col cols="11" md="8">
          <ul class="cardd">
            <li class="cardd__ite" v-for="(item, index) in items" :key="index" @click="router.push('/info')">
              <img :src="item.image" alt="" />
              <p class="title">{{ item.title }}</p>
              <p class="subtitle">{{ item.subtitle }}</p>
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center py-12" style="background-color: #e0d5c3">
        <v-col cols="11" md="8">
          <v-row class="d-flex align-start text-center">
            <v-col cols="4">
              <p class="info-title">Студия массажа</p>
              <p class="text">
                Оздоровительный центр YOGASTUDIOfabric был открыт в 2012 году. Основная цель йоги — это оздоровление
                организма. Задача преподавателя — не навредить,
              </p>
            </v-col>
            <v-col cols="4">
              <p class="info-title">Преподаватели</p>
              <p class="text">
                Наши преподаватели решают три основные задачи на занятиях йогой:<br />
                —воспитательная (правильный режим дня, сбалансированное питание);
              </p>
            </v-col>
            <v-col cols="4">
              <p class="info-title">Masssage</p>
              <img src="https://yogaperm.ru/wp-content/uploads/zal-sibirskaya.jpg" alt="">
            </v-col>
          </v-row>
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
.glav {
  font-size: clamp(2rem, 1.6479rem + 1.1268vw, 3rem);
}
img {
  width: 100%; // изображение занимает всю ширину карточки
  border-radius: 8px; // скругленные края изображения
  cursor: pointer;
  transition: transform 0.3s ease;
}
img:hover {
  transform: translateY(-10px);
  transition: 0.4em;
}
.title {
  font-weight: 600;
  font-size: clamp(1rem, 1.162rem + 0.2817vw, 1.5rem);
}

.headline {
  font-size: clamp(1.25rem, 1.162rem + 0.2817vw, 1.5rem);
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
.cardd {
  text-align: center;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // Изменено на space-between для равномерного распределения элементов
  margin: 0; // Убрали отступы по бокам
}

.cardd__ite {
  margin: 10px 0; // Введен только вертикальный отступ
  flex: 0 0 calc(25% - 20px); // Каждая карточка занимает 1/3 ширины с учетом отступа
  max-width: calc(25% - 20px); // Максимальная ширина карточки
}

.text {
  font-size: clamp(0.8125rem, 0.6634rem + 0.4261vw, 1rem);
}
.info-title {
  font-size: clamp(1.5rem, 1.2017rem + 0.8523vw, 1.875rem);
  font-weight: 500;
  margin-bottom: 20px;
}
</style>
