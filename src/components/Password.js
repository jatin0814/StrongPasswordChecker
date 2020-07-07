import React from 'react';


const Password = (props) =>{
    
    const style = {
        'width':'20%',
        'margin':"120px auto 10px",
        'padding':'120px',
        'boxShadow': '0 4px 8px #ccc',
        'border':'2px solid #eee',
        'backgroundColor':''
    }
    const inputStyle={
            'border':'1px solid #aaa',
            'outline':'none',
            'padding':'10px 20px',
            'margin':'4px'
    }
    const listStyle = {
        'width':'35%',
        'margin':"auto",
        'fontWeight':'500'
    }
    const buttonStyle = {
        'backgroundColor':'lightblue',
        'border':'1px solid #aaa',
        'outline':'none',
        'padding':'6px 29px',
    }
    return(
    <div>
    <div style={style}>
        <input style= {inputStyle} type="text" placeholder="Username"/><br/>
        <input style= {inputStyle} type="password" onChange={props.onChange} placeholder="Password"/><br/>
        <button style={buttonStyle}>Login</button>
    </div>
    <div style={listStyle}>
        <li className={props.classes[0]}>Password Length must greater than or equla to 8</li>
        <li className={props.classes[1]}>Password must contain atleast one special character</li>
        <li className={props.classes[2]}>Password contain atleast one UPPERCASE character or a Number</li>
    </div>
    </div>
    )
}

export default Password; 