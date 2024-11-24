import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';

export interface DatosMensaje {
  titulo: string,
  result: string
}

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [ReferenciasMaterialModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  constructor(public dialogRef: MatDialogRef<MensajeComponent>, @Inject(MAT_DIALOG_DATA) public datos:DatosMensaje){
  }
  public cerrar() {
    this.dialogRef.close();
  }
}
