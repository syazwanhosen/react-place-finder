function List({ title, children }) {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      {children}
    </div>
  );
}

export default List;
