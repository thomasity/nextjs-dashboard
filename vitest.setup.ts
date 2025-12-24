import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      prefetch: vi.fn(),
      refresh: vi.fn(),
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));
// Mock next/link -> regular <a>
vi.mock("next/link", () => ({
  default: (props: any) => React.createElement("a", props, props.children),
}));

// Mock next/image -> regular <img>
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", { ...props, alt: props.alt }),
}));

// If you ever use next/font/*, these keep tests from exploding
vi.mock("next/font/local", () => ({
  default: (options: any) => ({
    className: "",
    style: {},
    variable: options?.variable ?? "",
  }),
}));

vi.mock("next/font/google", () => ({
  // add your fonts here as needed
  Inter: () => ({ className: "" }),
  Roboto: () => ({ className: "" }),
}));
