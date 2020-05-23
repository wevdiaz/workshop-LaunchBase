const fs = require("fs");
const dado = require("../dados.json");
const { encontrarIdade, encontrarData, grade } = require("../utils");
const intl = require("intl");


// index
exports.index = function(req, res){

    
    return res.render("students/index", { students: dado.students });
}


// create
exports.create = function(req, res){
    return res.render("students/create");
}

// post 

exports.post = function(req, res) {
    
    const keys = Object.keys(req.body);

    for (key of keys) {
        
        if (req.body[key] == "") {
            return res.send("Campo em branco, preencha!");
        }
    }     

    req.body.nascimento = Date.parse(req.body.nascimento);     

    const {              
            avatar_url, 
            nome,
            email, 
            nascimento, 
            anoEscolar, 
            cargaHoraria
         } = req.body;

    let id = 1;     
    const lastStudent = dado.students[dado.students.length - 1];

    if (lastStudent) {
        id = lastStudent.id + 1;
    }
    
    dado.students.push(
        {
            id,
            avatar_url,
            nome,
            email,
            nascimento,
            anoEscolar,
            cargaHoraria,
        }
    );

    fs.writeFile("dados.json", JSON.stringify(dado, null, 2), function(err){
        if (err) return res.send("write file error!");

        return res.redirect("/students");
    });
     
}

// show

exports.show = function(req, res) {
    
    const { id } = req.params;

    const foundStudent = dado.students.find(function(student){
        return student.id == id;
    });

    if (!foundStudent) {
        return res.send("Student not found!");
    }
    
    const student = {
        ...foundStudent,
        idade: encontrarIdade(foundStudent.nascimento),
        anoEscolar:grade(foundStudent.anoEscolar)       
        
    }

    return res.render("students/show", { student });
}


// edit

exports.edit =  function(req, res){

    const { id } = req.params;

    const foundStudent = dado.students.find(function(student){
        return student.id == id;
    });

    if (!foundStudent) {
        return res.send("Student not found!");
    }

    const student = {
        ...foundStudent,
        nascimento: encontrarData(foundStudent.nascimento)
    }

    

    return res.render("students/edit", { student });
}


// put
exports.put = function(req, res){

    const { id } = req.body;
    let index = 0;

    const foundStudent = dado.students.find(function(student, foundIndex){
        if (id == student.id) {
            index = foundIndex
            return true;
        }
    });

    if (!foundStudent) return res.send("Student not found!");

    const student = {
        ...foundStudent,
        ... req.body,
        nascimento: Date.parse(req.body.nascimento),
        id: Number(req.body.id)        
    }

    dado.students[index] = student;

    fs.writeFile("dados.json", JSON.stringify(dado, null, 2), function(err){
        if (err)  return res.send("write error!");

        return res.redirect(`/students/${id}`);
    });
}

// delete
exports.delete = function(req, res) {
    const { id } = req.body;

    const filteredStudents = dado.students.filter(function(student){
        return student.id != id
    });

    dado.students = filteredStudents;

    fs.writeFile("dados.json", JSON.stringify(dado, null, 2), function(err){
        if(err) return res.send("Write file error!");

        return res.redirect("/students");

    });

}

