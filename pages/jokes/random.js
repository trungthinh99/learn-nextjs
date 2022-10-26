import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getRandomJoke } from '../../lib/joke';

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Random Joke</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Dữ liệu phụ thuộc vào mỗi request, nhưng mà vẫn tạo ra HTML tĩnh cho font-end, nên vẫn tốt cho SEO
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  return {
    props: {
      joke,
    },
  };
};

export default Random;
