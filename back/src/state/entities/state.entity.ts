import { Credit } from "src/credit/entities/credit.entity";
import { Share } from "src/share/entities/share.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: "states"
})
export class State {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column({
        type: "varchar",
        length: 20
    })
    name: string

    @Column({
        type: "varchar",
        length: 255
    })
    description: string

    @OneToMany(() => Share, (share) => share.state)
    shares: Share[]

    @OneToMany(() => Credit, (credit) => credit.state)
    credits: Credit[]

    @OneToMany(() => User, (user) => user.state)
    users: User[]
}
