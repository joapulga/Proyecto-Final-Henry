import { Share } from "src/share/entities/share.entity";
import { State } from "src/state/entities/state.entity";
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
}
