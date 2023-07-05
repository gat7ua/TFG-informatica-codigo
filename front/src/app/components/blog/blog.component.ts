import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts: any = [];
  coment: any = [];
  prc: any = [];

  constructor(protected blogService: BlogService, protected authService: AuthService) {}

  ngOnInit() {
    this.posts = [];
    this.coment = [];
    this.prc = [];
    this.getPosts();
    this.getComentarios();
  }

  getPosts() {
    this.blogService.getPosts().subscribe(
      async res => {
        let rep: any = res;
        var i = 0;
        for (let p of rep) {
          await this.authService.getUsu(p.id_usua).subscribe(
            res2 => { p.nombreUsu = res2.nombre; },
            err2 => { console.log(err2); }
          );
          p.numerin = i; 
          i = i + 1;
          this.posts.push(p);
          var ppp: any = { id_usua: this.authService.getUserID(), id_publ: p.id_publ, texto: "" };
          this.prc.push(ppp);
        }
        console.log(this.posts);
      },
      err => console.error(err)
    );
  }

  deletePost(id: string) {
    console.log(id);
    this.blogService.deletePost(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {console.error(err)}
    );
  }

  deleteComment(idp: string, idc: string) {
    console.log(idc);
    this.blogService.deleteComment(idp, idc).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {console.error(err)}
    );
  }

  getComentarios() {
    this.blogService.getCommen().subscribe(
      async res => {
        let rep: any = res;
        for (let p of rep) {
          await this.authService.getUsu(p.id_usua).subscribe(
            res2 => { p.nombreUsu = res2.nombre; },
            err2 => { console.log(err2); }
          );
          if (p.id_usua === this.authService.getUserID())
            p.usu = 'S';
          else
            p.usu = 'N';
          this.coment.push(p);
        }
      },
      err => console.error(err)
    );
    return [];
  }

  comenPubli(id_publ: number) {
    var line: any = [];
    for (let l of this.coment) {
      if (l.id_publ == id_publ)
        line.push(l);
    }
    line.sort((a: any, b: any) => {
      if (a.fecha < b.fecha)
        return -1;
      return 1;
    });
    return line;
  }

  postComentario(comen: any) {
    comen.id_usua = this.authService.getUserID();
    console.log(comen);
    this.blogService.postComment(comen.id_publ, comen).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {console.log(err);}
    );
  }

}
