class Item {
  constructor(connection) {
    this.connection = connection;
  }

  create(data, callback) {
    const query = "INSERT INTO items SET ?";
    this.connection.query(query, data, callback);
  }

  read(id, callback) {
    const query = "SELECT * FROM items WHERE id = ?";
    this.connection.query(query, [id], callback);
  }

  update(id, data, callback) {
    const query = "UPDATE items SET ? WHERE id = ?";
    this.connection.query(query, [data, id], callback);
  }

  delete(id, callback) {
    const query = "DELETE FROM items WHERE id = ?";
    this.connection.query(query, [id], callback);
  }
}

export default Item;
