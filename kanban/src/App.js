
import Sidebar from './components/Sidebar';
import Header from './components/header';
import Buttons from './components/buttons';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
   <Sidebar/>
<Navbar/>
<div className='ml-10 md:ml-48'>
<Header/>
</div>

    </div>
  );
}

export default App;
