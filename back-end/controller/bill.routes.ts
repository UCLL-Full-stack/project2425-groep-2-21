/**
 * @swagger
 * components:
 *    schemas:
 *      Bill:
 *        type: object
 *        properties:
 *           id:
 *             type: number
 *             format: int64
 *           total:
 *             type: number
 *             format: double
 *           items:
 *             type: array
 *             description: Items in the bill
 *             items:
 *               $ref: '#/components/schemas/Item'
 */

import express from 'express';
import { Request, Response } from 'express';
import billService from '../service/bill.service';
import { BillDTO } from '../types';


const billRouter = express.Router();


/**
 * @swagger
 * /bills:
 *  get:
 *    tags:
 *      - Bill
 *    summary: Get all bills
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Bill'
 *            example:
 *              id: 1
 *              total: 100
 *              items: []
 */
billRouter.get('/', async (req: Request, res: Response) => {
    try {
        const bills = await billService.getAllBills();
        res.status(200).json(bills);
    } catch (error: any) {
        res.status(400).json({ status: error, errorMessage: error.message });
    }
});


/**
 * @swagger
 * /bills:
 *   post:
 *     tags:
 *       - Bill
 *     summary: Create a new bill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bill'
 *           example:
 *             total: 100
 *             items: []
 *             id: 1
 *     responses:
 *       201:
 *         description: Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bill'
 *             example:
 *               id: 1
 *               total: 100
 *               items: []
 */
billRouter.post('/', (req: Request, res: Response) => {
    try {
        const bill = <BillDTO>req.body;
        const result = billService.createBill(bill);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ status: error, errorMessage: error.message });
    }
});

export { billRouter };