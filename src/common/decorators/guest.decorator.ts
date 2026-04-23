import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const GuestToken = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return (request.query['token'] ?? request.params['token']) as string;
  },
);
