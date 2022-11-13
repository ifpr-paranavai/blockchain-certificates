import { Navbar, Welcome} from './components'
import { RegisterBlock } from './components'
import { TimeScreen } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor:"#296bad"}}> 
      <div className="gradient-bg-welcome rounded-bottom" > 
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/registerBlock' element={<RegisterBlock />} />
          <Route path='/timeScreen' element={<TimeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
