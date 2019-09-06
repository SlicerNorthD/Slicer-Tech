import Head from 'next/head';
import NavBar from '../components/NavBar';
import Style from '../components/Style';

const Index = () => (
  <div>
    <Head>
      <title>Slicer Tech</title>
    </Head>
    <Style />
    <NavBar home="active" />
    <p>Hello Next.js</p>
  </div>
);

export default Index;
