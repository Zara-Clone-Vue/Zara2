<template>
    <div>
      <div id="header"></div>
      <div id="container">
        <div class="left_side_content">
          <h4>COMPOSITION & CARE</h4>
          <h3>PRODUCT MANAGER</h3>
          <p>
           We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.

To assess compliance, we have developed a programme of audits and continuous improvement plans.
          </p>
          <p>
            The Greenfeild to Wear 2.0 standard aims to minimise the environmental
            impact of textile manufacturing. To that end, we have developed
            Inditex’s The List programme, which helps guarantee both that
            production processes are
          </p>
          <p @click="redirectToAllProducts">View more</p>
        </div>
        <div class="image_div">
          <img :src="product.image" alt="" />
        </div>
        <div class="product_info_rightSide">
          <div class="product_name">
            <h2>{{ product.clothesName }}</h2>
            <img :src="product.imag" alt="" />
          </div>
          
          <p>${{ product.price }}</p>
          <div class="sizes">
            <p>M (UK M)</p>
          <p>L (UK L)</p>
          <p>XL (UK XL)</p>
          <hr />
          
          </div>
   <div class="resultsblock-grid--adverts">
    <div class="resultsblock-grid--adv">
     <div class="star-rating">
  <input type="radio" id="5-stars" name="rating1" value=5 v-model="selectedRating" @change="update" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating1" value=4 v-model="selectedRating" @change="update" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating1" value=3 v-model="selectedRating" @change="update" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating1" value=2 v-model="selectedRating" @change="update" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating1" value=1 v-model="selectedRating" @change="update" />
  <label for="1-star" class="star">&#9733;</label>
