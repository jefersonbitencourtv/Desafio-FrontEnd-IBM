import { Dragon } from './../../models/dragon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  dragon: Dragon = {
    name: '',
    type: '',
    histories: '',
  }
  constructor(private router: Router, private service: DragonService) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.dragon).subscribe((resposta)=>{
      this.service.message('Dragão criado com sucesso!');
      this.router.navigate([''])
    }, err =>{
      this.service.message('Falha ao criar dragão');
      this.router.navigate([''])
    });
  }

  cancel(): void{
    this.router.navigate(['']);
  }
}
