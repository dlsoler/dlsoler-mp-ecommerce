<template>
  <q-page :id="`page-item-${$route.params.id}`" padding class="flex flex-center" :key="`p-${$route.params.id}`">

    <div class="row full-width flex-center">
      <div class="text-h3">{{ item.title }}</div>
    </div>
    <div class="row full-width flex-center">
      <div class="text-h6 text-center">¡Comienza ya mismo a vivir con estilo con este espectacular teléfono celular!</div>
    </div>

    <div class="q-pa-md row items-start full-width flex-center">
      <div class="col-xs-12 col-md-2 flex flex-center">
        <img class="item-img" :src="item.image" :alt="item.title"/>
      </div>
      <div class="col-xs-12 col-md-4 flex flex-center">
        <q-card  class="item-card q-pa-lg" flat >
          <q-card-section >
            <div class="text-h4 text-center">{{ item.title }}</div>
            <div class="text-subtitle2 text-center">{{ item.subtitle }}</div>
          </q-card-section>

          <q-card-section>
            <div class="text-h6 text-center">Descripción</div>
            <div class="item-description">{{ item.description }}</div>
          </q-card-section>

          <q-card-section class="item-price-container">
            <div class="text-h4 text-center item-price">
              <span class="currency-symbol">{{ currencySymbol }}</span>
              <span class="price-value">{{ item.price }}</span></div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="around">
            <q-btn size="lg" color="primary" padding="4px 20px" :to="`/buy/${item.id}`">Comprar</q-btn>
            <q-btn size="lg" color="primary" outline padding="4px 20px" to="/">Volver</q-btn>
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { GET_PRODUCT_GETTER, GET_CURRENCY_GETTER } from '../store/products/constants'
export default {
  name: 'itemPage',
  data () {
    return {
      currencySymbol: this.$store.getters[GET_CURRENCY_GETTER]
    }
  },
  computed: {
    item () {
      return this.$store.getters[GET_PRODUCT_GETTER](this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
.item-img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
