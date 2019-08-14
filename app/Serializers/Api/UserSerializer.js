class UserSerializer {
  constructor(rows, pages = null, isOne = false) {
    this.rows = rows;
    this.pages = pages;
    this.isOne = isOne;
  }

  first() {
    return this.rows[0];
  }

  last() {
    return this.rows[this.rows.length - 1];
  }

  size() {
    return this.isOne ? 1 : this.rows.length;
  }

  toJSON() {
    const data = this.rows.map(item => {
      return {
        id: item.id,
        email: item.email,
        username: item.username,
      };
    });

    const meta = {
      totalRows: this.rows.length,
      totalPages: this.pages,
    };
    const dataResponse = {
      meta,
      data: data,
    };
    return dataResponse;
  }
}

module.exports = UserSerializer;
