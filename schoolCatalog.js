//The school parent class
class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name(){
      return this._name;
    }
  
    get level(){
      return this._level;
    }
  
    get numberOfStudents(){
      return this._numberOfStudents;
    }
  
    set numberOfStudents(num){
      if(num > 0 && Number.isInteger(num)){
        this._numberOfStudents = num;
      }
      else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let randomIndex = Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  
  }
  
  //The primary subclass
  class Primary extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  //the middle subclass
  class Middle extends School{
    constructor(name, level, numberOfStudents){
      super(name, 'middle', numberOfStudents);
    }
  }
  
  //the high subclass
  class High extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams(){
      for(let team of this._sportsTeams){
        console.log(team);
      }
    }
  }
  
  class SchoolCatalog{
    constructor(){
      this._schools = [];
    }
  
    addSchool(sch){
      this._schools.push(sch);
    }
  
    get schools(){
      return this._schools;
    }
  }
  
  //Creating an instance of the primary class
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  //calling quickFacts on the lorraineHansbury object
  lorraineHansbury.quickFacts();
  
  //calling pickSubstituteTeacher on school
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  //creating instance of the high class
  const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  alSmith.sportsTeams; //displaying the sportss teams in alSmith object
  
    