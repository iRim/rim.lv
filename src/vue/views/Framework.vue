<template>
  <div class="container">
    <div class="row">
      <div class="column width-10">
        <h1>Heading</h1>
      </div>
      <div class="column">
        <h2>Heading</h2>
      </div>
      <div class="column width-33 offset-47">
        <h3>Heading</h3>
      </div>
    </div>

    <table class="bordered striped hoverable">
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
          <td colspan="4">
            <button class="btn btn-primary">Add</button>
            <button class="btn btn-secondary">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
