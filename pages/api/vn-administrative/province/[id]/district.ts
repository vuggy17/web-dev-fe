import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { getDistricts } from "src/app/backend/controllers/Adminitrative.controller";

export default async function provinceHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  const { id } = req.query as { id: string };
  switch (req.method) {
    case "GET": {
      const districts = await getDistricts(parseInt(id));
      res.json(districts);
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
