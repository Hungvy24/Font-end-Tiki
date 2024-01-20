import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
// import  data  from '../../db.json' assert {type: 'json'}
import Product from '../components/sanpham';


const HomePage = function () {
  return `
      ${HeaderComponent()}
      ${Product()}
      ${FooterComponent()}
    `
}

export default HomePage;