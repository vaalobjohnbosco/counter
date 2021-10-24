import React from 'react';

const Count = props => {
    let styles;
    if(props.counter === 0 ) {
        styles = {
            color : 'red'
        }
    }
    else if(props.counter >= 1 && props.counter <= 10){
        styles={
            color: 'orange',
        }
    }
    else if(props.counter >= 11 && props.counter <= 50){
        styles={
            color: 'green'
        }
    }
    else if(props.counter >= 51 && props.counter <= 100){
        styles={
            color: 'blue'
        }
    }
    return(
        <div>
          <h2 style={styles}>{props.counter}</h2>
        </div> 
    );
};
export default Count;