import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { HttpClient , HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  
  //TODO move to the service this implementation it's working fine
  constructor(private userService: UserService, private http: HttpClient) { 
    this.http.post('http://localhost:8080/createUser', {'username': 'user', 'password': '1234'}, httpOptions)
    .subscribe(data => {
      console.log('' + data);
      
    });
  }

  ngOnInit() {

  }

  add(username: String, password: String): void {
      this.userService.addUser({username, password} as User)
       .subscribe(user => {
        this.users.push(user);
      }); 
  } 
}
