import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../Blog';
import { BlogService } from '../../blogService';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  blogs:Blog[]=[];
  blogService = inject(BlogService);

  ngOnInit(){
    this.blogService.getAll().subscribe((result) => {
      this.blogs = result;
    });
  }

  displayedColumns: string[] = ['PostId', 'Title', 'Content', 'PostDate', 'Username', 'Actions'];

  onCreate(){
    console.log("Oncreate Clicked")
    this.router.navigateByUrl("/create")
  }
  onEdit(id:number){
    console.log("Edit: ", id)
    this.router.navigateByUrl("/edit/"+id)
  }
  onDetails(id:number){
    console.log(id, "From Details")
    this.router.navigateByUrl("/details/"+id)
  }
  onDelete(id:number){
    console.log("onDelete: ", id)
    this.router.navigateByUrl("/delete/"+id)
  }
}
