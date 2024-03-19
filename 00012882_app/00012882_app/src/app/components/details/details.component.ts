import { Component, inject } from '@angular/core';
import { Blog } from '../../Blog';
import { BlogService } from '../../blogService';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsBlog: Blog={
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

  serviceBlog = inject(BlogService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.serviceBlog.getById(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem)=>{
      this.detailsBlog=resultedItem;
    });
  }
}
