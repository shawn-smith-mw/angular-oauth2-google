import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialUser, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) {
  }
  ngOnInit():void {
    this.loggedIn=false;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  
  signInWithGoogle():void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  signOut(): void {
    this.authService.signOut();
  }
}
