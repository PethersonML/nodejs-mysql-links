import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "node180656-brasiljs.jelastic.saveincloud.net",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "YIDcga24313",
  database: process.env.DATABASE_NAME || "linksdb",
  port: process.env.DATABASE_PORT || 14520,
};

export const port = process.env.PORT || 4000;

export const SECRET = process.env.SECRET || 'some secret key';