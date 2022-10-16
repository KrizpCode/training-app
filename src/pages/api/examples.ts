// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (request: NextApiRequest, response: NextApiResponse) => {
  const examples = await prisma.example.findMany();
  response.status(200).json(examples);
};

export default examples;
