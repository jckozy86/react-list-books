const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/:id")
  .get(booksController.findById(id))


module.exports = router;
