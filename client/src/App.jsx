import { Navbar, Welcome, Footer, Services, Transactions } from './components'

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor:"#296bad"}}> 
      <div className="gradient-bg-welcome rounded-bottom" > 
        <Navbar />
        <Welcome/>
      </div>
    </div>
  )
}

export default App
