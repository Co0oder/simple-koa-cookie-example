const Router = require('@koa/router');
const controller = require("../controllers/CharactersController");

const router = new Router();

router.get('/', controller.index);
router.get('/form', controller.show);
router.post('/form', controller.update);

module.exports = router;