import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET /api/cases/[id]/map/nodes - list nodes for a case
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const nodes = await prisma.mapNode.findMany({ where: { caseId: id } });
  return NextResponse.json(nodes);
}

// POST /api/cases/[id]/map/nodes - add a node to a case map
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const data = await req.json();
  const created = await prisma.mapNode.create({
    data: {
      label: data.label,
      x: data.x,
      y: data.y,
      caseId: id,
    },
  });
  return NextResponse.json(created);
}
