import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "process";
import * as schema from "./schema";

let connection: mysql.Pool | mysql.Connection | undefined;

const connectToDatabase = async () => {
  if (!connection) {
    const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

    //console.log(env);

    if (!DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASSWORD || !DB_NAME) {
      throw new Error("Required environment variables are not set");
    }
    try {
      connection = await mysql.createConnection({
        host: DB_HOST,
        port: Number(DB_PORT),
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
      });
    } catch (error) {
      console.error("Failed to connect to the database", error);
      throw error;
    }
  }
  return connection;
};

export const dbauth = async () => {
  const connection = await connectToDatabase();
  return drizzle(connection, { schema, mode: "default" });
};
