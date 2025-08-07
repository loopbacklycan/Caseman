import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET /api/cases/[id]/evidence - list evidence for a case
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const evidence = await prisma.evidence.findMany({ where: { caseId: id } });
  return NextResponse.json(evidence);
}

// POST /api/cases/[id]/evidence - add evidence to a case
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const data = await req.json();
  const created = await prisma.evidence.create({
    data: {
      filename: data.filename,
      mimetype: data.mimetype,
      url: data.url,
      caseId: id,
    },
  });
  return NextResponse.json(created);
}
