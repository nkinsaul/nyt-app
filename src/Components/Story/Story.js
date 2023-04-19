import React from "react";

const Story = ({title, abstract, pictures}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={pictures[1].url}/>
    </div>
  )
}

export default Story