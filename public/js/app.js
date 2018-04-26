var app = new Vue({
  el: '#app',
  data: {
    servants: {}
  }
});

axios.get('/origin/servant').then(function (response) {
  console.log(response.data);
  app.servants = response.data;
}).catch(function (error) {
  console.log(error);
});
