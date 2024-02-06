import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { BaseHTML } from "./components/baseHTML";
import { PrismaClient } from "@prisma/client";

// Configuration
const prisma = new PrismaClient();
const app = new Elysia();
app.use(html());
app.use(staticPlugin());

// Routes
app.get("/", () => {
  return (
    <BaseHTML>
      <h1 hx-get='/random' hx-trigger="every 1000ms" hx-swap="innerHTML"></h1>
    </BaseHTML>
  )
});

app.get('/random', () => Math.random())

// Rest
app.listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
