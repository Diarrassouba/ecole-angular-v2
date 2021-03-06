import {Adresse} from "./adresse";
export class Personne {


  constructor(private _id:number=0,private _titre: string='',private _nom: string='',private _prenom: string='', private _numCni: string='',private _adresse:Adresse) {

  }


  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get numCni(): string {
    return this._numCni;
  }

  set numCni(value: string) {
    this._numCni = value;
  }
}

