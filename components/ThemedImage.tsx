import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

export default function ThemedImage({
    lightSrc,
    darkSrc,
    defaultSrc,
    alt,
    width,
    height,
    className
} : {
    lightSrc: string,
    darkSrc: string,
    defaultSrc: string,
    alt: string,
    width: number,
    height: number,
    className?: string
}
)  {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
        <img
            src={defaultSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
        );
    }

    const t = resolvedTheme ?? theme; // resolvedTheme handles "system"
    const themedSrc = t === "light" ? lightSrc : darkSrc;

    return (
        <img
        src={themedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        />
    );
}