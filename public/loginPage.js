"use strict"


let user = new UserForm();

user.loginFormCallback = function(data) {
    ApiConnector.login(data, (res) => {
        if(res.success == true){
            location.reload()
        } else {
            console.error(res.error)
        }
    })
}

user.registerFormCallback = function(data){
    ApiConnector.register(data, (res) => {
        console.log(res.success)
        if(callback.success == false){
            console.error(callback.error)
        } else {
            location.reload()
        }
    })
}

