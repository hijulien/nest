import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id: string;
    
    @Column()
    Name: string;

    @Column({
        length:18
    })
    Pwd: string;

    @Column({
        length:1
    })
    gender:string

    @Column({
        type:'date'
    })
    birthday:string

    @Column()
    isAdmin: boolean;

    @Column({
        type:"json"
    })
    history:JSON
}