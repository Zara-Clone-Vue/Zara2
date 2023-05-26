<template>
  <div class="container1">
   <RouterLink :to="men">
    <div >EDITION</div>
    <div class="nouveautes">NOUVEAUTÉS</div>
    <div class="lin">LIN</div>
    <div class="crochet">CROCHET</div>
    <div class="basiqeus">BASIQUES</div>
    <div class="costumes">COSTUMES</div>
    <div class="chemises">CHEMISES</div>
    <div class="t-shirts">T-SHIRTS</div>
    <div class="blousons">BLOUSONS | SURCHEMISES</div>
    <div class="pantalons">PANTALONS</div>
    <div class="jeans">JEANS</div>
    <div class="shorts">SHORTS</div>
    <div class="sweats">SWEATS | HOODIES</div>
    <div class="pulls">PULLS | GILETS</div>
    <div class="total-look">TOTAL LOOK</div>
    <div class="polos">POLOS</div>
    </RouterLink>
  </div>
</template>
<script lang="ts">
    export default {
      name: 'HommeCategory',
       data() {
    return {
      men: '/men',
    };
       }
      };
    </script>
<style scoped>
.container1 {
  display: flex;
  flex-direction: column;
  gap:12px;
  margin-top: 110px;
  margin-left: 25px;

}

.container1 > div {
  font-size: 12px;
  white-space: nowrap;
}

.container1 > div:hover,
.container1 > div.active {
  font-weight: bold;
  cursor: pointer;
}
</style>

