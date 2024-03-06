export const LargeBookListItem = ({ book }) => {
  console.log("book :", book);
  const { name, price, title, pages } = book;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>Title:</p>
      <p>{title}</p>
      <p># of Pages :{pages}</p>
    </>
  );
};
