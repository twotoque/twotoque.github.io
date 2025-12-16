type PlotEmbedProps = {
  src: string;
  title: string;
  height?: number;
};

export default function PlotEmbed({
  src,
  title,
  height = 600
}: PlotEmbedProps) {
  return (
    <div className="w-full flex justify-center" style={{ height }}>
      <iframe
        src={src}
        title={title}
        className="block w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}