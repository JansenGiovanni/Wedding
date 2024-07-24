import { useEffect, React } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from '../../Assets/Asset/Jansen.png';
import image2 from '../../Assets/Asset/Adel.png';
import love from '../../Assets/Asset/Love.png';
import './ProfileMobile.css';
function Profile(){
  const styleVariant = {
    visible: { opacity: 1, transition: { duration: 1}, y: 0},
    hidden: { opacity: 0, y: 50 },
  };
  
  const styleVariantDelay = {
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5}, y: 0},
    hidden: { opacity: 0, y: 30 },
  };
  
  const Profile = ({ num, title, name, father, mother, image }) => {
  
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    return (
      <div>
        <motion.div
          className="box"
          ref={ref}
          variants={styleVariant}
          initial="hidden"
          animate={control}
        >
          <div className='theGroom'>
            {title}
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={styleVariant}
          initial="hidden"
          animate={control}
        >
          <img src={image}  alt={image} className='profilePicture'/>
        </motion.div>
        <motion.div
          ref={ref}
          variants={styleVariantDelay}
          initial="hidden"
          animate={control}
        >   
          <div className='profileName'>
            {name}
          </div>
          <div>
            {father} <br />
          </div>
          <div>
            {mother}
          </div>
        </motion.div>
    </div>
    );
  };

  return (
      <div style={{position: 'relative', zIndex:0}}>
        <div className='backgroundProfile'>
          <div className='theCouple'>THE<br/> COUPLE</div>
          <div className='profileWrapper'>
          <Profile num={1} title={'THE GROOM'} name={'Jansen Giovanni'} father={'Son of Mr.Ng Tjie Jung '} mother={'And Tjun Siang'} image={image1}/>
          </div>
        
          <div style={{position: 'relative', top: '5%', marginTop: '20%', marginBottom: '20%'}}>
            <img src={love} alt='Love'></img>
          </div>
          <div className='profileWrapper'>
          <Profile num={2} title={'THE BRIDE'} name={'Ananda Adhellia'} father={'First child of three siblings'} image={image2}/>
          </div>
        </div>
      </div>
      )
}

export default Profile;