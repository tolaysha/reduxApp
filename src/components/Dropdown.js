import React from 'react';
import './dropdown.css'

class SettingsMenu extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
    this.logout = this.logout.bind(this);
  }

  deleteAccount(e) {
    console.log("Deleting Account")
  }

  logout(e) {
    console.log("Logging out")
  }

  render() {
    return (
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>
            <a href="#">Products &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Monitors</a></li>
                <li><a href="#">Printers</a></li>
            </ul>
        </li>
        <li><a href="#">Contact</a></li>
        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </ul>
    );
  }
}

export default SettingsMenu;