import { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
  const {
    query: { bar },
  } = request;

  response.status(200).send(`Hello ${bar}`);
};
