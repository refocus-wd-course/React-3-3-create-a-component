import './App.css';
import Navbar from './Navbar';
import Modal from './Modal';

function App() {
    // parent component
    return (
        <div className='App'>
            {/* child component */}
            <Navbar />
            <Modal message='Are you sure?' />
        </div>
    );
}

export default App;
