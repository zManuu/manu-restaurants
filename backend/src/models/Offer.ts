import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn, Relation } from 'typeorm'
import Restaurant from './Restaurant.js'

@Entity('offer')
export default class {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column('simple-array')
    previewUrls: string[]

    @JoinColumn()
    @ManyToOne(() => Restaurant, e => e.offers)
    restaurant: Relation<Restaurant>

}