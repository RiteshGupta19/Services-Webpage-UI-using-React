import './App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesRight,faWind,faFileWord,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import data from './carddata/cdata.jsx'
import lowercard from './carddata/lowercarddata.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from './carddata/slider.jsx'
  

function App(){
  return (
    <>
      <div className='w-100 '>
        <div className='w-100 imgdiv'>
          <div className='image text-center text-white'>
            <div className='imgcont'>
              <h1 className='fw-bold  display-4 title'>Services</h1>
              <h6>Home 8 <FontAwesomeIcon className='mx-1 righticon' icon={faAnglesRight} /> Services</h6>
            </div>
          </div>
        </div>
        <div className='container text-center p-0'>
          <div className='d-flex justify-content-center mt-5 pt-5'>
            <FontAwesomeIcon className='fs-3 me-3 left' icon={faWind} flip="horizontal" />
            <h4 className='text-primary'>Our Services</h4>
            <FontAwesomeIcon className='fs-3 ms-3 right' icon={faWind} />
          </div>

          <div className='display-6 fw-bolder mt-2 '>We Provided the necessary <br/> services to you</div>
          <div className='mt-3  row row-cols-lg-3 row-cols-md-2 row-cols-1  container'>
                <Cards/>
          </div>
        </div>

        <div className='slider row row-cols-md-2 row-cols-1 mt-5 m-0 p-0 ' >
          <div className='col '>

          
             
          <Sliderr/>


          </div>
          <div className='col-lg-5 p-md-5 p-3'>
          <div className='d-flex  mt-4 mb-1 '>
            <h4 className='text-primary '>Who We Are</h4>
            <FontAwesomeIcon className='fs-3 ms-3 right' icon={faWind} />
          </div>
          <h1 className='fw-bold mb-4 pb-2'> Discover Your Path to <br/><span className='text-promary'>Excellent</span>With <br/>CogniSoft IT Services</h1>
          <p className='fs-5 mb-4'>We provide the full spectrum of IT services and consulting for various industries.</p>
          <div className='row row-cols-sm-2 m-0 p-0'>
            <Lowercard/>
          </div>
          <button className='about mt-4 py-3 px-4 fw-bold'>About Us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function Cards(){
  return(
    <>    {data.map((item, index) => (
      <div className='col p-md-4 p-1  text-start ' key={index}>
        <div class='cardd  text-center rounded-3' key={index}>
          <img src={item.img} className="rounded-circle profile  mb-4 mt-3" alt="..." />
          <FontAwesomeIcon icon={faFileWord} className='profileicons p-3 rounded-circle'/>
          <div className='bg-danger shadow'></div>
          <div class="cardbody text-start w-100 p-md-4 p-3">
            
           <h4 class="card-title  mb-3 fw-bold">{item.title}</h4>
           <p class="card-text   fs-5">{item.body}</p>
           <a href="#" class="btn  readmorebtn">Read More +</a>
          </div>
        </div>
    </div>
      ))}
      </>
  );
}
function Lowercard(){
  return(
    <>
    {lowercard.map((value,i)=>(

      <div className='col p-3 text-start m-0 l-card' key={i}>

      <FontAwesomeIcon Icon icon={faFileWord} className='my-2 lowericon p-3 fs-2 rounded-circle'/>
      <h2 className='mb-4'>{value.title}</h2>
      <p>{value.body}</p>

    </div>
    ))}
    </>
  )
}

function Sliderr(){

  
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,

    };

  return(
    <>
            <Slider {...settings} className=' ms-3 sliderimg'>
              {slides.map((slide) => (
                <div key={slide.id} className='m-0 p-0'>
                  <img src={slide.image} className='img-fluid  vh-100 ' alt={slide.title} />
                  <div className='slidercont text-white ms-md-5 ms-3 m-0 p-0'> 
                      <div className='d-flex mb-4'>
                        <h5 className='text-primary'>Case Studies</h5>
                        <FontAwesomeIcon className='fs-3 ms-3 right text-black' icon={faWind} />
                      </div>
                      <h3 className=' fw-bold mb-3'>{slide.title}</h3>
                      <h6>{slide.description}</h6>
                      <FontAwesomeIcon icon={faArrowRight} className='p-3 bg-primary rounded-circle mt-4 fs-4'/>
                  </div>
                  <div className='shado'> </div>
                </div>
              ))}
            </Slider>
            </>     
  )
}