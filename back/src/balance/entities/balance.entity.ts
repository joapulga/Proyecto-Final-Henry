import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: "balances"
})
export class Balance {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column({
        type: "decimal",
        scale: 4,
        precision: 10
    })
    income: number

    @Column({
        type: "decimal",
        scale: 4,
        precision: 10
    })
    expenses: number

    @Column({
        type: "decimal",
        scale: 4,
        precision: 10
    })
    gain: number

    @Column({
        type: "varchar",
        length: 255
    })
    observations: string
<<<<<<< HEAD
}
=======
}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
