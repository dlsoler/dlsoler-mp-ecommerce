<template>
  <q-page padding >
    <div class="row full-width flex-center">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <q-card>
          <q-card-section class="full-width">
            <div class="text-h4">Pago no realizado</div>
            <div class="text-subtitle2">Lamentablemente tu pago no se ha concretado.</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row full-width flex-center">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <query-data />
      </div>
    </div>

  </q-page>
</template>

<script>
import queryData from '../components/querydata'
export default {
  name: 'failurePage',
  components: {
    'query-data': queryData
  },
  mounted () {
    // FIXME: Remove by hand the MercadoPago Dialog
    const htmlCollection = document.getElementsByClassName('mp-mercadopago-checkout-wrapper')
    if (htmlCollection.length === 0) {
      return
    }
    htmlCollection.forEach((element) => element.parentNode.removeChild(element))
  }
}
</script>
