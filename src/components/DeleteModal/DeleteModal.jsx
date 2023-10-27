import './DeleteModal.css'; 

function DeleteModal(props) {
  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete?</p>
        <div className='modal-buttons'>
          <button className='cancel-button' onClick={props.onCancel}>Cancel</button>
          <button className='confirm-button' onClick={props.onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
