import { Link } from "react-router-dom";


function Nav(props) {
  return (
    <nav>
      <ul className="nav-list">
        <li className="list-item">
          <Link to="/">{ props.home }</Link>
        </li>
        <li className="list-item">
          <Link to="/products">{ props.products }</Link>
        </li>
        <li className="list-item">
          <Link to="/services">{ props.services }</Link>
        </li>
        <li className="list-item">
          <Link to="/about">{ props.about }</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
