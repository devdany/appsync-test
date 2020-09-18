exports.handler = async (event, context, callback) => {
   switch(event.field) {
       case "getDany":
           callback(null, 'Dany');
           break;
       default:
           callback("Unknown field, unable to resolve" + event.field, null);
           break;
   }
};
