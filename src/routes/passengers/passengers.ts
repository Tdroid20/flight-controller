const router = require('express').Router();
import { Request, Response } from 'express';
import Passengers from '../../controllers/passenger'

/*
=============================// GET //==============================
*/

router.get('/list', async (req: Request, res: Response) => {
    Passengers.getAll(req, res)
})

router.get('/list/findOneByID=:id', async (req: Request, res: Response) => {
    const params: any = req.params;
    Passengers.findOneById(params.id, req, res)
})

router.get('/list/findOneByCpf=:cpf', async (req: Request, res: Response) => {
    const params: any = req.params;
    Passengers.findOneByCPF(params.cpf, req, res)
})
router.get('/list/findOneByEmail=:email', async (req: Request, res: Response) => {
    const params: any = req.params;
    Passengers.findOneByEMAIL(params.email, req, res)
})



/*
=============================// POST //==============================
*/

router.post('/register', (req: Request, res: Response) => {
    const data= req.body[0];
    
    Passengers.create(data, req, res)
});

/*
=============================// PUT //==============================
*/

router.put('/edit/findBy=:type&user=:user&field=:field&value=:value', (req: Request, res: Response) => {
    const data = req.params;

    Passengers.updateOne(data.type, data.field, data.value, data.user, req, res)
});

/*
=============================// DELETE //==============================
*/

router.delete('/delete/findOneByID=:id', (req: Request, res: Response) => {
    const data: any = req.params;
    Passengers.delete(data, req, res)
});

router.delete('/delete/all', (req: Request, res: Response) => {
    Passengers.deleteAll(req, res)
});

export default router;