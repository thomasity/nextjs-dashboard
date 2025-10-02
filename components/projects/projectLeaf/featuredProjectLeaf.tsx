"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Project } from "@/app/types";

export default function FeaturedProjectLeaf({ project }: { project: Project }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 xl:border-0 border-b theme-border last:border-0">
            <div className="flex justify-center items-center">
                <Image
                    src={typeof project.image === "string" ? project.image : "/placeholder-image.svg"}
                    alt={project.name ? `${project.name} cover photo` : "Project cover photo"}
                    height={200}
                    width={300}
                    className="shadow"
                    priority
                />
                </div>
                <div className="flex flex-col justify-center">
                <p>{project.year}</p>
                <h3 className="!font-semibold">{project.name}</h3>
                <p className="!text-sm !text-[var(--subtle-font-color)] mb-2">{project.fields.join(', ')}</p>
                <p className="!text-sm mb-2 line-clamp-3">{project.description}</p>
                {project.frameworks.length != 0 ? (
                    <p className="!text-sm text-[var(--subtle-font-color)]">
                    Framework{project.frameworks.length > 1 ? 's' : null }: {project.frameworks.join(', ')}
                    </p>
                    ) : (
                    null
                    )
                }
                {project.languages.length != 0 ? (
                    <p className="!text-sm text-[var(--subtle-font-color)]">
                    Language{project.languages.length > 1 ? 's' : null }: {project.languages.join(', ')}
                    </p>
                    ) : (
                    null
                    )
                }
                {project.libraries.length != 0 ? (
                    <p className="!text-sm text-[var(--subtle-font-color)]">
                    {project.libraries.length > 1 ? 'Libraries' : 'Library'}: {project.libraries.join(', ')}
                    </p>
                    ) : (
                    null
                    )
                }
                <Link href={`/projects/${project.id}`} className="ml-auto mr-4"><button className="!text-lg !px-8">See More</button></Link>
            </div>
        </div>
    );
}
