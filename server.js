const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if prod express.static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactsandbox', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongoose connected');
    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`)
    })
  })