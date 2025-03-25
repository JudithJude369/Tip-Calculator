

const TipOutput = ({ tipAmt, totalAmt, handleReset}) => {

  return (
    <div className="output-wrapper">
    <div className="output-content">
      <p className="amt-text">Tip Amount <span>/ person</span></p>
      <p className="output-amt">${tipAmt}</p>
      </div>
      <div className="output-content">
      <p className="amt-text">Total <span>/ person</span></p>
      <p className="output-amt">${totalAmt}</p>
      </div>
      <button className="reset-btn" onClick={handleReset}> Reset</button>
    </div>
  )
}

export default TipOutput
