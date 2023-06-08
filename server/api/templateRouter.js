const router = require("express").Router();

//GET method: index
router.get("/", async (req, res, next) => {
  try {
    const templates = await Template.findAll();
    res.status(200).json(templates);
  } catch (err) {
    console.log("error in the template GET index route:", err);
    next(err);
  }
});

//GET method: show
router.get("/:templateId", async (req, res, next) => {
  try {
    const template = await Template.findByPk(req.params.templateId);
    res.status(200).json(template);
  } catch (err) {
    console.log("error in the template GET show route:", err);
    next(err);
  }
});

//POST method: create
router.post("/", async (req, res, next) => {
  try {
    const newTemplate = await Template.create(req.body);
    res.status(201).json(newTemplate);
  } catch (err) {
    console.log("error in the template POST route:", err);
    next(err);
  }
});

//PUT method: update
router.put("/:templateId", async (req, res, next) => {
  try {
    const oldTemplate = await Template.findByPk(templateId);
    const updatedTemplate = await oldTemplate.update(req.body);
    res.status(200).json(updatedTemplate);
  } catch (err) {
    console.log("error in the template PUT route:", err);
    next(err);
  }
});

//DELETE method: delete
router.delete("/:templateId", async (req, res, next) => {
  try {
    await Template.destroy({
      where: {
        id: req.params.templateId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    console.log("error in the template DELETE route:", err);
    next(err);
  }
});

module.exports = router;

//set up db folder
//set up models folder
//make a template model
//import template model here
