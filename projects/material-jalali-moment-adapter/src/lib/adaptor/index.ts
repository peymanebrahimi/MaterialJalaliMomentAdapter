import { NgModule } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { JalaliMomentDateAdapter } from './jalali-moment-date-adapter';
import { JALALI_MOMENT_FORMATS, MOMENT_FORMATS } from './jalali_moment_formats';

export * from './jalali-moment-date-adapter';
export * from './jalali_moment_formats';


@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: JalaliMomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ],
})
export class JalaliMomentDateModule { }


@NgModule({
  imports: [JalaliMomentDateModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "fa" }, // en-GB  fr
    {
      provide: MAT_DATE_FORMATS,
      useFactory: formatFactory,
      deps: [MAT_DATE_LOCALE]
      // useValue: JALALI_MOMENT_FORMATS
    }
  ],
})
export class MaterialJalaliMomentAdapterModule { } 

export function formatFactory(locale: string) {
  if (locale === "fa") {
    return JALALI_MOMENT_FORMATS;
  } else {
    return MOMENT_FORMATS;
  }
}

/*
      useFactory: (locale: string) => {
        if (locale === "fa") {
          return JALALI_MOMENT_FORMATS;
        } else {
          return MOMENT_FORMATS;
        }
      },
*/