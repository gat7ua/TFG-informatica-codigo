import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

  @HostBinding('class') classes = 'row';

  publicacion: any = {
    id_publ: 0,
    titulo: '',
    texto:'',
    id_usua: 0
  };

  editar: boolean = false;

  constructor(private blogService: BlogService, private router: Router, private activateRoute: ActivatedRoute, protected authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params['id']) {
      this.blogService.getPost(params['id']).subscribe(
        res => {
          this.publicacion = res;
          console.log(this.publicacion);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarCiudad() {
    console.log(this.publicacion);
    this.publicacion.id_usua = this.authService.getUserID();
    this.blogService.postPost(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/blog']);
        },
        err => {console.error(err)}
      ); 
  }

  editarCiudad() {
    this.blogService.putPost(this.publicacion).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/blog']);
      },
      err => {console.error(err)}
    );
  }
}
