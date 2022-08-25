import passengers from './passengers/passengers';
import routes from './AirRoutes/router';
import airPlanes from './AirPlanes/airPlaneRouter';

const router = require('express').Router();

router.use('/passengers', passengers);
router.use('/routes', routes);
router.use('/planes', airPlanes)


export default router;