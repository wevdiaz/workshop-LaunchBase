const fs = require("fs");
const dado = require("../dados.json");
const { encontrarIdade, encontrarData } = require("../utils");
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
    req.body.created_at = Date.now();
    req.body.id = Number(dado.students.length + 1);

    const { id, avatar_url, nome, nascimento, formacao, modalidade, materias, created_at } = req.body;
    
    dado.students.push(
        {id,
        avatar_url,
        nome,
        nascimento,
        formacao,
        modalidade,
        materias,
        created_at}
    );


    fs.writeFile("dados.json", JSON.stringify(dado, null, 2), function(err){
        if (err) return res.send("write file error!");

        return res.redirect("/students");
    });

     //return res.send(req.body);
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
        formacao:escolhaDaFormacao(foundStudent.formacao),
        modalidade: escolherModalidade(foundStudent.modalidade),
        materias: foundStudent.materias.split(","),
        created_at: new intl.DateTimeFormat("pt-BR").format(foundStudent.created_at)
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
