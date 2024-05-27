import React from 'react'
import Navbar from './Navbar'

const Contacts = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sl no.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                  <th scope="col">Phone no.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>mark123@gmail.com</td>
                  <td>DMRC 24x7 Helpline</td>
                  <td>DMRC Missing, Separated, Women, Child and Specially Abled Commuters Helpline</td>
                  <td>9544684751</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jack</td>
                  <td>jack234@gmail.com</td>
                  <td>CISF unit DMRC 24x7 Helpline</td>
                  <td>Helping people</td>
                  <td>2546897135</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Brent</td>
                  <td>brent6@gmail.com</td>
                  <td>Delhi Police Control Room</td>
                  <td>Search and rescue</td>
                  <td>9556987451</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mike</td>
                  <td>mike62@gmail.com</td>
                  <td>Delhi Police Tourist Helpline</td>
                  <td>Guiding tourists</td>
                  <td>9544685478</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Joseph</td>
                  <td>joseph221@gmail.com</td>
                  <td>Delhi Police unit Delhi Metro</td>
                  <td>Missing things</td>
                  <td>9874694751</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>john</td>
                  <td>john467@gmail.com</td>
                  <td>Women Helpline</td>
                  <td>Missing things and safety in-charge</td>
                  <td>0149565951</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Jordan</td>
                  <td>jordan@gmail.com</td>
                  <td>Senior Citizen Helpline</td>
                  <td>Helping senior citizen</td>
                  <td>2547684751</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Stead</td>
                  <td>stead087@gmail.com</td>
                  <td>National Cyber Crime Reporting Portal</td>
                  <td>Cyber related helpline</td>
                  <td>9545578951</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
