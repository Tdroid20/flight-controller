const router = require('express').Router();
import { Request, Response } from 'express';
import AirPLane from '../../controllers/airPlanesControllers'


router.get('/list', async (req: Request, res: Response) => {
    AirPLane.findAll(req, res)
})

router.get('/list/findOneByID=:id', async (req: Request, res: Response) => {
    const params: any = req.params;
    AirPLane.findOneById(params.id, req, res)
})

router.get('/list/findOneByPlaneId=:id', async (req: Request, res: Response) => {
    const params: any = req.params;
    AirPLane.findOneByPlaneId(params.id, req, res)
})


router.post('/register/Route=:id', (req: Request, res: Response) => {
    const data: any = req.params;
    
    AirPLane.create(data.id, req, res)
});


router.put('/edit/findOneByID=:id&newRouter=:router', (req: Request, res: Response) => {
    const data = req.params;
    console.log('data ', data.id)

    AirPLane.updateOne('id', data.router, data.id, req, res)
});

router.put('/edit/findOneByplaneId=:planeId&newRouter=:router', (req: Request, res: Response) => {
    const data = req.params;
    console.log('data ', data)

    AirPLane.updateOne('planeId', data.router, data.planeId, req, res)
});


router.delete('/delete/findOneByID=:id', (req: Request, res: Response) => {
    const data: any = req.params;
    AirPLane.deleteById(data, req, res)
});

router.delete('/delete/findOneByRouterLine=:line', (req: Request, res: Response) => {
    const data: any = req.params;
    AirPLane.deleteByPlaneId(data, req, res)
});

export default router;