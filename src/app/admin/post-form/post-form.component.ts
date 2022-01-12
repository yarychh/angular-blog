import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { FormType } from 'src/app/shared/enums/form-type-enum';
import { Post } from 'src/app/shared/interfaces/interfaces';
import { PostService } from 'src/app/shared/services/post.service';


@Component({
  selector: 'app-edit-page',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
 
  public post!: Post;
  public form!: FormGroup;
  public formType!: FormType;
  public pageFormTypes = FormType;

  constructor(public postService: PostService, public route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.initVariables();

    if (this.formType === FormType.UPDATE) {
      this.postService.getPostById(this.route.snapshot.params['id'])
      .pipe(delay(1000))  
      .subscribe((post)=>{
        this.post = post;
        this.form.patchValue(post);      
       });
    }
  }

  public submit(): void {
    if (this.form.invalid) return;

    this.formType === FormType.CREATE
    ? this.postService.createPost(this.form.value).subscribe(()=>{
      this.router.navigate(['/posts-list']);
    })
    : this.postService.editPost(this.form.value).subscribe(()=>{
      this.router.navigate(['/posts-list']);
    });
  }

  private initForm(): void {
    this.form = new FormGroup ({
      title: new FormControl ('', [Validators.required]),
      text: new FormControl ('', [Validators.required]),
      author: new FormControl ('', [Validators.required]),
      id:  new FormControl (this.route.snapshot.params['id'])
    });
  }

  private initVariables(): void {
    this.formType = this.route.snapshot.data['formType'];
    this.initForm();
  }
}
