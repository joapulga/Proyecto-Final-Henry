import { Credit } from "src/credit/entities/credit.entity";
import { State } from "src/states/entities/state.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: "shares"
})
export class Share {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid() 

    @Column({
        type: "int"
    })
    number_share: number

    @Column({
        type: "date"
    })

    expirate_date: Date

    @Column({
        type: "date"
    })
    paid_date: Date

    @Column({
        type: "decimal"
    })
    capital: Number

    @Column({
        type: "decimal"
    })
    interes: Number

    @Column({
        type: "decimal",
        scale: 2,
        precision: 10
    })
    amount: Number

    @ManyToOne(() => Credit, (credit) => credit.shares)
    credit: Credit

    @ManyToOne(() => State, (state) => state.shares)
    state: State
}
