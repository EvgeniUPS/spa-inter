<template>
 <div class="container">
   <h1>Диваны</h1>

   <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Поиск</span>
  </div>
  <input type="text" class="form-control" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1"  v-model="searchName" autofocus>
</div>
  

  <hr>
  <section class="products text-center">

  <div class="product-card border m-2" v-if="name.showItem == 0"  v-for="(name, index) in filteredNames" :key="index">
    <h4> {{name.model}} - {{name.cover}} </h4>   
    <p>Код товара: {{name.id}}</p>
    <div class="product-image">
      <img :src="name.image" alt="" class="rounded">
    </div>
    <div class="product-info">
      <p class="cost">{{name.description}}</p>
          <p>Размеры: {{name.sizeW}} * {{name.sizeD}} * {{name.sizeH}}h</p>
          <p class="cost">Старая цена:  {{name.firstPrice}} грн. </p>
      
          <p class="cost ">Цена со скидкой: <strong class="text-danger border border-danger rounded">  {{name.finalPrice | price}} грн.</strong>  </p>
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

        {
          id: "162338",
          factory: "Softaly",
          model: "U092",
          cover: "10BF",
          description: "Кресло стационарное",
          art: "003",
          stock: "1",
          firstPrice: "27084",
          finalPrice: "20313",
          image: "/static/img/sofas/162338.jpg",
          sizeW: "113",
          sizeD: "96",
          sizeH: "90",
          country: "Италия",
          tags: "кожа, светлый"
        },
        {
          id: "162339",
          factory: "Softaly",
          model: "U092",
          cover: "10BF",
          description: "Кресло-моушн",
          art: "004",
          stock: "1",
          firstPrice: "33622",
          finalPrice: "25216,5",
          image: "/static/img/sofas/162339.jpg",
          sizeW: "104",
          sizeD: "97-168",
          sizeH: "90",
          country: "Италия",
          tags: "кожа, светлый"
        },
        {
          id: "162340",
          factory: "Softaly",
          model: "U092",
          cover: "10BF",
          description: "Диван 3 местн. раскладной",
          art: "008",
          stock: "1",
          firstPrice: "64442",
          finalPrice: "48331,5",
          image: "/static/img/sofas/162340.jpg",
          sizeW: "222",
          sizeD: "98-228",
          sizeH: "90",
          country: "Италия",
          tags: "кожа, светлый"
        },
        {
          id: "162559",
          factory: "Softaly",
          model: "U092",
          cover: "10BF",
          description: "Пуф на колесах",
          art: "042",
          stock: "1",
          firstPrice: "9962",
          finalPrice: "7471,5",
          image: "/static/img/sofas/162559.jpg",
          sizeW: "75",
          sizeD: "63",
          sizeH: "44",
          country: "Италия",
          tags: "кожа, светлый"
        },
        {
          id: "159075",
          factory: "Softaly",
          model: "U092",
          cover: "70005707",
          description: "Кресло стационарное",
          art: "003",
          stock: "1",
          firstPrice: "15255",
          finalPrice: "11441,25",
          image: "/static/img/sofas/159075.jpg",
          sizeW: "113",
          sizeD: "96",
          sizeH: "90",
          country: "Италия",
          tags: "Ткань, темный"
        },
        {
          id: "160439",
          factory: "Softaly",
          model: "U092",
          cover: "70005707",
          description: "Кресло-моушн",
          art: "004",
          stock: "1",
          firstPrice: "20651",
          finalPrice: "15488,25",
          image: "/static/img/sofas/160439.jpg",
          sizeW: "104",
          sizeD: "97-168",
          sizeH: "90",
          country: "Италия",
          tags: "Ткань, темный"
        },
        {
          id: "162792",
          factory: "Softaly",
          model: "U092",
          cover: "70005707",
          description: "Диван 2 местн.",
          art: "005",
          stock: "1",
          firstPrice: "19924",
          finalPrice: "14943",
          image: "/static/img/sofas/162792.jpg",
          sizeW: "163",
          sizeD: "96",
          sizeH: "90",
          country: "Италия",
          tags: "Ткань, темный"
        },
        {
          id: "159076",
          factory: "Softaly",
          model: "U092",
          cover: "70005707",
          description: "Диван 3 местн. раскладной",
          art: "008",
          stock: "1",
          firstPrice: "43688",
          finalPrice: "32766",
          image: "/static/img/sofas/159076.jpg",
          sizeW: "222",
          sizeD: "98-228",
          sizeH: "90",
          country: "Италия",
          tags: "Ткань, темный"
        },
        {
          id: "138441",
          factory: "Softaly",
          model: "U101",
          cover: "70005707",
          description: "Диван 2 местн. раскладной",
          art: "262",
          stock: "1",
          firstPrice: "45037",
          finalPrice: "33777,75",
          image: "/static/img/sofas/138441.jpg",
          sizeW: "174",
          sizeD: "96-208",
          sizeH: "76",
          country: "Италия",
          tags: "Ткань, темный"
        },
        {
          id: "138442",
          factory: "Softaly",
          model: "U101",
          cover: "70005707",
          description: "Диван 3 местн. раскладной",
          art: "266",
          stock: "1",
          firstPrice: "51470",
          finalPrice: "38602,5",
          image: "/static/img/sofas/138442.jpg",
          sizeW: "214",
          sizeD: "96-208",
          sizeH: "76",
          country: "Италия",
          tags: "Ткань, темный"
        },
        {
          id: "161627",
          factory: "Softaly",
          model: "U101",
          cover: "70005702",
          description: "Диван 2 местн. раскладной",
          art: "262",
          stock: "1",
          firstPrice: "45037",
          finalPrice: "33777,75",
          image: "/static/img/sofas/161627.jpg",
          sizeW: "174",
          sizeD: "96-208",
          sizeH: "76",
          country: "Италия",
          tags: "Ткань, светлый, "
        },
        {
          id: "161628",
          factory: "Softaly",
          model: "U101",
          cover: "70005702",
          description: "Диван 3 местн. раскладной",
          art: "266",
          stock: "1",
          firstPrice: "51470",
          finalPrice: "38602,5",
          image: "/static/img/sofas/161628.jpg",
          sizeW: "214",
          sizeD: "96-208",
          sizeH: "76",
          country: "Италия",
          tags: "Ткань, светлый"
        },
        {
          id: "163921",
          factory: "Cubo Rosso",
          model: "Bach",
          cover: "Pelle Dali 024 Bordeaux",
          description: "Диван 3 местн.",
          art: "cod.300 3 SEATER  L-255cm",
          stock: "1",
          firstPrice: "153955",
          finalPrice: "76977,5",
          image: "/static/img/sofas/163921.jpg",
          sizeW: "255",
          sizeD: "105",
          sizeH: "68",
          country: "",
          tags: ""
        },
        {
          id: "157899",
          factory: "NATUZZI EDITIONS",
          model: "B757",
          cover: "68003009",
          description: "Кресло стационарное",
          art: "003",
          stock: "1",
          firstPrice: "32898",
          finalPrice: "14804,1",
          image: "/static/img/sofas/157899.jpg",
          sizeW: "107",
          sizeD: "98-228",
          sizeH: "94",
          country: "Италия",
          tags: "Ткань, темный, акция"
        },
        {
          id: "88721",
          factory: "Italsofa",
          model: "i344",
          cover: "78015703",
          description: "Кресло стационарное",
          art: "003",
          stock: "4",
          firstPrice: "25767",
          finalPrice: "4000",
          image: "/static/img/sofas/88721.jpg",
          sizeW: "88",
          sizeD: "98",
          sizeH: "81",
          country: "Италия",
          tags: "Ткань, светлый, сереневый, акция, суперцена"
        },
        {
          id: "163071",
          factory: "NATUZZI EDITIONS",
          model: "A399",
          cover: "15WE-CS",
          description: "Кресло стационарное",
          art: "003",
          stock: "1",
          firstPrice: "45323",
          finalPrice: "33992,25",
          image: "/static/img/sofas/163071.jpg",
          sizeW: "119",
          sizeD: "100",
          sizeH: "90",
          country: "Италия",
          tags: "Кожа, рыжий, современный,"
        },
        {
          id: "133793",
          factory: "NATUZZI EDITIONS",
          model: "A399",
          cover: "10BS",
          description: "",
          art: "003 ноги 18",
          stock: "1",
          firstPrice: "42268",
          finalPrice: "31701",
          image: "/static/img/sofas/133793.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "102716",
          factory: "NATUZZI EDITIONS",
          model: "A450",
          cover: "10KM",
          description: "",
          art: "027 ноги 09",
          stock: "1",
          firstPrice: "88508",
          finalPrice: "66381",
          image: "/static/img/sofas/102716.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "10BL",
          description: "",
          art: "003 ноги 18",
          stock: "1",
          firstPrice: "37176",
          finalPrice: "20446,8",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "10BL",
          description: "",
          art: "008 ноги 18",
          stock: "1",
          firstPrice: "86166",
          finalPrice: "47391,3",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "10BT-CS",
          description: "",
          art: "003 ноги 18",
          stock: "1",
          firstPrice: "37176",
          finalPrice: "20446,8",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "10BT-CS",
          description: "",
          art: "008 ноги 18",
          stock: "1",
          firstPrice: "86166",
          finalPrice: "47391,3",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "15WF",
          description: "",
          art: "003",
          stock: "2",
          firstPrice: "40028",
          finalPrice: "22015,4",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "15WF",
          description: "",
          art: "003",
          stock: "2",
          firstPrice: "40028",
          finalPrice: "22015,4",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B627",
          cover: "15WF",
          description: "",
          art: "008",
          stock: "1",
          firstPrice: "90953",
          finalPrice: "50024,15",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B795",
          cover: "15CK-CS",
          description: "",
          art: "193",
          stock: "1",
          firstPrice: "122017",
          finalPrice: "91512,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B795",
          cover: "15CK-CS",
          description: "",
          art: "446",
          stock: "1",
          firstPrice: "133322",
          finalPrice: "99991,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B795",
          cover: "15CW",
          description: "",
          art: "003",
          stock: "1",
          firstPrice: "52351",
          finalPrice: "39263,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B816",
          cover: "10BT/10KS",
          description: "",
          art: "003 ноги 18",
          stock: "2",
          firstPrice: "57149",
          finalPrice: "42861,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B816",
          cover: "10BT/10KS",
          description: "",
          art: "003 ноги 18",
          stock: "2",
          firstPrice: "57149",
          finalPrice: "42861,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B842",
          cover: "15CU/15CK",
          description: "",
          art: "003 ноги 18",
          stock: "2",
          firstPrice: "49194",
          finalPrice: "36895,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B842",
          cover: "15CU/15CK",
          description: "",
          art: "003 ноги 18",
          stock: "2",
          firstPrice: "49194",
          finalPrice: "36895,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B842",
          cover: "15CU/15CK",
          description: "",
          art: "264 ноги 18",
          stock: "1",
          firstPrice: "118452",
          finalPrice: "88839",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B842",
          cover: "10BG/10BK",
          description: "",
          art: "262 ноги 18",
          stock: "1",
          firstPrice: "87897",
          finalPrice: "65922,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B865",
          cover: "15WI WELT 15CU",
          description: "",
          art: "004",
          stock: "1",
          firstPrice: "48888",
          finalPrice: "29332,8",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B865",
          cover: "15WI WELT 15CU",
          description: "",
          art: "264",
          stock: "1",
          firstPrice: "90749",
          finalPrice: "54449,4",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B895",
          cover: "15WQ",
          description: "",
          art: "100",
          stock: "1",
          firstPrice: "20167",
          finalPrice: "15125,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B908",
          cover: "15ZH",
          description: "",
          art: "003",
          stock: "1",
          firstPrice: "40129",
          finalPrice: "30096,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B908",
          cover: "15ZH",
          description: "",
          art: "009",
          stock: "1",
          firstPrice: "64268",
          finalPrice: "48201",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B944",
          cover: "15CI",
          description: "",
          art: "E44",
          stock: "1",
          firstPrice: "90749",
          finalPrice: "68061,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "B985",
          cover: "15WP",
          description: "",
          art: "064",
          stock: "1",
          firstPrice: "60805",
          finalPrice: "45603,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "C005",
          cover: "15WN",
          description: "",
          art: "064",
          stock: "1",
          firstPrice: "72416",
          finalPrice: "54312",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "C005",
          cover: "15WP",
          description: "",
          art: "003",
          stock: "2",
          firstPrice: "41555",
          finalPrice: "31166,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "C056",
          cover: "15WM welt 15CW",
          description: "",
          art: "066 ноги 75",
          stock: "1",
          firstPrice: "47870",
          finalPrice: "35902,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "C077",
          cover: "68003702",
          description: "",
          art: "262",
          stock: "1",
          firstPrice: "56935",
          finalPrice: "42701,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "C077",
          cover: "78017610",
          description: "",
          art: "262",
          stock: "1",
          firstPrice: "61009",
          finalPrice: "45756,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.A800 ",
          cover: "70.0077.09",
          description: "",
          art: "376",
          stock: "1",
          firstPrice: "1834",
          finalPrice: "1375,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.A800 ",
          cover: "78.0176.02",
          description: "",
          art: "385",
          stock: "2",
          firstPrice: "1834",
          finalPrice: "1375,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.A800 ",
          cover: "78.0176.02",
          description: "",
          art: "385",
          stock: "2",
          firstPrice: "1834",
          finalPrice: "1375,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B741 ",
          cover: "70006301",
          description: "",
          art: "003 ноги 18",
          stock: "1",
          firstPrice: "17621",
          finalPrice: "13215,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B741 ",
          cover: "83009001",
          description: "",
          art: "034 ноги 18",
          stock: "1",
          firstPrice: "26991",
          finalPrice: "20243,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B757 ",
          cover: "68003005",
          description: "",
          art: "003",
          stock: "1",
          firstPrice: "32898",
          finalPrice: "24673,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B757 ",
          cover: "68003009",
          description: "",
          art: "003",
          stock: "1",
          firstPrice: "32898",
          finalPrice: "24673,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B757 ",
          cover: "68003009",
          description: "",
          art: "264",
          stock: "1",
          firstPrice: "87693",
          finalPrice: "65769,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B835 ",
          cover: "70006304",
          description: "",
          art: "015",
          stock: "1",
          firstPrice: "84342",
          finalPrice: "63256,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B883 ",
          cover: "83010211",
          description: "",
          art: "530",
          stock: "1",
          firstPrice: "81175",
          finalPrice: "60881,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B883 ",
          cover: "83010217",
          description: "",
          art: "548",
          stock: "1",
          firstPrice: "70684",
          finalPrice: "53013",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B895 ",
          cover: "78016108",
          description: "",
          art: "001",
          stock: "1",
          firstPrice: "23528",
          finalPrice: "17646",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B895 ",
          cover: "78016108",
          description: "",
          art: "010",
          stock: "1",
          firstPrice: "14565",
          finalPrice: "10923,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B895 ",
          cover: "78016108",
          description: "",
          art: "100",
          stock: "1",
          firstPrice: "17213",
          finalPrice: "12909,75",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.B985 ",
          cover: "78017603",
          description: "",
          art: "009",
          stock: "1",
          firstPrice: "32083",
          finalPrice: "24062,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.C014 ",
          cover: "78017602",
          description: "",
          art: "233",
          stock: "2",
          firstPrice: "27704",
          finalPrice: "20778",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.C016 ",
          cover: "78.0176.02",
          description: "",
          art: "127",
          stock: "1",
          firstPrice: "2954",
          finalPrice: "2215,5",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
          tags: ""
        },
        {
          id: "",
          factory: "NATUZZI EDITIONS",
          model: "т.C017 ",
          cover: "70.0077.11",
          description: "",
          art: "064",
          stock: "1",
          firstPrice: "66203",
          finalPrice: "49652,25",
          image: "/static/img/sofas/.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "",
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

