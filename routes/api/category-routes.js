const router = require('express').Router();
const { Category, Product } = require('../../models');

//*Used example from just-tech-news

// The `/api/categories` endpoint
//C //Creating
//R //Read or Get
//U //Update or Put
//D //Delete or Destroy


router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products //findAll
//Call table and function to use
Category.findAll(
  //object
  {
  include: {
    model: Product
  }
  }
).then(categoryPost => {
  res.json(categoryPost);
});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products  //probably use findOne
});

router.post('/', (req, res) => {
  // create a new category  //Create
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value //Update
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value  //Destroy
});

module.exports = router;
