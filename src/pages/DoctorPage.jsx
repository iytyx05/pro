import React from "react"
import doc1 from "../homePage/img/doc1.jpg"
import doc2 from "../homePage/img/doc2.jpeg"
import doc3 from "../homePage/img/doc3.jpg"
import fonn from "../homePage/img/fonn.jpg"
import "./doctor.css"
const DoctorPage = () => {
  return (
    <div>
      <div class="header">
        <div class="header-content">
          <img src={fonn} alt="" />
        </div>
      </div>

      <div class="container">
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">25000+</span>
            <span class="stat-text">Довольных пациентов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">137</span>
            <span class="stat-text">Опытных докторов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5 филиалов</span>
            <span class="stat-text">С единой базой данных</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">19 лет +</span>
            <span class="stat-text">Средний стаж работы</span>
          </div>
        </div>
        <div class="description">
          <p>
            Команда врачей состоит из кандидатов медицинских наук, врачей высшей
            категории и профессионалов, которые улучшают свои навыки каждый
            день.
          </p>
          <p>
            Мы работаем с любовью и готовы помочь вам с вашей проблемой,
            переходите на наши социальные сети или запишитесь на прием к врачу.
          </p>
        </div>
      </div>

      <h1>
        Врачи филиала <i>Бакаева 106</i>
      </h1>
      <div class="container">
        <div class="card">
          <img src={doc1} alt="Doctor 1" />
          <div class="card-content">
            <h3>Кардиолог</h3>
            <p>Джумагулова Айнагуль Секеналиевна</p>
            <button>Записаться на прием</button>
          </div>
        </div>
        <div class="card">
          <img src={doc2} alt="Doctor 2" />
          <div class="card-content">
            <h3>Кардиолог</h3>
            <p>Иманакунова Жамиля Шейшекеева</p>
            <button>Записаться на прием</button>
          </div>
        </div>
        <div class="card">
          <img src={doc3} alt="Doctor 3" />
          <div class="card-content">
            <h3>Кардиолог</h3>
            <p>Романова Татьяна Анатольевна</p>
            <button>Записаться на прием</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorPage
