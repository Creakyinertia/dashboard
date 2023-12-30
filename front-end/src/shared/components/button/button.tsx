import React from 'react'

type buttonprops = {
    title: string,
    onclickfn: Function
}
const button = (props : buttonprops) => {
  return (
    <div>
        <button>{props.title}</button>
    </div>
  )
}

export default button