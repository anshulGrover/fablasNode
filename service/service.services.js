var db =require("../bone_helpers/bone.db") ;
const Service =db.Service;
//getServices
const getServices=() => {
    return new Promise((resolve,reject) => {
        //getting all services
        Service.find().then((success) => {
            resolve(success);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports={
    getServices
};