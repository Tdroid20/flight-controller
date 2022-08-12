import passengers from './passengers/passengers';

const router = require('express').Router();

router.use('/passengers', passengers)



export default router;