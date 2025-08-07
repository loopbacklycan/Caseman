import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET /api/cases/[id]/map/edges - list edges for a case
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const edges = await prisma.mapEdge.findMany({ where: { caseId: id } });
  return NextResponse.json(edges);
}

// POST /api/cases/[id]/map/edges - add an edge to a case map
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const data = await req.json();
  const created = await prisma.mapEdge.create({
    data: {
      fromId: data.fromId,
      toId: data.toId,
      caseId: id,
    },
  });
  return NextResponse.json(created);
}
