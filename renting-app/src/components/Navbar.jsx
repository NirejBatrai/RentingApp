import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Bike Renting
      </Link>
      <ul>
        <li>
          <CustomLink to='/'>Home</CustomLink>
        </li>
        <li>
          <CustomLink to='/pricing'>Pricing</CustomLink>
        </li>
        <li>
          <CustomLink to='/about'>About</CustomLink>
        </li>
        <li>
          <CustomLink to='/login'>Login</CustomLink>
        </li>
        <li>
          <CustomLink to='/contact'>Contact</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolevedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolevedPath.pathname, end: true });
  return (
    <Link to={to} className={isActive ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}
