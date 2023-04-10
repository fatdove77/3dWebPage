import React from 'react'
import style from './style.module.scss'
import logo from '../../../../img/logo.png'
function NavBar() {
  return (
    <div className={style.N_container} >
      <div className={style.box}>
        <div className={style.links}>
          <img src={logo}></img>
        </div>
        <div className={style.icons}></div>
      </div>
    </div>
  )
}

export default NavBar