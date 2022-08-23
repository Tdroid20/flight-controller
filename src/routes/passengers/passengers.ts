const router = require('express').Router();
import { Request, Response } from 'express';
import Passengers from '../../controllers/passenger'

router.get('/list', async (req: Request, res: Response) => {
    Passengers.findAll(req, res)
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


router.post('/register', (req: Request, res: Response) => {
    const data = req.body[0];
    
    Passengers.create(data, req, res)
});

router.put('/edit/findBy=:type&user=:user&field=:field&value=:value', (req: Request, res: Response) => {
    const data = req.params;

    Passengers.updateOne(data.type, data.field, data.value, data.user, req, res)
});

router.delete('/delete/findOneByID=:id', (req: Request, res: Response) => {
    const data: any = req.params;
    Passengers.delete(data, req, res)
});

export default router;