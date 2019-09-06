import Head from 'next/head';
import NavBar from '../components/NavBar';
import Style from '../components/Style';

const About = () => (
  <div>
    <Head>
      <title>Slicer Tech</title>
    </Head>
    <Style />
    <NavBar about="active" />
    <p>About Me</p>
  </div>
);

export default About;
