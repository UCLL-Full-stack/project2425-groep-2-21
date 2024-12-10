/**
 *  @swagger
 *  components:
 *    schemas:
 *      Item:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *            format: int64
 *            description: Unique identifier of the item
 *          name:
 *            type: string
 *            description: Name of the item
 *          price:
 *            type: number
 *            format: double
 *            description: Price of the item
 *          brand:
 *            type: string
 *            description: Brand of the item
 *          barcode:
 *            type: number
 *            format: int64
 *            description: Barcode of the item
 *          createdAt:
 *            type: string
 *            format: date-time
 *            description: Date and time when the item was created
 *            example: 2021-10-10T12:00:00Z
 *          updatedAt:
 *            type: string
 *            format: date-time
 *            description: Date and time when the item was last updated
 *            example: 2021-10-10T12:00:00Z
 */

import express from 'express';
import { Request, Response } from 'express';
import itemService from '../service/item.service';
import { ItemDTO } from '../types';


const itemRouter = express.Router();

/**
 *  @swagger
 *  /items:
 *    get:
 *      tags:
 *      - Item
 *      summary: Get all items
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Item'
 * */
itemRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items = await itemService.getAllItems();
        res.status(200).json(items);
    } catch (error: any) {
        res.status(400).json({ status: error, errorMessage: error.message });
    }
});

/**
 * @swagger
 * /items:
 *   post:
 *     tags:
 *     - Item
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       description: Item object that needs to be added
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *           example:
 *             name: "Shampoo extra fresh"
 *             price: 5.99
 *             brand: "head & shoulders"
 *             barcode: 123456789
 *     responses:
 *       201:
 *         description: Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *             example:
 *               id: 1
 *               name: "Shampoo extra fresh"
 *               price: 5.99
 *               brand: "head & shoulders"
 *               barcode: 123456789
 */
itemRouter.post('/', (req: Request, res: Response) => {
    try {
        const item = <ItemDTO>req.body;
        const result = itemService.createItem(item);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ status: error, errorMessage: error.message });
    }
});

export { itemRouter };