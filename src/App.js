import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Offcanvas, Button,Card } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaBehance, FaYoutube, FaLinkedin, FaMapMarkerAlt ,FaPhone, FaEnvelopeOpen} from "react-icons/fa";
import logoimg from './image/01.svg';
import sec2img from './image/bg-01.jpg';
import './App.css';
import './responsive.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const slider ={
    responsive:{
      0:{
        item:1,
      },
      600:{
        item:2,
      },
      1000:{
        item:3,
      }
    }
  }
  return (
    <div>
     
        <div className='banner_img'>
          {/* <img src={require(`./image/pizza-banner.webp`)}></img> */}
         
          <header>
          <Container>
            <Row className='py-lg-3 justify-content-between align-items-center'>
              <Col lg={2} xs={3}>
                <img src={logoimg}></img>
              </Col>
              <Col className='d-none d-lg-block  text-center justify-content-center ms-xxl-5 ps-xxl-1'>
                <Row className='menu py-xl-1 justify-content-center text-center ms-3 ms-xl-5'>
                  <Col lg={'auto'} className='px-xxl-4'><a>HOME<IoIosArrowDown></IoIosArrowDown></a></Col>
                  <Col lg={'auto'} className='px-xxl-4'><a>PAGES<IoIosArrowDown></IoIosArrowDown></a></Col>
                  <Col lg={'auto'} className='px-xxl-4'><a>MENUS<IoIosArrowDown></IoIosArrowDown></a></Col>
                  <Col lg={'auto'} className='px-xxl-4'><a>SHOP<IoIosArrowDown></IoIosArrowDown></a></Col>
                  <Col lg={'auto'} className='px-xxl-4'><a>BLOG<IoIosArrowDown></IoIosArrowDown></a></Col>
                </Row>
              </Col>
              <Col lg={4} md={5} sm={8} xs={5} className='d-flex text-end justify-content-end'>
                <div className='btn d-none d-sm-block'>FIND A TABLE</div>
                <div><Button onClick={handleShow} className="dots me-2">
                  <div className='d-flex mt-1'>
                    <span className='dot1'></span>   
                    <span className='dot2'></span>
                  </div>
                  <div className='d-flex'>
                    <span className='dot3'></span>
                    <span className='dot4'></span>
                  </div>
                </Button>

                  <Offcanvas show={show} placement={'end'} onHide={handleClose} className='' >
                    <Offcanvas.Header closeButton className='bg-black'>
                      <Offcanvas.Title></Offcanvas.Title>
                      <img src={logoimg}></img>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='bg-black h5 text-white'>
                      <div className='d-flex justify-content-center shape'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className='py-4'>
                        <div><p>18/B, New Ave 1000 New York</p></div>
                        <div><p>999 888 999 00</p></div>
                        <div><a>Office@webmailfree.com</a></div>
                      </div>
                      <div className='py-3'>
                        <p>Mon - Thu: 10 AM - 02 AM</p>
                        <p>Fri - Sun: 10 AM - 02 AM</p>
                      </div>
                      <div className='d-flex'>
                        <div><FaFacebookF></FaFacebookF></div>
                        <div><FaTwitter></FaTwitter></div>
                        <div><FaBehance></FaBehance></div>
                        <div><FaYoutube></FaYoutube></div>
                        <div><FaLinkedin></FaLinkedin></div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>
            </Row>
            <div className='text-center justify-content-center align-content-center banner_text position-absolute mx-5'>
              <p className='my-5'>WE SERVE FOOD, HARMONY, & LAUGHTER SINCE 1998</p>
              <div className='d-flex justify-content-center my-4 shape'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
              <h1 className="banner_title">Delicious Foods With Wonderful Eating</h1>
              <div className='d-flex button-banner text-center justify-content-center my-5 mb-5'>
                <div className='btn d-none d-sm-block  btn2'>FIND A TABLE</div>
                <div className='d-none d-sm-block w-20 btn2_1'>FIND A TABLE</div>
            </div>
            </div>
          </Container>
         
      </header>
      </div>
      <main>
        <div>
        <Row className='sec_2 gx-0 my-5 fs-5 fs-lg-2'>
            <Col lg={6} className='text-centet justify-content-center align-content-center p-0'>
            <Container>
              <Row className='justify-content-center text-center'>
                <Col xs={12} className='mt-xxl-5 mt-lg-2 mt-5 mb-4 mb-lg-2'><div><img src={require(`./image/title-shape.png`)}></img></div></Col>
                  <Col xs={12} className='mt-xxl-3 mt-lg-2 mt-3 mb-3 mb-lg-2'><div className='h1'>Find Food Lounge</div></Col>
                  <Col xs={12} className='mt-xxl-2 mt-2'>
                    <div className='d-flex justify-content-center shape mb-xxl-4 mb-lg-3 mb-4'>
                      <span></span>
                      <span></span>
                      <span></span>      
                    </div>
                  </Col>
                <Col xs={12}className='text-secondary mb-xxl-3 mb-lg-2 mb-3 s2_hover'>
                  <div className='mb-2 mb-lg-1'><p className='mb-0'>18/b,New Ave 1000 New Youk</p></div>
                  <div className='mb-2 mb-lg-1'><a>999 888 999 00</a></div>
                  <div className='mb-2 mb-lg-1'><a>office@webmailfree.com</a></div>
                </Col>
                <Col xs={12} className='text-secondary mb-3 mb-lg-2'>
                  <div><p className='mx-1 mb-0'>Mon - Thu: 10 AM - 02 AM</p></div>
                  <div><p className='mx-1 mb-0'>Fri - Sun: 10 Am -02 AM</p></div>
                </Col>
                <Col xs={12} className='text-secondary s2_hover  mb-lg-2 mb-5'>
                  <a ><FaFacebookF className='mx-2'></FaFacebookF></a>
                  <a ><FaTwitter className='mx-2'></FaTwitter></a>
                  <a ><FaBehance className='mx-2'></FaBehance></a>
                  <a ><FaYoutube className='mx-2'></FaYoutube></a>
                  <a ><FaLinkedin className='mx-2'></FaLinkedin></a>
                </Col>
              </Row>
              </Container>
            </Col>
            <Col lg={6} className='p-0'>
              <div className='sec2_img'><img src={sec2img}></img></div>
              
            </Col>
          </Row>
        </div>
        <div className='sec_3'>
          <Container>
            <Row className='text-center justify-content-center align-content-center text-white fs-5'>
            <Col xs={12} className='mt-xxl-5 mt-lg-2 mt-5 mb-4 mb-lg-2'><div><img src={require(`./image/title-shape.png`)}></img></div></Col>
            <Col xs={12} className='mt-xxl-3 mt-lg-2 mt-3 mb-3 mb-lg-2'><div className='h1'>Pizza For You Today</div></Col>
            <Col xs={12} className='text-center justify-content-center align-content-centet'> <div className='text-secondary-emphasis w-50 m-auto'><p>It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean in the big air.</p></div></Col>
            </Row>
            <Row className='mt-5'>
              <Col lg={6} className='pizza_img'>
                <div className='w-50'><img src={require(`./image/pizza-01.jpg`)} className='rounded-circle'></img></div>
              </Col>
              <Col lg={6} className='px-5 my-auto mx-auto'>
                  <div className='h1 text-white'>Hawaiian Pizza</div>
                  <div className='text-secondary-emphasis me-4 me-sm-5'><p>Tomato sauce, Burrata, Parmesan & mozzarella cheese,Fresh Arugula. Ricotta cheese and fresh basil pesto.</p></div>
                <a>
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Regular Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$12</a></div>
                    </Col>
                  </Row>
                </a>
                <a>
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Medium Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$14</a></div>
                    </Col>
                  </Row>
                </a>
                <a >
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Large Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$16</a></div>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className='pizza_img'>
                <div className='w-50'><img src={require(`./image/pizza-02.jpg`)} className='rounded-circle'></img></div>
              </Col>
              <Col lg={6} className='px-5 my-auto mx-auto order-lg-first'>
                  <div className='h1 text-white'>Margherita Pizza</div>
                  <div className='text-secondary-emphasis me-4 me-sm-5'><p>Tomato sauce, Burrata, Parmesan & mozzarella cheese,Fresh Arugula. Ricotta cheese and fresh basil pesto.</p></div>
                <a>
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Regular Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$12</a></div>
                    </Col>
                  </Row>
                </a>
                <a>
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Medium Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$14</a></div>
                    </Col>
                  </Row>
                </a>
                <a >
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Large Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$16</a></div>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col lg={6} className='pizza_img'>
                <div className='w-50'><img src={require(`./image/pizza-03.jpg`)} className='rounded-circle'></img></div>
              </Col>
              <Col lg={6} className='px-5 my-auto mx-auto'>
                  <div className='h1 text-white'>Veggie Pizza</div>
                  <div className='text-secondary-emphasis me-4 me-sm-5'><p>Tomato sauce, Burrata, Parmesan & mozzarella cheese,Fresh Arugula. Ricotta cheese and fresh basil pesto.</p></div>
                <a>
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Regular Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$12</a></div>
                    </Col>
                  </Row>
                </a>
                <a>
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Medium Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$14</a></div>
                    </Col>
                  </Row>
                </a>
                <a >
                  <Row className='mt-3'>
                    <Col xs={8} className='text-secondary-emphasis'>
                      <div className='h3'><a>Large Size</a></div>
                    </Col>
                    <Col xs={'auto'}>
                      <div  className='h6 sec_btn bg-white px-3 py-2 rounded-pill'><a>$16</a></div>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row className='text-center justify-content-center align-content-center text-white fs-5'>
            <Col xs={12} className='mt-xxl-5 mt-lg-2 mt-5 mb-4 mb-lg-2'><div><img src={require(`./image/title-shape.png`)}></img></div></Col>
            <Col xs={12} className='mt-xxl-3 mt-lg-2 mt-3 mb-3 mb-lg-2'><div className='h1'>Full Menu Items</div></Col>
            </Row>
            <Row  className='sm'>
              <Col lg={6} xs={12} className='pe-3 py-5'>
                <div className='h3 text-white'>Neapolitan Pizza</div>
                <Row className='mt-5 align-content-center text-xs-center'>
                  <Col lg={2} sm={3} xs={12}><div><img src={require(`./image/sm-12.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6} sm={6} xs={12} className='text-start'>
                    <div className='h3 fw-bold text-white'>Marinara</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Marinara sauce, Garlic, Olive oil, Basil, Oregano</p>  
                  </Col >
                  <Col lg={2} sm={3} xs={12} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-13.jpg`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Margherita</div>
                    <p className='text-secondary-emphasis text-break fs-5'>San Marzano tomato sauce, Mozzarella di bufala, Olive Oil</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <div className='h3 text-white py-5' >Italian Pizza</div>
                <Row className='mt-5 align-content-center'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-14.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6} xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Ai Broccoli</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Tomato sauce, Mozzarella, Salmon, Garlic</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-15.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Bianca</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Ricotta, Mozzarella, Garlic</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5 align-content-center'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-16.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6} xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Bolognese</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Bolognese sauce, Mozzarella</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-17.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Caprese</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Tomato sauce, Mozarella, Cherry tomatoes</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
              </Col>
              <Col lg={6} xs={12} className='ps-3 py-5'>
                <div className=' h3 text-white'>American Pizza</div>
                <Row className='mt-5 align-content-center'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-18.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6} xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>California Style</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Tomato sauce, Mozzarella, Salmon, Garlic</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-19.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Detroit Style</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Tomato sauce, Mozarella, Cherry tomatoes</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-20.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Buffalo Chicken</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Ricotta, Mozzarella, Garlic</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-12.webp`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Carolina Reaper</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Bolognese sauce, Mozzarella</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-21.jpg`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Cheeseburger Style</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Tomato sauce, Mozarella, Cherry tomatoes</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
                <Row className='mt-5'>
                  <Col lg={2} xs={3}><div><img src={require(`./image/sm-13.jpg`)} className='rounded-circle'></img></div></Col>
                  <Col lg={6}  xs={6} className='text-start'>
                    <div className='h3 fw-bold text-white'>Chicken Alfredo</div>
                    <p className='text-secondary-emphasis text-break fs-5'>Tomato sauce, Mozarella, Cherry tomatoes</p>  
                  </Col >
                  <Col lg={2} xs={3} className='text-white'><div>$12<span className='ms-4'>$14</span></div></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='sec_4'>
          <Container>
            <Row className='my-5 text-secondary text-center'>
              <Col lg={'auto'} md={3} sm={6} xs={12} className='m-auto'>
                <div><img src={require(`./image/10.png`)}></img></div>
                <div><p>AWards Won</p></div>
              </Col>
              <Col lg={'auto'} md={3} sm={6}  xs={12}className='m-auto'>
                <div><img src={require(`./image/5k.png`)}></img></div>
                <div><p>Daily Orders</p></div>
              </Col>
              <Col lg={'auto'} md={3} sm={6}  xs={12}className='m-auto'>
                <div><img src={require(`./image/99.png`)}></img></div>
                <div><p>Member</p></div>
              </Col>
              <Col lg={'auto'} md={6}  sm={6} xs={12} className='m-auto'>
                <div><img src={require(`./image/100.png`)}></img></div>
                <div><p>Menu & Dish</p></div>
              </Col>
              <Col lg={'auto'} md={6} xs={12}className='m-auto'>
                <div><img src={require(`./image/25.png`)}></img></div>
                <div><p>Speciallities</p></div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='bg_4'>
        <Container>
           <Row>
           <Col lg={6} className='d-none d-lg-block'></Col>
            <Col lg={6} xs={12} className='bg-black p-5'>
              <div className='text-white pb-3'>NUMBER OF GUEST<span>*</span> </div>
              <div><input type='number' className='w-100  bg-black border border-dark-subtle p-2'placeholder='Person'></input></div>
              <div className='text-white py-3'>SELECT DATE <span>*</span> </div>
              <div><input type='date' className='w-100 bg-black border border-dark-subtle p-2' placeholder='dd-mm-yyyy'></input></div>
              <div  className='text-white py-3'>SELECT TIME<span>*</span> </div>
              <div><input type='time' className='w-100 bg-black border border-dark-subtle p-2' placeholder='dd-mm-yyyy'></input></div>
              <div className=' btn3 mt-4 text-center'>BOOK RESERVATION</div>
            </Col>
        
           </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className='text-center justify-content-center align-content-center fs-5'>
            <Col xs={12} className='mt-xxl-5 mt-lg-2 mt-5 mb-4 mb-lg-2'><div><img src={require(`./image/title-shape.png`)}></img></div></Col>
            <Col xs={12} className='mt-xxl-3 mt-lg-2 mt-3 mb-3 mb-lg-2'><div className='h1'>Starters & Main Dishes</div></Col>
            <Col xs={12} className='text-center justify-content-center align-content-centet'> <div className='text-secondary w-50 m-auto'><p>It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean in the big air.</p></div></Col>
            </Row>
            <OwlCarousel className='owl-theme' margin={10} dots={false} {...slider}>
                <div class='item'>
                <Card >
                  <Card.Img className='position-relative' variant="top" src={require(`./image/blog-01.jpg`)} />
                  <Card.Body className='position-absolute p-0'>
                    <p className='text-white mx-5 p-2 text-center'>March 2,2023</p>
                    <Card.Title className='px-5'>FAST FOOD</Card.Title>
                    <Card.Text className='px-5 text-white'>
                      Love and food:It is all about dinenos restaurnt.
                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
                <div class='item'>
                <Card>
                  <Card.Img className='position-relative' variant="top" src={require(`./image/blog-02.jpg`)} />
                  <Card.Body className='position-absolute p-0'>
                    <p className='text-white mx-5 p-2 text-center'>March 2,2023</p>
                    <Card.Title className='px-5'>RICECURRY</Card.Title>
                    <Card.Text className='px-5 text-white'>
                      Food is the foundation of true happ
                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
                <div class='item'>
                <Card>
                  <Card.Img className='position-relative' variant="top" src={require(`./image/blog-03.jpg`)} />
                  <Card.Body className='position-absolute p-0'>
                    <p className='text-white mx-5 p-2 text-center'>March 2,2023</p>
                    <Card.Title className='px-5'>DINNER</Card.Title>
                    <Card.Text className='px-5 text-white'>
                     Enjoy an Exceptionnal journey of taste of joy.
                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
                <div class='item'>
                <Card>
                  <Card.Img className='position-relative' variant="top" src={require(`./image/blog-04.jpg`)} />
                  <Card.Body className='position-absolute p-0'>
                    <p className='text-white mx-5 p-2 text-center'>March 2,2023</p>
                    <Card.Title className='px-5'>RESTAURANt</Card.Title>
                    <Card.Text className='px-5 text-white'>
                      The Opportunity to Work abroad a prospect,one                    
                      </Card.Text>
                  </Card.Body>
                </Card>
                </div>
            </OwlCarousel>
          </Container>
        </div>
      </main>
      <footer>
        <div className='bg-black img-set p-4'>
         <div className='d-flex justify-content-between'>
            <div className=''><img src={require(`./image/shape1.webp`)}></img></div>
            <div className=''><img src={require(`./image/shape2.webp`)}></img></div>
          </div>
          <Container className=''>
            <div >
            <Row className='pb-5 mb-3 '>
              <Col lg={3}>
                <div><img src={logoimg} className='w-50'></img></div>
                <div><p>Be the first to know about new collections, special events, and what’s going on at Our Place. We are creative</p></div>
                <div>BOOK TABLE</div>
                <div><span>888 999 000 11</span></div>
              </Col>
              <Col lg={3}>
                <div className='d-flex justify-content-center shape mb-xxl-4 mb-lg-3 mb-4'>
                      <span></span>
                      <p>Get In Touch</p>
                </div>    
                <div><FaMapMarkerAlt></FaMapMarkerAlt><span>Silk St, Barbican, London E2Y, UK</span></div> 
                <div><FaPhone></FaPhone><a>+39-055-123456</a></div> 
                <div><FaEnvelopeOpen></FaEnvelopeOpen><a>booking@webexample.com</a></div>
                <div className='d-flex'>
                        <div><FaFacebookF className='mx-2'></FaFacebookF></div>
                        <div><FaTwitter className='mx-2'></FaTwitter></div>
                        <div><FaBehance className='mx-2'></FaBehance></div>
                        <div><FaYoutube className='mx-2'></FaYoutube></div>
                        <div><FaLinkedin className='mx-2'></FaLinkedin></div>
                      </div>
              </Col>
              <Col lg={2}>
                <div className='d-flex justify-content-center shape mb-xxl-4 mb-lg-3 mb-4'>
                      <span></span>
                      <p>Pages</p>
                </div> 
                <Row>
                  <Col lg={12}><a>About</a></Col>
                  <Col lg={12}><a>Our Menu</a></Col>
                  <Col lg={12}><a>OUr Chef</a></Col>
                  <Col lg={12}><a>Reservation</a></Col>
                  <Col lg={12}><a>Contact Us</a></Col>
                </Row>
              </Col>
              <Col lg={3}>
                <div>
                  <img src={require(`./image/sm-01.jpg`)} className='m-2'></img>
                  <img src={require(`./image/sm-02.jpg`)} className='m-2'></img>
                  <img src={require(`./image/sm-03.jpg`)} className='m-2'></img>

                </div>
                <div>
                  <img src={require(`./image/sm-04.jpg`)} className='m-2'></img>
                  <img src={require(`./image/sm-05.jpg`)} className='m-2'></img>
                  <img src={require(`./image/sm-06.jpg`)} className='m-2'></img>

                </div>
              </Col>
            </Row>
            <div className='border-top '>
              <div className='text-center py-4'>Copyright @2023 Dinenos by ReacThemes</div>
            </div>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
}
export default App;