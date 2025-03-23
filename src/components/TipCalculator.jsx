import dollarIcon from '@/assets/images/icon-dollar.svg'
import TipButton from '@/components/TipButton'
import personIcon from '@/assets/images/icon-person.svg'
import TipOutput from '@/components/TipOutput'
import { useState } from 'react'

const TipCalculator = () => {

  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [tip, setTip] = useState('')
  const [tipAmount, setTipAmount] = useState(0.00)
  const [tipTotal, setTipTotal] = useState(0.00)

  function calculateTipAmount() {
    let tipAmount = 0.00;
   if(bill && people) {
    tipAmount = (bill * (tip/100))/people
    tipAmount = tipAmount.toFixed(2)
   }
   return tipAmount;
  }

  function calculateTotalAmount() {
   const tipAmount = parseFloat(calculateTipAmount())
   let totalAmount = 0.00;
   if(bill && people) {
    totalAmount = (bill / people) + tipAmount
    totalAmount = totalAmount.toFixed(2)
   }
   return totalAmount;
  }

  function handleBill(event) {
    setBill(parseInt(event.target.value))
  }

  function handlePeople(event) {
    setPeople(parseInt(event.target.value))
  }

  function handleSubmit(event) {
    event.preventDefault()
  }
  return (
    <div className='content-wrapper'>
      <div>
      <form className='form-wrapper' onSubmit={handleSubmit}>
      <label>Bill</label>
        <input type="number"  className="input-wrapper" value={bill} onChange={handleBill} min={0}/>
        <img src={dollarIcon} alt="" className='dollar-icon'/>
      </form>
      <TipButton
      setTipAmount={()=>calculateTipAmount()}
      setTipTotal={()=>calculateTotalAmount()}
        tip={tip} 
        setTip={setTip}
        />
      <form className='form-wrapper form-people' onSubmit={handleSubmit}>
      <label> Number of People</label>
        <input type="number"  className="input-wrapper" value={people} onChange={handlePeople} min={0}/>
        <img src={personIcon} alt="" className='dollar-icon'/>
      </form>
      </div>
      <TipOutput 
      tipAmount={tipAmount}
      tipTotal={tipTotal} 
      />
    </div>
  )
}

export default TipCalculator
