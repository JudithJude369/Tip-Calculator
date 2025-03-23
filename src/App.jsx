import logo from '@/assets/images/logo.svg'
import TipCalculator from '@/components/TipCalculator'
const App = () => {
  return (
    <main className='container'>
      <img src={logo} alt="split-logo"  className='logo'/>
      <TipCalculator/>
    </main>
  )
}

export default App
