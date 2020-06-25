const { encontrarIdade, encontrarData } = require("../../lib/utils");
const intl = require("intl");

module.exports = {
    index(req, res){

        // const students = dado.students.map(function(student){
        //     const studentMaterias = {
        //         ...student,
        //         materias: student.materias.split(",")
        //     }
    
        //     return studentMaterias;
        // });
    
    
        return res.render("students/index");
    },
    show(req, res){
        return
    },
    create(req, res){
        return res.render("students/create");
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


