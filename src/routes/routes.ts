import passengers from './passengers/passengers';
import routes from './AirRoutes/router';

const router = require('express').Router();

router.use('/passengers', passengers)
router.use('/routes', routes)


export default router;