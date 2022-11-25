import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { getAllProvinces } from "src/app/backend/controllers/Adminitrative.controller";

export default async function provinceHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  switch (req.method) {
    case "GET": {
      // Get data from your database
      const allProvinces = await getAllProvinces();
      res.json(allProvinces);
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
