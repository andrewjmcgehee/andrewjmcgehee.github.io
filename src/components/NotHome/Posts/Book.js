const Book = ({title, author, classes}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{classes}</td>
    </tr>
  );
};

export default Book;