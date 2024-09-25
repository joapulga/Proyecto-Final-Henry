<<<<<<< HEAD
import { IsString,  IsDate } from 'class-validator';

export class CreateBalanceDto {
  @IsString()
  income: number;

  @IsString()
  expenses: number;

  @IsString()
  gain: number;

  @IsDate()
  date: Date;

=======
import { IsString,  IsDate, IsNumber } from 'class-validator';

export class CreateBalanceDto {
  /**
   * Valor que ingresan al sistema por parte del administrador de la aplicación
   * @example 20000
   */
  @IsNumber()
  income: number;

  /**
   * Valor que egresa al sistema por parte del administrador de la aplicación
   * @example 5000
   */
  @IsNumber()
  expenses: number;


  /**
   * Ganancia que se va obteniendo cuando se paga un determinado valor
   * @example 20
   */
  @IsNumber()
  gain: number;

  /**
   * Fecha en la cual se realiza una determinada transacción
   * @example 20-09-2024
   */
  @IsDate()
  date: Date;

  
  /**
   * Cuando se realiza una determinada transacción dejar una observación
   * @example "Se concede un préstamo por 3000 $"
   */
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  @IsString()
  observations: string;
}