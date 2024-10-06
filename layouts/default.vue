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
        <v-col cols="12" color="#2B2B2B" class="contacts">
          Запишись на пробное занятие, &nbsp;<NuxtLink to="tel:+79127528877">+79127528877</NuxtLink><br>
          Или пишите <NuxtLink to="https://vk.com">VK</NuxtLink>
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
  background-color: #2B2B2B;
  color: #EDDB99;
  display: flex;
  justify-content: center;
}
</style>
