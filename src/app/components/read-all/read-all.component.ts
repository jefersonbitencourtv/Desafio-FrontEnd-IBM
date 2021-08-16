import { Dragon } from './../../models/dragon';
import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  list: Dragon[] = [];
  constructor(private service: DragonService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) =>{
      this.list = resposta;
      this.list = this.list.sort(this.Compare);
    })
  }

  delete(id: any): void{
    this.service.delete(id).subscribe((resposta)=>{
        this.service.message('Dragão deletado com sucesso');
        this.list = this.list.filter(Dragon => Dragon.id !== id);
    });
  }

  Compare(a: Dragon,b: Dragon): number{
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;
  }

}
