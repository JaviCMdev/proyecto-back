module.exports = {

    SECRET: process.env.AUTH_SECRET || "patata secreta", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10,
    PORT : process.env.PORT,
    DB : process.env.DB
};