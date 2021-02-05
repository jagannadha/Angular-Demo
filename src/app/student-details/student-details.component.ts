import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Student } from '../students.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students: Student[];
  constructor(private _studentlist:AuthService) { }

  ngOnInit() {
    this._studentlist.getStudentsList().subscribe((data) => 
      this.students = data,
      (err: any) => console.log(err)
    );
  }
 
}
