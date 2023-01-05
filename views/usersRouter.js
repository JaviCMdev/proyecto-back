const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController')
// const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');


router.post("/login", UsersController.loginUser);
router.post("/newUser", UsersController.newUser);
router.get("/getAll", UsersController.getAllUsers);
router.put("/updateUser", UsersController.updateUser);
router.delete("/deleteUser", UsersController.deleteUser);




module.exports = router;