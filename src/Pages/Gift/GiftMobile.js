import React, { useState } from 'react';
import Image from '../../Assets/Asset/DSC_3409.JPG';
import Gift from '../../Assets/Asset/gift-icon.png';
import './GiftMobile.css';

function GiftMobile(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePopup = () => {
        setIsModalOpen(true);
      };
    
    const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
        <section>
            <div className='backgroundGift'>
                <div className='backgroundGiftTop'></div>
                <div style={{backgroundImage: `url('${Image}')`}} className='imageGift'></div>
                <div className='wrapperGift'>
                    <div className='titleGift'>
                        WEDDING GIFT
                    </div>
                    <div className='giftName'>
                        JANSEN & ADEL
                    </div>
                    <div>
                        Tanpa mengurangi rasa terimakasih, jika undangan kami yang spesial ingin memberikan angpao online untuk kami, dapat melalui :
                    </div>
                    <div className='giftBankWrapper'>
                        <div>
                            <div>
                            Jansen Giovanni
                            </div>
                            <div>
                                <div onClick={handlePopup}>
                                    Lihat disini
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                            Ananda Adhellia
                            </div>
                            <div>
                                <div>
                                    Lihat disini
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Terimakasih banyak juga jika ada yang ingin memberikan kami hadiah berupa barang. Untuk list hadiah bisa diklik pada gambar dibawah.
                    </div>
                    <div>
                        <a href='https://www.thingstogetme.com/1179425a8314a'>
                            <img src={Gift} alt='gift' style={{width: '90px', height: '100px'}}/>
                        </a>
                    </div>
                </div>
            </div>
            {isModalOpen && (
            <div className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={Image} alt="apaaja" />
            </div>
            )}
        </section>
      )
}

export default GiftMobile;