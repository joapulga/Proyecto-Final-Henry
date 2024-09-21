import { Credit } from "src/credit/entities/credit.entity";
import { State } from "src/state/entities/state.entity";
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
        type: "date"
    })
    capital: number

    @Column({
        type: "date"
    })
    interes: number

    @Column({
        type: "decimal",
        scale: 2,
        precision: 10
    })
    amount: number

    @ManyToOne(() => Credit, (credit) => credit.shares)
    credit: Credit

    @ManyToOne(() => State, (state) => state.shares)
    state: State
}
