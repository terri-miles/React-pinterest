import express from "express";
import {
  getPins,
  getPin,
  createPin,
  interractionCheck,
  interract,
} from "../controllers/pin.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getPins);
router.get("/:id", getPin);
router.post("/", verifyToken, createPin);
router.get("/interraction-check/:id", interractionCheck);
router.post("/interract/:id",verifyToken, interract);

export default router;
