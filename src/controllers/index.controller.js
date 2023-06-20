

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderHome = (req, res) => {
  res.render('home');
};

indexCtrl.renderPaneles = (req, res) => {
  res.render('paneles');
};

indexCtrl.renderInversores = (req, res) => {
  res.render('inversores');
};

indexCtrl.renderBaterias = (req, res) => {
  res.render('Baterias');
};

indexCtrl.renderAdicionar = (req, res) => {
  res.render('adicionar');
};

indexCtrl.renderAdicionadas = (req, res) => {
  res.render('adicionadas');
};

module.exports = indexCtrl;