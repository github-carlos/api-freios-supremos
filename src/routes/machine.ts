import Express from 'express';
import { MachineControllerInstance } from '../controllers'

const resource = '/machine';
export const machineRouter = Express.Router();

const machineController = MachineControllerInstance;

machineRouter.get(`${resource}`, machineController.get.bind(machineController));
machineRouter.get(`${resource}/:id`, machineController.getOne.bind(machineController));
machineRouter.post(`${resource}`, machineController.save.bind(machineController));