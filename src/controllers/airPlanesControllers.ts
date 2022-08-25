import newRouter  from '../interfaces/newRouter';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { InewAirPlanes } from '../interfaces/IairPlane';


const db = require('../models');

class airPlanes {
        static async findAll(req: Request, res: Response): Promise<any> {
                try {
                    const result = await db.airPlanes.findAll()
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
            const search = await db.airPlanes.findByPk(id);
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        static async findOneByPlaneId(
            line: Number,
            req: Request,
            res: Response,
            ): Promise<any> {
            const search = await db.airPlanes.findOne({ 
                where: { 
                    planeId: line
                }
            });
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        static async create(
            _newRegister: InewAirPlanes<String>,
            req: Request,
            res: Response
            ): Promise<any> {
                try {
                    console.log(Object.assign({}, _newRegister));
                    
                    let { router_id } =  Object.assign({}, _newRegister)


                    let validateRegister = [
                        router_id
                    ];

                    let tagRegister = [
                        'router_id',
                    ];

                    for(let i = 0; i < validateRegister.length; i++) {

                        if(validateRegister[i] === undefined) {
                            res.status(500).send(`o campo ${tagRegister[i]} não foi definido`)
                        }
                    }


                    let NewRegister = {
                        id: uuid(),
                        router_id,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }

                    await db.airPlanes.create(NewRegister, req, res)

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
        
        static async updateOne(
            findBy: string | 'id' | 'planeId',
            value: any,
            user: any,
            req: Request,
            res: Response
        ): Promise<any> {
            let User;

            if(findBy === 'id') {
                User = await db.airPlanes.findOne({
                    where: {
                        id: user
                    }
                });
            } else if(findBy === 'planeId') {
                User = await db.airPlanes.findOne({
                    where: {
                        planeId: user
                    }
                });
            }

            
            if(value === undefined) return res.send(`Você não pode deixar o valor em branco`)
    
            User.router_id = value
            User.save().then((x: any) => res.send(`Rota alterada com sucesso`))
        }
        
        static async deleteById(
            user: any,
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                let exist = await db.airPlanes.findOne({ 
                    where: { 
                        id: user.id
                    }
                });
                if(exist === null) return res.status(404).send(`Não encontrado`)
                db.airPlanes.destroy({ where: { id: user.id } });
                res.status(200).send('Rota removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        }
        static async deleteByPlaneId(
            user: any,
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                let exist = await db.airPlanes.findOne({ 
                    where: { 
                        planeId: user.line 
                    }
                });
                if(exist === null) return res.status(404).send(`Não encontrado`)
                
                db.airPlanes.destroy({ where: { routerLine: user.line } });
                res.send('Rota removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }

export default airPlanes;
