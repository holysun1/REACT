export default function FeedSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
      <div className="md:col-span-2 bg-gray-200 h-64 rounded-lg" />

      <div className="space-y-6">
        <div className="bg-gray-100 h-28 rounded-lg" />
        <div className="bg-gray-100 h-28 rounded-lg" />
      </div>
    </div>
  );
}
