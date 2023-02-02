const dbconnect = () => {

    const mongoose = require("mongoose");
    mongoose.set('strictQuery', true);

    const { DB } = require("../config/config");

    mongoose.connect(
        DB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err) {
                console.log("Error al conectarse a la base de datos.", err);
            } else {
                console.log("La base de datos esta conectada.");
            }
        });
}
module.exports = dbconnect;