import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class Welcome {
  dataAtual = new Date();
  valor: number = 7000;
}
