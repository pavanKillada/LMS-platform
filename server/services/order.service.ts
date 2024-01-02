import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catch_async_errors";
import orderModel from "../models/order.model";

// create new order
export const newOrder = CatchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    const order = await orderModel.create(data);
    res.status(201).json({
      success: true,
      order,
    });
  }
);

// get all orders
export const getAllOrdersService = async (res: Response) => {
    const orders = await orderModel.find().sort({ createdAt: -1 });
  
    res.status(201).json({
      success: true,
      orders,
    });
  };
  