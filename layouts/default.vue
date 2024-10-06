<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <v-app>
    <v-app-bar :elevation="0" height="40">
      ещё один хедер
    </v-app-bar>
    <v-app-bar :elevation="0">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <img class="logo" @click="router.push('/')" src="" alt="логотип" />
          <div class="desktop-navigation d-md-flex d-none">
            Виды массажа Расписание Стоимость Обучение О нас
          </div>
          <div class="phone-navigation d-flex d-md-none">
            on phone
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    
    <v-main>
      <slot />
      тут будет подвал
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.logo {
  cursor: pointer;
}
.desktop-navigation {
}
.phone-navigation {

}
</style>
