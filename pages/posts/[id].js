import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getPostById, getPostIds } from '../../lib/post';

const Post = ({ post }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Lấy dữ liệu kiểu tĩnh, nhưng dữ liệu tĩnh nào thì còn phụ thuộc vào path params
export const getStaticPaths = async () => {
  const paths = await getPostIds();
  // console.log(paths);

  return {
    paths,
    fallback: false, // bất kỳ path nào k trả về bơi getStaticPaths sẽ tới trang 404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
