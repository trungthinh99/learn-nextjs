import Layout from '../components/Layout'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Layout><h1>My Next App Here - Hello World!</h1></Layout>
      <Link href='/posts'><Button variant="primary">Posts</Button></Link>
    </Container>
  )
}
