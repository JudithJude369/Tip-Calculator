

const TipOutput = ({ tipAmount, tipTotal}) => {

  return (
    <div className="output-wrapper">
    <div className="output-content">
      <p className="amt-text">Tip Amount <span>/ person</span></p>
      <p className="output-amt">${tipAmount}</p>
      </div>
      <div className="output-content">
      <p className="amt-text">Total <span>/ person</span></p>
      <p className="output-amt">${tipTotal}</p>
      </div>
      <button className="reset-btn"> Reset</button>
    </div>
  )
}

export default TipOutput
