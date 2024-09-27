import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { State } from 'src/state/entities/state.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateCreditDto {

  /**
   * The amount of some credit
   * @example 3000
   */
  @IsInt() // Enforce integer for amount
  @IsNotEmpty()
  amount: number;

  /**
   * Quantity of months for some credit
   * @example 18
   */
  @IsInt()
  @IsNotEmpty()
  months: number;

  /**
   * The interest could be decimal or integer the number won't be empty
   * @example 2.5 
   */
  @IsDecimal()
  @IsNotEmpty()
  interest: number;

  @IsOptional()
  user: User;

  @IsOptional()
  state: State; // Optional state for creation
}