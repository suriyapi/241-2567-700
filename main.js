/*
ojects functions
*/

let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },
    {
        name: 'Jane',
        score: 75,
        grade: 'B'
    },
    {
        name: 'Jim',
        score: 60,
        grade: 'C'
    }
]
let student = students.find((s) => {
    if (s.name == "Jane") {
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
})

let highscore_student = students.filter((s) => {
    if (s.score > 80) {
        return true
    }
})
console.log('student:', student)
console.log('highscore_student:', highscore_student)