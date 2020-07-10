const parametros ={
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 800,  
      }
    }  
  }
}



const initialState = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      SignedIn: false,
      User: {
      id: '',
      name: '',
      lastname: '',
      email: '',
      entries: 0,
      joined: '', 
    }
  }

export  { parametros, initialState };

