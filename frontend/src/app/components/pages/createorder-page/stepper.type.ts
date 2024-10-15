import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'formly-field-stepper',
  imports: [MatStepperModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <mat-horizontal-stepper>
      <mat-step *ngFor="let step of field.fieldGroup; let index = index; let last = last">
        <ng-template matStepLabel>{{ "Test" }}</ng-template>
        <formly-field [field]="step"></formly-field>

        <div>
          <button matStepperPrevious *ngIf="index !== 0" class="btn btn-primary" type="button">Back</button>

          <button matStepperNext *ngIf="!last" class="btn btn-primary" type="button" [disabled]="!isValid(step)">
            Next
          </button>

          <button *ngIf="last" class="btn btn-primary" [disabled]="!form.valid" type="submit">Submit</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>
  `,
  standalone: true,
})
export class FormlyFieldStepper extends FieldType {
  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      
      return field.formControl ? field.formControl.valid : false;
    }

    return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
  }
}
