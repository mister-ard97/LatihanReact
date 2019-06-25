import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    // PR = Edit dengan Modal
    render() {
        const todoEdit = this.props.data[this.props.index].todo;
        const dateEdit = this.props.data[this.props.index].waktu;
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Data ke {this.props.index + 1}</ModalHeader>
                    <ModalBody>
                        <div className='form-group'>
                            <label>Todo</label>
                            <input type="text" className='form-control' ref="TodoEdit" defaultValue={todoEdit} />
                            <label>Waktu</label>
                            <input type="date" className='form-control' ref="DateEdit" defaultValue={dateEdit} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.props.onBtnSave(this.props.index, this.refs.TodoEdit.value, this.refs.DateEdit.value)}>Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}