</div>

      <p class="results__block-grid--adv-reting">
        {{ product.rating }}/5-from {{ product.times }} reviews
      </p>
    </div>
  </div>
          <div class="sizeScale">
            <p>FIND YOUR SIZE</p>
            <p>SIZE GUIDE</p>
          </div>
          <button @click="addToCart">add to cart</button>
  
         
          <p>DELIVERY, EXCHANGES AND RETURNS</p>
        </div>
      </div>
      <div id="footer"></div>
  
      <div id="popup" class="popup none">
        <h1>CART</h1>
        <h1 class="X">X</h1>
        <div id="popupmain">
          <div class="flex">
            
            <div>{{ product.clothesName }}</div>
            <div>{{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
     
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Product {
  id: number;
  clothesName: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  times: number;
}


export default defineComponent({
  name: 'OneP',
 
  data() {
    return {
       selectedRating: 0,
      product: {
        id: 0,
  clothesName:"" ,
  image:"",
  price:0 ,
  category:"" ,
  rating:0,
  times:0
      } as Product
    };
  },
  methods: {
    redirectToAllProducts() {
      this.$router.push('/');
    },
    addToCart() {
      window.location.href = `/cart/${this.product.id}`;
    },
    addToBag() {
      window.location.href = `/cart/${this.product.id}`;
    },
    update() {
       const currentUrl = window.location.href;
    const name = currentUrl.substring(currentUrl.lastIndexOf('/')).split("=")[1].split("+").join(" ")
    console.log(this.product.times, "this is times")
    console.log(this.product.rating, "this is rating")
    console.log(this.selectedRating, "this is selectedRating")
    var rate = (this.product.rating*this.product.times+Number(this.selectedRating))/this.product.times
    console.log(rate, "this is rate")
    
      axios
      .put(`http://localhost:5000/api/product/${name}`,{
        clothesName:this.product.clothesName,
        image:this.product.image,
        price:this.product.price,
        category:this.product.category,
        rating:rate,
        times:this.product.times+1,
      })
      .then((suc)=>{console.log(suc)
      window.location.reload
      console.log(suc.data.times)})
      .catch((e)=>console.log(e))
    }
  },
  mounted() {
    
    
    const currentUrl = window.location.href;
    const name = currentUrl.substring(currentUrl.lastIndexOf('/')).split("=")[1].split("+").join(" ")
    console.log(name)
    axios
      .get(`http://localhost:5000/api/product/${name}`)
      .then(response => {
        console.log(response.data)
       
        const productData = response.data;
       const obj: Product = {
  id: productData.id,
  clothesName:productData.clothesName ,
  image:productData.image,
  price:productData.price ,
  category:productData.category ,
  rating:productData.rating,
  times:productData.times 
};

        console.log(obj)
        this.product = obj;
      })
      .catch(error => {
        console.error(error);
      });
  }
});
</script>

  

  
  <style scoped>
* {
              margin: 0;
              padding: 0;
              
            }
            #container {
              width: 85%;
              /* border: 1px solid red; */
              display: flex;
              margin: auto;
              justify-content: space-between;
              
            }
            
            /* left side content div  */
            .left_side_content {
              width: 18%;
              /* border: 1px solid blue; */
              height: 80%;
              margin-top: 15%;
              font-family: "Neue-Helvetica","Helvetica","Arial","sans-serif";
            }
            .left_side_content > :nth-child(2) {
              margin-top: 1.5em;
              font-weight: 400;
            }
            .left_side_content > p {
              font-size: 0.7em;
              line-height: 1.5em;
              margin-top: 1.5em;
            }
            .left_side_content > :nth-child(5) {
              text-decoration: underline;
              cursor: pointer;
            }
            
            /* middle image divv  */
            .image_div {
              margin-top: 4.5em;
              width: 28%;
              
            }
            .image_div > img {
              width: 100%;
            }
            
            /* right side product information div   */
            .product_info_rightSide {
              width: 22%;
              
              padding-top: 27.5em;
            }
            .product_name {
              display: flex;
              justify-content: space-between;
              font-family: "Neue-Helvetica","Helvetica","Arial","sans-serif";
            }
            .product_name > h2 {
              font-size: 11px;
              line-height:16px;
              letter-spacing: 0.8px;
              font-stretch:normal;
              font-weight: 300;
            }
            .product_name > img {
              width: 5%;
              height: 1em;
              margin-top: 0.2em;
            }
            .product_info_rightSide > p {
              font-size: 0.8em;
            }
            .product_info_rightSide > :nth-child(2) {
              line-height: 1.4em;
              margin-top: 1.5em;
              margin-bottom: 4em;
            }
            .product_info_rightSide > :nth-child(4) {
              /* border: 1px solid red; */
              padding-top: 1em;
              padding-bottom: 2em;
            }
            .sizes {
              line-height: 2em;
              border-bottom: 1px solid black;
              border-top: 1px solid black;
              font-size: 0.8em;
              margin-bottom: 0.7em;
            }
            .sizes > p:hover {
              background-color: #e7e6e6f5;
              cursor: pointer;
            }
            .sizeScale {
              font-size: 0.9em;
              display: flex;
              justify-content: space-between;
            }
            .sizeScale > p:hover {
              cursor: pointer;
            }
            button {
              margin: 0.8em 0em;
              height: 7%;
              width: 100%;
              border: none;
              background-color: black;
              color: white;
              font-weight: bold;
              cursor: pointer;
            }
            .product_info_rightSide > :last-child {
              margin-top: 0.8em;
            }
            
            .popup{
            position: absolute;
            right:0;
            top:0;
            width: 30%;
            background-color: white;
            height:100vh;
            overflow: scroll;
            padding:.5em;
            
            
            }
            
            .popup img{
              width:50%;
            }
            
            .popup button{
              padding:1em;
              position: sticky;
              bottom:0;
            }
            
            #popupmain>div{
              margin-bottom:10%;
            }
            
            
            
            .popup .X{
              position: absolute;
              top:0;
              right:0;
            }
            
            .none{
              display: none;
            }
            
            .flex{
              display: flex;
            }
            .star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2em;
    justify-content: space-around;
    padding: 0 .2em;
    text-align: center;
    width: 3em;
    input {
            display: none;
        }
        label {
            color: #ccc;
            cursor: pointer;
        }
                :checked~label {
                    color:gold;
                }
}
            
            @media only screen and (min-width: 375px) and (max-width: 768px) {
              .prev,
              .next,
              .text {
                font-size: 11px;
              }
            
              .image_div > img {
                width: 130%;
                margin-top: 49%;
                margin-left: -20%;
            }
            
            
            }
            
            
            @media only screen and (min-width: 0px) and (max-width: 390px) {
              #bookVdo {
                transform: rotateZ(90deg);
                width: 750px;
                height: 700px;
              }
              .slideshow-container {
                width: 80%;
                /* position: relative; */
                margin-top: 10%;
                font-size: 20px;
                height: 700px;
                margin-left: 25%;
                margin-bottom: 15%;
              }
              .rightoptions p,
              #search-input {
                font-size: 8px;
              }
              #footer a {
                font-size: 13px;
              }
            
              .logo img {
                padding: 2px 0px 0px;
                display: inline;
                margin-left: 30%;
                /* top: 26px; */
                margin-top: -71px;
                width: 40%;
              }
            
              body{
                line-height:1.5em;
              }
            
              .popup{
              width: 50%;
            }
            
            
            
            
              .product_info_rightSide {
              width: 100%;
             
            }
            
            .left_side_content {
              width: 100%;
              
            }
            
            .image_div {
              width: 100%;
              /* border: 1px solid green; */
            }
            
            #container{
              flex-direction: column
            }
        }
  </style>
  