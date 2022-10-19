const eventBus = {
    on(event, callback) {
      document.addEventListener(event, (e) => callback(e.detail));
      document.removeEventListener(event, callback);
    },
    dispatch(event, data) {
      document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event, callback) {
        
    },
  };
  
  export default eventBus;