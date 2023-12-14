import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { RegisterResponse } from './types/register-response';
import * as bcrypt from 'bcrypt';
import { RegisterUserInput } from './dto/register-user.input';
import { LoginResponse } from './types/login-response';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async login(user: User): Promise<LoginResponse> {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    if (!accessToken) {
      throw new InternalServerErrorException();
    }
    return {
      accessToken,
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async register(
    registerUserInput: RegisterUserInput,
  ): Promise<RegisterResponse> {
    const salt = await bcrypt.genSalt();
    registerUserInput.password = await bcrypt.hash(
      registerUserInput.password,
      salt,
    );
    return this.usersService.create(registerUserInput);
  }
}
