import '../../public/css/header.css';

function Header() {
    return (
        <div className='header'>
            <nav style={{backgroundColor : '#6E2E9C', maxHeight:'80px'}} id="navbar" className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="../public/images/logo.png" alt="" style={{width:'100px', height:'40px'}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                    <li className="nav-item me-3">
                    <a className="nav-link active" aria-current="page" href="#">Offer</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Categories</a>
                    </li>
                    <li className="nav-item dropdown me-3">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Characters
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Offer</a></li>
                        <li><a className="dropdown-item" href="#">Categories</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Characters</a></li>
                    </ul>
                    </li>
                    
                    
                </ul>
                <form className="d-flex" role="search">
                    <input id="searchBar" className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />
                </form>

                <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">sign in</a>
                    </li>
                    
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#"><img src="../images/mood.png" alt="" style={{width:'20px'}} /></a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#"><img src="../images/favorite.png" alt="" style={{width:'20px'}} /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="../images/cart.png" alt="" style={{width:'20px'}} /></a>
                    </li>

                </ul>


                </div>
            </div>
            </nav>

        </div>
    )
}
export default Header