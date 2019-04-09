var nodemailer=require('nodemailer');

const sendVendor=(data) => {
    return new Promise((resolve, reject) => {
        var transporter =  nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth: { 
              user: "anuanshul.grover@gmail.com",
              pass: "janakgrover"
            }
          });
          var mailBody=`Full Name : ${data.fullName}\nBusiness Name : ${data.businessName}\nBusiness Address : ${data.businessAddress}\nCity : ${data.city}\nCountry : ${data.city}\nPrimary Business Type : ${data.permanentBusinessType}\nWebsite : ${data.website}`;
          var mailOptions={
              from:"anuanshul.grover@gmail.com",
              to:"anshul1601.grover@gmail.com",
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