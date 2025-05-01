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
    <div class="hr">typography</div>
    All icons come from the Tabler Icons set and are MIT-licensed. Visit
    <a href="#">tabler.io/icons</a>, download any of the 5844 icons in SVG, PNG or React and use
    them in your favourite design tools. All icons come from the Tabler Icons set and are
    MIT-licensed. Visit <a href="#">tabler.io/icons</a>, download any of the 5844 icons in SVG, PNG
    or React and use them in your favourite design tools.

    <div class="hr">GRID</div>

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

    <div class="hr">table</div>
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

    <div class="hr">buttons</div>
    <div v-for="(type, ttitle) in types" :key="ttitle" class="row m-v">
      <div class="column w-10 center-v">
        {{ ttitle }}
      </div>
      <div class="column as-row">
        <div v-for="(color, ctitle) in colors" :key="ctitle" class="btn" :class="[type, color]">
          {{ ctitle }}
        </div>
      </div>
    </div>

    <div class="hr">form elements</div>
    <div class="row forms m-bottom">
      <div class="column">
        <input type="text" placeholder="Text input" />
        <textarea placeholder="Textarea"></textarea>
        <div class="row m-v">
          <div class="column as-row">
            <input type="checkbox" class="m-h" />
            <input type="checkbox" class="m-h" checked />
            <input type="checkbox" class="m-h" disabled />
            <input type="checkbox" class="m-h" checked disabled />
          </div>
        </div>
        <div class="row m-v">
          <div class="column as-row">
            <input type="radio" id="radio" name="radio" />
          </div>
        </div>

        <input type="range" min="0" max="100" />
        <input type="color" />
      </div>
      <div class="column"></div>
    </div>
  </div>
  <div style="margin-bottom: 100px"></div>
</template>
