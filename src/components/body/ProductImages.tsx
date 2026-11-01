// "use client";

// import { useState } from "react";
// import Image from "next/image";

// interface Props {
//   images: string[];
//   title: string;
// }

// export default function ProductImages({ images, title }: Props) {

//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   return (
//     <div className="flex flex-col gap-4 sm:flex-row">

//       {/* Thumbnail Images */}
//       <div className="flex gap-3 sm:flex-col">

//         {images.slice(0, 3).map((image, index) => (

//           <button
//             key={index}
//             onClick={() => setSelectedImage(image)}
//             className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border p-2 transition ${
//               selectedImage === image
//                 ? "border-blue-500"
//                 : "border-gray-200 hover:border-blue-400"
//             }`}
//           >

//             <Image
//               src={image}
//               alt={`${title} ${index + 1}`}
//               fill
//               sizes="64px"
//               className="object-contain"
//             />

//           </button>

//         ))}

//       </div>

//       {/* Main Image */}
//       <div className="relative h-[350px] w-full overflow-hidden rounded-md bg-gray-100 sm:h-[410px]">

//         <Image
//           src={selectedImage}
//           alt={title}
//           fill
//           priority
//           sizes="(max-width: 640px) 100vw, 50vw"
//           className="object-contain p-5 transition-transform duration-300 hover:scale-105"
//         />

//       </div>

//     </div>
//   );
// }






"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function ProductImages({ images, title }: Props) {

  const galleryImages = images.slice(0, 3);

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      {/* Thumbnail Images */}
      <div className="flex gap-3 sm:flex-col">

        {galleryImages.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border p-2 transition ${
              selectedImage === image
                ? "border-blue-500"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              sizes="64px"
              className="object-contain"
            />

          </button>

        ))}

      </div>

      {/* Main Image */}
      <div className="relative h-[350px] w-full overflow-hidden rounded-md bg-gray-100 sm:h-[410px]">

        {selectedImage && (
          <Image
            src={selectedImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-contain p-5 transition-transform duration-300 hover:scale-105"
          />
        )}

      </div>

    </div>
  );
}