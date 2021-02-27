import { IsString,IsOptional, MaxLength, Max, IsDate, maxLength, Allow } from 'class-validator';


export class TodoDto{
  @Allow()
  id: string;

  @Allow()
  version: number;

  @IsString({ message: 'Must be a string!'})
  @MaxLength(60, { message: 'Maximum 60 charecter supported'})
  title:string;

  @IsString({ message: 'Must be a string!'})
  @MaxLength(150, { message: 'Maximum 150 charecter supported'})
  description:string;

  @Allow()
  createdAt:Date | null;

  @Allow()
  updatedAt:Date | null;
}
