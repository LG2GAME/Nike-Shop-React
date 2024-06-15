function isAvailable(available) {
  if (available === "InStock") {
    return (
      <p className="h6" style={{ color: `var(--green)` }}>
        Dostępny
      </p>
    );
  } else if (available === "OutOfStock") {
    return (
      <p className="h6" style={{ color: `var(--dark-red)` }}>
        Wyprzedano
      </p>
    );
  } else {
    return (
      <p className="h6" style={{ color: `var(--soft-gray)` }}>
        Nieznany status
      </p>
    );
  }
}

export default isAvailable;
