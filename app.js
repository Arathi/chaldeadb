const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const originRouter = require('./routers/SpiritOrigin');

app.use('/origin', originRouter);

var server = app.listen(3000, function() {
  console.log("ChaldeaDB 服务启动成功！");
});
