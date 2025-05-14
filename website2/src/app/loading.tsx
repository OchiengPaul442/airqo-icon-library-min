export default function Loading() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="h-8 w-48 bg-muted animate-pulse rounded" />
          <div className="h-6 w-96 bg-muted animate-pulse rounded" />
        </div>

        {/* Search bar skeleton */}
        <div className="h-10 w-full bg-muted animate-pulse rounded-md" />

        {/* Category tabs skeleton */}
        <div className="h-10 w-full bg-muted animate-pulse rounded-md" />

        {/* Grid skeleton */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-muted animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
