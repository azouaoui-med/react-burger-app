import React, { Fragment } from 'react';
import BackDrop from '../Backdrop/Backdrop';

const modal = props => (
  <Fragment>
    <BackDrop show={props.show} clicked={props.closeModal} />
    <div
      className={props.show ? 'modal fade show' : 'modal fade'}
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-modal='true'
      style={{
        display: props.show ? 'block' : 'none'
      }}
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {props.title}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={props.closeModal}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{props.children}</div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
              onClick={props.closeModal}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={props.order}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default modal;
