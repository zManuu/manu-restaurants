import { PrimaryGeneratedColumn, Column, Entity, OneToMany, Relation } from 'typeorm'
import Offer from './Offer.js'

@Entity('restaurant')
export default class {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description?: string

    @Column()
    logoUrl?: string

    @Column()
    adminKey: string
    
    @OneToMany(() => Offer, e => e.restaurant)
    offers: Relation<Offer[]>

}