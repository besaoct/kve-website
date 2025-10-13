"use client";
import Image from "next/image";

interface ProductImagesProps {
  images: string[];
  selectedImage: string;
  onImageSelect: (image: string) => void;
}

export default function ProductImages({
  images,
  selectedImage,
  onImageSelect,
}: ProductImagesProps) {
  return (
    <div>
      <div className="border rounded-2xl p-4 shadow-sm bg-transparent">
        <Image
          src={selectedImage}
          alt="Product"
          width={400}
          height={400}
          className="mx-auto rounded-lg w-full aspect-square object-cover"
        />
      </div>
      <div className="flex gap-4 mt-4 justify-start flex-wrap">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onImageSelect(img)}
            className={`border-2 rounded-lg p-1 ${
              selectedImage === img ? "border-red-500" : "border-gray-300"
            }`}
          >
            <Image src={img} alt="thumb" width={80} height={80} />
          </button>
        ))}
      </div>
    </div>
  );
}
