import dollarIcon from '@/assets/images/icon-dollar.svg';
import TipButton from '@/components/TipButton';
import personIcon from '@/assets/images/icon-person.svg';
import TipOutput from '@/components/TipOutput';
import { useState } from 'react';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [billError, setBillError] = useState('');
  const [peopleError, setPeopleError] = useState('');

  function calculateTipAmount() {
    let tipAmount = 0.0;
    if (bill && people) {
      tipAmount = (bill * (tip / 100)) / people;
      tipAmount = tipAmount.toFixed(2);
    }
    return tipAmount;
  }

  function calculateTotalAmount() {
    const tipAmount = parseFloat(calculateTipAmount());
    let totalAmount = 0.0;
    if (bill && people) {
      totalAmount = bill / people + tipAmount;
      totalAmount = totalAmount.toFixed(2);
    }
    return totalAmount;
  }

  function handleReset() {
    setBill('');
    setPeople('');
    setTip('');
    setBillError('');
    setPeopleError('');
  }

  function handleBill(event) {
    const billValue = parseInt(event.target.value);
    setBill(billValue);
    if (billValue <= 0) {
      setBillError("Can't be zero");
    } else {
      setBillError('');
    }
  }

  function handlePeople(event) {
    const peopleValue = parseInt(event.target.value);
    setPeople(peopleValue);
    if (peopleValue <= 0) {
      setPeopleError("Can't be zero");
    } else {
      setPeopleError('');
    }
  }

  const tipAmt = calculateTipAmount();
  const totalAmt = calculateTotalAmount();
  return (
    <div className="content-wrapper">
      <div className="content-container">
        <div className="form-wrapper">
          <label>
            Bill {billError && <span className="error">{billError}</span>}
          </label>
          <input
            type="number"
            className="input-wrapper"
            value={bill}
            onChange={handleBill}
            min={0}
            placeholder="0"
          />
          <img src={dollarIcon} alt="" className="dollar-icon" />
        </div>
        <TipButton tip={tip} setTip={setTip} />
        <div className="form-wrapper form-people">
          <label>
            Number of People
            {peopleError && <span className="error">{peopleError}</span>}{' '}
          </label>
          <input
            type="number"
            className="input-wrapper"
            value={people}
            onChange={handlePeople}
            min={0}
            placeholder="0"
          />
          <img src={personIcon} alt="" className="dollar-icon" />
        </div>
      </div>
      <TipOutput
        tipAmt={tipAmt}
        totalAmt={totalAmt}
        handleReset={handleReset}
      />
    </div>
  );
};

export default TipCalculator;
