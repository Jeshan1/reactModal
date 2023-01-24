

const Modal = ({setShowModal}) => {
    const modalHandel = () => {
       setShowModal(false);
    }
    return(
        <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="mx-[40%] my-[15%] px-10 py-5 rounded-xl bg-slate-300">
            <p className="text-justify">
                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want.
            </p>
            <button onClick={modalHandel} className="bg-red-600 text-white rounded-xl px-4 py-2 text-xl font-bold my-2">Close Modal</button>
            </div>
        </div>
        </>
    )
}
export default Modal;