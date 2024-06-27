import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="column">
            <img
              src="https://avicenna.kg/wp-content/themes/Avicenna/images/icons/avicennawhitelogo.png"
              alt="Avicenna Clinic Logo"
              className="logo"
            />
            <p className="description">
              Восстановим и сохраним ваше здоровье с особой заботой, уважением и
              любовью
            </p>
            <ul className="contacts">
              <li><i className="fas fa-map-marker-alt"></i> Бакаева 106</li>
              <li><i className="fas fa-map-marker-alt"></i> Джунусалиева 83</li>
              <li><i className="fas fa-map-marker-alt"></i> Жукеева Пудовкина 124</li>
              <li><i className="fas fa-map-marker-alt"></i> Суеркулова 3г</li>
              <li><i className="fas fa-map-marker-alt"></i> Московская 136</li>
            </ul>
            <p>
              <a href="mailto:call-center@expresslab.kg" className="email">
                call-center@expresslab.kg
              </a>
            </p>
            <p className="phone">0707 909 001</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <div className="column">
            <h3>НАШИ ПАРТНЕРЫ</h3>
            <ul className="partners">
              <li>Экспресс плюс</li>
              <li>Кокомерен</li>
              <li>Corpus.kg</li>
            </ul>
          </div>
          <div className="column">
            <h3>ПОПУЛЯРНЫЕ УСЛУГИ</h3>
            <div className="service">
              <img
                src="https://avicenna.kg/wp-content/uploads/2023/12/plan-150x150.jpeg"
                alt="Плантоскопия"
              />
              <div className="service-info">
                <h4>Плантоскопия</h4>
                <p>
                  Метод исследования при плоскостопии и других деформациях стоп.
                </p>
              </div>
            </div>
            <div className="service">
              <img
                src="https://avicenna.kg/wp-content/uploads/2023/12/photo-1-150x150.jpeg"
                alt="Уролог"
              />
              <div className="service-info">
                <h4>Уролог</h4>
                <p>
                  Специалист, занимающийся диагностикой, профилактикой и терапией
                  заболеваний мочевыделительной системы.
                </p>
              </div>
            </div>
            <div className="service">
              <img
                src="https://avicenna.kg/wp-content/uploads/2023/12/4_1-150x150.webp"
                alt="Колоноскопия"
              />
              <div className="service-info">
                <h4>Колоноскопия</h4>
                <p>
                  Колоноскопия - это диагностическая процедура, которая позволяет
                  врачу внутренне исследовать область кишечника.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <p>&copy; Avicenna.Kg 2024</p>
          <nav>
            <a href="#">Главная</a>
            <a href="#">О нас</a>
            <a href="#">Услуги</a>
            <a href="#">Хирургия</a>
            <a href="#">Кардиология</a>
            <a href="#">Врачи</a>
            <a href="#">Чекапы</a>
            <a href="#">Стационар</a>
            <a href="#">Медицинский колледж</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
