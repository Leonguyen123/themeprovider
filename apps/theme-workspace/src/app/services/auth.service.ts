import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from './user.service'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signIn(email: string): Promise<any> {
    const user = await this.userService.findOne(email)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
