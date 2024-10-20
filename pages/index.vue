<script lang="ts" setup>
const router = useRouter()
let { massages } = useMassage()
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
            <v-carousel-item>
              <div
                style="
                  background-image: url('https://cdn.vuetifyjs.com/images/cards/docks.jpg');
                  background-repeat: no-repeat;
                  background-size: cover;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <span class="carousel-text">Массаж</span>
              </div>
            </v-carousel-item>
            <v-carousel-item>
              <div
                style="
                  background-image: url('https://cdn.vuetifyjs.com/images/cards/hotel.jpg');
                  background-repeat: no-repeat;
                  background-size: cover;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <span class="carousel-text">авыав</span>
              </div>
            </v-carousel-item>
            <v-carousel-item>
              <div
                style="
                  background-image: url('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg');
                  background-repeat: no-repeat;
                  background-size: cover;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <span class="carousel-text">и не только массаж</span>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center text-center mt-5 mb-5">
        <v-col cols="11" md="10" lg="8">
          <p class="glav" style="padding: 50px 0 40px 0">MASSAGE</p>
          <p class="headline">
            Мы — команда квалифицированных преподавателей. <br />
            У нас вы найдете индивидуальный подход, дружескую теплую атмосферу, уютные и чистые залы.
          </p>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center" style="margin-bottom: 50px">
        <v-col cols="11" md="8">
          <ul class="card">
            <li class="card__item" v-for="(item, index) in massages" :key="index" @click="router.push(`/massage?_id=${item._id}`)">
              <img :src="item.image" alt="" />
              <p class="name">{{ item.name }}</p>
              <p class="description">{{ item.description }}</p>
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center py-12" style="background-color: #e0d5c3">
        <v-col cols="11" md="8">
          <v-row class="d-flex align-start text-center">
            <v-col cols="12" md="4">
              <p class="info-title">Студия массажа</p>
              <p class="text">
                Оздоровительный центр YOGASTUDIOfabric был открыт в 2012 году. Основная цель йоги — это оздоровление
                организма. Задача преподавателя — не навредить,
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <p class="info-title">Преподаватели</p>
              <p class="text">
                Наши преподаватели решают три основные задачи на занятиях йогой:<br />
                —воспитательная (правильный режим дня, сбалансированное питание);
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <p class="info-title">Masssage</p>
              <img src="https://yogaperm.ru/wp-content/uploads/zal-sibirskaya.jpg" alt="" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.card {
  text-align: center;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0; // Added padding to avoid default margins
}

.card__item {
  cursor: pointer;
  margin: 10px; // Space between elements
  flex: 1 0 45%; // Responsive width
  max-width: calc(25% - 20px); // Adjusted max width for larger screens

  @media (max-width: 600px) {
    flex: 1 0 90%; // Full width on small screens
    max-width: 90%; // Full width on small screens
  }
  @media (max-width: 1200px) and (min-width: 600px) {
    max-width: calc(50% - 20px); // Adjusted max width for larger screens
  }
}

.glav {
  font-size: clamp(2rem, 1.6479rem + 1.1268vw, 3rem);
}
img {
  width: 100%; // Установка ширины изображения на 100%
  height: auto; // Автоматическая высота для сохранения пропорций
  border-radius: 8px; // Закругление углов изображений
}

.carousel-btn {
  background-color: rgba(255, 255, 255, 0.7); // Полупрозрачный фон для кнопок
  border-radius: 50%; // Кнопки имеют круглую форму
  color: #333; // Цвет иконок
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1); // Изменение фона при наведении
  }
}
.v-carousel {
  height: 400px; // Установка фиксированной высоты карусели
  img {
    object-fit: cover; // Обеспечение заполнения контейнера изображением
  }
}

.headline {
  font-size: clamp(1rem, 0.7857rem + 1.4286vw, 1.5rem);
  line-height: 1.5; // Высота строки для лучшей читаемости
  margin-top: 10px; // Отступ сверху
}

.text {
  font-size: clamp(0.8125rem, 0.6634rem + 0.4261vw, 1rem);
}
.info-title {
  font-size: clamp(1.5rem, 1.2017rem + 0.8523vw, 1.875rem);
  font-weight: 500;
  margin-bottom: 20px;
}

.carousel-text {
  font-size: clamp(2.125rem, 1.7647rem + 1.0294vw, 3rem);
  color: white;
  font-weight: 500;
  text-shadow: #333 0px 0 12px;
}
.name {
  font-size: clamp(1rem, 0.7017rem + 0.8523vw, 1.375rem);
  font-weight: 500;
}
.description {
  font-size: clamp(0.875rem, 0.7756rem + 0.2841vw, 1rem);
}
</style>
