var nodemailer=require('nodemailer');

const sendVendor=(data) => {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'anshul1601.grover@gmail.com',
              pass: 'anshul123#'
            }
          });
          var mailBody=`Full Name : ${data.fullName}\nBusiness Name : ${data.businessName}\nBusiness Address : ${data.businessAddress}\nCity : ${data.city}\nCountry : ${data.city}\nPrimary Business Type : ${data.permanentBusinessType}\nWebsite : ${data.website}`;
          var mailOptions={
              from:'anshul1601.grover@gmail.com',
              to:'stackdesignerkush@gmail.com',
              subject:'From Vendor api',
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