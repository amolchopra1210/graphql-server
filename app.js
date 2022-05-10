const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.port || 4000;

mongoose
  .connect(
    `mongodb+srv://amolchopra:${process.env.DATABASE_KEY}@cluster0.kgwxt.mongodb.net/graphql?retryWrites=true&w=majority`
  )
  .then(() => console.log("database connected"));

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(PORT, () => console.log("listening on port 4000"));
