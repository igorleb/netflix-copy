import styles from './Sidebar.module.scss';

const menu = ['Popular', 'TV Shows', 'Films', 'My list'];

const Sidebar = ({ isSidebarShow }, setIsSidebarShow) => {
  return (
    <div className={styles.sidebar} style={{ width: isSidebarShow ? 30 : 15 }}>
      <button onClick={() => setIsSidebarShow(true)}>
        <i className={`bx bx-${isSidebarShow ? 'x' : 'borer-left'}`}></i>
      </button>
      <ul>
        {menu.map(title => (
          <li>
            <a href={title}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
