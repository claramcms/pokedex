export class Pokemon {
    id: number;
    name: string;
    type: string[];
    description: string;
    photo: string;
    evolution: string;
    altura: number;
    peso: number;
    categoria: string;
    habilidades: string;
      constructor(id: number, name: string, type: string[], description: string, photo: string, evolution: string, altura: number, peso: number, categoria: string, habilidades: string){
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.photo = photo;
    this.evolution = evolution;
    this.altura = altura;
    this.peso = peso;
    this.categoria = categoria;
    this.habilidades = habilidades;
    }
}