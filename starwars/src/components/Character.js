import React from 'react'

const Character = (props) => {
  console.log(props)
  const data = props.data
  // const data = props.data
  
  return (
    <div className='card-container'>
      <div className='title' >
        {`Name: ${data.name}`}
      </div>
      <div className='species'>
        {`Species: ${data.species}`}
      </div>
      <div className='status'>
      {`Status: ${data.status}`}
      </div>
      <div className='image'>
      <img src={data.image}/>
      </div>
    </div>
  )
}

export default Character