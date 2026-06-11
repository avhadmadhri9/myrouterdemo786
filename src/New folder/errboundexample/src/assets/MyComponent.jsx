import React, { useState } from 'react'

function MyComponent() {
     const[data,setData] = useState(0);
    if(data ==0)
    {
        throw new error("Custome Error")
    }

  return (
    <div>
      <h1>Welcome To My Component</h1>
    </div>
  )
}

export default MyComponent
