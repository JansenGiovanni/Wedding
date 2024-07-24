import React from 'react';
import Image from '../../Assets/Asset/DSC_3409.JPG';
import './EventMobile.css'

function EventMobile(){
  return (
      <section id='event'>
        <div className='emptyBackground'>
          <div className='imageEvent' style={{backgroundImage: `url('${Image}')`}}/>
          <div className='weddingEvent'>
            Wedding Event
          </div>
          <div>
            Holy Matrimony <br/>
            Saturday, 14 September 2024 <br/>
            10.00 - 11.00 WIB
          </div>
          <div>
            Vihara Hok Lay Kiong <br />
            Jl. Kenari I No.1, RT.006/RW.001, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113
          </div>
          <div>
            <a href="https://maps.app.goo.gl/cUyKHSwFRy19Jqyw6">
            View Maps
            </a>
          </div>
          <hr style={{width: '50%', marginTop: '10%', marginBottom: '10%'}}/>
          <div>
            Wedding Reception <br/>
            Saturday, 14 September 2024 <br/>
            19.00 - 21.00 WIB
          </div>
          <div>
          Jl. Ahmad Yani No.1, RT.004/RW.001, Marga Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17141
          </div>
          <div>
            <a href="https://maps.app.goo.gl/gB6e8moMZM4HGKLD7">
              View Maps
            </a>
          </div>
          <div>
            <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Jansen+%26+Adel+Wedding+Ceremony&details=Wedding+Ceremony+of+Jansen+%26+Adel.+14+September+2024%2C+19.00-21.00+WIB.%0D%0APlace%3A+Mega+Bekasi%0D%0AJl.+Ahmad+Yani+No.1%2C+RT.004%2FRW.001%2C+Marga+Jaya%2C+Kec.+Bekasi+Sel.%2C+Kota+Bks%2C+Jawa+Barat+17141&dates=20240914T190000/20240914T210000&location=Jl.+Ahmad+Yani+No.1%2C+RT.004%2FRW.001%2C+Marga+Jaya%2C+Kec.+Bekasi+Sel.%2C+Kota+Bks%2C+Jawa+Barat+17141">
              Save the date
            </a>
          </div>
        </div>
      </section>
      )
}

export default EventMobile;