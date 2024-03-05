import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { LivekitService } from './livekit/livekit.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly livekitService: LivekitService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/livekit')
  async getLiveKitToken(
    @Query('identity') identity: string,
    @Query('chatId') chatId: string,
  ) {
    return await this.livekitService.createAccessToken(identity, chatId);
  }
}
