import { Share } from "src/share/entities/share.entity";
<<<<<<< HEAD
import { State } from "src/states/entities/state.entity";
=======
import { State } from "src/state/entities/state.entity";
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: "credits"
})
export class Credit {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column({
        type: "decimal",
        scale: 4,
        precision: 10
    })
    amount: number

    @Column({
        type: "int"
    })
    months: number

    @Column({
        type: "decimal",
        scale: 2,
        precision: 10
    })
    interest: number

    @ManyToOne(() => User, (user) => user.credits)
    user?: User

    @OneToMany(() => Share, (share) => share.credit)
    shares?: Share[]

    @ManyToOne(() => State, (state) => state.credits)
    state?: State
<<<<<<< HEAD
}
=======
}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
