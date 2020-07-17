import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .card {
      border: 1px solid black;
      width: 70%;
      margin: 2%;
    }
`



const Character = (props) => {
  console.log(props)
  const data = props.data
  // const data = props.data
  
  return (
    <StyledCard className='card-container'>
      <div className='card'>
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
    </StyledCard>
  )
}

export default Character