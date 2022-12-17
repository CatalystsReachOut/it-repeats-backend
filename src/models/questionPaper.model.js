import db from '../db/init';

class QuestionPaper {

    constructor(departmentName, semester, subjectName, year, examName, fileUrl) {
        this.departmentName = departmentName;
        this.semester = semester;
        this.subjectName = subjectName;
        this.year = year;
        this.examName = examName;
        this.fileUrl = fileUrl;
    }

    async save() {
        return db.collection('questionPaper').add({
            'departmentName': this.departmentName,
            'semester': this.semester,
            'subjectName': this.subjectName,
            'year': this.year,
            'examName': this.examName,
            'fileUrl': this.fileUrl
        }).then(() => {
            return new Promise((resolve, reject) => {
                resolve(true)
            })
        }).catch((e) => {
            return new Promise((resolve, reject) => {
                reject(false)
            })
        })
    }

    async find() {
        return db.collection('questionPaper').get().then((snapshot) => {
            let medicines = [];
            snapshot.forEach((doc) => {
                medicines.push(doc.data());
            });
            return new Promise((resolve, reject) => {
                resolve(medicines);
            })
        }).catch((e) => {
            return new Promise((resolve, reject) => {
                reject(false);
            })
        })
    }
}

export default QuestionPaper;