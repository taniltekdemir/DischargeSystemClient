import React, { Component } from 'react';
import {NavBar, Nav, NavItem} from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return (
    <div className='col-öd-6 offset-md-3'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">BORÇ ÖDEME SİSTEMİ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/userSave">Kullanıcı Ekle</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/debt">Borçları Takip Et</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/collection">Tahsilat Yap</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
    );
  }
}

export default Navbar;
