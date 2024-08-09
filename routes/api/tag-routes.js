const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



//The `/api/tags` endpoint

router.get('/', async (req, res) => {
  //ToDo find all tags
  // be sure to include its associated Product data
  try {
    const data= await Tag.findAll({
      include: [Product]
    })
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.get('/:id', async (req, res) => {
  //ToDo find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findByPk(req.params.id, {
      include: [Product]
    })
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.post('/', async (req, res) => {
  //ToDo create a new tag
  try {
    const data = await Tag.create(req.body)
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.put('/:id', async (req, res) => {
  //ToDo update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);

    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    tag.tag_name = req.body.tag_name;
    await tag.save();

    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  //ToDo delete on tag by its `id` value
  try {
    const data = await Tag.destroy({
      where: {
        id: req.params.id,
      } 
    })
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

module.exports = router;
