import React, { useState, useEffect, useRef } from "react";
import "./homePage.css";
import хир from "../homePage/assets/хир.jpg";
import хир2 from "../homePage/assets/хир2.jpg";
import photo1 from "./assets/1.png"
import photo2 from "./assets/2.png"
import photo3 from "./assets/3.png"
import photo4 from "./assets/4.png"
import pediator from "./assets/pediator.jpeg"
import osteopat from "./assets/osteopat.jpeg"
import sleth from "./assets/steth.jpg"
import uslugnog from "./assets/uslugnog.jpeg"

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);



  const showSlide = (index) => {
    slidesRef.current.forEach((slide, i) => {
      if (slide) {
        slide.classList.toggle("show", i === index);
        slide.classList.toggle("hide", i !== index);
      }
    });
  };

  const prevSlide = () => {
    const newIndex = (currentSlide > 0) ? currentSlide - 1 : slidesRef.current.length - 1;
    setCurrentSlide(newIndex);
    showSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide < slidesRef.current.length - 1) ? currentSlide + 1 : 0;
    setCurrentSlide(newIndex);
    showSlide(newIndex);
  };

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div>
      <div className="slider">
        <div className="slide" ref={el => slidesRef.current[0] = el}>
          <img src={хир2} alt="Медицинский фон" />
          <div className="slide-content">
            <h2>Пройдите Комплексный Осмотр Здоровья</h2>
            <p>Качественные и быстрые чекапы по доступным ценам в Бишкеке</p>
            <img src={хир} alt="Логотип" className="logo" />
          </div>
        </div>
        <div className="slide" ref={el => slidesRef.current[1] = el}>
          <img src={хир} alt="Медицинский фон" />
          <div className="slide-content">
            <h2>Пройдите Комплексный Осмотр Здоровья</h2>
            <p>Качественные и быстрые чекапы по доступным ценам в Бишкеке</p>
            <img src={хир2} alt="Логотип" className="logo" />
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="header-line-3">
        <div className="box">
          <div className="icon">&#9742;</div>
          <h2>КОЛЛ-ЦЕНТР</h2>
          <p className="phone">+996 707 909 001</p>
          <p>
            Операторы нашего колл-центра всегда вас проконсультируют и помогут
            записаться к специалисту!
          </p>
        </div>
        <div className="box2">
          <div className="icon">&#128138;</div>
          <h2>ОПЕРАТИВНАЯ ПОМОЩЬ</h2>
          <p>
            Мы гарантируем быстрый отклик на ваши запросы и оперативную помощь.
          </p>
        </div>
        <div className="box3">
          <div className="icon">&#8986;</div>
          <h2>ЧАСЫ РАБОТЫ</h2>
          <p>
            ПН - ПТ <span>КРУГЛОСУТОЧНО</span>
          </p>
          <p>
            СБ - ВС <span>КРУГЛОСУТОЧНО</span>
          </p>
        </div>
      </div>



      <div class="header-line-2">
        <div class="container1">
          <h1>Преимущества медицинского центра Авиценна</h1>
          <div class="advantages">
            <div class="advantage">
              <img
                class="img1"
                src={photo1}
                alt="Высококвалифицированные специалисты"
              />
              <h2>Высококвалифицированные специалисты</h2>
              <p>
                Наши врачи - настоящие эксперты с обширным опытом и высокой
                квалификацией, гарантирующие четкое и успешное лечение.
              </p>
            </div>
            <div class="advantage">
              <img
                class="img2"
                src={photo2}
                alt="Современное оборудование и технологии"
              />
              <h2>Современное оборудование и технологии</h2>
              <p>
                Медицинский центр оборудован передовыми технологиями, что
                позволяет нам предоставлять лечение на самом высоком уровне,
                используя современные методы диагностики и хирургических
                вмешательств.
              </p>
            </div>
            <div class="advantage">
              <img
                class="img3"
                src={photo3}
                alt="Индивидуальный подход к каждому пациенту"
              />
              <h2>Индивидуальный подход к каждому пациенту</h2>
              <p>
                Мы понимаем, что каждый пациент уникален. Наша команда врачей
                предоставляет персонализированные планы лечения, учитывая
                особенности каждого случая и обеспечивая заботу, которая
                превосходит ожидания.
              </p>
            </div>
            <div class="advantage">
              <img
                class="img4"
                src={photo4}
                alt="Безопасная и комфортная обстановка"
              />
              <h2>Безопасная и комфортная обстановка</h2>
              <p>
                Наши пациенты находятся в безопасных руках. Мы создали
                комфортную обстановку в медицинском центре, обеспечивая
                исключительные стандарты безопасности и заботы о вашем
                благополучии.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="services-container">
        <h1>Предоставляемые Услуги</h1>
        <div class="services">
          <div class="service">
            <img src={osteopat} alt="Остеопат" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ОСТЕОПАТ</h2>
          </div>
          <div class="service">
            <img src={pediator} alt="Педиатр" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ПЕДИАТР</h2>
          </div>
          <div class="service">
            <img src={sleth} alt="Лор" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ЛОР</h2>
          </div>
          <div class="service">
            <img src={uslugnog} alt="" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ЭЛЕКТРОФОРЕЗ И МАГНИТОТЕРАПИЯ</h2>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
