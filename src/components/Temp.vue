<template>
  
  <v-container fluid grid-list-md>
    <v-layout row wrap>

<!--       
      <v-flex d-flex xs12 sm4 v-for="(name, index) in filteredNames" :key="index">
        <v-card  >
          <v-card-title primary class="title">{{name.model}}</v-card-title>
          <v-card-text>{{ lorem.slice(0,50) }}</v-card-text>
        </v-card>
      </v-flex> -->

      

      <!-- <v-flex d-flex xs12 sm4 v-for="name in 2" :key="name.id">
     
        <v-card  >
           
          <v-card-title primary class="title"> {{name.factory}} {{name.model}} ({{name.cover}}) {{name.art}}</v-card-title>
          <v-card-media
          class="white--text"
          height="400px"
          :src="name.image"
        >
            <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>{{ lorem.slice(0,50) }}</v-card-text>
        </v-card>
      </v-flex> -->


    <v-flex d-flex xs12 sm6 v-for="name in names" :key="name.id">
       <v-card >
        <v-card-media
          :src="name.image"
          height="500px"
          
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline"> {{name.model}} ({{name.cover}}) </div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{name.description}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

      
          
      
    </v-layout>


    
  </v-container>
  
</template>

<script>
export default {
  data() {
    return {
      show: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      temp: 1000000,

      names: [
        /////////////////
        {
          id: "130882",
          showItem: "1",
          factory: "NATUZZI EDITIONS",
          model: "A399",
          cover: "10BK",
          description: "NATUZZI EDITIONS A399 Vella 10BK",
          art: "003 ноги 18",
          stock: "1",
          firstPrice: "42268",
          finalPrice: "31701000000",
          // image: "/static/img/sofas/163071.jpg",
          image: "/static/doc-images/cards/sunshine.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "133793",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "A399",
          cover: "10BS",
          description: "NATUZZI EDITIONS A399 Vella 10BS",
          art: "003 ноги 18",
          stock: "1",
          firstPrice: "42268",
          finalPrice: "31701",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },

        {
          id: "163070",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "A399",
          cover: "15WE-CS",
          description: "NATUZZI EDITIONS A399 Vella 15WE-CS",
          art: "008",
          stock: "1",
          firstPrice: "95841",
          finalPrice: "71880,75",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "163071",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "A399",
          cover: "15WE-CS",
          description: "NATUZZI EDITIONS A399 Vella 15WE-CS",
          art: "003",
          stock: "2",
          firstPrice: "45324",
          finalPrice: "33993",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "102717",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "A450",
          cover: "",
          description: "NATUZZI EDITIONS A450 10KM",
          art: "027 ноги 09",
          stock: "1",
          firstPrice: "88508",
          finalPrice: "66381",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "142180",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "accents",
          cover: "",
          description: "NATUZZI EDITIONS accents",
          art: "A128LB3 OSTUNI COFFEE OAK 75 X120 H33",
          stock: "1",
          firstPrice: "28111",
          finalPrice: "21083,25",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "147641",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "accents",
          cover: "",
          description: "NATUZZI EDITIONS accents",
          art: "A128LN3 OSTUNI WALNUT 75X120 H33",
          stock: "4",
          firstPrice: "28111",
          finalPrice: "21083,25",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "161889",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "accents",
          cover: "",
          description: "NATUZZI EDITIONS accents",
          art:
            "T125LN4  ALBEROBELLO  Coffee table canaletto waltut    80x120xH35",
          stock: "2",
          firstPrice: "32389",
          finalPrice: "24291,75",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "163241",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "т.C015",
          cover: "78.0176.02",
          description: "NATUZZI EDITIONS т.C015 78.0176.02",
          art: "398",
          stock: "1",
          firstPrice: "22509",
          finalPrice: "16881,75",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "163236",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "т.C015",
          cover: "78.0176.03",
          description: "NATUZZI EDITIONS т.C015 78.0176.03",
          art: "272",
          stock: "1",
          firstPrice: "21185",
          finalPrice: "15888,75",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "163237",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "т.C015",
          cover: "78.0176.03",
          description: "NATUZZI EDITIONS т.C015 78.0176.03",
          art: "291",
          stock: "1",
          firstPrice: "16195",
          finalPrice: "12146,25",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "163256",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "т.C016",
          cover: "78.0176.02",
          description: "NATUZZI EDITIONS т.C016 78.0176.02",
          art: "127",
          stock: "1",
          firstPrice: "2954",
          finalPrice: "2215,5",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "163221",
          showItem: "0",
          factory: "NATUZZI EDITIONS",
          model: "т.C017",
          cover: "70.0077.11",
          description: "NATUZZI EDITIONS т.C017 70.0077.11",
          art: "064",
          stock: "1",
          firstPrice: "66203",
          finalPrice: "49652,25",
          image: "/static/img/sofas/163071.jpg",

          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        }

        /////////////////
      ],
      searchName: "",
      carName: "",
      carYear: 2018,
      cars: []
    };
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };

      this.$http
        .post("http://localhost:3000/cars", car)
        .then(response => {
          return response.json();
        })
        .then(newCar => {
          console.log(newCar);
        });
    },
    loadCars() {
      this.$http
        .get("http://localhost:3000/cars")
        .then(response => {
          return response.json();
        })
        .then(cars => {
          this.cars = cars;
          console.log(cars);
        });
    }
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
  flex-basis: 30%;
  /* position: relative; */
  /* padding-bottom: 170px; */
  font-size: 17px;
}

.product-image img {
  max-width: 100%;
}

.product-info {
  /* position: absolute; */
  bottom: 0px;
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

