// react
import React, { useEffect, useState } from 'react';
import styles from '../styles/Intro.module.scss';
import { useNavigate } from 'react-router-dom';
// images
import btn_lang_tile_left from '../images/intro/btn_lang_tile_left.png';
import btn_lang_tile from '../images/intro/btn_lang_tile.png';
import btn_lang_tile_right from '../images/intro/btn_lang_tile_right.png';
import lang_icon from '../images/intro/lang_icon.png';
import lang_title from '../images/intro/lang_title.png';
import logo from '../images/intro/logo.png';
import secret_code_tile from '../images/intro/secret_code_tile.png';
import secret_code_left from '../images/intro/secret_code_left.png';
import secret_code_right from '../images/intro/secret_code_right.png';
// components
import FadeModal from '../components/FadeModal';

function Intro() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(['', '', '', '']);

  useEffect(() => {
    const accEnter = () => {
      const [num1, num2, num3, num4] = inputValues.map(Number);
      if (num1 === 1 && num2 === 1 && num3 === 1 && num4 === 1) {
        navigate('/actions');
      }
    }
    accEnter();
  }, [inputValues]);
 
  const buttonElement = (
    <div className={styles['lang-content']}>
      <img src={lang_icon} alt="Lang"/>&emsp;
      <img src={lang_title} alt="Lang"/>                   
    </div>
  ); 

  return (
    <React.Fragment>
      <div className={styles['flex-container']}>
        <header className={styles['flex-item']}>  
          <img src={btn_lang_tile_left} alt="Lang" />
          <img src={btn_lang_tile} alt="Lang" className={styles['lang-tile']} />
          <img src={btn_lang_tile_right} alt="Lang" />
          <FadeModal OutButton={buttonElement} />
          <img src={logo} alt="Logo" className={styles['logo']} />
        </header>
        <div className={styles['flex-item']}>
          <span className={styles['secret_code_text']}>לכניסה יש להזין קוד סודי</span> 
          <div className={styles['parent_secret_code']}>     
            <img src={secret_code_left} alt="Login" /> 
            <img src={secret_code_tile} alt="Login" className={styles['secret_code_tile']} />
            <img src={secret_code_right} alt="Login"/>
            <br />
            <div className={styles['parent_inputs']}>
              {inputValues.map((value, index) => (
              <input
                key={`num${index + 1}`}
                type="text"
                id={`num${index + 1}`}
                className={styles['num']}
                maxLength={1}
                value={value}
                onChange={(e) => {
                  setInputValues((prevValues) => [
                    ...prevValues.slice(0, index),
                    e.target.value,
                    ...prevValues.slice(index + 1),
                  ]);
                }}
              />
            ))}         
            </div>
          </div> 
          <br />    
          <div className={styles['rectangle-code']}></div>
        </div>
        <footer className={styles['flex-item']}>
          <div className={styles['grass']}></div>
          <div className={styles['copyright']}>© מתוחזק ע”י נציבות שירות המדינה</div>
          <div className={styles['light']}></div>
        </footer>
        <div className={styles['stripe-1']}></div>
        <div className={styles['star']}></div>
        <div className={styles['stripe-2']}></div>
      </div>    
    </React.Fragment>
  )
}

export default Intro