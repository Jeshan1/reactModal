import React, { useState } from "react";
import './index.css';
import Modal from "./components/Modal";

const App = () => {
  
  const [showModal,setShowModal] = useState(false);

  return(
    <>
    
      <div className="mx-10 my-10">
        <button onClick={()=>setShowModal(true)} className="bg-blue-600 text-white font-bold text-xl px-4 py-2 rounded-xl">Open Modal</button>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  )
}
export default App;