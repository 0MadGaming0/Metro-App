import React from 'react'
import Navbar from './Navbar'

const FAQ = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><h1><b><u>FAQ</u></b></h1></center>
                        <h3><b>- FAQ Tickets & Fare</b></h3>
                        <br />
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <b>1.  Can I purchase ticket from paid area of a station?</b>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        No.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <b>2. Can I purchase tickets online?</b>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes <br />

                                        <b>For DMRC Lines</b>, Mobile QR Ticket can be purchased online through DMRC Momentum 2.0, PayTM, One Delhi, Tummoc apps and WhatsApp chatbot.

                                        <b>For Airport Express Line</b>, Mobile QR Ticket can be purchased online through DMRC Momentum 2.0, Paytm, PhonePe apps and WhatsApp chatbot.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <b>3. Can I extend my journey beyond the original destination?</b>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes, if you are a Single Journey Ticket holder, the additional fare for extended journey (fare for new destination minus fare for previous destination) has to be paid at customer care centre of destination station before making an exit from AFC gates (automatic fare collection). After paying the additional fare, a new Paper QR ticket will be issued for exit purpose. <br />

                                        If you are a Delhi Metro Smart card /NCMC holder, the applicable fare for journey will be automatically deducted at the time of exit.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <b>4. Can I get refund of Single Journey Ticket?</b>
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <b>IN DMRC:</b><br />

                                        * Unused QR Based Paper Ticket is refundable at full amount within 60 minutes of purchase of Ticket from purchase station only. <br />
                                        * Unused Mobile QR Ticket is refundable at full amount within 60 minutes of purchase of Ticket. <br />
                                        * Partially used Single Journey Ticket cannot be refunded. <br />
                                        * In cases of disruption in services (unusual delay in train running due to incident/accident), ticket can be refunded. <br />
                                        <b>In Airport Express Line:</b><br />

                                        * Refund of Single Journey Ticket is not permitted. <br />
                                        * Partially used Single Journey Ticket cannot be refunded. <br />
                                        * In cases of disruption in services (unubsual delay in train running due to incident/accident), ticket can be refunded. <br />
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <b>5. What should I do if I lose my ticket during journey?</b>
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        You may approach Customer Care Centre of your destination station. You will be treated without ticket & shall be charged Maximum Fare of System + Rs.50/-(Penalty). <br />

                                        In case later on Ticket is recovered, no refund is permissible.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h3><b>FAQs regarding the National Common Mobility Card (NCMC) issued by Paytm Payments Bank in view of RBI restrictions</b></h3>
                        <br />
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                        <b>6. Can I transfer the balance from my old NCMC card issued by Paytm payments bank to a new card obtained from another bank?</b>
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Balance transfer feature is not available in the NCMC card. Therefore, you may use the card upto the available balance. In case you have some more balance which you have not been able to use, you may request Paytm Payments Bank for a refund or card closure.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <b>7. Will I receive a refund for any remaining balance on my NCMC Paytm account after it is closed?</b>
                                    </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes, Applicable refund will be processed by the bank to the customer's wallet .
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        <b>8. If my card is physically damaged or unreadable, what amount would I receive as refund or settlement?</b>
                                    </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        In case customer have a physically damaged or unreadable NCMC , customer may request Paytm Payments Bank for a refund or card closure. Customer will receive applicable refund as per the transit wallet balance.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h3><b>-FAQ Helpline</b></h3>
                        <br />
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                        <b>1. Where can I get information about delay or failures in train services?</b>
                                    </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Contact 24x7 DMRC helpline number 155370 or download our official APP from Play/APP Store or follow us of social media @officialdmrc or stay in touch on our official website.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        <b>2. How can I get the information regarding nearest station for famous places landmarks like hostels, Govt. Buildings, Historical places etc?</b>
                                    </button>
                                </h2>
                                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       1. You may contact DMRC 24x7 DMRC helpline number. <br />
                                       2. You may visit Tour Guide section of Delhi Metro website <br />
                                       3. Book named "Delhi by Metro" is also recommended, which is available at Patel Chowk metro station on MRP of Rs. 399/-. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
