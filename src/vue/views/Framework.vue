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

    <div class="row p-v">
      <div class="column p-right w-20 as-column">
        <div class="btn width-100">default</div>
        <div class="hr">disabled buttons</div>
        <div class="btn disabled width-100">disabled class</div>
        <button class="btn" disabled>disabled attribute</button>
      </div>
      <div class="column p-h w-20 as-column">
        <div class="btn outlined w-100">outlined</div>
        <div class="hr">outlined disabled buttons</div>
        <div class="btn outlined disabled width-100">disabled class</div>
        <button class="btn outlined" disabled>disabled attribute</button>
      </div>

      <div class="column p-h w-20 as-column">
        <div class="btn link w-100">link</div>
        <div class="hr">link disabled buttons</div>
        <div class="btn link disabled width-100">disabled class</div>
        <button class="btn link" disabled>disabled attribute</button>
      </div>
    </div>
  </div>
</template>
