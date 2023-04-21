import { Injectable } from '@nestjs/common';
import { Reset } from './reset.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResetService {
  constructor(
    @InjectRepository(Reset)
    private readonly resetRepository: Repository<Reset>,
  ) {}

  async save(body) {
    return this.resetRepository.save(body);
  }

  async findOne(options) {
    return this.resetRepository.findOneBy(options);
  }
}
