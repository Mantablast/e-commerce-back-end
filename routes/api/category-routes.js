const router = require('express').Router();
const { request } = require('express');
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
).then(categoryGet => {
  res.json(categoryGet);
});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products  //probably use findOne
  Category.findOne(
  {
    where: {
      id: req.params.id,
    },
    include: {
      model: Product
    }
  }
  ).then(categoryGet => {
    res.json(categoryGet);
  });
});

router.post('/', (req, res) => {
  // create a new category  //Create
  //category seed example
  // {
  //   category_name: 'Shirts',
  // }
  console.log(req.body);
  //tell it how to create post
  Category.create({
    category_name: req.body.category_name
  })
  //send to json
  .then(categoryPost => {
    res.json(categoryPost);
  });
});
  

router.put('/:id', (req, res) => {
  // update a category by its `id` value //Update
  //seed example
  // {
  //   "id": 6,
  //   "category_name": "Underwear"
  // }
Category.update(
  //instruct where
  {
    where: {
      id: req.params.id,
    },
  },
  {
    category_name: req.body.category_name
  }
).then(categoryUpdate => {
  res.json(categoryUpdate);
});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value  //Destroy
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(categoryDestroy => {
    res.json(categoryDestroy);
  });
});


module.exports = router;
