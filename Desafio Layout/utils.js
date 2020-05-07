
module.exports = {
     encontrarIdade: function (timestamp) {

        const today = new Date();
    
        const birthDate = new Date(timestamp);
        
        let age = today.getFullYear() - birthDate.getFullYear();
       
        const month = today.getMonth() - birthDate.getMonth();
    
        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1;
        }
    
        return age;    
    },

    encontrarData: function(timestamp){

        const data = new Date(timestamp);

        const ano = data.getUTCFullYear();
        const mes = `0${data.getUTCMonth() + 1}`.slice(-2);
        const dia = `0${data.getUTCDate()}`.slice(-2);


        return `${ano}-${mes}-${dia}`;
        
    }
}