import { IUserService } from './users.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { injectable } from 'inversify';
import { User } from './user.entity';

@injectable()
export class UserService implements IUserService {
	createUser({ email, name, password }: UserRegisterDto): User | null {
		return;
	}
	validateUser({}: UserLoginDto): boolean {}
}
