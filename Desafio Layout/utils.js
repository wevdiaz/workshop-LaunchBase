
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


        return {
            dia,
            mes,
            ano,
            iso:`${ano}-${mes}-${dia}`,
            birthDay: `${dia}/${mes}`
        };
        
    },

    grade: function(escolha){

        switch(escolha) {
            
            case "5":
               return escolha = "5º ano do Ensino Fundamental";            
    
    
            case "6":
               return escolha = "6º ano do Ensino Fundamental";            
    
    
            case "7":
               return escolha = "7º ano do Ensino Fundamental";           
    
    
            case "8":
               return escolha = "8º ano do Ensino Fundamental";
    
    
            case "9":
                return escolha = "9º ano do Ensino Fundamental";
    
    
            case "1":
                return escolha = "1º ano do Ensino Médio"; 
    
            
            case "2":
                return escolha = "2º ano do Ensino Médio";
        
        
            case "3":
                return escolha = "3º ano do Ensino Médio";
                
        }
    }
}