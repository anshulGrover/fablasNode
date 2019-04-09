var nodemailer=require('nodemailer');

const sendVendor=(data) => {
    return new Promise((resolve, reject) => {
        if(data.fullName===undefined||data.businessName===undefined||data.businessAddress===undefined||data.city===undefined||data.country===undefined||data.permanentBusinessType===undefined||data.website===undefined){            
            reject("Unable to process your request. Please try again with all fields!");
        }
        else{
        var transporter =  nodemailer.createTransport({
            host:"166.62.10.188",
            port:587,
            secure:false,
            tls: {
                rejectUnauthorized:false
            },
            auth: { 
              user: "info@fablas.co.in",
              pass: "Summer@69"
            }
          });
          var mailBody=`Full Name : ${data.fullName}\nBusiness Name : ${data.businessName}\nBusiness Address : ${data.businessAddress}\nCity : ${data.city}\nCountry : ${data.country}\nPrimary Business Type : ${data.permanentBusinessType}\nWebsite : ${data.website}`;
          var mailOptions={
              from:"info@fablas.co.in",
              to:"stackdesignerkush@gmail.com",
              subject:"From Vendor api",
              text:mailBody
          }
          transporter.sendMail(mailOptions,function(error,info){
              if(!error){
                resolve("Thanks for your input. Will get back to you shortly");
              }
              else{
                  reject(error);
              }
          })
        }     
    })
}

module.exports={
    sendVendor
};