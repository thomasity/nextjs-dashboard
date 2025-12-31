export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[100vh] gap-6">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--subtle-font-color)] border-t-transparent" />

      <div className="w-full max-w-4xl px-6 space-y-4">
        <div className="h-6 w-1/3 rounded bg-[var(--bg-hover)] animate-pulse" />
        <div className="h-4 w-full rounded bg-[var(--bg-hover)] animate-pulse" />
        <div className="h-4 w-5/6 rounded bg-[var(--bg-hover)] animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-[var(--bg-hover)] animate-pulse" />
      </div>
    </div>
  );
}

