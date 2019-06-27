import React, { Component, Fragment } from 'react';
import BackDrop from '../Backdrop/Backdrop';

class modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Fragment>
        <BackDrop show={this.props.show} clicked={this.props.closeModal} />
        <div
          className={this.props.show ? 'modal fade show' : 'modal fade'}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-modal='true'
          style={{
            display: this.props.show ? 'block' : 'none'
          }}
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  {this.props.title}
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={this.props.closeModal}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>{this.props.children}</div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                  onClick={this.props.closeModal}
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={this.props.order}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default modal;
