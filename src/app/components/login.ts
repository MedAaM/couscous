import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.html',
})
export class LoginComponent {
    credentials = {
        email: '',
        password: '',
        phone:''
    };

    submitForm() {
        // Handle login logic here
        console.log('Login attempt with:', this.credentials);
        // Add your authentication service call here
    }
}