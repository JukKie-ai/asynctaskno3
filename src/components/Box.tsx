import React from 'react'

type MyCompType = {
    value: string
}

export const Box = (props: MyCompType) => {
  return (
    <div style={{backgroundColor: props.value}}>
        <p></p>
    </div>
  )
}