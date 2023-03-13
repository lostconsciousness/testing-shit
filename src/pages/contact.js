import React from 'react';

let a = []
  
const Contact = () => {
    for(let i = 0; i < 5; i++){
        a[i] =  (
            <div>
              <h1>Mail us on feedback@geeksforgeeks.org</h1>
            </div>
          );
    }
    return a;
};
  
export default Contact;