"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Project } from "@/app/types";
import styles from "./projectLeaf.module.css";
import clsx from "clsx";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

// export default function FeaturedProjectCard({
//   project
// }: {project: Project}) {
//   const CardInner = (
//     <div
//       className={cn(
//         "group relative isolate overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5",
//         "focus-within:outline-none focus-within:ring-4 focus-within:ring-white/60",
//         className || "h-64"
//       )}
//       tabIndex={href ? -1 : 0} // focusable when not a link
//       aria-label={alt}
//     >
//       {/* Background image */}
//       <Image
//         src={"/project_covers/racknstack_cover.png"}
//         alt={alt}
//         fill
//         sizes={sizes}
//         priority={priority}
//         className="object-cover"
//       />

//       {/* Darken on hover/focus for readability */}
//       <div
//         aria-hidden
//         className={cn(
//           "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
//           "opacity-0 transition-opacity duration-200",
//           "group-hover:opacity-100 group-focus-within:opacity-100",
//           "motion-reduce:transition-none"
//         )}
//       />

//       {/* Optional top-left badge/children */}
//       {children && (
//         <div className="pointer-events-none absolute left-3 top-3 z-10 text-white drop-shadow">
//           {children}
//         </div>
//       )}

//       {/* Description */}
//       <p
//         className={cn(
//           "pointer-events-none absolute inset-x-0 bottom-0 z-10 px-4 py-3 text-sm text-white",
//           "translate-y-2 opacity-0 transition-all duration-200",
//           "group-hover:translate-y-0 group-hover:opacity-100",
//           "group-focus-within:translate-y-0 group-focus-within:opacity-100",
//           "motion-reduce:transition-none"
//         )}
//       >
//         fdsjaflkjdslkfjdlks
//       </p>
//     </div>
//   );

//   // Wrap with Link if href provided
//   return href ? (
//     <Link
//       href={href}
//       className={cn(
//         "block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60 rounded-2xl"
//       )}
//       aria-label={alt}
//     >
//       {CardInner}
//     </Link>
//   ) : (
//     CardInner
//   );
// }

export default function FeaturedProjectLeaf({ project }: { project: Project }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border theme-border rounded gap-8">
            <div className="flex justify-center items-center">
            <Image
                src={typeof project.image === "string" ? project.image : "/placeholder-image.svg"}
                alt={project.name ? `${project.name} cover photo` : "Project cover photo"}
                height={200}
                width={300}
                className="shadow-lg"
                priority
            />
            </div>
            <div className="flex flex-col justify-center">
            {/* <p className={styles.year}>{project.year}</p> */}
            <h3 className="!font-semibold">{project.name}</h3>
            <p className="!text-sm !text-[var(--subtle-font-color)] mb-2">{project.fields.join(', ')}</p>
            <p className="!text-sm mb-2">{project.description}</p>
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
            </div>
        </div>
        // <Link href={`/projects/${project.name}`} className='!w-full !h-64 !p-0 !m-0'>
        //     <div
        //     className={clsx(
        //         "group relative isolate overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5",
        //         "focus-within:outline-none focus-within:ring-4 focus-within:ring-white/60 h-64"
        //     )}
        //     >
        //     </div>
        // </Link>
    );
}
