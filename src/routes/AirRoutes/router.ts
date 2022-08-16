const router = require('express').Router();
import { Request, Response } from 'express';
import Routes from '../../controllers/routerController'

/*
=============================// GET //==============================
*/

router.get('/list', async (req: Request, res: Response) => {
    Routes.getAll(req, res)
})

router.get('/list/findOneByID=:id', async (req: Request, res: Response) => {
    const params: any = req.params;
    console.log(params.id)
    Routes.findOneById(params.id, req, res)
})



/*
=============================// POST //==============================
*/

router.post('/register', (req: Request, res: Response) => {
    const data= req.body;
    
    Routes.create(data, req, res)
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
    Routes.delete(data, req, res)
});

router.delete('/delete/all', (req: Request, res: Response) => {
    Routes.deleteAll(req, res)
});

export default router;