const router = require("express").Router();
const {catchErrors} = require("../handlers/errorHandler");

const categoryController = require("../controllers/categoryController");

const auth = require('../middlewares/auth');

router.get("/", auth, catchErrors(categoryController.getAllCategorys));
router.post("/", auth, catchErrors(categoryController.createCategory));



module.exports = router;

