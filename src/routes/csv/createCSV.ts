const router = require('express').Router();
import { Request, Response } from 'express';
import { toCSV } from '../../services/exportToCSV'

router.post('/startIn=:hours', (req: Request, res: Response) => {
    let startIn = req.params.hours;
    console.log(startIn)
    toCSV(8000)
});

export default router;