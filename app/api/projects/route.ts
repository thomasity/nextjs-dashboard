import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const year = searchParams.get('year');
    const q = searchParams.get('q');
    const ongoing = searchParams.get('ongoing'); // <-- add this

    const projects = await prisma.project.findMany({
      where: {
        ...(featured ? { featured: featured === 'true' } : {}),
        ...(ongoing ? { ongoing: ongoing === 'true' } : {}), // <-- filter
        ...(year ? { year: Number(year) } : {}),
        ...(q
          ? {
              OR: [
                { name: { contains: q } },
                { description: { contains: q } },
              ],
            }
          : {}),
      },
      orderBy: [{ updatedAt: 'desc' }, { year: 'desc' }, { name: 'asc' }],
    });

    return NextResponse.json(projects);
  } catch (err) {
    console.error('GET /api/projects failed:', err);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
