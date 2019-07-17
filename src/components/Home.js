import React from 'react';
import './Home.css';
import Items from './Items';
import Banner from './Banner';
import Stock from './Stock';
import Header from './Header';
import Starter from './Starter';
import Details from './Details';
import Footer from './Footer';
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

import firstFirst from "./pictures/firstFirst.jpg"
import firstSecond from "./pictures/firstSecond.jpg"
import firstThird from "./pictures/firstThird.jpg"
import firstForth from "./pictures/firstForth.jpg"
import firstFifth from "./pictures/firstFifth.jpg"
import firstSixth from "./pictures/firstSixth.jpg"


import secondFirst from "./pictures/secondFirst.jpg"
import secondSecond from "./pictures/secondSecond.jpg"
import secondThird from "./pictures/secondThird.jpg"
import secondForth from "./pictures/firstForth.jpg"
import secondFifth from "./pictures/secondFifth.jpg"
import secondSixth from "./pictures/secondSixth.jpg"

import thirdFirst from "./pictures/thirdFirst.jpg"
import thirdSecond from "./pictures/thirdSecond.jpg"
import thirdThird from "./pictures/thirdThird.jpg"
import thirdForth from "./pictures/thirdForth.jpg"
import thirdFifth from "./pictures/thirdFifth.jpg"
import thirdSixth from "./pictures/thirdSixth.jpg"

import forthFirst from "./pictures/forthFirst.jpg"
import forthSecond from "./pictures/forthSecond.jpg"
import forthThird from "./pictures/forthThird.jpg"
import forthForth from "./pictures/forthForth.jpg"
import forthFifth from "./pictures/forthFifth.jpg"
import forthSixth from "./pictures/forthSixth.jpg"

import fifthFirst from "./pictures/fifthFirst.jpg"
import fifthSecond from "./pictures/fifthSecond.jpg"
import fifthThird from "./pictures/fifthThird.jpg"
import fifthForth from "./pictures/fifthForth.jpg"
import fifthFifth from "./pictures/fifthFifth.jpg"
import fifthSixth from "./pictures/fifthSixth.jpg"

import sixthFirst from "./pictures/sixthFirst.jpg"
import sixthSecond from "./pictures/sixthSecond.jpg"

