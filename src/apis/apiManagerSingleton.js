import apiManager from 'root/apis'

const apiManagerSingleton = (function(){
  var apiManagerInstant;
  return {
    getInstance: function(){
      // check if instance is available
      if (!apiManagerInstant) {
        apiManagerInstant = apiManager();
        // delete instance.constructor; // or set it to null
      }
      return apiManagerInstant;
    }
  };
})();

export default apiManagerSingleton;