<template>
 <div class="container">
   <h1>Шкафы</h1>
   <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Поиск</span>
  </div>
  <input type="text" class="form-control" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1"  v-model="searchName" autofocus>
</div>
  

  <hr>
  <section class="products text-center">

  <div class="product-card border m-2" v-for="(name, index) in filteredNames" :key="index">
    <h4> {{name.model}} - {{name.cover}} </h4>   
    <div class="product-image">
      <img :src="name.image" alt="" class="rounded">
    </div>
    <div class="product-info">
      <p class="cost">{{name.description}}</p>
          <p>Размеры: {{name.sizeW}} * {{name.sizeD}} * {{name.sizeH}}h</p>
          <p class="cost">Старая цена:  {{name.firstPrice}} грн. </p>
      
          <p class="cost ">Цена со скидкой: <strong class="text-danger border border-danger rounded">  {{name.finalPrice}} грн.</strong> {{name.id}} </p>
    </div>
  </div>
  </section>


  <div class="container pt-2">
    <div class="form-group">
      <label for="Car name">
      <input type="text" id="name" class="form-control" v-model.trim="carName">
      </label>
    </div>
    <div class="form-group">
      <label for="Car name">
      <input type="text" id="year" class="form-control" v-model.number="carYear">
      </label>
    </div>
    <button class="btn btn-success" @click="createCar">Create item</button>
    <button class="btn btn-primary" @click="loadCars">Load item</button>
    <hr>
    <ul class="list-group">
      <li 
      class="list-group-item"
      v-for="car
       in cars"
      :key="car.id"
      >
      <strong> {{ car.name}} - {{car.year}} </strong>
      </li>
    </ul>
  </div>
</div>
  



</template>

