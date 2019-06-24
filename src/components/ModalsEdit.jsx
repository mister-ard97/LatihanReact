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

    onBtnSave = (index) => {
        var arr = this.props.data;
        var todoEdit = this.refs.TodoEdit.value;
        var dateEdit = this.refs.DateEdit.value;

        if (todoEdit === '' || dateEdit === '') {
            this.setState({ date: arr, selected: null });
        } else {
            arr[index].todo = todoEdit;
            arr[index].waktu = dateEdit;
            this.setState({ data: arr, selected: null });
        }
    }
    // PR = Edit dengan Modal
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Data</ModalHeader>
                    <ModalBody>
                        Data Todo <br/>
                        <input type="text" className='form-control' ref="TodoEdit" defaultValue={this.props.data[this.props.index].todo}/>
                        Data Waktu <br />
                        <input type="date" className='form-control' ref="DateEdit" defaultValue={this.props.data[this.props.index].waktu} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.onBtnSave(this.props.index)}>Save</Button>{' '}
                        <Button color="secondary" onClick=''>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}