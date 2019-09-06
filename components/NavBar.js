/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';

const NavBar = props => (
  <nav>
    <ul className="left">
      <li className="logo">
        <Link href="#">
          <a className="active">
            <h1>Slicer Tech</h1>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={props.home}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className={props.blog}>Blog</a>
        </Link>
      </li>
    </ul>
    <ul className="right">
      <li>
        <Link href="about">
          <a className={props.about}>About</a>
        </Link>
      </li>
      {/*
      <li className="dropdown">
        <Link href="/login">
          <a>Account</a>
        </Link>
        <ul className="dropdown-menu">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </li>
        */}
    </ul>
  </nav>
);

export default NavBar;
