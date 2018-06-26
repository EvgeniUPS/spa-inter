<template>
<div>
   <h3>Диваны</h3>
  <input type="text" v-model="searchName" autofocus>


  <hr>
  <section class="products">

  <div class="product-card" v-for="(name, index) in filteredNames" :key="index">
    <h2>{{name.factory}} -{{name.model}}</h2>
    <div class="product-image">
      <!-- <img src="/img/test.jpg"> -->
      <img :src="name.image" alt="" class="rounded">
    </div>
    <div class="product-info">
      <p class="cost">{{name.description}}</p>
          <p>Размеры: {{name.sizeW}}*{{name.sizeD}}*{{name.sizeH}}h</p>
          <p class="cost">Старая цена:  {{name.firstPrice}} грн. </p>
          <p class="cost text-danger border border-danger rounded">Цена со скидкой:<strong> {{name.finalPrice}} грн.</strong></p>
    </div>
  </div>
  </section>


<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>







</div>
  








</template>

<script>
export default {
  data() {
    return {
      names: [
        /////////////////
        {
          id: "135554",
          factory: "ALF",
          model: "Montecarlo",
          cover: "Серый, лак",
          description: "Шкаф 4дв., 2 зеркала",
          art: "PJMN0012 MONTECARLO ARM.4/A",
          stock: "2",
          firstPrice: "111 215",
          finalPrice: "38 926",
          image: "../static/img/test.jpg",
          sizeW: "229",
          sizeD: "65",
          sizeH: "240",
          country: "Италия",
          tags: "Монтекарло, серый, глянец, 4дв, современный, "
        },
        {
          id: "36862",
          factory: "ARCOBALENO",
          model: "Tosca",
          cover: "ciliegio",
          description: "Шкаф 6дв., 4 зеркала",
          art: "0040 ARMADIO 6/A CON 4 SPECCHI. 293*64*253",
          stock: "2",
          firstPrice: "135 017",
          finalPrice: "47 256",
          image: "/static/img/36862.jpg",
          sizeW: "293",
          sizeD: "64",
          sizeH: "253",
          country: "Италия",
          tags: "Аркобалено, тоска, 6дв., классика, вишня"
        },
        {
          id: "136830",
          factory: "CINOVA",
          model: "NINFEA",
          cover: "noce",
          description: "Шкаф-купе, 2 дв.",
          art: "ARNINL ARMADIO 2/A NINFEA",
          stock: "1",
          firstPrice: "131 370",
          finalPrice: "45 980",
          image: "/static/img/136830.jpg",
          sizeW: "273",
          sizeD: "69",
          sizeH: "253",
          country: "Италия",
          tags: "Чинова, синова, классика, 2,7"
        },
        {
          id: "18033",
          factory: "DALLAGNESE ",
          model: "CHOPIN ",
          cover: "cherry",
          description: "Шкаф 5 дв.,  3 зеркала ",
          art: "326815/13 ГАРДЕРОБ 5-дв. с 3-мя зерк.",
          stock: "1",
          firstPrice: "160 704",
          finalPrice: "56 247",
          image: "/static/img/18033.jpg",
          sizeW: "299",
          sizeD: "64",
          sizeH: "221",
          country: "Италия",
          tags: "Далагнезе, шопен, классика, вишня, 3м"
        },
        {
          id: "18039",
          factory: "DALLAGNESE ",
          model: "Mozart",
          cover: "noce",
          description: "Шкаф 4дв., 2 зеркала",
          art: "326214/2 ШКАФ 4-х дв с 2-мя зерк.",
          stock: "1",
          firstPrice: "132 802",
          finalPrice: "46 481",
          image: "/static/img/18039.jpg",
          sizeW: "230",
          sizeD: "64",
          sizeH: "218",
          country: "Италия",
          tags: "Далагнезе, моцарт, классика, вишня, 2.3м"
        },
        {
          id: "3868",
          factory: "VENIER ",
          model: "DAFNE ",
          cover: "noce",
          description: "Шкаф 4дв., 2 зеркала",
          art: " ASU401 ШКАФ 4/2334  С 2мя ЗЕР-МИ",
          stock: "1",
          firstPrice: "50 052",
          finalPrice: "15 000",
          image: "/static/img/3868.jpg",
          sizeW: "xx",
          sizeD: "xx",
          sizeH: "xx",
          country: "Италия",
          tags: "Венер, уценка, акция, классика, темный, до15"
        },
        {
          id: "123828",
          factory: "VENIER",
          model: "Afrodita",
          cover: "ciliegio",
          description: "Шкаф 4дв., 2 зеркала",
          art: "ARB404AAFD Armadio 4 ante con 2 specchio",
          stock: "3",
          firstPrice: "59 191",
          finalPrice: "15 000",
          image: "/static/img/123828.jpg",
          sizeW: "195",
          sizeD: "66",
          sizeH: "244",
          country: "Италия",
          tags: "Венер, акция, классика, темный, до15"
        }

        /////////////////
      ],
      searchName: ""
    };
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  },

  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return (
          name.id.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.factory.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.model.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.cover.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.description
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.art.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.stock.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.firstPrice
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.finalPrice
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.sizeW.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.sizeD.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.sizeH.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.country.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.tags.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.id.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.factory.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.tags.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  padding: 2%;
  flex-grow: 1;
  flex-basis: 16%;
}

.product-image img {
  max-width: 100%;
}

.product-info {
  margin-top: auto;
}

/* Выбираем первые два товара */
.products .product-card:last-child,
.products .product-card:nth-last-child(2) {
  flex: 2 46%;
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
</style>


