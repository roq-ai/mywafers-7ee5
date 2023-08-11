import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { birthdayValidationSchema } from 'validationSchema/birthdays';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.birthday
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getBirthdayById();
    case 'PUT':
      return updateBirthdayById();
    case 'DELETE':
      return deleteBirthdayById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBirthdayById() {
    const data = await prisma.birthday.findFirst(convertQueryToPrismaUtil(req.query, 'birthday'));
    return res.status(200).json(data);
  }

  async function updateBirthdayById() {
    await birthdayValidationSchema.validate(req.body);
    const data = await prisma.birthday.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteBirthdayById() {
    const data = await prisma.birthday.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
