import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // << IMPORTAR AQUI

import { IonicModule } from '@ionic/angular';


import { CepPage } from './cep.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CepPageModule {}