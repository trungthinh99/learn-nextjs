import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getBooks } from '../../lib/book';

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map(book => (
        <Card className="my-3 shadow" key={book.bookName}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Dữ liệu phụ thuộc vào mỗi request, nhưng mà vẫn tạo ra HTML tĩnh cho font-end, nên vẫn tốt cho SEO
export const getStaticProps = async () => {
  const books = await getBooks();
  console.log(books);
  return {
    props: {
      books,
    },
  };
};

export default Books;
