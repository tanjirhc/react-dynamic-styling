import React from 'react'

const ConditionalStyle = () => {

    const commonStyle = {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        margin: '10px 0',
        backgroundColor: 'lightgray'
        }

  return (
    <div>
      <button>Make it Special</button>

      <div style={commonStyle}>
        This is a Normal Style!
      </div>
    </div>
  )
}

export default ConditionalStyle
