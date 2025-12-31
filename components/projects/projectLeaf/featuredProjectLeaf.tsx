"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/types";

function MetaLine({ label, items }: { label: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <p className="!text-sm !text-[var(--subtle-font-color)] !leading-snug">
      {label}
      {items.length > 1 ? "s" : ""}: {items.join(", ")}
    </p>
  );
}

export default function FeaturedProjectLeaf({ project, clamped, className }: { project: Project, clamped?: boolean, className?: string }) {
  const imageSrc =
    typeof project.image === "string" && project.image.length > 0
      ? project.image
      : "/placeholder-image.svg";

  const fields = project.fields ?? [];
  const frameworks = project.frameworks ?? [];
  const languages = project.languages ?? [];
  const libraries = project.libraries ?? [];
  const platforms = project.platforms ?? [];

  return (
    <article className={`grid gap-8 md:gap-10 p-6 md:p-8 rounded-2xl border border-[var(--border-color)] shadow-md ${className}`}>
      <div className="flex flex-col md:min-h-full col-span-1">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={project.name ? `${project.name} cover photo` : "Project cover photo"}
            width={1000}
            height={800}
            className="!w-full !h-auto !rounded-xl !border !theme-border !shadow-sm !object-cover"
            priority
          />
        </div>

        <div className="mt-5">
          <Link href={`/projects/${project.id}`} className="block">
            <button className="!w-full !px-6 !py-2 !rounded-full !text-base !font-semibold shadow-sm">
              See More
            </button>
          </Link>
        </div>
      </div>

      <div className="!flex !flex-col !md:min-h-full !col-span-1">
        <div>
          <p className="!text-sm !text-[var(--subtle-font-color)]">{project.year}</p>

          <h3 className="!mt-1 !text-2xl !md:text-3xl !font-semibold !leading-tight !line-clamp-2">
            {project.name}
          </h3>

          {!!fields.length && (
            <div className="!mt-3 !flex !flex-wrap !gap-2">
              {fields.slice(0, 6).map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-[var(--bg-active)] py-1 px-4 !text-xs"
                >
                  {f}
                </span>
              ))}
              {fields.length > 6 && (
                <span className="!text-xs !px-2 !py-1 !rounded-full !border !theme-border !bg-[var(--bg-hover)] !text-[var(--subtle-font-color)]">
                  +{fields.length - 6} more
                </span>
              )}
            </div>
          )}

          <p className={`!mt-4 !text-sm !leading-relaxed line-clamp-4 ${clamped ? 'xl:line-clamp-none' : ''}`}>
            {project.description}
          </p>
        </div>

        <div className="!flex-1" />

        <div className="!mt-5 !pt-4 !border-t !theme-border !space-y-1">
          <MetaLine label="Framework" items={frameworks} />
          <MetaLine label="Language" items={languages} />
          <MetaLine label="Library" items={libraries} />
          <MetaLine label="Platform" items={platforms} />
        </div>
      </div>
    </article>
  );
}
