<script setup>
import { createApp, onMounted, reactive, ref } from 'vue'

const colors = ref({
  default: '',
})
const types = ref({
  normal: '',
})

const createObj = (ref, values) => Object.values(values).map((v) => (ref.value[v] = v))

onMounted(() => {
  createObj(colors, ['primary', 'secondary', 'success', 'warning', 'danger'])
  createObj(types, ['active', 'disabled', 'outlined', 'ghost'])
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column w-10">
        <h1>Heading</h1>
      </div>
      <div class="column">
        <h2>Heading</h2>
      </div>
      <div class="column w-40 o-40">
        <h3>Heading</h3>
      </div>
    </div>

    <table class="bordered">
      <caption>
        Test table
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Height</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Stephen Curry</td>
          <td>27</td>
          <td>1,91</td>
          <td>Akron, OH</td>
        </tr>
        <tr>
          <td>Klay Thompson</td>
          <td>25</td>
          <td>2,01</td>
          <td>Los Angeles, CA</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Pages</td>
          <td>1.2.3</td>
        </tr>
      </tfoot>
    </table>

    <div v-for="(type, ttitle) in types" :key="ttitle" class="row m-v">
      <div class="column w-10 center-v">
        {{ ttitle }}
      </div>
      <div class="column">
        <div v-for="(color, ctitle) in colors" :key="ctitle" class="btn" :class="[type, color]">
          {{ ctitle }}
        </div>
      </div>
    </div>
  </div>
</template>
