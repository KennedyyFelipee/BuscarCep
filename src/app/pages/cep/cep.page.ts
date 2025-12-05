import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonBackButton,
    IonButtons,
  ],
})
export class CepPage {
  cep: string = '';
  endereco: any = null;
  erro: string = '';

  constructor(private http: HttpClient) {}

  consultarCep() {
    this.endereco = null;
    this.erro = '';

    const cepLimpo = String(this.cep || '').replace(/\D/g, '');

    if (cepLimpo.length === 8) {
      const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

      this.http.get(url).subscribe(
        (data: any) => {
          if (data.erro) {
            this.erro = 'CEP não encontrado.';
          } else {
            this.endereco = data;
          }
        },
        (error) => {
          this.erro = 'Ocorreu um erro ao consultar o CEP.';
          console.error('Erro na API:', error); 
        }
      );
    } else {
      this.erro = 'Por favor, digite um CEP válido com 8 dígitos.';
    }
  }
}