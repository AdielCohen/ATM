// react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { amountOfMoney, foreignCurrency } from '../types';
import styles from '../styles/Actions.module.scss';
// images
import background_david from '../images/actions/background_david.png';
import bar_tile from '../images/actions/bar_tile.png';
import door from '../images/actions/door.png';
import footer_tile from '../images/actions/footer_tile.png';
import star from '../images/actions/star.png';
import lang from '../images/actions/lang.png';
import logo from '../images/actions/logo.png';
import logo_background from '../images/actions/logo_background.png';
import top_left_tile from '../images/actions/top_left_tile.png';
import top_right_tile from '../images/actions/top_right_tile.png';
import top_tile from '../images/actions/top_tile.png';
import separator from '../images/actions/separator.png';
// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// components
import FadeModal from '../components/FadeModal';
import List from '../components/List';
import MoneyInput from '../components/MoneyInput';
// swiper
import 'swiper/css';
import type { Swiper as swiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Actions() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<string>('₪');
  const [swiper, setSwiper] = useState<swiperType | null>(null);
  
  const [isHoveredArray, setIsHoveredArray] = useState([false, false, false]);

  const handleMouseEnter = (index:number) => {
    setIsHoveredArray(prevState => prevState.map((value, i) => (i === index ? true : value)));
  };

  const handleMouseLeave = (index:number) => {
    setIsHoveredArray(prevState => prevState.map((value, i) => (i === index ? false : value)));
  };

  const goToPageOne = () => {
    swiper?.slideTo(1, 700);
  }

  const buttonElement = (
    <button className={`${styles['btn']} ${styles['first-btn']}`}>
      <span>שָׂפָה - Language</span>
      <img src={lang} alt="lang" className={styles['lang']} />
    </button>
  );

  return (
    <div className={styles['layout']}>
      <img src={top_left_tile} alt="top_left_tile" className={styles['top_left_tile']} />  
      <img src={top_right_tile} alt="top_right_tile" className={styles['top_right_tile']} />        
      <img src={logo} alt="logo" className={styles['logo']} />
      <img src={logo_background} alt="logo_background" className={styles['logo_background']} />
      <img src={top_tile} alt="top_tile" className={styles['top_tile']} /> 
      <div className={styles['logo-content']}>
        <span style={{fontWeight: '500', fontSize: '20px'}}><u>שערי חליפין יציגים</u></span> 
        <br />
        <span>
        ◼ דולר אמריקני: 3.6280 (USD)
        <br />
        ◼ לירה שטרלינג: 4.6317 (GBP)
        <br />
        ◼ ין יפני: 2.5538 (JPY) 
        <br />
        ◼ אירו: 3.9856 (EUR)
        <br />
        ◼ דולר קנדי: 2.7553 (CAD)
        <br />
        ◼ כתר דני: 0.5350 (DKK)
        <br />
        ◼ דינר ירדני: 5.1093 (JOD)
        </span>        
      </div>
      <img src={star} alt="star" className={styles['star']} />
      <img src={background_david} alt="background_david" className={styles['background_david']} />
      <div className={styles['bar-links']}>
        <span style={{ textAlign: 'left', display: 'block', color: isHoveredArray[0] ? 'blue' : 'initial'}} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
          <span>הפקדה</span>
          <div className={styles['bar-btn-left']} onClick={() => swiper?.slideTo(3, 700)}></div>
          <img src={separator} alt="separator" className={styles['separator']} />
        </span>   
        <div className={styles['bar-btn-center']} onClick={() => swiper?.slideTo(2, 700)} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
        </div>
        <span style={{ textAlign: 'center', display: 'block', position: 'relative', top: '43px',color: isHoveredArray[1] ? 'blue' : 'initial'}} >מט"ח</span>
        <span style={{textAlign: 'right', display: 'block',color: isHoveredArray[2] ? 'blue' : 'initial'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
          <img src={separator} alt="separator" className={styles['separator']}/>משיכה
          <div className={styles['bar-btn-right']} onClick={() => swiper?.slideTo(1, 700)}></div>
        </span>
      </div>
      <img src={bar_tile} alt="bar_tile" className={styles['bar_tile']} />
      <Swiper className={styles['content']} onSwiper={(s) => {setSwiper(s)}} initialSlide={0} slidesPerView={1} autoHeight={true} style={{height: '370px', overflowY: 'auto'}}>
        <SwiperSlide>
        <br /><br /><br />
        שלום סיגל כהן 🙂
        <br />
        איך אפשר לעזור?   
        <br /><br /><br /><br />
        </SwiperSlide>
        <SwiperSlide>
          <List items={amountOfMoney} goToPageOne={goToPageOne} currency={currency} setCurrency={setCurrency} num={0}/>      
          <Stack direction="row" justifyContent="center">
            <MoneyInput />
            <Button variant="contained" size="small">משיכה</Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <List items={foreignCurrency} goToPageOne={goToPageOne} currency={currency} setCurrency={setCurrency} num={1}/>
        </SwiperSlide>
        <SwiperSlide>
          <br />
          יש לציין את הסכום שברצונך להפקיד:
        <br /><br />
        <MoneyInput />
        <br />
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" size="large">אישור הפקדה</Button>
        </Stack>
        </SwiperSlide>
      </Swiper>
      <FadeModal OutButton={buttonElement} />
      <button className={`${styles['btn']} ${styles['second-btn']}`} onClick={() => navigate('/')}>
        <span>יציאה</span>
      <img src={door} alt="door" className={styles['door']} />
      </button>
      <img src={footer_tile} alt="footer_tile" className={styles['footer_tile']} />
    </div>
  )
}

export default Actions
