import { Component } from 'react'
import { render } from "react-dom"

class Layout extends Component {
    render() {
        return (
            <>
                <NavBar />
                {this.children}
            </>
        )
    }
}

export default Layout;