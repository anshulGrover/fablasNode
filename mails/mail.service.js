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
              to:"anshul1601.grover@gmail.com",
              subject:"Vendor form",
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

const sendDistributor=(data) => {
    return new Promise((resolve, reject) => {
        if(data.fullName===undefined||data.companyName===undefined||data.companyAddres===undefined||data.mobile===undefined||data.email===undefined||data.city===undefined||data.country===undefined||data.investmentRange===undefined||data.website===undefined||data.aboutYou===undefined){            
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
          var mailBody=`Full Name : ${data.fullName}\nCompany Name : ${data.companyName}\nCompany Address : ${data.companyAddres}\nMobile : ${data.mobile}\nEmail : ${data.email}\nCity : ${data.city}\nCountry : ${data.country}\nInvestment Range : ${data.investmentRange}\nWebsite : ${data.website}\nAbout you : ${data.aboutYou}`;
          var mailOptions={
              from:"info@fablas.co.in",
              to:"anshul1601.grover@gmail.com",
              subject:"Distributor Form",
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

const sendJobSeeker=(data) => {
    return new Promise((resolve, reject) => {
        if(data.fullName===undefined||data.mobile===undefined||data.email===undefined||data.applyingFor===undefined||data.message===undefined){            
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
          var mailBody=`Full Name : ${data.fullName}\nMobile : ${data.mobile}\nEmail : ${data.email}\nApplying For : ${data.applyingFor}\nMessage : ${data.message}`;
          var mailOptions={
              from:"info@fablas.co.in",
              to:"anshul1601.grover@gmail.com",
              subject:"Job seeker form",
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
const sendContactUs=(data) => {
    return new Promise((resolve, reject) => {
        if(data.name===undefined||data.email===undefined||data.message===undefined){            
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
          var mailBody=`Full Name : ${data.name}\nEmail : ${data.email}\nMessage : ${data.message}`;
          var mailOptions={
              from:"info@fablas.co.in",
              to:"digital@fablas.com",
              subject:"Contact Us form",
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
    sendVendor,sendDistributor,sendJobSeeker,sendContactUs
};