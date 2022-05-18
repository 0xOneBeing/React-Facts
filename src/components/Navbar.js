import logo from '../logo.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} />
            <h1 className='reactFacts'>ReactFacts</h1>
            <h1 className='reactCourse'>React Course - Project 1</h1>
        </nav>
    )
}
