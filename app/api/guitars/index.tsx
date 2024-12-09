import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/db'; // Adjust the path according to your structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const guitars = await prisma.guitar.findMany();
      res.status(200).json(guitars);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving guitars', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
