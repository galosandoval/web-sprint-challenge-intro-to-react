import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .card {
      border: 1px solid black;
      width: 75%;
      margin: 2%;
      display: flex;
    }
    .image img {
      border-radius: 20px;
      margin: 2%;
      left: 20%;
    }
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
`



const Character = (props) => {
  console.log(props)
  const data = props.data
  
  return (
    <StyledCard className='card-container'>
      <div className='card'>
        <div className='text-container'>
          <div className='title' >
            {`Name: ${data.name}`}
          </div>
        <div className='species'>
          {`Species: ${data.species}`}
         </div>
        <div className='status'>
          {`Status: ${data.status}`}
        </div>
        </div>
        <div className='image'>
          <img src={data.image}/>
        </div>
      </div>
    </StyledCard>
  )
}

export default Character