import { Button } from "@/components/ui/button";
export default function BookDialog({ Package }) {
  return (
    <>
      <div className="space-y-4">
        <span className="text-center text-lg md:text-xl text-black font-bold">
          {Package.price} $
        </span>

        <div className="bg-gray-50 rounded-lg p-4 flex flex-col">
          <span className="text-md font-semibold mb-2 text-gray-700">
            Included:
          </span>
          <span className="list-disc pl-5 space-y-1 text-sm text-gray-600 whitespace-pre-line">
            {Package.included}
          </span>
          <span className="text-md font-semibold mb-2 text-gray-700 whitespace-pre-line">
            Not Included:
          </span>
          <span className="list-disc pl-5 space-y-1 text-sm text-gray-600 whitespace-pre-line">
            {Package.notIncluded}
          </span>
        </div>

        <Button className="w-full bg-yellow-400 cursor-pointer text-white font-semibold">
          Send Booking Request
        </Button>
      </div>
    </>
  );
}
