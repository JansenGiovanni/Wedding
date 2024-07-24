import React, { useRef } from 'react';
import Envelop from '../../Assets/Asset/envelope.png';
import Prewed1 from '../../Assets/Asset/Couple1.jpeg';
import './InvitationMobile.css';

function InvitationMobile(){
  if(window.location.search)
    {
      var guestName = getQueryVariable();
      console.log(guestName);
      const serializedState = JSON.stringify(guestName);
      localStorage.setItem('state', serializedState);
      window.location.href = "/";
    }
  function getQueryVariable()
  {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] === 'specialguest'){return pair[1].replace(/-/g, " ");}
    }
  }

  var target = document.body;
  const myElementRef = useRef(null);

  const handleClick = () => {
      myElementRef.current.style.animation = 'scrollOut 1s forwards'; // Example manipulation
      target.style.overflow = 'visible';
  };

  function getGuest(){
    if (localStorage.getItem('state') != null){
    guestName = localStorage.getItem('state').replace(/"/g, '');
    return (
            <div className='dear'>
              <div>
                Dear,
              </div>
              <div>
               {guestName} & Pasangan
              </div>
            </div>
    )
  }
}
  return (
        <section id="invitation" ref={myElementRef} style={{position: 'absolute', zIndex: 1}}>
          <div className = 'blackBackground'>
            <div className='theWeddingOf'>
              THE WEDDING OF
            </div>
            <div className='ourName'>
              JANSEN AND ADEL
            </div>
          </div>
          <div className='backgroundInvitation' style={{backgroundImage: `url('${Prewed1}')`}}>
            <div className='wrappedTitleInvitation'>
              <div className='titleTheWedding'>
                THE WEDDING OF
              </div>
              <div className='titleOurName'>
                JANSEN & ADEL
              </div>
              <div className='invitationDate'>
                SATURDAY, 14 SEPTEMBER 2024
              </div>
            </div>
            <div className='wrappedMainInvitation'>
              {getGuest()}
              <button className='openInvitation' onClick={handleClick} id='buttonInvitation'>
                <img src={Envelop} alt='envelop' className='envelop'></img>
                OPEN INVITATION
              </button>
            </div>
          </div>
        </section>
      )
}

export default InvitationMobile;