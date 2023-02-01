const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');
const isAdmin = require('../middlewares/isAdmin');
// const auth = require('../middlewares/auth');


router.post("/login", UsersController.loginUser);
router.post("/newUser", UsersController.newUser);
router.get("/getAll", UsersController.getAllUsers);
router.put("/updateUser", UsersController.updateUser);
router.delete("/deleteUser", UsersController.deleteUser);
// Admin zone
router.post("/admin", isAdmin, UsersController.getAllUsers);
// router.post("/admin/getuserById/:id", isAdmin, UsersController.getUserById)




module.exports = router;