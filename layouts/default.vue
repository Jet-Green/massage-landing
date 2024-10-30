<script setup lang="ts">
const massageStore = useMassage()

const router = useRouter()
let { massages } = storeToRefs(massageStore)

let navigation = computed(() => {
  return massages.value.map((massage) => {
    return {
      title: massage.name,
      to: `/massage?_id=${massage._id}`,
    }
  })
})

// [
//   {
//     title: "Обычный",
//     to: "/info",
//   },
//   {
//     title: "Необычный",
//     to: "/info",
//   },
//   {
//     title: "Какой-то ещё",
//     to: "/info",
//   },
// ]

let drawer = ref(false)

function selectNav(a: any) {
  console.log(a.id)
  router.push(a.id)
  drawer.value = false
}

// await massageStore.getAll()
</script>
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" persistent temporary location="right" color="#191919">
      <div class="d-flex justify-end align-center" style="height: 72px">
        <v-icon icon="mdi-close" @click="drawer = !drawer" style="height: 48px; width: 48px"></v-icon>
      </div>
      <v-list nav @click:select="selectNav">
        <v-list-group value="group1">
          <template v-slot:activator="{ props }">
            <v-list-item title="Направления массажа" v-bind="props"></v-list-item>
          </template>

          <v-list-item v-for="(item, index) of navigation" :title="item.title" :value="item.to"></v-list-item>

          <!-- <v-list-group value="group2">
            <template v-slot:activator="{ props }">
            </template>
          </v-list-group> -->
        </v-list-group>
        <v-list-item title="Расписание" value="/#footer" :active="false"></v-list-item>
        <v-list-item title="Обучение" value="/#footer" :active="false"></v-list-item>
        <v-list-item title="О нас" value="/#footer" :active="false"></v-list-item>
        <!-- <v-list-item title="About" value="about"></v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar scroll-behavior="fully-hide" :elevation="0" height="40" color="#E0D5C3">
      <v-row class="d-flex justify-center">
        <v-col cols="11" md="8" class="second-header">
          Массаж в Перми: классический, лимфодренажный, антицеллюлитный, СПА, для лица
          <div class="d-flex">
            <a href="tel:8(922)3111260"><v-icon icon="mdi-phone" style="font-size: 18px"></v-icon></a>
            <NuxtLink class="d-none d-sm-flex" to="tel:8(922)3111260">8 (922) 311 12 60</NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-app-bar :elevation="0" height="70">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="6" class="d-flex justify-space-between justify-md-space-around align-center">
          <img class="logo" @click="router.push('/')" src="../assets/images/logo-no-bg.png" alt="логотип" />
          <div class="desktop-navigation d-md-flex d-none">
            <div class="nav-item border-right" id="menu-activator">
              <NuxtLink style="cursor: pointer">
                Виды массажа <v-icon style="font-size: 16px" icon="mdi-chevron-down"></v-icon>
              </NuxtLink>
              <v-menu activator="#menu-activator">
                <div class="menu">
                  <div class="menu-item" v-for="(item, index) in navigation" :key="index">
                    <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
                    <!-- {{ item }} -->
                  </div>
                </div>
                <!-- <v-list>
                  <v-list-item base-color="#809248" v-for="(item, index) in massagesList" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list> -->
              </v-menu>
            </div>
            <div class="nav-item border-right">
              <NuxtLink :to="{ path: '/', hash: '#footer' }"> Расписание </NuxtLink>
            </div>
            <div class="nav-item border-right">
              <NuxtLink :to="{ path: '/', hash: '#about-us' }"> О нас </NuxtLink>
            </div>
            <div class="nav-item">
              <NuxtLink :to="{ path: '/', hash: '#footer' }"> Обучение </NuxtLink>
            </div>
          </div>
          <div class="phone-navigation d-flex d-md-none">
            <v-app-bar-nav-icon variant="text" color="#809248" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <slot />
      <v-row>
        <v-col cols="12" class="contacts">
          <div class="w-100 d-flex justify-center">
            Запишись на пробное занятие, &nbsp; <NuxtLink to="tel:8(922)3111260">8 (922) 311 12 60</NuxtLink>
          </div>
          <div class="w-100 d-flex justify-center">
            Или пишите&nbsp;<NuxtLink to="https://vk.com">VK</NuxtLink>,&nbsp;<NuxtLink to="https://t.me">Telegram
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="12" class="main-info" id="footer">
          <v-row class="d-flex justify-center">
            <v-col cols="11" md="8">
              <v-row>
                <v-col cols="12" md="4">
                  <h3>О студии</h3>
                  Здесь вы найдете индивидуальный подход и решения по оздоровлению вашего тела
                </v-col>
                <v-col cols="12" md="4">
                  <h3>Ждем вас</h3>
                  <div class="my-4">г. Пермь, ул. Пермская д.161</div>
                  <h3>Звоните</h3>
                  <div class="my-4">
                    <NuxtLink to="tel:8(922)3111260">8 (922) 311 12 60</NuxtLink>
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
                <v-col cols="6"> © 2024 Олег Волков, Пермь </v-col>
                <v-col cols="6" class="d-flex justify-end">
                  <NuxtLink to="https://t.me/jet_green">
                    <b> Над сайтом работали </b>
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
  height: 90px;
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

.phone-navigation {}

.contacts {
  background-color: #2b2b2b;
  color: #eddb99;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.main-info {
  background-color: #303030;
  padding-top: 50px;
  padding-bottom: 50px;

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

.second-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(0.625rem, 0.3267rem + 0.8523vw, 1rem);
}

.menu {
  border: 1px solid rgba(128, 146, 72, 0.2);
  border-radius: 4px;
  background-color: white;

  .menu-item {
    padding: 10px;
  }
}
</style>
