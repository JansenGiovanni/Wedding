import React, { useState } from 'react';
import gambar1 from '../../Assets/Asset/gambar1.jpg';
import gambar2 from '../../Assets/Asset/gambar2.jpg';
import gambar3 from '../../Assets/Asset/Prewed1.JPG';
import './GalleryMobile.css';

function GalleryMobile(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: '', alt: '' });

  const handleImageClick = (e) => {
    setModalContent({ src: e.target.src, alt: e.target.alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
        <section>
            <div className='backgroundGallery'>
                <div className='titleGallery'>
                    OUR PHOTOS<br/>GALLERY
                </div>
                <div className='galleryName'>
                    JANSEN & ADEL
                </div>
                <div className='galleryWrapper'>
                    <div className='galleryFrame'>
                    <img src={gambar1} alt="" className="galleryPhoto" onClick={handleImageClick}/>
                    <img src={gambar2} alt="" className="galleryPhoto" onClick={handleImageClick}/>
                    <img src={gambar3} alt="" className="galleryPhoto" onClick={handleImageClick}/>
                    </div>
                </div>
            </div>
            {isModalOpen && (
            <div className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={modalContent.src} alt={modalContent.alt} />
            </div>
            )}
        </section>
      )
}

export default GalleryMobile;