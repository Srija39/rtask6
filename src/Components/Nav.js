function Nav()
{
    return(
        <nav className="navbar">
            <a href="/main-page" className="navbar-brand badge bg-primary text-wrap">PORTFOLIO</a>
            <div className="navbar nav">
                <a href="/home-page" className="nav-link">Home</a>
                <a href="/about-me" className="nav-link">About</a>
                <a href="/my-projects" className="nav-link ">Projects</a>
                <a href="/contact" className="btn btn-outline-success">Contact</a>
            </div>
        </nav>

    )
    
}
export default Nav;