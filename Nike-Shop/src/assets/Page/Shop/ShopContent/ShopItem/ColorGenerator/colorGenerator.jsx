const renderColorShape = (colors) => {
  if (!colors) return null;

  const colorArray = colors
    .split("/")
    .map((color) => color.trim().toLowerCase().replace(/\s+/g, "-"));

  return colorArray.map((color, index) => (
    <div
      key={index}
      className="color"
      style={{
        backgroundColor: `var(--${color})`,
        border: color === "white" ? "1px solid black" : "none",
      }}
    ></div>
  ));
};

export default renderColorShape;
