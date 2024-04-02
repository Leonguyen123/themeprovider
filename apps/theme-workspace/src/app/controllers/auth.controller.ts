import { Controller, Post, Get, Body} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('signin')
    async signIn(@Body() body : any){
        return this.authService.signIn(body.email)
    }
}
