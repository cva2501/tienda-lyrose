const INITIAL_STATE = {


 sections: [
        {
            title: 'leggins ',
            imageSrc: 'https://i.ibb.co/5MRHVxm/leggins.jpg',
            id: 1,
            linkUrl: 'shop/leggins'
    
          }, 
          {
            title: 'pantalones',
            imageSrc: 'https://i.ibb.co/PQ6D8cz/Whats-App-Image-2021-01-18-at-1-40-54-AM.jpg',
            id: 2,
            linkUrl: 'shop/pantalones'
          }
        
      
      ] 



}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;