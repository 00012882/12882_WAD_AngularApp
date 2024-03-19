import { Component, inject } from '@angular/core';
import { Blog } from '../../Blog';
import { BlogService } from '../../blogService';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  serv = inject(BlogService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  editBlog: Blog = {
    postID:0,
    userID:0,
    title:"",
    content:"",
    postDate:"",
    user: {
      userID:0,
      username:"",
      email:"",
      createDate:""
    }
  };

  userObject: any;
  selected: any;
  uID: number = 0;

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params["id"])

    this.serv.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editBlog = result;
      console.log(this.editBlog);
      this.selected = this.editBlog.userID;
    });

    this.serv.getAllUsers().subscribe((result) =>{
      this.userObject = result;
    });
  }

  toHome(){
    this.router.navigateByUrl("home")
  }

  edit(){
    this.editBlog.userID = this.uID;
    this.editBlog.user = this.userObject[findIndexByID(this.userObject, this.uID)];
    this.serv.edit(this.editBlog).subscribe(res =>{
      alert("Changes has been updated!")
      this.router.navigateByUrl("home");
    });
  }
}
