import newRouter  from '../interfaces/newRouter';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';


const db = require('../models');

class Routes {
        static async findAll(req: Request, res: Response): Promise<any> {
                try {
                    const result = await db.Routes.findAll()
                    return res.status(200).json(result)
                } catch (err) {
                    return res.status(500).json(err)
                }
        }

        static async findOneById(
            id: Number,
            req: Request,
            res: Response,
            ): Promise<any> {
            const search = await db.Routes.findByPk(id);
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        static async findOneByRouterLine(
            line: Number,
            req: Request,
            res: Response,
            ): Promise<any> {
            const search = await db.Routes.findOne({ 
                where: { 
                    routerLine: line 
                }
            });
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        static async create(
            _newRegister: newRouter,
            req: Request,
            res: Response
            ): Promise<any> {
                try {
                    console.log(Object.assign({}, _newRegister));
                    
                    let { start, firstStop, secondStop, end, price } =  Object.assign({}, _newRegister)


                    let validateRegister = [
                        start,
                        firstStop,
                        secondStop,
                        end,
                        price
                    ];

                    let tagRegister = [
                        'start',
                        'firstStop',
                        'secondStop',
                        'end',
                        'price'
                    ];

                    for(let i = 0; i < validateRegister.length; i++) {

                        if(validateRegister[i] === undefined) {
                            res.status(500).send(`o campo ${tagRegister[i]} não foi definido`)
                        }
                    }


                    let NewRegister = {
                        id: uuid(),
                        start,
                        firstStop,
                        secondStop,
                        end,
                        price,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }

                    await db.Routes.create(NewRegister, req, res)

                    res.status(200).json(Object.assign({}, _newRegister))

                } catch (error: any) {
                    console.log(error)
                    if(error.parent.code) {
                        console.log(error.parent.code)
                        if(error.parent.code === '23502') return res.status(500).json(`Você o deixou campo ${error.parent.column} vazio.`)
                    res.status(500).json(error)
                    } else {
                        console.log(error)
                        res.status(500).json(error)
                    }
                }
            } 
        static async deleteById(
            user: any,
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                let exist = await db.Routes.findOne({ 
                    where: { 
                        id: user.id 
                    }
                });
                if(exist === null) return res.status(404).send(`Não encontrado`)
                db.Routes.destroy({ where: { id: user.id } });
                res.status(200).send('Rota removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        }
        static async deleteByRouterLine(
            user: any,
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                let exist = await db.Routes.findOne({ 
                    where: { 
                        routerLine: user.line 
                    }
                });
                if(exist === null) return res.status(404).send(`Não encontrado`)
                
                db.Routes.destroy({ where: { routerLine: user.line } });
                res.send('Rota removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }

export default Routes;
