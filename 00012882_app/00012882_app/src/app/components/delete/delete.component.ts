import { Component, inject } from '@angular/core';
import { Blog } from '../../Blog';
import { BlogService } from '../../blogService';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteBlog: Blog = {
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
  }

  service = inject(BlogService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.service.getById(this.activatedRoute.snapshot.params["id"]).subscribe((result) =>{
      this.deleteBlog = result
    });
  }

  onHomeButtonClick(){
    this.router.navigateByUrl("home");
  }

  onDeleteButtonClick(id:number){
    this.service.delete(id).subscribe(r => {this.router.navigateByUrl("home")});
    alert("Deleted item id: " + id);
  }
}
