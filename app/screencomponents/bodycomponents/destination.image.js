import Image from "next/image";

export default function DestinationImage({ data }) {
  return (
    <div className="flex flex-col md:justify-start md:items-start items-center justify-center py-8 px-4 md:px-42">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Image principale */}
        <div className="flex-shrink-0 w-full lg:w-[70%]">
          <Image
            src={data?.image}
            alt="main-destination"
            width={800}
            height={800}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        {/* Thumbnails secondaires (desktop uniquement) */}
        {data?.thumbnail && data.thumbnail.length > 0 && (
          <div className="hidden lg:flex flex-col gap-6 overflow-y-auto max-h-[77vh]">
            {data.thumbnail.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                width={300}
                height={500}
                className="rounded-lg object-cover cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        )}
      </div>

      {/* Informations */}
      <div className="flex flex-col gap-6 py-8 w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center  gap-4">
          <div className="font-bold text-black text-3xl md:text-4xl">
            {data?.title}
          </div>
          <div className="rounded-lg bg-yellow-400 px-4 py-1 font-bold text-white w-fit">
            RN 7
          </div>
        </div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
