import { rest } from "msw";

export const mockTokenKey: string = "MARIPURI666MARIPURI666MARIPURI";

export const mockProperties = [
  {
    typeOf: "House",
    adress: "Street 1",
    name: "Cal Pepe",
    surface: 150,
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    year: 1988,
    description: "Casa to guapa",
    image: "casatoguapa.jpg",
    views: false,
    airConditioning: true,
    heating: true,
    parking: false,
    pool: true,
    fireplace: false,
    garden: true,
    laundryRoom: false,
    storage: true,
    terrace: true,
  },
];

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}properties/`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mockProperties))
  ),
];
