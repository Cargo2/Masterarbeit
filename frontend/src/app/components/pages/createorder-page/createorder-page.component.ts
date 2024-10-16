import {Component, inject, signal, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-createorder-page',
  standalone: true,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
    provideNativeDateAdapter()
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIcon,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './createorder-page.component.html',
  styleUrls: ['./createorder-page.component.css']
})

export class CreateorderPageComponent {
  private _formBuilder = inject(FormBuilder);
  typesOfShoes: string[] = ['FI', 'CO', 'TR', 'EC', 'IM', 'SD', 'MM', 'WM', 'PM', 'HR' ];

  readonly panelOpenState = signal(false);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  toppings = new FormControl('');
  toppingList: string[] = ['E-Mail', 'MS-Teams', 'Meeting-Remote', 'Meeting-Vorort'];

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return `${value}`;
  }
}
