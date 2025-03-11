import { Router } from "express";
import IndexController from "../controllers/index.js";

const router = Router();
const indexController = new IndexController();

router.post("/items", indexController.createItem.bind(indexController));
router.get("/items/:id", indexController.readItem.bind(indexController));
router.put("/items/:id", indexController.updateItem.bind(indexController));
router.delete("/items/:id", indexController.deleteItem.bind(indexController));

export default router;
