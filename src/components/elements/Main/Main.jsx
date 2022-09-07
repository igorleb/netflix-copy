import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Information from './Information';
import Sidebar from '../../UI/Sidebar/Sidebar';
import styles from './Main.module.scss';

const Main = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  return (
    <div>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: isSidebarShow ? 70 : 85,
        }}
      >
        <Information movie={DATA[0]} />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Main;
