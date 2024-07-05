import { DataSource } from "typeorm";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "postgres",
  synchronize: true,
  entities: [path.join(path.dirname(new URL(import.meta.url).pathname), "../entities/**/*.mjs")],
});

export default dataSource;
