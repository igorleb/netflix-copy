import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Information from './Information';
import Sidebar from '../../UI/Sidebar/Sidebar';
import styles from './Main.module.scss';

const Main = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <div className={styles.wrapper}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        className={styles.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: isSidebarShow ? '85%' : '90%',
        }}
      > 
        <Information movie={DATA[0]} />
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
    </div>
  );
};

export default Main;
