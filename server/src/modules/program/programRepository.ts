import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  // The C of CRUD - Create operation
  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT into program (title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
      ],
    );

    return result.insertId;
  }

  // The R of CRUD - Read operations
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from program WHERE id = ?",
      [id],
    );

    return rows[0] as Program;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * from program");

    return rows as Program[];
  }

  // The U of CRUD - Update operations
  async update(program: Program) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE program set title = ?, synopsis id = ?, poster = ?, counter = ?, year = ?, WHERE id = ?",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.id,
        program.category_id,
      ],
    );

    return result.affectedRows;
  }

  // The D of CRUD - Delete operations
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE from program WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new ProgramRepository();
