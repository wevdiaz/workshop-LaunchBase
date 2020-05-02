const fs = require("fs");
const dado = require("./dados.json");


// create 

exports.post = function(req, res) {
    
    const keys = Object.keys(req.body);

    for (key of keys) {
        
        if (req.body[key] == "") {
            return res.send("Campo em branco, preencha!");
        }
    }
     

    req.body.nascimento = Date.parse(req.body.nascimento);
    req.body.created_at = Date.now();
    req.body.id = Number(dado.teachers.length + 1);

    const { id, avatar_url, nome, nascimento, formacao, modalidade, materias, created_at } = req.body;
    
    dado.teachers.push(
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

        return res.redirect("/teachers");
    });

     //return res.send(req.body);
}


// show

exports.show = function(req, res) {
    
    const { id } = req.params;

    const foundTeacher = dado.teachers.find(function(teacher){
        return teacher.id == id;
    });

    if (!foundTeacher) {
        return res.send("Teacher not found!");
    }


    const teacher = {
        ...foundTeacher,
        idade:"",
        formacao:"",
        modalidade: escolherModalidade(foundTeacher.modalidade),
        materias: foundTeacher.materias.split(","),
        created_at:""
    }

    return res.render("teachers/show", { teacher });
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
