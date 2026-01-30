import { NextResponse } from 'next/server';
import projectData from '@/app/data/projects.json';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const year = searchParams.get('year');
    const q = searchParams.get('q');
    const ongoing = searchParams.get('ongoing');

    const projects = projectData.filter(project => {
      if (featured && project.featured !== (featured === 'true')) return false;
      if (ongoing && project.ongoing !== (ongoing === 'true')) return false;
      if (year && project.year !== Number(year)) return false;
      if (q) {
        const query = q.toLowerCase();
        if (!project.name.toLowerCase().includes(query) && !project.description.toLowerCase().includes(query)) {
          return false;
        }
      }
      return true;
    });

    return NextResponse.json(projects);
  } catch (err) {
    console.error('GET /api/projects failed:', err);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
