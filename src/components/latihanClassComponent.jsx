import React from "react";
//Library React mengexport sebuah object

// Class Component
// Keunggulan menggunakan Class Component 
//  - LIFECYCLE METHOD = render
//  - STATE MANAGEMENT

// PROPS adalah Mekanisme Transfer data dari Parent ke Child
//   -- cara menggunakan PROPS
//      untuk memanggil variable kita menggunakan {} = {this.props.nama}

// Dengan menggunakan PROPS maka kita bisa menggunakan component yang sama namun value yang berbeda


const styleButton = {
    margin: '10px',
    border: '1px solid red',
    width: '100px',
    textAlign: 'center'

};

export class Latihan extends React.Component {
    render() {
        return(
            <div style={styleButton}>
                {this.props.content}
            </div>
        );
    }
}