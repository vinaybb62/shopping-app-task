import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';


interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYl8boiqtzpD1PrflS3qxb5Z2ZZPSAAEw',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(tap(resData => {
        const user = new User(resData.email, resData.localId);
        this.user.next(user);
      }
      )
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYl8boiqtzpD1PrflS3qxb5Z2ZZPSAAEw',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(tap(resData => {
        const user = new User(resData.email, resData.localId);
        this.user.next(user);
      }
      )
    );
  }

}
