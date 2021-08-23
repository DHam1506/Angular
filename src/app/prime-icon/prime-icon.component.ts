import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-prime-icon',
  templateUrl: './prime-icon.component.html',
  styleUrls: ['./prime-icon.component.css']
})
export class PrimeIconComponent implements OnInit {

  constructor(private primetest:MessageService) { }
items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator:true},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }
  save(severity: string) {
    this.primetest.add({severity: severity, summary:'Success', detail:'Data Saved'});
  }

  update() {
    this.primetest.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.primetest.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }

}
