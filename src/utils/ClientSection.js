import React from 'react'
import HeadingTitle from './HeadingTitle'
import Slider from 'react-slick';
import client1 from '../assets/img/clients/client-1.png';
import client2 from '../assets/img/clients/client-2.png';
import client3 from '../assets/img/clients/client-3.png';
import client4 from '../assets/img/clients/client-4.png';
import client5 from '../assets/img/clients/client-5.png';
import client6 from '../assets/img/clients/client-6.png';
import client7 from '../assets/img/clients/client-7.png';
import client8 from '../assets/img/clients/client-8.png';

const ClientsData = [
  { id: 1, img: client1 },
  { id: 2, img: client2 },
  { id: 3, img: client3 },
  { id: 4, img: client4 },
  { id: 5, img: client5 },
  { id: 6, img: client6 },
  { id: 7, img: client7 },
  { id: 8, img: client8 },
]

const ClientCard = (props) => {

  return (
    <>
      <div class="client-logo">
        <img src={props.img} class="img-fluid" alt="" />
      </div>
    </>
  )
}


const ClientSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // dotsClass: "button__bar",
    // autoplay: true,
    // dotsClass: 'custom-dots',
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <section id="Hme-client">
      <div className="container">
        <HeadingTitle
          title={'Our Clients'}
          description={'Evaluating beneficiary payout Options and how the results of these choices best fit client needs.'}
          titleColor={'#fff'}
        />
        <Slider {...settings}>
          {ClientsData.map((data, index) => {
            return (
              <ClientCard key={index} img={data.img} />
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default ClientSection
