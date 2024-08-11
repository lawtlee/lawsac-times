import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Input } from 'antd';
import { changeViewIndex } from '../hooks/animations';
import '../scss/Navbar.scss';

import sidebar from '../../../assets/navbar/sidebar.svg';
import hiddenSidebar from '../../../assets/navbar/hidden_sidebar.svg';
import chevronLeft from '../../../assets/navbar/chevron-left.svg';
import chevronRight from '../../../assets/navbar/chevron-right.svg';

const views = ['Day', 'Week', 'Month', 'Year'];

const useNavbar = () => {
  const controls = useAnimation();
  const { Search } = Input;

  const [leftSidebar, setLeftSidebar] = useState(true);
  const [rightSidebar, setRightSidebar] = useState(true);
  const [viewIndex, setViewIndex] = useState(0);

  const handleViewChange = (index: number) => {
    setViewIndex(index);
    controls.start(changeViewIndex(index).move);
  };

  const render = () => (
    <div className="navbar-container">
      <motion.img
        className="navbar-sidebar"
        onClick={() => setLeftSidebar(!leftSidebar)}
        src={leftSidebar ? sidebar : hiddenSidebar}
        width={32}
      />
      <div className="navbar-middle">
        <div className="view-changer">
          <motion.div
            className="motion"
            style={
              viewIndex === 0
                ? {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                  }
                : viewIndex === 3
                  ? {
                      borderLeft: 'none',
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                    }
                  : {}
            }
            initial="start"
            animate={controls}
            variants={changeViewIndex(viewIndex)}
          />
          {views.map((view, index) => (
            <div
              key={index}
              className="box"
              onClick={() => handleViewChange(index)}
              style={
                index === 0
                  ? {
                      borderTopLeftRadius: '10px',
                      borderBottomLeftRadius: '10px',
                    }
                  : index === 3
                    ? {
                        borderLeft: 'none',
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                      }
                    : {borderLeft: 'none'}
              }
            >
              {view}
            </div>
          ))}
        </div>
        <div className="today">
          <img src={chevronLeft} />
          <div>Today</div>
          <img src={chevronRight} />
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
      <motion.img
        className="navbar-sidebar"
        onClick={() => {
          setRightSidebar(!rightSidebar);
        }}
        src={rightSidebar ? sidebar : hiddenSidebar}
        width={32}
      />
    </div>
  );

  return { render, leftSidebar, rightSidebar, viewIndex };
};

const Navbar = () => {
  return useNavbar();
};

export default Navbar;
