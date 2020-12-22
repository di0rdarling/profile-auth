require("dotenv").config({ path: `.env` });

const config = {
  port: process.env.PORT,
  database: process.env.DATABASE,
  collection: process.env.COLLECTION,
  mongoAtlasConnectionString: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@databases.j2me1.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`,
};
console.log(config);
module.exports = config;
