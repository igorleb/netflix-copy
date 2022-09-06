import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Information from './Information';
import Sidebar from '../../UI/Sidebar/Sidebar';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div>
      <Sidebar />
      <div style={{}}>
        <Information movie={DATA[0]} />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Main;
