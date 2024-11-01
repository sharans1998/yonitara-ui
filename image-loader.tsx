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
  return `https://sharans1998.github.io/yonitara-ui/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default imageLoader;
