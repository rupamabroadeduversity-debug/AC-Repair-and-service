export default function Loading() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center py-24">
      <div className="glass-panel flex items-center gap-4 rounded-full px-6 py-4 text-sm font-medium text-slate-700">
        <span className="h-3 w-3 animate-pulse rounded-full bg-sky-500" />
        Loading premium cooling experience...
      </div>
    </div>
  );
}
