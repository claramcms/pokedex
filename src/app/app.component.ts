import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  logo = "../assets/pokemon-logo.png";
  imgProfile: string = "../assets/imagem-perfil.png";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu, quando está irritado, descarrega imediatamente a energia armazenada nas bolsas em suas bochechas.', '../assets/imagem-pikachu.png','../assets/evolution.pikachu.png',  0.4 , 6, 'Rato', 'Estático', ),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Esse é o Bulbasaur', '../assets/Bulbasaur.png','../assets/evolution.bulbasaur.png', 0.7 , 6.9, 'Semente', 'Crescer demais'),
    


    new Pokemon(4, 'Geodude', ['Pedra'], 'Esse é o Geodude', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png', '../assets/evolution.geodude.png',0.4 , 20.0, 'Pedra', 'Cabeça de pedra e Robusto'),
    new Pokemon(5, 'Squirtle', ['Água'], 'Esse é o Squirtle', '../assets/squirtle.png.png','', 0.5 , 9.0, 'Tartaruga minúscula', 'Torrente'),
    new Pokemon (6, 'Charmeleon', ['Fogo'], 'Esse é o Charmeleon', '../assets/Charmeleon.png','', 1.1 , 19.0, 'Chama', 'Chama'),
    

    
    new Pokemon (8, 'Beedrill', ['Inseto', 'Veneno'], 'Esse é o Beedrill', '../assets/Beedrill.png', '', 1.0 , 29.5, 'Abelha venenosa', 'Enxame'),
    new Pokemon (9, 'Ekans', ['Veneno'], 'Esse é o Ekans', '../assets/Ekans.png','', 0.4 , 6, 'Rato', 'Estático'),
    new Pokemon (10, 'Sandshrew', ['Terrestre'], 'Esse é o Sandshrew', '../assets/Sandshrew.png','', 0.4 , 6, 'Rato', 'Estático'), 

  ];
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }

  closeModal() {
    this.selectedPokemon = undefined;
  }

  filterValue: string = '';
  filteredPokemons(): Pokemon[] {
    if (!this.filterValue){
      return this.pokemons;
    }
    return this.pokemons.filter(pokemons => pokemons.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }
}


