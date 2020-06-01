import React from 'react';
const productos = require ('./productos.json'); 

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <header className="header">
                        <img className="logo" src="Fotos/FullColor_TransparentBg_1280x1024_72dpi.png" alt="logo" /><a href=""></a>
                        <ul className="nav">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </header>
                    <h1 className="JDM">Japanese Imports</h1>
                    <div className="parent">
                        {productos.productos.map((item, key) => {
                            return (
                                <article className="child">
                                    <img className="child--image" src={item.image}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                </article>
                            )})
                        }
                    </div>
                    <footer className="footer1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <ul className="ul-2">
            <li><a className="facebook" href="http://facebook.com/" target="_blank"><i className="fa fa-fw fa-2x fa-inverse fa-facebook"></i></a></li>
            <li><a className="twitter" href="http://twitter.com/"><i className="fa fa-fw fa-2x fa-inverse fa-twitter"></i></a></li>
            <li><a className="instagram" href="https://www.instagram.com/"><i className="fa fa-fw fa-2x fa-inverse fa-instagram"></i></a></li>
          </ul>
          <a className="a" href="#" id="footer">
            <h3> JDM</h3>
          </a>
          <h3> &copy;2020 | Gustavo A. Ortiz</h3>
        </footer>
            </React.Fragment>
        )
    }
}

export default Products;