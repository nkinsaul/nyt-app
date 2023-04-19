import React from "react";

const Story = ({title, abstract}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{abstract}</h2>
    </div>
  )
}

export default Story