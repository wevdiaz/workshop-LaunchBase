const { encontrarData, grade } = require("../../lib/utils");
const intl = require("intl");

const db = require("../../config/db");
const student = require("../models/student");


module.exports = {
    index(req, res){

        // 
        student.all(function(students) {

            const studentsIndex = students.map(function(student){
                    const studentsubjects = {
                        ...student,
                        subjects_taught: student.subjects_taught.split(",")
                    }
            
                    return studentsubjects;
                });

            return res.render("students/index", { students: studentsIndex });
        }); 
                
    },
    show(req, res){
        
        student.find(req.params.id, function(student){
            if (!student) return res.send("Student not found!");

            student.birth_date = encontrarData(student.birth_date).birthDay;
            student.grade = grade(student.grade);

            return res.render("students/show", { student });
        });
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
        
        student.create(req.body, function(student){
            return res.redirect(`/students/${student.id}`);
        });
        
    },
    edit(req, res){
        
        student.find(req.params.id, function(student){
            if (!student) res.send("Student not found!");

            student.birth_date = encontrarData(student.birth_date).iso;

            return res.render("students/edit", { student });
        });
    },
    put(req, res){

        const keys = Object.keys(req.body);

        for (key of keys) {
        
            if (req.body[key] == "") {
                return res.send("Campo em branco, preencha!");
            }
        }

        student.update(req.body, function(){
            return res.redirect(`/students/${req.body.id}`);
        });   
    },
    delete(req, res){
        
        student.delete(req.body.id, function() {
            return res.redirect("/students");
        });
    },
}


