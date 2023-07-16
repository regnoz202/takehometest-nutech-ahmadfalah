import React from 'react'

export default function Button(props) {
  return (
    <div>
     <button className="m-5 mt-10 btn btn-neutral" onClick={props.click}>{props.string}</button>
    </div>
  )
}
