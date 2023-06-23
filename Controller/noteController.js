const db = require("../Model/index");
const Notes = db.notes;

exports.renderHome = async (req, res) => {
  const notes = await Notes.findAll();
  res.render("home", { data: notes });
};

exports.createNote = async (req, res) => {
  const { title, description } = req.body;
  await Notes.create({
    title: title,
    description: description,
  });

  res.redirect("/");
};

exports.deleteNote = async (req, res) => {
  await Notes.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/");
};

exports.fetchNote = async (req, res) => {
  const note = await Notes.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.render("edit", { Note: note });
};

exports.updateNote = async (req, res) => {
  await Notes.update(
    {
      title: req.body.title,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    });
  res.redirect("/");
};
