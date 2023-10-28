import { IUserService } from './users.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { injectable } from 'inversify';
import { User } from './user.entity';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		// проверка что он есть?
		// если есть - возвращаем null
		// если нет, то создаем и возвращаем User
		return null;
	}
	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
