const router = require('express').Router();
import { Request, Response } from 'express';
import { METHODS } from 'http';
import { Http2SecureServer } from 'http2';
import { idText } from 'typescript';
import Passengers from '../../controllers/passenger'

/*
=============================// GET //==============================
*/

router.get('/list', async (req: Request, res: Response) => {
    Passengers.getAll(req, res)
})

router.get('/list/findOneByID=:id', async (req: Request, res: Response) => {
    const params: any = req.params;
    console.log(params.id)
    Passengers.findOneById(params.id, req, res)
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

router.put('/edit/findOneByID=:id', (req: Request, res: Response) => {
    const data= req.params;
    console.log(data)

    res.send(`Não consegui editar o passageiro ${data.id} pois ainda não tenho uma database criada. Tente novamente em breve.`)
});

/*
=============================// DELETE //==============================
*/

router.delete('/delete/findOneByID=:id', (req: Request, res: Response) => {
    const data: any = req.params;
    Passengers.delete(data, req, res)
});

router.delete('/delete/all', (req: Request, res: Response) => {
    const data: any = req.params;
    Passengers.deleteAll(req, res)
});

export default router;