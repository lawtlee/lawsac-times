import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import "./scss/Home.scss"

function Home() {
  const { render, leftSidebar, rightSidebar, viewIndex } = Navbar();

  return (
    <div
        className='home-container'
    >
        {render()}
        <Sidebar open={leftSidebar} side={true}>
        {/* TODO: Children of the sidebar goes here, honestly should just put it in another component */}
          <p>Hello this is the left sidebar</p>
        </Sidebar>
        <Calendar viewIndex={viewIndex}/>
        <Sidebar open={rightSidebar} side={false}>
          {/* TODO: same thing probably put in another compoennt */}
          <p>Hello this is the right sidebar</p>
        </Sidebar>
    </div>
  );
}

export default Home;
