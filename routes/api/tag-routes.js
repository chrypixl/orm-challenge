const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



//ToDo The `/api/tags` endpoint

router.get('/', (req, res) => {
  //ToDo find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  //ToDo find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  //ToDo create a new tag
});

router.put('/:id', (req, res) => {
  //ToDo update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  //ToDo delete on tag by its `id` value
});

module.exports = router;
