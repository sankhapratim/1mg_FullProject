const User=require("../Mongo/usermongo")
var jwt = require('jsonwebtoken');

const axios=require("axios")

async function getTokens1({code,
    clientId,
    clientSecret,
    redirectUri}){
        return axios
        .post("https://oauth2.googleapis.com/token",{},{
            params:{
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: "authorization_code",
            }
  
        })
        .then((res) => {
            return res.data
        })
        .catch((error) => {
          console.error(`Failed to fetch auth tokens`);
          throw new Error(error.message);
        });
  }


  async function mydata(id_token,access_token){
    const googledata= await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,{
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
  )
  .then((res) => {console.log(res.data,"1111111111111111")
return res.data})
  .catch((error) => {
    console.error(`Failed to fetch user`);
    throw new Error(error.message);
  });
console.log(googledata,"2222222222222222")

let token=jwt.sign({name:googledata.name,username:googledata.given_name,role:"Admin"},"SUPER123",{
    expiresIn:"2h"
})

let refreshToken=jwt.sign({name:googledata.name,username:googledata.given_name,role:"Admin"},"SUPER123",{
    expiresIn:"5h"
})

let search=await User.findOne({username:googledata.given_name})
if(search)
{
    await User.updateOne({username:googledata.given_name},{$set:{token:token,refreshToken:token}})
    let data=await User.findOne({username:googledata.given_name})
    // return res.redirect(`http://localhost:3000/afterOuth/${data._id}`)
    return data
}
const data= new User({
    name:googledata.name,
    username:googledata.given_name,
    token:token,
    refreshToken:refreshToken,
})

await data.save()
console.log(data,"now comes local")
console.log(data._id,"this should be id")
console.log(data.token,"this should be token")
console.log(data.refreshToken,"this should be refresh token")

return data
  }

  module.exports={getTokens1,mydata}