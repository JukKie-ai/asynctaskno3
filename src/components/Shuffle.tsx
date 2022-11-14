import React from 'react'

type MyCompType = {
    handleClick: any
}

const Shuffle = (props: MyCompType) => {
  return (
    <button className="span-three" id="green" onClick={props.handleClick}>
        SHUFFLE
    </button>
  )
}

export default Shuffle