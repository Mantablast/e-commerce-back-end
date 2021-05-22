const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  ProductTag.findAll(
    //object
    // {
    //   include: {
    //     model: Tag
    //   }
    // }
  ).then(tagGet => {
    res.json(tagGet);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  ProductTag.findOne(
    {
      where: {
        id: req.params.id,
      }
      // include: {
      //   model: Product
      // }
    }
  ).then(tagGet => {
    res.json(tagGet);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  //seed example
  // {
  //   tag_name: 'pop music',
  // }
  console.log(req.body);
  //tell it how to create post
  Tag.create({
    tag_name: req.body.tag_name
  })
    //send to json
    .then(tagPost => {
      res.json(tagPost);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  //seed example
  // {
  //   tag_name: 'pop music',
  // }
Tag.update(
    //instruct where
    {
      where: {
        id: req.params.id,
      },
    },
    {
      tag_name: req.body.tag_name
    }
  ).then(tagUpdate => {
    res.json(tagUpdate);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
ProductTag.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(tagDestroy => {
    res.json(tagDestroy);
  });
});

module.exports = router;
