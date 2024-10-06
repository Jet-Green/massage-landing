<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <v-app>
    <!-- <v-app-bar scroll-behavior="fully-hide" :elevation="0" height="40" color="#E0D5C3" > ещё один хедер </v-app-bar>
    <v-app-bar :elevation="0" height="80">
      <v-row class="d-flex justify-center">
        <v-col cols="6" class="d-flex justify-space-around align-center">
          <img class="logo" @click="router.push('/')" src="" alt="логотип" />
          <div class="desktop-navigation d-md-flex d-none">
            <div class="nav-item border-right">
              <NuxtLink to="/sdf"> Виды массажа </NuxtLink>
            </div>
            <div class="nav-item border-right">
              <NuxtLink to="/schedule"> Расписание </NuxtLink>
            </div>
            <div class="nav-item border-right">
              <NuxtLink to="/price"> Стоимость </NuxtLink>
            </div>
            <div class="nav-item">
              <NuxtLink> Обучение </NuxtLink>
            </div>
          </div>
          <div class="phone-navigation d-flex d-md-none">on phone</div>
        </v-col>
      </v-row>
    </v-app-bar> -->

    <v-main>
      <slot />
      <v-row>
        <v-col cols="12" class="contacts">
          <div class="w-100 d-flex justify-center">
            Запишись на пробное занятие, &nbsp;<NuxtLink to="tel:+79127528877">+79127528877</NuxtLink>
          </div>
          <div class="w-100 d-flex justify-center">
            Или пишите&nbsp;<NuxtLink to="https://vk.com">VK</NuxtLink>,&nbsp;<NuxtLink to="https://t.me"
              >Telegram</NuxtLink
            >
          </div>
        </v-col>
        <v-col cols="12" class="main-info">
          <v-row class="d-flex justify-center">
            <v-col cols="10" md="8">
              <v-row>
                <v-col cols="12" md="4">
                  <h3>О студии</h3>
                  Мы команда квалифицированных преподавателей. У нас вы найдете индивидуальный подход, дружескую теплую
                  атмосферу, уютные и чистые залы.
                </v-col>
                <v-col cols="12" md="4">
                  <h3>Ждем вас</h3>
                  <div class="my-4">Сибирская, 27а, кабинет 021</div>
                  <h3>Звоните</h3>
                  <div class="my-4">
                    <NuxtLink to="tel:+79127528877">+79127528877</NuxtLink>
                  </div>
                  <h3>Пишите</h3>
                  <div class="my-4">
                    <NuxtLink to="https://vk.com">VK</NuxtLink>,&nbsp;<NuxtLink to="https://t.me">Telegram</NuxtLink>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <h3>Режим работы</h3>
                  <div class="my-4">
                    С понедельника по пятницу <br />
                    с 9:00 до 21:20 (мск +2)
                  </div>
                  <div class="my-4">
                    Суббота <br />
                    с 9:00 до 19:00
                  </div>
                  <div class="my-4">
                    Воскресенье <br />
                    с 9:00 до 17:00
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="copyright">
          <v-row class="d-flex justify-center">
            <v-col cols="10" md="8">
              <v-row>
                <v-col cols="6"> © 20xx-2024 MASSAGESTUDIO Пермь </v-col>
                <v-col cols="6" class="d-flex justify-end">
                <NuxtLink to="/">
                  Разрабы
                </NuxtLink>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- <h3>Основные цвета:</h3>
      <v-sheet color="#809248" height="50" width="50"></v-sheet>
      <v-sheet color="#E0D5C3" height="50" width="50"></v-sheet>
      <v-sheet color="#5C5B58" height="50" width="50"></v-sheet>
      <v-sheet color="#2B2B2B" height="50" width="50"></v-sheet>
      <v-sheet color="#303030" height="50" width="50"></v-sheet> -->
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.logo {
  cursor: pointer;
}
.desktop-navigation {
  color: #809248;
  .nav-item {
    margin: 10px;
    margin-right: 0;
    padding: 13px 0px;
    padding-right: 10px;
    display: flex;
    align-items: center;
  }
  .border-right {
    border-right: 1px solid rgba(128, 146, 72, 0.2);
  }
}
.phone-navigation {
}
.contacts {
  background-color: #2b2b2b;
  color: #eddb99;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.main-info {
  background-color: #303030;
  padding: 50px 0px;
  h3 {
    color: white;
  }
  color: #eddb99;
}
.copyright {
  border-top: 1px solid rgba(128, 146, 72, 0.2);
  background-color: #303030;
  color: #eddb99;
}
</style>
