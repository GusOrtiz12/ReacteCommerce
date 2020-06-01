import React from 'react';
import './App.css'
import Products from './Products/Products.js'
import Form from './Contact/Contacto.js'
import SlideShow from './Home/Home.js'

class App extends React.Component {
  render() {
    if (window.location.pathname === '/products.html') {
      return (<Products/>);
    } else if (window.location.pathname === '/contact.html'){
      return(<Form/>);
    } else {
      console.log("this is the home page!");
    }
    return (
      <React.Fragment>
        <header className="header">
          <img className="logo" src="Fotos/FullColor_TransparentBg_1280x1024_72dpi.png" alt="logo" /><a href=""></a>
          <ul className="nav">
            <li><a href="#">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </header>
        <SlideShow/>
        <img className="silvia" src="Fotos/fcmediaq.jpg" alt="silvia" />
        <h1 className="homecars">Featured Items</h1>
        <div className="feature">
          <article className="child">
            <img className="child--image" src="Fotos/r33jdm.jpg" alt="child--image" />
            <h4> 1996 R33 GTR </h4>
            <p>RB26DETT (2.6L 6-cylinder turbo, 5-speed manual)</p>
            <h5>Offer: $42,000</h5>
          </article>
          <article className="child">
            <img className="child--image" src="Fotos/Rx7jdm.png" alt="child--image" />
            <h4> 1998 Rx-7 (Fd) </h4>
            <p>13B Rotary (1.3L twin-turbocharged, 5-speed manual)</p>
            <h5>Offer: $40,0000</h5>
          </article>
          <article className="child">
            <img className="child--image" src="Fotos/nsxjdm.jpg" alt="child--image" />
            <h4>1991 NSX </h4>
            <p>C32B (3.2L V-6, 5-speed manual)</p>
            <h5> Offer: $50,000</h5>
          </article>
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
    );
  }
}

export default App;
