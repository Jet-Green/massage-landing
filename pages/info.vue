<script setup lang="ts"></script>
<template>
  <v-row class="d-flex justify-center" style="background-color: #e0d5c3">
    <v-col cols="11" md="10">
      <h1 class="heading">Название массажа</h1>
      <div class="about">
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
        <div class="wrapper">
          <h2>что дает</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolore sint sed voluptate, natus impedit ullam eveniet voluptatibus
            consequuntur nobis illo optio, quos autem nemo modi. Dolores
            expedita natus vitae!
          </p>
        </div>
      </div>
      <div class="about" style="padding-top: 10px; padding-bottom: 10px">
        <div class="wrapper">
          <h2>что дает</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            autem, iste veniam ratione esse veritatis repudiandae non
            necessitatibus nisi debitis sit vel pariatur beatae laborum facere,
            minima aut, illo obcaecati!
          </p>
        </div>
        <img src="/assets/images/массаж тема лютая.jpg" alt="" />
      </div>
      <div class="about">
        <div class="wrapper w-100">
          <h2>что дает</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            enim perferendis, obcaecati laboriosam sed ad aliquid laborum! Quo
            nesciunt laborum excepturi, nobis similique enim cupiditate rem, at,
            molestiae laboriosam earum?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit aliquam ullam quia voluptas nisi fuga beatae
            rerum veritatis cumque exercitationem at, dolorem rem minus
            quibusdam sed molestias sit in Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Odio, at consequatur maxime iusto ab
            commodi animi? Pariatur minima repellat totam est atque, quidem
            deleniti quisquam nulla, perferendis reprehenderit dicta eum?
          </p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.heading {
  // margin-top: 20px;
  margin-bottom: 20px;
}
img {
  max-width: 50%;
}
.about {
  display: flex;

  color: #303030;
}
.wrapper {
  margin-left: 20px;
  width: 50%;
}
</style>
