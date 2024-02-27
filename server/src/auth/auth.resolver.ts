import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { RegisterResponse } from './types/register-response';
import { RegisterUserInput } from './dto/register-user.input';
import { AuthService } from './auth.service';
import { LoginResponse } from './types/login-response';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { LoginUserInput } from './dto/login-user.input';
import { SessionResponse } from './types/session-response';
import { CurrentUser } from './guards/jwt-auth.guard';
import { User } from '../users/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<RegisterResponse> {
    return this.authService.register(registerUserInput);
  }

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ): Promise<LoginResponse> {
    return this.authService.login(context.user);
  }

  @Query(() => SessionResponse)
  @UseGuards(JwtAuthGuard)
  async session(@CurrentUser() user: User): Promise<SessionResponse> {
    return user;
  }
}
