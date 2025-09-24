import React from 'react'

const ConditionalStyle = () => {
    const [isSpecial, setIsSpecial] = React.useState(false);

    const toggleButton = () => {
        setIsSpecial(!isSpecial);
    }

    const commonStyle = {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        margin: '10px 0',
        backgroundColor: isSpecial ? 'lightblue' : 'lightgray',
        color: isSpecial ? 'darkblue' : 'black',
        fontWeight: isSpecial ? 'bold' : 'normal',
        }

    const specialText = {
        textDecoration: 'underline',
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
    const normalText = {
        fontWeight: 'bold',
        fontSize: '16px',
    }

  return (
    <div>
        <button onClick={toggleButton}>            
                Make it { isSpecial ? 'Normal' : 'Special'}            
        </button>

      <div style={commonStyle}>
        This is a {isSpecial ? <span style={specialText}>Special</span> : <span style={normalText}>Normal</span>} Style!
      </div>
    </div>
  )
}

export default ConditionalStyle
