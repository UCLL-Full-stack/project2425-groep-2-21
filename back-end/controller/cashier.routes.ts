/**
 * @swagger
 * components:
 *  schemas:
 *    Cashier:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          format: int64
 *          example: 1
 *        userName:
 *          type: string
 *          description: Name of the cashier
 *          example: John Doe
 *        pin:
 *          type: number
 *          format: int64
 *          example: 1234
 *        bills:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Bill'
 */

import express from 'express';
import { Request, Response } from 'express';
import cashierService from '../service/cashier.service';
import { CashierDTO } from '../types';

const cashierRouter = express.Router()

/**
 *  @swagger
 *  /cashier:
 *    get:
 *      tags:
 *      - Cashier
 *      summary: Get all cashiers
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Cashier'
 *              example:
 *                id: 1
 *                userName: John Doe
 *                pin: 1234
 * */
cashierRouter.get('/', async (req: Request, res: Response) => {
    try {
        const cashiers = await cashierService.getAllCashiers();
        res.status(200).json(cashiers);
    } catch (error: any) {
        res.status(400).json({ status: error, errorMessage: error.message });
    }
});

/**
 * @swagger
 * /cashier:
 *   post:
 *     tags:
 *     - Cashier
 *     summary: Create a new cashier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cashier'
 *           example:
 *             userName: John Doe
 *             pin: 1234
 *             bills: []
 *     responses:
 *      201:
 *        description: Successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cashier'
 *            example:
 *              id: 1
 *              userName: John Doe
 *              pin: 1234
 *              bills: []
 */
cashierRouter.post('/', (req: Request, res: Response) => {
    try {
        const cashier = <CashierDTO>req.body;
        const result = cashierService.createCashier(cashier);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ status: error, errorMessage: error.message });
    }
});

export { cashierRouter };