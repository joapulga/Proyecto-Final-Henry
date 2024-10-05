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
  @IsString()
  observations: string;
}