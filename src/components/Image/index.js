function Image({ src, alt, className = {} }) {
  return <img className={className} src={src} alt={alt} draggable="false" />;
}

export default Image;
