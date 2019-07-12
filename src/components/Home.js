import React from 'react';
import './Home.css';
import Items from './Items';
import Banner from './Banner';
import Stock from './Stock';
import first from "./pictures/first.png";
import second from "./pictures/second.png";
import third from "./pictures/third.png";
import forth from "./pictures/forth.png";
import fifth from "./pictures/fifth.png";
import sixth from "./pictures/sixth.png";
import seventh from "./pictures/seventh.png";
import eight from "./pictures/eight.png";
import ninth from "./pictures/ninth.png";
import tenth from "./pictures/tenth.png";
import eleventh from "./pictures/eleventh.png";
import twelvth from "./pictures/twelvth.png";
import firstImage from "./pictures/firstImage.jpg";
import secondImage from "./pictures/secondImage.jpg";
import first1 from "./pictures/first-1.jpg";
import second1 from "./pictures/second-1.jpg";
import third1 from "./pictures/third-1.jpg";
import forth1 from "./pictures/forth-1.jpg";
import fifth1 from "./pictures/fifth-1.jpg";
import sixth1 from "./pictures/sixth-1.jpg";

class Home extends React.Component {
  render() {

    const cardArr = [
      {
        pics: first,
        title: 'Mobile Phones'
      },
      {
        pics: second,
        title: 'Microwave Ovens'
      }
      , {
        pics: third,
        title: 'Mobile Phones'
      },
      {
        pics: forth,
        title: 'Computing'
      },
      {
        pics: fifth,
        title: 'Freezers'
      },
      {
        pics: sixth,
        title: 'Stilettos'
      },
      {
        pics: seventh,
        title: 'Belts'
      },
      {
        pics: eight,
        title: 'Televisions'
      },
      {
        pics: ninth,
        title: 'Printers'
      },
      {
        pics: tenth,
        title: 'Speakers'
      },
      {
        pics: eleventh,
        title: "Women's Fashion"
      },
      {
        pics: twelvth,
        title: "Men's Fashion"
      }
    ]

    const bannerImage = [firstImage, secondImage]

    const stock = [
      {
        pics: first1,
        title: {
          name: "2019 fashion Spining S...",
          price: "N 68,199",
          oldPrice: "N 50,000",
          discount: '-15%'
        }
      },
      {
        pics: second1,
        title: {
          name: "Diamond engagement Ri...",
          price: "N 51,288",
          oldPrice: "N 56,840",
          discount: '-4%'
        }
      }
      , {
        pics: third1,
        title: {
          name: "Fashion Men's Flat Flip...",
          price: "N 2,199",
          oldPrice: "N 3,500",
          discount: '-5%'
        }
      },
      {
        pics: forth1,
        title: {
          name: "Quamer LED Double Mov...",
          price: "N 8,179",
          oldPrice: "N 10,000",
          discount: '-9%'
        }
      },
      {
        pics: fifth1,
        title: {
          name: "2019 fashion Spining S...",
          price: "N 28,199",
          oldPrice: "N 30,000",
          discount: '-5%'
        }
      },
      {
        pics: sixth1,
        title: {
          name: "Work Office Elegant Dres..",
          price: "N 18,199",
          oldPrice: "N 20,000",
          discount: '-5%'
        }
      }
    ]

    return (
      <div id='homeProps'>
        <Items pics={cardArr} />
        <Banner bannerImage={bannerImage}/>
        <Stock stock={stock} />
      </div>
    )
  }
}

export default Home