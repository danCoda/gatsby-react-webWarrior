import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {props.children}
            </div>
            <footer>
                <p>Footer. Copyright 2021 Web Warrior</p>
            </footer>
        </div>
    )
}
