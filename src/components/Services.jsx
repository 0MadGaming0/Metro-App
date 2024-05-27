import React from 'react'
import Navbar from './Navbar'

const Services = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1><b><center>METRO SERVICES</center></b></h1>
                        <p>Whatever business you're in, METRO is here to partner with you in building on your success story. Find out how you can benefit from our account management, consultancy and loyalty services across customer segments</p>
                        <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/services/Services-Intro-Banner.jpg?rev=6834c67f981b4338b1d5a65d09953f55&w=1392&webp=1&hash=D1F20FB226A19B4A57E0AEFF94777ADD" class="img-fluid" alt="..." />
                    </div>

                </div>
                <br />
                <h3><b>Discover our services</b></h3><br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                            <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/services/key-account-managers.jpg?rev=92adeab636e1432fa31d14d0df14b260&w=440&webp=1&hash=40C3B9E5D74340552517ECDDF8BD17FA" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">METRO KEY ACCOUNT MANAGERS</h5>
                                <p class="card-text">At METRO, your business needs matter to us. We want to ensure you are always aware of our latest product selections and offers. We also want to partner with you in sourcing the goods you need most.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                            <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/services/Unique-METRO-Benefits-Hero-1392x464.jpg?rev=6dd37869d59d44098c7e1f02f4378d6c&w=1392&webp=1&hash=C134A31B0D9D6D5E19D0B750486B5AC4" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">UNIQUE METRO BENEFITS</h5>
                                    <p class="card-text">It includes widest assortment,Best market schemes,Dedicated customer relationship,Packing & delivery solution,Free and ample parking,Convenient timings,Helpful commodity experts,Special scheme booklets,Multiple payment options,Transparent and accurate billing and Easy replacement policy.</p>
                                </div>
                        </div>

                    </div>
                    <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card">
                            <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/services/Return-Policy-Content-Component-321X186.jpg?rev=e27a47b64525452ca0d3c514e133bb66&h=250&hash=7A7F18C8AB5ED5D714E87EB27953EDF4" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">METRO RETURNS POLICY</h5>
                                    <p class="card-text">It is a policy for returning items and appliances</p>
                                </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card">
                            <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/services/Build-Your-Brand-at-METRO-Intro-Banner.jpg?rev=e54247bb255c4892862fc5904f201211&w=1392&webp=1&hash=FEA5C7B04A0B8DDCEB2A29D92BBF11FF" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">BUILD YOUR BRAND</h5>
                                    <p class="card-text">METRO invites independent businesses to build their brand with us! METRO boasts of 85 lac + customer visits annually, with a registered base of 25 lac + customers which is growing with every passing day.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
