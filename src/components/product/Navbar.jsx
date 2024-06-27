import React from 'react'
import calling from "../../homePage/assets/calling.png"
import pngegg from "../../homePage/assets/pngegg.png"
import inst from "../../homePage/assets/inst.png"
import whatsapp from "../../homePage/assets/whatsapp.png"
import youtube from "../../homePage/assets/youtube.png"
import logo from "../../homePage/assets/LOGO-1-1.png"
import "./navbar.css"


const Navbar = () => {
  return (
    <div>
       <header>
        <div class="top-bar">
          <div class="working-hours">
            <p>Часы работы: круглосуточно!</p>
          </div>
          <div class="social-icons">
            <div class="icon-container">
              <img src={inst} alt="Instagram Icon" />
            </div>
            <div class="icon-container">
              <img src={whatsapp} alt="WhatsApp Icon" />
            </div>
            <div class="icon-container">
              <img src={youtube} alt="YouTube Icon" />
            </div>
          </div>
        </div>
        <nav class="navbar">
          <div class="navbar-container">
            <div class="logo">
              <img src={logo} alt="Логотип" class="logo-img" />
            </div>
            <div class="contact-info">
              <div class="contact-item">
                <img src={pngegg} alt="" />
                <p>
                  Email
                  <br />
                  <span>call-center@expresslab.kg</span>
                </p>
              </div>
              <div class="contact-item">
                <img src={calling} alt="" />
                <p>
                  Позвонить Нам
                  <br />
                  <span>0707 909 001</span>
                </p>
              </div>
              <button class="cta-button">Вызов на дом</button>
            </div>
          </div>
        </nav>
        <nav class="main-nav">
          <ul>
            <li>
              <a href="/home">Главная</a>
            </li>
           
            <li>
              <a href={"/service"}>Услуги</a>
            </li>
            <li>
              <a href="#">Хирургия</a>
            </li>
            <li>
              <a href="#">Кардиология</a>
            </li>
            <li>
              <a href={"/doctor"}>Врачи</a>
            </li>
            <li>
              <a href="#">Чекапы</a>
            </li>
            <li>
              <a href="#">Стационар</a>
            </li>
            <li>
              <a href="#">Медицинский колледж</a>
            </li>
          </ul>
        </nav>
      </header> 
    </div>
  )
}

export default Navbar
