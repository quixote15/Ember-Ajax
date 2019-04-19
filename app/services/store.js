
import Service from '@ember/service';
import {inject as service} from '@ember/service';
import EmberObject from '@ember/object';
export default Service.extend({

    ajax: service(),

    find(model, id) {
  
      const resourcePath = model;
  
      return this.get('ajax')
        .request(`https://swapi.co/api/${resourcePath}/${id}`)
        .then(response =>{
            
            return response;
           
        });
  
    },


    findAll(model) {
  
        const resourcePath = model;
    
        return this.get('ajax')
          .request(`https://swapi.co/api/${resourcePath}/`)
          .then(response =>{
              
              return response.results;
             
          });
    
      }


});
