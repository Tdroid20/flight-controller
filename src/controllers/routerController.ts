import { Request, Response } from 'express';
import { stringify } from 'querystring';
import newRouter  from '../interfaces/newRouter';


const db = require('../models');

class Routes {
        static async getAll(req: Request, res: Response): Promise<any> {
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

        static async create(
            _newRegister: newRouter, 
            req: Request, 
            res: Response
            ): Promise<any> {
                try {
                    let { start, firstStop, secondStop, end } =  _newRegister

                    let getAllInDb: Array<object> = await db.Routes.findAll()
                    
                    let NewRegister = {
                        id: getAllInDb.length + 1,
                        start,
                        firstStop,
                        secondStop,
                        end,
                        createdAt: new Date(),
                        updatedAt: new Date()
                        }

                    await db.Routes.create(NewRegister, req, res)

                    res.status(200).send(`a Rota com destino ${end} foi registrada`)

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
        static async deleteAll(
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                db.Routes.destroy({
                    truncate: true
                  });
                  res.status(200).send('Todas as Rotas foram removidas do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        } 
        static async delete(
            user: any, 
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                console.log(user.id)
                db.Routes.destroy({ where: { id: user.id } });
                res.status(200).send('Rota removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        } 
    }

export default Routes;
