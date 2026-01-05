import { useState } from "react";

type ImageOption = {
  label: string;
  src: string;
  alt?: string;
  sublabel?: string;
};

type ImageSwitchButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

function ImageSwitchButton({
  label,
  active = false,
  onClick
}: ImageSwitchButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        overflow-hidden inline-block border rounded-full px-4 py-2 text-lg
        transition hover:scale-105
        ${
          active
            ? "bg-black text-white font-bold border-black"
            : "border-black text-black hover:text-white hover:font-bold hover:bg-black"
        }
      `}
    >
      <p className="m-0">{label}</p>
    </button>
  );
}

type ImageGalleryProps = {
  title?: string;
  images: ImageOption[];
  className?: string;
};

export default function ImageGallery({
  title,
  images,
  className = "",
}: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={`w-full my-14 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl flex flex-col justify-center items-center">
        
        {title && (
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        )}

        {/* Image Display */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
          <img
            src={activeImage.src}
            alt={activeImage.alt || activeImage.sublabel}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

          <p className="text-center mt-2">{activeImage.sublabel}</p>

        {/* Image Switch Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {images.map((image) => (
            <ImageSwitchButton
              key={image.label}
              label={image.label}
              active={image.src === activeImage.src}
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
