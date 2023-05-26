<template>
  <div class="container1">
  <RouterLink :to="women">
    <div class="chemis">
      <div>CHEMISES | BLOUSES</div>
    </div>
    <div class="t-shirts">
      <div>T-SHIRTS | SWEATS</div>
    </div>
    <div class="tops">
      <div>TOPS | BODYS</div>
    </div>
    <div class="maille">
      <div>MAILLE</div>
    </div>
    <div class="pantalons">
      <div>PANTALONS</div>
    </div>
    <div class="jeans">
      <div>JEANS</div>
    </div>
    <div class="jupes">
      <div>JUPES</div>
    </div>
    <div class="shorts">
      <div>SHORTS</div>
    </div>
    <div class="chaussures">
      <div>CHAUSSURES</div>
    </div>
    <div class="sacs">
      <div>SACS</div>
    </div>
    <div class="accessoires">
      <div>ACCESSOIRES | BIJOUX FANTAISIE</div>
    </div>
    <div class="bikinis">
      <div>BIKINIS | MAILLOTS DE BAIN</div>
    </div>
    <div class="parfums">
      <div>PARFUMS</div>
    </div>
    <div class="beauty">
      <div>BEAUTY</div>
    </div>
    <div class="total">
      <div>TOTAL LOOK</div>
    </div>
    <div class="tailleurs">
      <div>TAILLEURS</div>
    </div>
    <div class="special">
      <div>SPECIAL PRICES</div>
    </div>
    </RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FemmeCategory',
  data(){
    return{
      women:"/women"
    }
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
  font-weight: bold
}
</style>

