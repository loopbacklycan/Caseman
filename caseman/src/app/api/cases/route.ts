import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET /api/cases - list all cases
export async function GET() {
  const cases = await prisma.case.findMany({
    include: {
      evidence: true,
      mapNodes: true,
      mapEdges: true,
    },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(cases);
}

// POST /api/cases - create a new case
export async function POST(req: NextRequest) {
  const data = await req.json();
  const created = await prisma.case.create({
    data: {
      title: data.title,
      type: data.type,
      status: data.status,
      category: data.category,
      suspect: data.suspect,
      officer: data.officer,
      notes: data.notes,
      description: data.description,
    },
  });
  return NextResponse.json(created);
}
