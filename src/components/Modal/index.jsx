
const Modal = ({ children, open, title,mmodalClass, closeModal }) => {
	return (
		open && <div className={`modal ${mmodalClass}`}>
			<div className='modal-container container'>
				{title && <div className="modal-container-header-title">
					{title}
				</div>}
				{children}
			</div>
		</div>
	)
}

export default Modal
