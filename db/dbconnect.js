const dbconnect = () => {

    const mongoose = require("mongoose");
    mongoose.set('strictQuery', true);

    const conn_str = `mongodb+srv://super_patatita:packardbell3@cluster0.lm8gpwo.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(
        conn_str,
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