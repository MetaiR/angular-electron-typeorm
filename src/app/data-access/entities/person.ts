import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'person' })
export class Person {
    @PrimaryGeneratedColumn({ name: 'person_id' })
    private _id: number = undefined;
    @Column({ name: 'person_national_id' })
    private _nationalId: string = undefined;
    @Column({ name: 'person_firstname' })
    private _firstname: string = undefined;
    @Column({ name: 'person_lastname' })
    private _lastname: string = undefined;
    @Column({ name: 'person_phonenumber' })
    private _phone: string = undefined;
    @Column({ name: 'person_address' })
    private _address: string = undefined;
    @Column({ name: 'person_father_name' })
    private _fathername: string = undefined;
    @Column({ name: 'person_birth_year' })
    private _birthYear: number = undefined;
    @Column({ name: 'person_deleted' })
    private _deleted: boolean = undefined;
    @Column({ name: 'person_lastmodify' })
    private _lastModify: Date = undefined;
    @Column({ name: 'person_work_address' })
    private _workAddress: string = undefined;
    @Column({ name: 'person_work_phonenum' })
    private _workPhone: string = undefined;

    public get id(): number {
        return this._id;
    }


    public get nationalId(): string {
        return this._nationalId;
    }


    public get firstname(): string {
        return this._firstname;
    }


    public get lastname(): string {
        return this._lastname;
    }


    public get phone(): string {
        return this._phone;
    }


    public get address(): string {
        return this._address;
    }


    public get fathername(): string {
        return this._fathername;
    }


    public get birthYear(): number {
        return this._birthYear;
    }


    public get deleted(): boolean {
        return this._deleted;
    }


    public get lastModify(): Date {
        return this._lastModify;
    }


    public get workAddress(): string {
        return this._workAddress;
    }


    public get workPhone(): string {
        return this._workPhone;
    }


    public set id(value: number) {
        this._id = value;
    }


    public set nationalId(value: string) {
        this._nationalId = value;
    }


    public set firstname(value: string) {
        this._firstname = value;
    }


    public set lastname(value: string) {
        this._lastname = value;
    }


    public set phone(value: string) {
        this._phone = value;
    }


    public set address(value: string) {
        this._address = value;
    }


    public set fathername(value: string) {
        this._fathername = value;
    }


    public set birthYear(value: number) {
        this._birthYear = value;
    }


    public set deleted(value: boolean) {
        this._deleted = value;
    }


    public set lastModify(value: Date) {
        this._lastModify = value;
    }


    public set workAddress(value: string) {
        this._workAddress = value;
    }


    public set workPhone(value: string) {
        this._workPhone = value;
    }

}
