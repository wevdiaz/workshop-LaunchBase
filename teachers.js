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