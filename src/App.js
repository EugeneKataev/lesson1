import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from "react";
import Calendar from './Calendar'

import IconLeft from './icon/arrow_from_right_icon.svg';
import IconRight from './icon/arrow_from_left_icon.svg';


function App() {
  const [HideLeftPanel, setHideLeftPanel] = useState(false);
  const iconHide = HideLeftPanel ? IconRight : IconLeft;
  const [isVisibleAdminBlock, setIsVisibleAdminBlock] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1240) {
        setHideLeftPanel(true);
        console.log('false')
      } else {
        console.log('true')
        setHideLeftPanel(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [HideLeftPanel]);

  const handleButtonHidePanelClick = () => {
    if(HideLeftPanel){
      setHideLeftPanel(false);
    } else {
      setHideLeftPanel(true);
    }
  }
  const handleAdminClose = () => {
    setIsVisibleAdminBlock(false);
  };

  return (
      <div>
        {isVisibleAdminBlock && (
            <div className="head-admin-panel">
              <p>Head Admin Panel</p>
              <a onClick={handleAdminClose}>X</a>
            </div>
        )}
      <div className="container App">
        <div className="row full-panel">
          <div className={`${HideLeftPanel ? 'col-lg-1 leftPanel leftPanelHide' : 'col-lg-2 leftPanel leftPanelShow'}`}>
            <div className="leftPanel-head">
              <a onClick={handleButtonHidePanelClick}>
                <img src={iconHide} alt="Icon" />
              </a>
            </div>
            <div className="leftPanel-profile">
              <div className="leftPanel-profile-user">
                <div className="avatar">
                  <img />
                </div>
                <div className="user-name">
                  <p>Лёня Антохин</p>
                </div>
              </div>
            </div>
            <div className="leftPanel-menu">
              <ul>
                <li>ПРОЕКТЫ</li>
                <li>КАЛЕНДАРЬ</li>
                <li>КЛИЕНТЫ</li>
                <li>ОБОРУДОВАНИЕ</li>
                <li>ЗАДАЧИ</li>
              </ul>
            </div>
            <div className="leftPanel-quick-menu">
              <div className="quick-menu-btn">
                <ul>
                  <li><a>{HideLeftPanel ? '+ Проект' : '+ НОВЫЙ ПРОЕКТ'}</a></li>
                  <li><a>{HideLeftPanel ? '+ Компания' : '+ НОВАЯ КОМПАНИЯ'}</a></li>
                  <li><a>{HideLeftPanel ? '+ Обордвание' : '+ ОБОРУДОВАНИЕ'}</a></li>
                  <li><a>{HideLeftPanel ? '+ Задача' : '+ НОВАЯ ЗАДАЧА'}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <Calendar />
          </div>
        </div>

      </div>
      </div>
  );
}

export default App;
