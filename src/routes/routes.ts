import passengers from './passengers/passengers';
import routes from './AirRoutes/router';
import airPlanes from './AirPlanes/airPlaneRouter';
import csv from './csv/createCSV';

const router = require('express').Router();

router.use('/passengers', passengers);
router.use('/routes', routes);
router.use('/planes', airPlanes);
router.use('/csv', csv)



export default router;