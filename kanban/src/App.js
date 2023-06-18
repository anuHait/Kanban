
import Sidebar from './components/Sidebar';
import Header from './components/header';
import Navbar from './components/navbar';
import KanbanBoard from './components/KanbanBoard';
function App() {
  return (
    <div className="App font-Inter">
   <Sidebar/>
   <Navbar/>
<div className='ml-10 md:ml-48'>
<Header/>
<KanbanBoard/>
</div>

    </div>
  );
}

export default App;
