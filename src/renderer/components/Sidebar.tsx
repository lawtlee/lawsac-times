import { motion, useAnimation } from 'framer-motion';

import '../scss/Sidebar.scss';
import React, { useEffect } from 'react';
import { sidebarAnimation } from '../hooks/animations';

interface SidebarProps {
  side: boolean;
  open: boolean;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ open, children, side }) => {
  const control = useAnimation();

  useEffect(() => {
    if (open) {
      control.start(sidebarAnimation(side).show);
    } else {
      control.start(sidebarAnimation(side).hidden);
    }
  }, [open, control]);

  return (
    <motion.div
      className="sidebar-container"
      initial="show"
      animate={open ? 'show' : 'hidden'}
      variants={sidebarAnimation(side)}
    >
      {children}
    </motion.div>
  );
};

export default Sidebar;
