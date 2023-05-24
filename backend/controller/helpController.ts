import { Request,Response } from 'express';
import {helpuser} from '../model/help';
import {AppDataSource} from '../index'
import { getRepository } from "typeorm";
const getHelp = async (req: Request, res: Response) => {
  const questions = await AppDataSource.getRepository(helpuser).find();

  res.send(questions);
};

export default {
    getHelp
}