const { encontrarIdade, encontrarData } = require("../../lib/utils");
const intl = require("intl");

module.exports = {
    index(req, res){

        // const teachers = dado.teachers.map(function(teacher){
        //     const teacherMaterias = {
        //         ...teacher,
        //         materias: teacher.materias.split(",")
        //     }
    
        //     return teacherMaterias;
        // });
    
    
        return res.render("teachers/index");
    },
    show(req, res){
        return
    },
    create(req, res){
        return res.render("teachers/create");
    },
    post(req, res){

        const keys = Object.keys(req.body);

        for (key of keys) {
        
            if (req.body[key] == "") {
                return res.send("Campo em branco, preencha!");
            }
        }

        return    
    
    },
    edit(req, res){
        return
    },
    put(req, res){

        const keys = Object.keys(req.body);

        for (key of keys) {
        
            if (req.body[key] == "") {
                return res.send("Campo em branco, preencha!");
            }
        }

        return   
    },
    delete(req, res){
        return
    },
}


// ajuste form => Modalidade
function escolherModalidade(opcao){
    
    if(opcao == "presencial"){
        return "Presencial"
    }
    else {
        return "A distânca"
    }
}


// ajuste form => Formação
function escolhaDaFormacao(escolha){

    switch(escolha) {
        
        case "medio":
           return escolha = "Ensino Médio Completo";
            


        case "superior":
           return escolha = "Ensino Superior Completo";
            


        case "mestrado":
           return escolha = "Mestrado";
            


        case "doutorado":
           return escolha = "Doutorado";
            
    }
}
