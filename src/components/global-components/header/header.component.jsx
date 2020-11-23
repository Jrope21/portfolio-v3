import React from 'react'
import './header.styles.scss'

export default function Header() {
    return (
        <header className="header__module">
            <nav>
                <button className="mobile-menu-btn">
                    Menu
                    <span className="active-section">Home</span>
                </button>
                <ul className="navigation">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Experience</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
