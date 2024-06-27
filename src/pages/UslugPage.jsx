import React, { useState } from "react";
import komp from "../homePage/img/komp.jpeg";
import gastr from "../homePage/img/gastr.jpg";
import heart from "../homePage/img/heart.jpg";
import "./uslug.css";

const UslugPage = () => {
  const [activeTab, setActiveTab] = useState('specialists');
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setSearchTerm(""); // Сброс поискового запроса при переключении вкладок
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const services = {
    specialists: [
      { img: komp, title: "КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ" },
      { img: gastr, title: "ГАСТРОСКОПИЯ (ЭГДС)" },
      { img: heart, title: "СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА" }
    ],
    diagnostics: [
      { img: komp, title: "Первичная медицинская помощь (Терапия)" },
      { img: gastr, title: "Скорая и неотложная помощь" },
      { img: heart, title: "Педиатрия" }
    ],
    procedures: [
      { img: komp, title: "Хирургия" },
      { img: gastr, title: "Кардиология" },
      { img: heart, title: "Гинекология и акушерство" }
    ],
    prevention: [
      { img: komp, title: "Онкология" },
      { img: gastr, title: "Диагностические исследования" },
      { img: heart, title: "Реабилитация и физиотерапия" }
    ]
  };

  const filteredServices = services[activeTab].filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Услуги медицинского центра Авиценна</h1>
      <p>Клиника Авиценна – территория здоровья, где каждый пациент получает индивидуальный комплексный подход и доступ к лучшим медицинским технологиям.</p>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'specialists' ? 'active' : ''}`}
          onClick={() => handleTabClick('specialists')}
        >
          Врачи-Специалисты
        </button>
        <button
          className={`tab-btn ${activeTab === 'diagnostics' ? 'active' : ''}`}
          onClick={() => handleTabClick('diagnostics')}
        >
          Диагностика
        </button>
        <button
          className={`tab-btn ${activeTab === 'procedures' ? 'active' : ''}`}
          onClick={() => handleTabClick('procedures')}
        >
          Лечебные Процедуры
        </button>
        <button
          className={`tab-btn ${activeTab === 'prevention' ? 'active' : ''}`}
          onClick={() => handleTabClick('prevention')}
        >
          Профилактика И Вакцинация
        </button>
      </div>

      <input
        type="text"
        placeholder="Поиск услуг..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <div id={activeTab} className={`tab-content ${activeTab === 'specialists' ? 'active' : ''}`}>
        {filteredServices.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
      <div id={activeTab} className={`tab-content ${activeTab === 'diagnostics' ? 'active' : ''}`}>
        {filteredServices.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
      <div id={activeTab} className={`tab-content ${activeTab === 'procedures' ? 'active' : ''}`}>
        {filteredServices.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
      <div id={activeTab} className={`tab-content ${activeTab === 'prevention' ? 'active' : ''}`}>
        {filteredServices.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UslugPage;
