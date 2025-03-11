import Item from "../models/index.js";
import connectDatabase from "../config/database.js";

class ItemController {
  constructor() {
    this.connection = connectDatabase();
    this.itemModel = new Item(this.connection);
  }

  createItem(req, res) {
    const data = req.body;
    this.itemModel.create(data, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, ...data });
    });
  }

  readItem(req, res) {
    const id = req.params.id;
    this.itemModel.read(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.json(result[0]);
    });
  }

  updateItem(req, res) {
    const id = req.params.id;
    const data = req.body;
    this.itemModel.update(id, data, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.json({ id, ...data });
    });
  }

  deleteItem(req, res) {
    const id = req.params.id;
    this.itemModel.delete(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.status(204).send();
    });
  }
}

export default ItemController;
