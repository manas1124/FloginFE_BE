import { rest } from "msw";

export const handlers = [
  rest.post("/api/auth/login", (req, res, ctx) => {
    const { username, password } = req.body as any;

    if (username === "validuser" && password === "validpass123") {
      return res(
        ctx.json({
          success: true,
          message: "Login successful",
          token: "jwt-token",
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          success: false,
          message: "Invalid credentials",
        })
      );
    }
  }),

  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.json({
        content: [
          {
            id: 1,
            name: "Test Product",
            price: 100,
            quantity: 10,
            description: "Test Description",
            category: "Electronics",
            active: true,
          },
        ],
      })
    );
  }),

  rest.get("/api/products/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: Number(id),
        name: "Test Product",
        price: 100,
        quantity: 10,
        description: "Test Description",
        category: "Electronics",
        active: true,
      })
    );
  }),

  rest.post("/api/products", (req, res, ctx) => {
    const product = req.body as any;
    return res(
      ctx.json({
        id: 1,
        ...product,
      })
    );
  }),

  rest.put("/api/products/:id", (req, res, ctx) => {
    const { id } = req.params;
    const product = req.body as any;
    return res(
      ctx.json({
        id: Number(id),
        ...product,
      })
    );
  }),

  rest.delete("/api/products/:id", (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
