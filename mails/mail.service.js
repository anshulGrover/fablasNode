var nodemailer=require('nodemailer');

const sendVendor=(data) => {
    return new Promise((resolve, reject) => {
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
          var mailBody=`Full Name : ${data.fullName}\nBusiness Name : ${data.businessName}\nBusiness Address : ${data.businessAddress}\nCity : ${data.city}\nCountry : ${data.city}\nPrimary Business Type : ${data.permanentBusinessType}\nWebsite : ${data.website}`;
          var mailOptions={
              from:"info@fablas.co.in",
              to:"stackdesignerkush@gmail.com",
              subject:"From Vendor api",
              text:mailBody
          }
          transporter.sendMail(mailOptions,function(error,info){
              if(!error){
                resolve('Email sent: ' + info.response);
              }
              else{
                  reject(error);
              }
          })     
    })
}

module.exports={
    sendVendor
};