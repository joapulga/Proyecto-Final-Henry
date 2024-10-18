import { timestamp } from "rxjs";
import { Share } from "../../share/entities/share.entity";
import { State } from "../../state/entities/state.entity";
import { User } from "../../user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: "credits"
})
export class Credit {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column({
        type: "int"
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

    @CreateDateColumn({
        type: 'timestamp'
    })
    createdAt: Date

    @ManyToOne(() => User, (user) => user.credits)
    user?: User

    @OneToMany(() => Share, (share) => share.credit)
    shares?: Share[]

    @ManyToOne(() => State, (state) => state.credits)
    state?: State
}
