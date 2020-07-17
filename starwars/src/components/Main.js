import React from 'react'
import Character from '../components/Character'

const Main = (props) => {
  // console.log(props.data)
  const data = props.data
console.log(data)
  return (
    <div className='Main-Container'>
      <div>
        {/* {data.forEach(data => {
        return data.name
        }) */}
      {/* } */}
      <Character data={data} />
      </div>

    </div>
  )
}

export default Main