const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  // 1
  function getSubjects(students) {
    const subjectsOut = [];
    for(let key in students.subjects){
        key = key.replace('_', ' ').split('')
        key[0] = key[0].toUpperCase();
        subjectsOut.push(key.join(''));
    }
    return subjectsOut
}
console.log(getSubjects(students[2]))
 
  // 2 
  function getAverageMark(student){
    let marksAll = 0;
    let marksAmount = 0;
    for(let opt in student.subjects){
      marksAmount += student.subjects[opt].length;
      for(let i = 0; i < student.subjects[opt].length; i++){
        marksAll += student.subjects[opt][i];
      }
    }
    return (marksAll / marksAmount).toFixed(2);
  }
  console.log(getAverageMark(students[2]));
  // 3
  function getStudentInfo(student){
    return {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
    }
  }
  console.log(getStudentInfo(students[2]));
  // 4
  function getStudentsNames(students){
    const studentsName = [];
    for(const names of students){
      studentsName.push(names.name);
    }
    return studentsName.sort();
  }
  console.log(getStudentsNames(students));
  // 5
  function getBestStudent(students) {
    let studentsName = null;
    let average = 0;
    
    for(let student of students){
        const averageMark = getAverageMark(student)

        if (averageMark > average){
            average = averageMark;
            studentsName = student.name;
        }}
    return studentsName
}
console.log(getBestStudent(students))
  // 6 
  function calculateWordLetters(word){
    word = word.split('');
    const letterCounts = {};
    word.forEach((letter) => {
      if (typeof letter === 'string') {
        if (letterCounts[letter]) {
          letterCounts[letter]++;
        } else {
          letterCounts[letter] = 1;
        }
      }
    });
    return letterCounts;
  }
  console.log(calculateWordLetters("тест"));