import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { RegisterResponse } from './types/register-response';
import { RegisterUserInput } from './dto/register-user.input';
import { AuthService } from './auth.service';
import { LoginResponse } from './types/login-response';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { LoginUserInput } from './dto/login-user.input';

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
}
