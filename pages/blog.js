import Head from 'next/head';
import NavBar from '../components/NavBar';
import Style from '../components/Style';

const Blog = () => (
  <div>
    <Head>
      <title>Slicer Tech</title>
    </Head>
    <Style />
    <NavBar blog="active" />
    <p>This is the blog</p>
  </div>
);

export default Blog;
