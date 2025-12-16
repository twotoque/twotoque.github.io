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
    <div className="w-full my-10" style={{ height }}>
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0 rounded-md"
        loading="lazy"
      />
    </div>
  );
}
