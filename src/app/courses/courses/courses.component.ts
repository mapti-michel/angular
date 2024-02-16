import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(){

  }

  ngOnInit(): void{
    
  }

}
