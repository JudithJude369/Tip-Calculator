

const data = [5, 10, 15, 25, 50]
const TipButton = ({tip, setTip, setTipTotal, setTipAmount }) => {

 

    function handleCustomTip(event) {
        setTip(parseInt(event.target.value))
      }

      function handleClick(event) {
        setTip(parseInt(event.target.textContent))
        setTipAmount()
        setTipTotal()
      }

  return (
    <div>
       <p className="tip-text">Select Tip %</p>
      <div className='grid-container'>
        {data.map((tips, i)=>(
          <ul key={i}>
            <button className='percentage-btn' onClick={handleClick}>{tips}%</button>
          </ul>
        ))}
        <input type="number" className='custom-input' value={tip} onChange={handleCustomTip} min={0}/>
      </div>
    </div>
  )
}

export default TipButton
