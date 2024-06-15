const sizeGenerator = (sizes) => {
  const sizeArray = sizes.split("|").map((size) => size.trim().toUpperCase());

  return sizeArray.map((size, index) => <a key={index}>{size}</a>);
};

export default sizeGenerator;
