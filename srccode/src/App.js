import React,{useState,useEffect} from 'react'

function App() {
  const [width,setWidth]=useState(window.innerWidth)
  const resize=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",resize)
    return ()=>{
      window.removeEventListener("resize",resize)
    }
  })
  return (
    <div className="box">
      <div className="container">
        {(width<1024)?<img src={require("./assets/image-header-mobile.jpg")} alt='people' className='img'/>:<img src={require("./assets/image-header-desktop.jpg")} alt='people' className='img'/>}
        <div className="text">
        <h1 className='head'>Get <em>insights</em> that help your business grow.</h1>
        <p className='about'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency.</p>
        <div className="testimonials">
          <div className="testimonial1">
            <h2 className='no'>10k+</h2>
            <p className='name'>COMPANIES</p>
          </div>
          <div className="testimonial2">
            <h2 className='no'>314</h2>
            <p className='name'>TEMPLATES</p>
          </div>
          <div className="testimonial3">
            <h2 className='no'>12M+</h2>
            <p className='name'>QUERIES</p>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default App