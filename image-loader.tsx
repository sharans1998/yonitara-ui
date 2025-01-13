const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality: string;
}) => {
  console.log('src', src);
  return `https://yonitara.com/${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
