"use strict"


let btn = new LogoutButton();

btn.action = function(){
    ApiConnector.logout((res) => {
        if (res.success){
            location.reload()
        }
    })
}

ApiConnector.current((res)=>{
    if(res.success){
        ProfileWidget.showProfile(res.data)
    }
})

let currency =  new RatesBoard();

function table (){
    ApiConnector.getStocks((res) => {
        if(res.success){
            currency.clearTable();
            currency.fillTable(res.data);
        }
    })
}
table()
setInterval(table, 60000)


let mon = new MoneyManager();


mon.addMoneyCallback = function (data){
    ApiConnector.addMoney(data, (res) => {
        location.reload()
        showMessage(res);

    })
}

mon.conversionMoneyCallback =  function(data){
    ApiConnector.convertMoney(data, (res) => {
        location.reload()
        showMessage(res);

    })
}


mon.sendMoneyCallback = function(){
    ApiConnector.transferMoney(data, (res)=> {
        location.reload()
        showMessage(res);
    })
}


let fov = new FavoritesWidget();

function list(res){
    fov.clearTable();
    fov.fillTable(res.data);
    mon.updateUsersList(res.data)
}

ApiConnector.getFavorites((res)=>{
    if(res.success){
        list(res);
    }
})


fov.addUserCallback = function(data){
    ApiConnector.addUserToFavorites(data, (res)=> {
        if(res.success){
            list(res);
            fov.setMessage(true, String(`${data.name} успешно добавлен`));
        }else{
            fov.setMessage(false, String(response.error));
        }
        
    })
}

fov.removeUserCallback = function(data){
    ApiConnector.removeUserFromFavorites(data, (res)=> {
        if(res.success){
            list(res);
            fov.setMessage(true,String(`адрес с ID ${data} успешно удален`));
        }else{
            fov.setMessage(false,String(response.error));
        }
    })
}
