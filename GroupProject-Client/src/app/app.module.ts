import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchPipe } from './pipes/search.pipe';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { AlertComponent } from './components/alert/alert.component';
import {AuthService} from "./services/auth.service";
import {AlertService} from "./services/alert.service";
import {AuthGuard} from "./guards/auth.guard";

import {ItemService} from "./services/item.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule,MatTableModule,
  MatStepperModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import {UserItemComponent, UserItemDialogComponent} from './components/user-item/user-item.component';
import {CartService} from "./services/cart.service";
import { UserService } from './services/user.service';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SearchPipe,
    SignupComponent,
    ProfileComponent,
    AdminComponent,
    HomepageComponent,
    CartComponent,
    BuyComponent,
    SellComponent,
    AlertComponent,
    UserItemComponent,
    OrderHistoryComponent,
    UserItemDialogComponent
  ],
  imports: [
 
  ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
    providers: [
    AuthService,
    AlertService,
    AuthGuard,
    ItemService,
    CartService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
