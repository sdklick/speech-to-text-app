import React, { useState } from "react";

const Myform = () => {
  const [data, setdata] = useState();

  const handelinput=(v)=>{
    let a=v.target.value
    setdata(a)

  }

  const handelsubmit=(event)=>{
  event.preventDefault()
  console.log(data);

  }

  return (
    <form onSubmit={handelsubmit}>
      <input type="text" name="uname" value={data} onChange={handelinput} />
      <input type="submit" />
    </form>
  );
};

export default Myform;
