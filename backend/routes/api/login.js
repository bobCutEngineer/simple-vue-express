const crypto = require('crypto');


var login = function (req,res) {
    let inputUsername = req.body.username;
    let inputPassword = req.body.password;
    let salt = '42qrwjesd98ou203weuafmdvp0';
    let hashedPassword = crypto.createHash('SHA512').update(inputPassword + salt).digest("hex");

    let user_info = {
        username: inputUsername,
        password: hashedPassword,
        salt: salt,
        isExist: function(){
            return true;
        }
    }
    console.log(user_info);
    if(user_info.isExist()){
        res.send('isExist')
        console.log('denied for aleady existing')
        return
    }

    res.send('');
}

module.exports = login;