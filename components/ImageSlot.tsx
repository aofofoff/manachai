// Photo placeholder. Shows the `placeholder` label until a real photo is
// supplied via `src` — drop one in later with:
//   <ImageSlot src="/assets/your-photo.jpg" alt="..." />
// Renders the <image-slot> element the design-system CSS already styles.
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
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} />
      ) : (
        <span className="is-ph">{placeholder}</span>
      )}
    </image-slot>
  );
}
