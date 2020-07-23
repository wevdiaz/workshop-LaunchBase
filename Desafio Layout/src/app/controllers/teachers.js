const { encontrarIdade, encontrarData } = require("../../lib/utils");
const intl = require("intl");

const db = require("../../config/db");
const teacher = require("../models/teacher");


module.exports = {
    index(req, res){

        // 
        teacher.all(function(teachers) {

            const teachersIndex = teachers.map(function(teacher){
                    const teachersubjects = {
                        ...teacher,
                        subjects_taught: teacher.subjects_taught.split(",")
                    }
            
                    return teachersubjects;
                });

            return res.render("teachers/index", { teachers: teachersIndex });
        }); 
                
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
        
        teacher.create(req.body, function(teacher){
            return res.redirect(`/teachers/${teacher.id}`);
        });
        
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
