import React from 'react'
import './Toolbar.css'
import Logo from '../../../assets/ic_logo.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import GetAppButton from '../../../components/GetAppButton/GetAppButton'
import { Link } from 'react-scroll'

const Toolbar = (props) => (
  <div className="toolbar">
    <div className="toolbar_logo">
      <a href="/">
        <img src={Logo} alt="" />
      </a>
    </div>
    <div className="spacer" />
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandle} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          {props.navItems.map((item) => (
            <li key={item.id}>
              {item.to && (
                <Link to={item.to.slice(1)} smooth duration={500}>
                  {item.value}
                </Link>
              )}

              {item.href && <a href={item.href}>{item.value}</a>}
            </li>
          ))}
          <li>
            <GetAppButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Toolbar
