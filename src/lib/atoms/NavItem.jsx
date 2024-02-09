/* -------------------------------------------- */
/*              //* NavItem.jsx                 */
/* -------------------------------------------- */

import { PropTypes } from 'prop-types'
function NavItem({label, href}) {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={href || "#"}>{label}</a>
    </li>
  )
}

export default NavItem

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
}