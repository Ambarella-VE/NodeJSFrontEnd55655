/* -------------------------------------------- */
/*              //* NavDropdown.jsx             */
/* -------------------------------------------- */

import { PropTypes } from 'prop-types'
function NavDropdown({label, dropItems}) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {label}
      </a>
      <ul className="dropdown-menu">
        {
          dropItems.map((item, index) => 
            <li key={index}><a className="dropdown-item" href="#">{item.label}</a></li>
          )
        }
      </ul>
    </li>
  )
}

export default NavDropdown;

NavDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    dropItems: PropTypes.arrayOf(Object).isRequired,
}