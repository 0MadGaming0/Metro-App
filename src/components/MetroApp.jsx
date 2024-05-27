import React from 'react'
import Navbar from './Navbar'

const MetroApp = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://cdn.finshots.app/images/2024/01/india-metro.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://images.news18.com/ibnlive/uploads/2024/01/new-project-1-2024-01-04t111334.291-2024-01-091ba3037acc2493e20c714b8f8b9db2.jpg?impolicy=website&width=640&height=480" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://images.moneycontrol.com/static-mcnews/2024/05/20240503034809_Vande-Metro-.png?impolicy=website&width=1600&height=900" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img src="https://cdn.openart.ai/uploads/image_7Y9D0PWI_1716649777282_512.webp" class="img-fluid" alt="..." />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h1><b>Welcome To The Most Advanced Metro System</b></h1>
            <p>Our objective is to make the metro system establish in every cities, where the entire public transport: the metro, the buses, the boats, the auto-rickshaws and the taxies work together as a seameless integrated system; with a common timetable, common ticketing and centralised 'command and control'.</p>
          </div>
        </div>
        
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h1><b>Gallery</b></h1>
            <p>From the first-ever themed metro stations to the brightest coaches, we bring to you a system that is not just a means of transportation but an extended part of your everyday life.Get a glimpse of how creative and unique we are :</p>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM21nj-uE5jW1pYMpu04D5q0eebtYDI0b4Dg&s" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbhHv9jsjPKyhiTKgyzP8_n0pBME6Rm9nbg&s" class="d-block w-100" alt="..."/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img src="https://swarajya.gumlet.io/swarajya/2023-10/0264277b-bc49-47e5-8cd3-adaf16e38b29/d_metromapindia.png" class="img-fluid" alt="..."/>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h1><b>Connecting Lives</b></h1>
            <h3>Metro stations</h3>
            <p>Take a closer look at our station locations in the map to plan your trip and day with ease.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default MetroApp



