import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import { Experience, Education } from "@/app/types";

type Props = { info: Experience | Education; isMobile: boolean };

export default function Logo({ info, isMobile }: Props) {
  const initialSrc: string | StaticImageData = useMemo(() => {
    if (typeof info.logo === "string") {
      const s = info.logo.trim();
      return s.length > 0 ? s : "/placeholder-image.svg";
    }
    return info.logo ?? "/placeholder-image.svg";
  }, [info.logo]);

  const [src, setSrc] = useState<string | StaticImageData>(initialSrc);

  return (
    <Image
      src={src}
      alt="experience logo"
      width={isMobile ? 36 : 48}
      height={isMobile ? 36 : 48}
      className="p-0 m-0"
      onError={() => setSrc("/placeholder-image.svg")}
      sizes={isMobile ? "36px" : "48px"}
      priority={false}
    />
  );
}
