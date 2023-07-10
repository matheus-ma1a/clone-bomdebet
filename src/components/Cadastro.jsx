import React from 'react'

function Cadastro() {

  
  return ( 
    <div>
      <form>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
   );
}

export default Cadastro;