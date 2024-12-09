import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { SignoVitalGateway } from './signo-vital.gateway';

@Module({
  providers: [SignoVitalGateway, SignoVitalService],
})
export class SignoVitalModule {}
