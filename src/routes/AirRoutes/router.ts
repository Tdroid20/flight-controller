const router = require('express').Router();
import { Request, Response } from 'express';
import Routes from '../../controllers/routerController'


router.get('/list', async (req: Request, res: Response) => {
    Routes.findAll(req, res)
})

router.get('/list/findOneByID=:id', async (req: Request, res: Response) => {
    const params: any = req.params;
    Routes.findOneById(params.id, req, res)
})

router.get('/list/findOneByRouterLine=:line', async (req: Request, res: Response) => {
    const params: any = req.params;
    Routes.findOneByRouterLine(params.line, req, res)
})


router.post('/register', (req: Request, res: Response) => {
    const data= req.body;
    
    Routes.create(data, req, res)
});


router.put('/edit/findOneByID=:id', (req: Request, res: Response) => {
    const data= req.params;
    console.log(data)

    res.send(`Não consegui editar o passageiro ${data.id} pois ainda não tenho uma database criada. Tente novamente em breve.`)
});


router.delete('/delete/findOneByID=:id', (req: Request, res: Response) => {
    const data: any = req.params;
    Routes.deleteById(data, req, res)
});

router.delete('/delete/findOneByRouterLine=:line', (req: Request, res: Response) => {
    const data: any = req.params;
    Routes.deleteByRouterLine(data, req, res)
});

export default router;