import React from "react";
import { useContext } from "react";
import DummyContext from "../store/store";

function Demo() {

  const store = useContext(DummyContext);
  // return (
  //   <DummyContext.Consumer>
  //     {(ctx) => <div>{ctx.fullName}</div>}
  //   </DummyContext.Consumer>
  // );

  return (
    <div>{store.fullName} {store.age}</div>
  )
}

export default Demo;
