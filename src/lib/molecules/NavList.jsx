/* -------------------------------------------- */
/*                //* NavList.jsx               */
/* -------------------------------------------- */
import { NavItem } from '../atoms'
import { PropTypes } from 'prop-types';

function NavList({items}) {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {items.map((item, index) => (
        <NavItem key={index} label={item.label} href={item.href} />
      ))}
    </ul>
  )
}

export default NavList

NavList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
}