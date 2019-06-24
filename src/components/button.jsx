//  FUNCTIONAL COMPONENT
import React from 'react';

export function Button () {
    return(
       <input type='button' value='Submit'/>
    );
}

export function Inputan () {
    return (
        <input type="text" placeholder='Ketik Nama Anda'/>
    );
}

// - Ada dua macam Export

// -- Export Default = Hanya bisa mengexport satu komponen,
// export default Button;

// -- Export Named = bisang mengexport banyak komponen ketika di depan function/classnya kita ketik export seperti contoh di atas

//  CLASS COMPONENTS
//   - Lebih diutamakan untuk menggunakan Class Component, karena lebih banyak fiturnya dibandingkan Function Component

// Flow untuk menggunakan React 
// Buat Component -> EXPORT JSXnya -> Import ke App.js -> Lalu pasang component di function App