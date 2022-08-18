import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    @InjectRepository(Phone)
    private repositoryPhone: Repository<Phone>,
  ) {}

  // transaction
  async create(createUserDto: CreateUserDto) {
    const { phones } = createUserDto;
    const user = this.repository.create(createUserDto);
    const userObj = await this.repository.save(user);
    for await (const { number } of phones) {
      const phoneObj = this.repositoryPhone.create({ user: userObj, number });
      await this.repositoryPhone.save(phoneObj);
    }
    return this.repository.findOne({ where: { id: userObj.id } });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { phones } = updateUserDto;
    const user = await this.repository.preload({ id: id, ...updateUserDto });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    for await (const { id, number } of phones) {
      const phoneObj = await this.repositoryPhone.preload({
        id: id,
        number,
        ...updateUserDto.phones,
      });
      await this.repositoryPhone.save(phoneObj);
    }
    return this.repository.save(user);
  }

  async remove(id: number) {
    const user = await this.repository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    console.debug(user);
    if (!user.phones) {
      return this.repository.remove(user);
    } else {
      const result = this.repositoryPhone.remove(user.phones);
      if (result) {
        return this.repository.remove(user);
      }
    }
  }
}
