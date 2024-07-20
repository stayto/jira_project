// TODO import routers
const {homeRouter} = require('../controllers/home');
const { userRouter } = require('../controllers/user');
const { stoneRouter } = require('../controllers/stone');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(stoneRouter);
    app.use('*', (req, res) => {
        res.render('404');
    });
    // TODO register routers
}

module.exports = { configRoutes };