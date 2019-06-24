import React from 'react';

export class Children extends React.Component {
    render() {
        return (
            <div style={{border: '1px solid black', backgroundColor: 'orange', width: '100%', textAlign: 'center', marginBottom: '20px'}}>
                {this.props.children}
            </div>
        )
    }
}