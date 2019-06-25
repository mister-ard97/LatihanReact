import React from 'react';
import { Table } from 'reactstrap';
import { ModalEdit } from './components/ModalsEdit';

class Todo extends React.Component {

    /* setState akan */

    state = {
        data : [],
        selected: null
    }

    onBtnAddClick = () => {
        //Mendapatkan value dari text dengan refs
        var todo = this.refs.Todo.value;
        var waktu = this.refs.Date.value;
        var arr = [];

        if(todo === '' || waktu === '') {
            if(todo === '') {
                alert('Todo tidak boleh kosong');
            } else if(waktu === ''){
                alert('Tanggal tidak boleh kosong');
            } else {
                alert('Todo dan Tanggal tidak boleh kosong');
            }
        } else {
            var obj = {
                todo,
                waktu
            }

            arr.push(obj);

            //gabungkan array data yang kosong dengan arr yang sudah terisi dengan 
            this.refs.Todo.value = '';
            this.refs.Date.value = '';
            this.setState({ data: this.state.data.concat(arr) });
        }
    }

    onBtnDelete = (index) => {
        var confirmDelete = window.confirm('Apakah anda ingin menghapus data ini?')
        if(confirmDelete) {
            var array = this.state.data;
            array.splice(index, 1);
            this.setState({data: array});
        }
       
    }

    onBtnEdit = (index) => {
        this.setState({selected: index})
    }

    onBtnSave = (index, todoEdit, dateEdit) => {
        var confirmEdit = window.confirm('Apakah anda ingin menyimpan perubahan data?')
        var arr = this.state.data;
        var todoEdit = todoEdit;
        var dateEdit = dateEdit; 

        if(confirmEdit) {
            if (todoEdit === '' || dateEdit === '') {
                this.setState({ data: arr, selected: null });
            } else {
                arr[index].todo = todoEdit;
                arr[index].waktu = dateEdit;
                this.setState({ data: arr, selected: null });
            }
        } else {
            this.setState({ date: arr, selected: null });
        }
    }

    onPrintTodo = () => {
        //array data harus dilooping dengan method map
        var result = this.state.data.map((value, index) => {
            if(this.state.selected === index) {
                return (
                    // <tr key={index}>
                    //     <td>{index + 1}</td>
                    //     <td>
                    //         <input type='text' className='form-control' ref='TodoEdit' defaultValue={value.todo}/>
                    //     </td>
                    //     <td>
                    //         <input type='date' className='form-control' ref='DateEdit' defaultValue={value.waktu}/>
                    //     </td>
                    //     <td>
                    //         <input type='button' className='btn btn-success' value='Edit' onClick={() => this.onBtnSave(index)} />
                    //     </td>
                    //     <td>
                    //         <input type='button' className='btn btn-info' value='Delete' onClick={() => this.setState({selected: null})} />
                    //     </td>
                    // </tr>
                    <ModalEdit onBtnSave={this.onBtnSave} data={this.state.data} index={this.state.selected}/>
                )
            }
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.todo}</td>
                    <td>{value.waktu}</td>
                    <td>
                        <input type='button' className='btn btn-primary' value='Edit' onClick={this.onBtnEdit.bind(this, index)}/>
                    </td>
                    <td>
                        <input type='button' className='btn btn-danger' value='Delete' onClick={this.onBtnDelete.bind(this, index)}/>
                    </td>
                </tr>
            )
        });
        return result;
    }

    render() {
        return (
            <div>
                <h1>CRUD Todo App</h1>
                <Table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Todo</td>
                            <td>Waktu</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                       {this.onPrintTodo()}
                    </tbody>
                </Table>

                <div className='row'>
                    <div className='col-md-4'>
                        <input type='text' className='form-control' placeholder='masukkan todo' ref='Todo'/>
                    </div>
                    <div className='col-md-4'>
                        <input type='date' className='form-control' ref='Date'/>
                    </div>
                    <div className='col-md-4'>
                        <input type='button' className='form-control btn btn-success' value='Add' onClick={this.onBtnAddClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo