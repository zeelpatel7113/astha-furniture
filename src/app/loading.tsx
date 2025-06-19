import { LoadingSpinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  );
}
