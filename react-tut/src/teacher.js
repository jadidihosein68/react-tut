
import {Person} from './person';

export class Teacher extends Person { // we do export to make it public 
  constructor(name, degree) {
    super(name); // always should call ! if inherited;
    this.degree = degree;
  }

  teach() {
    console.log("teaching");
  }
}