import slideImage1 from "./pictures/slideImage1.jpg"
import slideImage2 from "./pictures/slideImage2.jpg"
import slideImage3 from "./pictures/slideImage3.jpg"
import slideImage4 from "./pictures/slideImage4.jpg"
import slideImage5 from "./pictures/slideImage5.jpg"
import slideImage6 from "./pictures/slideImage6.jpg"
import slideImage7 from "./pictures/slideImage7.jpg"
import slideImage8 from "./pictures/slideImage8.jpg"
// import slideImage9 from "./pictures/slideImage9.jpg"
// import slideImage1 from "./pictures/slideImage1.jpg"


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
    const bannerImage1 = [slideImage1, slideImage2]
    const bannerImage2 = [slideImage3, slideImage4]
    const bannerImage3 = [slideImage5, slideImage6]
    const bannerImage4 = [slideImage7, slideImage8]


    const stock = {
      color: 'grey',
      header: 'Deals on Fashion',
      stock: [
        {
          pics: first1,
          title: {
            name: "2019 fashion Spining S...",
            price: "N 68,199",
            oldPrice: "N 50,000",
            discount: '-15%',
          }
        },
        {
          pics: second1,
          title: {
            name: "Diamond engagement Ri...",
            price: "N 51,288",
            oldPrice: "N 56,840",
            discount: '-4%',

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
    }

    const stock1 = {
      color: 'yellow',
      header: 'Deals on Phones',
      stock: [
        {
          pics: firstFirst,
          title: {
            name: "S10 Lite 5.2 Inch 4GB...",
            price: "N 31,820",
            oldPrice: "N 44,590",
            discount: '-10%'
          }
        },
        {
          pics: firstSecond,
          title: {
            name: "Sparl 3 (KB7) 6.2-Inch H...",
            price: "N 30,890",
            oldPrice: "N 33,089",
            discount: '-3%'
          }
        }
        , {
          pics: firstThird,
          title: {
            name: "Note 5 Stylus (X605)6-In...",
            price: "N 52,390",
            oldPrice: "N 52,833",
            discount: '-4%'
          }
        },
        {
          pics: firstForth,
          title: {
            name: "Note Plus 5.2-Inch FHD(...",
            price: "N 27,990",
            oldPrice: "N 44,990",
            discount: '-8%'
          }
        },
        {
          pics: firstFifth,
          title: {
            name: "Galaxy A20 Dual Sim-6.4...",
            price: "N 52,000",
            oldPrice: "N 65,000",
            discount: '-4%'
          }
        },
        {
          pics: firstSixth,
          title: {
            name: "S11 Lite 5.7-Inch HD 18.9..",
            price: "N 36,200",
            oldPrice: "N 42,900",
            discount: '-7%'
          }
        }
      ]
    }


    const stock2 = {
      color: 'orange',
      header: 'Deals on Toiletries',
      header1: '| Up to 30% Off',
      stock: [
        {
          pics: secondFirst,
          title: {
            name: "Women Cotton Dry Roll 0...",
            price: "N 1,030",
            oldPrice: "N 1,500",
            discount: '-13%'
          }
        },
        {
          pics: secondSecond,
          title: {
            name: "48h Fresh Active Spray W...",
            price: "N 1,645",
            oldPrice: "",
            // discount: '-3%'
          }
        }
        , {
          pics: secondThird,
          title: {
            name: "Oud Touch EDP For Men...",
            price: "N 5,990",
            oldPrice: "N10,000",
            discount: '-4%'
          }
        },
        {
          pics: secondForth,
          title: {
            name: "Beauty EDP For Women...",
            price: "N 6,399",
            oldPrice: "N 10,300",
            discount: '-8%'
          }
        },
        {
          pics: secondFifth,
          title: {
            name: "Black EDP For Men - 100ml...",
            price: "N 4,500",
            oldPrice: "N 7,000",
            discount: '-6%'
          }
        },
        {
          pics: secondSixth,
          title: {
            name: "Total Defence 5 Invicible...",
            price: "N 1,800",
            oldPrice: "",
            // discount: '-4%'
          }
        }
      ]
    }

    const stock3 = {
      color: 'green',
      header1: '| Up to 40% Off',
      header: 'Deals on Televisions',
      stock: [
        {
          pics: thirdFirst,
          title: {
            name: "43 Inch Digital LED TV -H...",
            price: "N 60,000",
            oldPrice: "N 99,000",
            discount: '-11%'
          }
        },
        {
          pics: thirdSecond,
          title: {
            name: "55 Smart LED UHD TV -H...",
            price: "N 133,000",
            oldPrice: "N 189,900",
            discount: '-5%'
          }
        }
        , {
          pics: thirdThird,
          title: {
            name: "32 LED HD TV-Haier Ma...",
            price: "N 38,290",
            oldPrice: "N 60,000",
            discount: '-6%'
          }
        },
        {
          pics: thirdForth,
          title: {
            name: "32-Inch BFP-32LEW LED...",
            price: "N 38,390",
            oldPrice: "N 60,000",
            discount: '-7%'
          }
        },
        {
          pics: thirdFifth,
          title: {
            name: "55 Android 4K UHD Sma...",
            price: "N 139,990",
            oldPrice: "N 30,000",
            discount: '-4%'
          }
        },
        {
          pics: thirdSixth,
          title: {
            name: "32-Inch 32N2176H full H...",
            price: "N 48,199",
            oldPrice: "N 60,000",
            discount: '-5%'
          }
        }
      ]
    }

    const stock4 = {
      color: 'blue',
      header: 'Deals on Beverages',
      header1: '| Up to 30% Off',
      stock: [
        {
          pics: forthFirst,
          title: {
            name: "Milo Champion Tea 500g...",
            price: "N 1,240",
            oldPrice: "N 1,340",
            discount: '-12%'
          }
        },
        {
          pics: forthSecond,
          title: {
            name: "Milo Hot Coffee Beans...",
            price: "N 1,880",
            oldPrice: "N 2,500",
            discount: '-3%'
          }
        }
        , {
          pics: forthThird,
          title: {
            name: "Green Coffee Beans...",
            price: "N 6,180",
            oldPrice: "N 7,180",
            discount: '-4%'
          }
        },
        {
          pics: forthForth,
          title: {
            name: "Electric Kettle 1.7...",
            price: "N 3,600",
            oldPrice: "N 5,000",
            discount: '-8%'
          }
        },
        {
          pics: forthFifth,
          title: {
            name: "20-Litres Microwave MOWH...",
            price: "N 16,000",
            oldPrice: "N 22,000",
            discount: '-6%'
          }
        },
        {
          pics: forthSixth,
          title: {
            name: "1.5L Blender/Grinder wit..",
            price: "N 7,880",
            oldPrice: "N 8,758",
            discount: '-3%'
          }
        }
      ]
    }


    const stock5 = {
      color: 'purple',
      header: 'Deals on Women Accessories',
      header1: '| Up to 30% Off',
      stock: [
        {
          pics: fifthFirst,
          title: {
            name: "The OLLOSSAL Kajal (6 HR...",
            price: "N 1,360",
            oldPrice: "N 1,700",
            discount: '-14%'
          }
        },
        {
          pics: fifthSecond,
          title: {
            name: "Fit Me Matte+Porele...",
            price: "N 2,290",
            oldPrice: "N 2,860",
            discount: '-5%'
          }
        }
        , {
          pics: fifthThird,
          title: {
            name: "Color Sensational Vi...",
            price: "N 3,260",
            oldPrice: "N 4,070",
            discount: '-3%'
          }
        },
        {
          pics: fifthForth,
          title: {
            name: "Great Lash Mascara...",
            price: "N 1,220",
            oldPrice: "N 1,520",
            discount: '-6%'
          }
        },
        {
          pics: fifthFifth,
          title: {
            name: "COLLOSSAL KAJAL 12 HR...",
            price: "N 1,820",
            oldPrice: "N 2,270",
            discount: '-5%'
          }
        },
        {
          pics: fifthSixth,
          title: {
            name: "Work Office Elegant Dres..",
            price: "N 18,199",
            oldPrice: "N 20,000",
            discount: '-4%'
          }
        }
      ]
    }

    return ( <div id='homeProps' >
        <Header></Header>
        <Starter></Starter>
        <Items pics={cardArr} />
        <Stock stock={stock} />
        <Banner bannerImage={bannerImage} />
        <Stock stock={stock1} />
        <Banner bannerImage={bannerImage1} />
        <Stock stock={stock2} />
        <Banner bannerImage={bannerImage2} />
        <Stock stock={stock3} />
        <Banner bannerImage={bannerImage3} />
        <Stock stock={stock4} />
        <Banner bannerImage={bannerImage4} />
        <Stock stock={stock5} />
        <Details></Details>
        <Footer></Footer>
      </div >
    )
  }
}

export default Home
