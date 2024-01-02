import express from "express";
import { authorizedRoles, isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotifications } from "../controllers/notification.controller";
const notificationRoute = express.Router();

// all notifications -- only admin
notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizedRoles("admin"),
  getNotifications
);

notificationRoute.put(
    "/update-notification/:id",
    isAuthenticated,
    authorizedRoles("admin"),
    updateNotifications
);

export default notificationRoute;
