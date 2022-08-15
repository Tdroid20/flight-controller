import { Request, Response } from 'express'

const db = require('../models');

class Passengers {
        static async getAll(req: Request, res: Response): Promise<any> {
                try {
                    const result = await db.passengers.findAll()
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
            const search = await db.passengers.findByPk(id);
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }
    }

export default Passengers;
