import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import Swal from 'sweetalert2';
import { title } from 'process';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  post;
  constructor( private posts:PostsService ) { }
  filterPost = "";
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.posts.getPosts().subscribe( data => {
      console.log(data);
      this.post = data;
    })
  }
  ShowModal(title:string, body:string) {
    Swal.fire(

      `${title}`,
      `${body}`,
       'info'
    )
  }
  updatePosts(dato: number) {
    let answer: any = {};
    this.posts. updatePosts(dato).subscribe( data => {
      answer = data;
      Swal.fire(
       'Updated!',
         `PUT exitoso...  registro con id: ${answer.id} actualizado`,
        'success',

      )
    })

  }
  deletePosts(dato: number) {
    this.posts.deletePosts(dato).subscribe( data => {

      Swal.fire(
       'Deleted!',
         `DELETE exitoso...  registro con id: ${dato} eliminado`,
        'success',

      )
  })

}
}
