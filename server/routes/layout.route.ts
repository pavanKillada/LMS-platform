import express from "express";
import { authorizedRoles, isAuthenticated } from "../middleware/auth";
import {
  createLayout,
  getLayoutByType,
  updateLayout,
} from "../controllers/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizedRoles("admin"),
  createLayout
);

layoutRouter.put(
  "/update-layout",
  isAuthenticated,
  authorizedRoles("admin"),
  updateLayout
);

layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter;
