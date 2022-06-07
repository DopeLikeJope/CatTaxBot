import { Client } from "pg";

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "cat"
});

client.connect();

client.query(`SELECT user_id FROM leaderboard ORDER BY num_tax_pay DESC`);
