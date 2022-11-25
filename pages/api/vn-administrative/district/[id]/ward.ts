import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { getWards } from "src/app/backend/controllers/Adminitrative.controller";

export default async function districtHandler(
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
      const wards = await getWards(parseInt(id));
      res.json(wards);
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
