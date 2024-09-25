import { Credit } from "src/credit/entities/credit.entity";
<<<<<<< HEAD
import { State } from "src/states/entities/state.entity";
=======
import { State } from "src/state/entities/state.entity";
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: "shares"
})
export class Share {
    @PrimaryGeneratedColumn('uuid')
<<<<<<< HEAD
    id: string = uuid() 
=======
    id: string = uuid()
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01

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
<<<<<<< HEAD
        type: "decimal"
    })
    capital: Number

    @Column({
        type: "decimal"
    })
    interes: Number
=======
        type: "date"
    })
    capital: number

    @Column({
        type: "date"
    })
    interes: number
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01

    @Column({
        type: "decimal",
        scale: 2,
        precision: 10
    })
<<<<<<< HEAD
    amount: Number
=======
    amount: number
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01

    @ManyToOne(() => Credit, (credit) => credit.shares)
    credit: Credit

    @ManyToOne(() => State, (state) => state.shares)
    state: State
}
