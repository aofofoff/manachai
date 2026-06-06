import Image from "next/image";

export function ImageSlot({
  placeholder,
  src,
  alt = "",
}: {
  placeholder?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <image-slot>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span className="is-ph">{placeholder}</span>
      )}
    </image-slot>
  );
}
