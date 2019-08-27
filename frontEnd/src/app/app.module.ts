import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


export function createLoaderFactory(http: HttpClient) {
  let NowDate;
  NowDate = new Date();
  return new TranslateHttpLoader(http, './assets/i18n/WebMsg_', '.json' + '?t=' + Date.parse(NowDate).valueOf());
}
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}