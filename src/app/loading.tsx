export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="glass-card glass-border p-6 sm:p-8">
        <div className="h-4 w-40 skeleton mb-4" />
        <div className="h-8 w-72 skeleton mb-3" />
        <div className="h-5 w-full max-w-3xl skeleton mb-2" />
        <div className="h-5 w-11/12 max-w-2xl skeleton" />
        <div className="mt-6 flex gap-3">
          <div className="h-9 w-28 skeleton rounded-md" />
          <div className="h-9 w-28 skeleton rounded-md" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass-card glass-border p-5">
            <div className="h-5 w-32 skeleton mb-3" />
            <div className="h-4 w-full skeleton mb-2" />
            <div className="h-4 w-10/12 skeleton mb-2" />
            <div className="h-4 w-8/12 skeleton" />
          </div>
        ))}
      </div>
    </div>
  );
}


