import Help from '../controller/helpController';
import express from 'express'

const routeHelp=express.Router();

routeHelp.get('/help',Help.getHelp)


export default routeHelp;