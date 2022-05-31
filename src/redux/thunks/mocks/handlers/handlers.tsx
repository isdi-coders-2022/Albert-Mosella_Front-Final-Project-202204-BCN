import { rest } from "msw";

export const mockTokenKey = "KJASDH123JK21H3K1JH3KJ2H13KAJ";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
];