<script>
export default {
  data() {
    return {
      temp: 1000000,
      names: [
        /////////////////
       {id: '135554', factory: 'ALF', model: 'Montecarlo', cover: 'Серый, лак', description: 'Шкаф 4дв., 2 зеркала', art: 'PJMN0012 MONTECARLO ARM.4/A', stock: '2', firstPrice : '111 215', finalPrice: '38 926', image : '/static/img/135554.jpg', sizeW : '229', sizeD : '65', sizeH: '240', country: 'Италия', tags: 'Монтекарло, серый, глянец, 4дв, современный, '},
{id: '36862', factory: 'ARCOBALENO', model: 'Tosca', cover: 'ciliegio', description: 'Шкаф 6дв., 4 зеркала', art: '0040 ARMADIO 6/A CON 4 SPECCHI. 293*64*253', stock: '2', firstPrice : '135 017', finalPrice: '47 256', image : '/static/img/36862.jpg', sizeW : '293', sizeD : '64', sizeH: '253', country: 'Италия', tags: 'Аркобалено, тоска, 6дв., классика, вишня'},
{id: '136830', factory: 'CINOVA', model: 'NINFEA', cover: 'noce', description: 'Шкаф-купе, 2 дв.', art: 'ARNINL ARMADIO 2/A NINFEA', stock: '1', firstPrice : '131 370', finalPrice: '45 980', image : '/static/img/136830.jpg', sizeW : '273', sizeD : '69', sizeH: '253', country: 'Италия', tags: 'Чинова, синова, классика, 2,7м'},
{id: '18033', factory: 'DALLAGNESE ', model: 'CHOPIN ', cover: 'cherry', description: 'Шкаф 5 дв.,  3 зеркала ', art: '326815/13 ГАРДЕРОБ 5-дв. с 3-мя зерк.', stock: '1', firstPrice : '160 704', finalPrice: '56 247', image : '/static/img/18033.jpg', sizeW : '299', sizeD : '64', sizeH: '221', country: 'Италия', tags: 'Далагнезе, шопен, классика, вишня, 3м'},
{id: '18039', factory: 'DALLAGNESE ', model: 'Mozart', cover: 'noce', description: 'Шкаф 4дв., 2 зеркала', art: '326214/2 ШКАФ 4-х дв с 2-мя зерк.', stock: '1', firstPrice : '132 802', finalPrice: '46 481', image : '/static/img/18039.jpg', sizeW : '230', sizeD : '64', sizeH: '218', country: 'Италия', tags: 'Далагнезе, моцарт, классика, вишня, 2.3м'},
{id: '3868', factory: 'VENIER ', model: 'DAFNE ', cover: 'noce', description: 'Шкаф 4дв., 2 зеркала', art: ' ASU401 ШКАФ 4/2334  С 2мя ЗЕР-МИ', stock: '1', firstPrice : '50 052', finalPrice: '15 000', image : '/static/img/3868.jpg', sizeW : 'xx', sizeD : 'xx', sizeH: 'xx', country: 'Италия', tags: 'Венер, уценка, акция, классика, темный, до15'},
{id: '123828', factory: 'VENIER', model: 'Afrodita', cover: 'ciliegio', description: 'Шкаф 4дв., 2 зеркала', art: 'ARB404AAFD Armadio 4 ante con 2 specchio', stock: '3', firstPrice : '59 191', finalPrice: '15 000', image : '/static/img/123828.jpg', sizeW : '195', sizeD : '66', sizeH: '244', country: 'Италия', tags: 'Венер, акция, классика, темный, до15'},
{id: '123826', factory: 'VENIER', model: 'Aurora', cover: 'Mix', description: 'Шкаф 4дв., 2 зеркала', art: 'ASU401AAUR Armadio 4 ante', stock: '1', firstPrice : '81 669', finalPrice: '22 000', image : '/static/img/123826.jpg', sizeW : '210', sizeD : '67', sizeH: '228', country: 'Италия', tags: 'Венер, акция, классика, микс, '},
{id: '88738', factory: 'Gimo', model: 'My Life', cover: 'Bianco', description: 'Шкаф-купе, 2 дв.', art: '10031/S ARMADIO 2 ANTE SCOR.SPECCHIO CANNES', stock: '1', firstPrice : '241 684', finalPrice: '84 590', image : '/static/img/88738.jpg', sizeW : '268', sizeD : '68', sizeH: '260', country: 'Италия', tags: 'май лайф, белый, современный, купе, зеркало'},
{id: '42078', factory: 'Serenissima', model: 'Ebano', cover: 'Ebano lucido', description: 'Шкаф 6дв., 4 зеркала', art: '10221677990 Armadio battente 6 ante/4 specchio', stock: '2', firstPrice : '134 925', finalPrice: '33 000', image : '/static/img/42078.jpg', sizeW : '293', sizeD : '62', sizeH: '226', country: 'Италия', tags: 'серениссима, лак, современный'},
{id: '30247', factory: 'Serenissima', model: 'Ebano', cover: 'Ebano lucido', description: 'Шкаф-купе, 2 дв.', art: '102AVB (был 10251277990 armadio 2 ante scorrevoli 2 specchio)', stock: '2', firstPrice : '186 327', finalPrice: '65 215', image : '/static/img/30247.jpg', sizeW : '296', sizeD : '68', sizeH: '226', country: 'Италия', tags: 'серениссима, лак, современный, купе'},
{id: '107535', factory: 'Djia', model: 'ST04', cover: 'White', description: 'Шкаф 4дв.', art: ' 29 4D Wardrobe with 2 mirror col.WHITE', stock: '1', firstPrice : '70 703', finalPrice: '24 747', image : '/static/img/107535.jpg', sizeW : 'xx', sizeD : 'xx', sizeH: 'xx', country: 'Китай', tags: 'белый, классика, беззерк'},
{id: '87267', factory: 'VENIER', model: 'Maria', cover: 'noce', description: 'Шкаф 4дв., 2 зеркала', art: 'ASU401 ШКАФ 4ДВ.С 2-МЯ ЗЕРК', stock: '1', firstPrice : '71 537', finalPrice: '20 000', image : '/static/img/87267.jpg', sizeW : '209', sizeD : '66', sizeH: '225', country: 'Италия', tags: 'Венер, уценка, акция, классика, темный,'},
{id: '84689', factory: 'Shanghai', model: 'DA855', cover: 'col.SH501S', description: 'Шкаф 4дв., 2 зеркала', art: '4DOOR WARDROBE(2MIRR)', stock: '3', firstPrice : '', finalPrice: '', image : '/static/img/84689.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Китай', tags: 'Шанхай, '},
{id: '115382', factory: 'Gimo Linea B', model: 'Prestige', cover: 'Noce', description: 'Шкаф 4дв., 2 зеркала', art: '600/45 ШКАФ 4-ДВЕРНЫЙ L200 P67 H 220', stock: '1', firstPrice : '384 035', finalPrice: '75 000', image : '/static/img/115382.jpg', sizeW : '200', sizeD : '67', sizeH: '220', country: 'Италия', tags: 'джимо, линеаби, классика, акция'},


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
  position: relative;
  padding-bottom: 170px;
  font-size: 17px;
}

.product-image img {
  max-width: 100%;
}

.product-info {
  position: absolute;
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

