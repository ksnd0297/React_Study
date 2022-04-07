const Router = require("koa-router");
const posts = new Router();

const printInfo = (ctx) => {
  console.log(ctx.query);
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
    query: ctx.query,
  };
};

posts.get("/", printInfo);
posts.post("/", printInfo);
posts.get("/:id", printInfo);
posts.delete("/id", printInfo);
posts.put("/:id", printInfo);
posts.patch("/:id", printInfo);
module.exports = posts;
