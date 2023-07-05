import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.API_URL}/blog`);
  }

  getPost(id: string) {
    return this.http.get(`${this.API_URL}/blog/${id}`);
  }

  postPost(post: any) {
    return this.http.post(`${this.API_URL}/blog`, post);
  }

  deletePost(id: string) {
    return this.http.delete(`${this.API_URL}/blog/${id}`);
  }

  putPost(post: any) {
    return this.http.put(`${this.API_URL}/blog/${post.id_publ}`, post);
  }

  getComments(id: string) {
    return this.http.get(`${this.API_URL}/blog/${id}/comm`);
  }

  getCommen() {
    return this.http.get(`${this.API_URL}/blog/comm/g`);
  }

  postComment(id: string, comm: any) {
    return this.http.post(`${this.API_URL}/blog/${id}/comm`, comm);
  }

  putComment(id: string, comm: any) {
    return this.http.put(`${this.API_URL}/blog/${id}/comm/${comm.id_mens}`, comm);
  }

  deleteComment(id_publ: string, id_mens: string) {
    return this.http.delete(`${this.API_URL}/blog/${id_publ}/comm/${id_mens}`);
  }

  
  public imprimirFecha(fecha: any): string {
    var pFec: Date = new Date(fecha);
    return pFec.getDate().toString().concat("/")
          .concat((pFec.getMonth()+1).toString()).concat("/")
          .concat(pFec.getFullYear().toString()).concat(" a las ")
          .concat(pFec.getHours().toString()).concat(":")
          .concat(pFec.getMinutes().toString())
        ;
  }

}
