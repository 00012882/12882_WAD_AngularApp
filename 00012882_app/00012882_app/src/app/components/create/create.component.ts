import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BlogService } from '../../blogService';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-create',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatChipsModule, MatSelectModule, MatDatepickerModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  blogService = inject(BlogService);

  router = inject(Router);

  user: any;

  uID: number = 0;

  createPost: any = {
    title: "",
    content: "",
    postDate: "",
    userID: 0
  }

  ngOnInit(){
    this.blogService.getAllUsers().subscribe((result) => {
      this.user = result;
    });
  }

  create(){
    this.createPost.userID=this.uID;
    console.log(this.uID);
    console.log(this.createPost)
    this.blogService.create(this.createPost).subscribe(result =>{
      alert("Item created!");
      this.router.navigateByUrl("home");
    });
  }
}

// 00012882