export default function Loading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-10 md:gap-12">
        {/* Header skeleton */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="h-12 w-64 rounded bg-muted animate-pulse" />
            <div className="h-6 w-96 rounded bg-muted animate-pulse" />
          </div>
        </div>

        <div className="space-y-16">
          {/* Installation section skeleton */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-muted animate-pulse" />
              <div className="h-8 w-32 rounded bg-muted animate-pulse" />
            </div>
            <div className="h-5 w-full max-w-lg rounded bg-muted animate-pulse" />
            <div className="rounded-lg border">
              <div className="flex border-b">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-r px-4 py-2 last:border-r-0"
                  >
                    <div className="h-5 rounded bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
              <div className="space-y-4 p-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="rounded-md bg-muted/20 p-4">
                    <div className="h-20 rounded bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Usage section skeleton */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-muted animate-pulse" />
              <div className="h-8 w-24 rounded bg-muted animate-pulse" />
            </div>
            <div className="h-5 w-full max-w-lg rounded bg-muted animate-pulse" />
            <div className="rounded-lg border">
              <div className="flex border-b">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-r px-4 py-2 last:border-r-0"
                  >
                    <div className="h-5 rounded bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <div className="h-48 rounded bg-muted animate-pulse" />
              </div>
            </div>
          </div>

          {/* Props section skeleton */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-muted animate-pulse" />
              <div className="h-8 w-20 rounded bg-muted animate-pulse" />
            </div>
            <div className="h-5 w-full max-w-lg rounded bg-muted animate-pulse" />
            <div className="overflow-x-auto rounded-lg border">
              <div className="h-80 rounded bg-muted animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
