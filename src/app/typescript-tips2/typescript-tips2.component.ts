import { Component, OnInit, Type } from '@angular/core';

// -------------------------------------- (1)
export interface User1<T> {
  firstName: string;
  lastName: string;
  userProfil: T;
}

export interface BasicProfil1 {
  homeTown: string;
}

export interface EducationProfil1 {
  graduatedYear: string;
}
// -------------------------------------- (2) merge
export interface User2 {
  firstName: string;
}

export interface User2 {
  lastName: string;
}
// -------------------------------------- (3) extends
export interface User3 {
  firstName: string;
}

export interface Manager extends User3 {
  lastName: string;
}
// -------------------------------------- (4)
export type User4<T> = {
  firstName: string;
  lastName: string;
  userProfil: T;
}

export type BasicProfil4 = {
  homeTown: string;
}

export type EducationProfil4 = {
  graduatedYear: string;
}
// -------------------------------------- (5)
export type User5 = {
  firstName: string;
}

export type Manager5 = {
  departments: string[];
}

export type UserManager5 = User5 & Manager5;
// --------------------------------------

@Component({
  selector: 'app-typescript-tips2',
  templateUrl: './typescript-tips2.component.html',
  styleUrls: ['./typescript-tips2.component.scss']
})
export class TypescriptTips2Component implements OnInit {

  constructor() {
    // fonction générique
    const genericFn = <T>(data: T) => console.log(data);

    // ---------  interface
/*
- une interface décrit la forme d'un objet, en assurant la sécurité des types ;
- une interface peut étendre une autre interface
- une interface peut avoir un type générique qui lui est attaché ;
- une interface ne peut pas étendre un type ou une classe, seulement une autre interface ;
- les déclarations multiples d'une même interface seront fusionnées ;
- les interfaces ne sont pas compilées dans le bundle principal, elles existent uniquement pendant le temps de développement.
*/
    // (1) interfaces
    const userBasicProfil : User1<BasicProfil1> = { firstName: 'toto', lastName: 'tutu', userProfil: {homeTown: 'denver'}};
    const userEducationProfil : User1<EducationProfil1> = { firstName: 'toto', lastName: 'tutu', userProfil: {graduatedYear: '1999'}};

    // (2) merge d'interfaces
    const user2: User2 = {firstName: 'toto', lastName: 'tutu'};

    // (3) extends
    const user3: Manager = {firstName: 'toto', lastName: 'titi'};

    // ---------  type
/*
- un type décrit la forme d'un objet, assurant la sécurité du type ;
- un type ne peut pas être étendu ou implémenté ;
- une interface peut avoir un type générique qui lui est attaché ;
- un type ne peut pas être redéclaré et ne peut pas avoir de déclarations multiples ;
- un type peut être étendu uniquement par des types d'union ou d'intersection ;
- les types ne sont pas compilés dans le bundle principal, ils existent uniquement pendant le temps de développement.
*/
    // (4)
    const userBasicProfil4: User4<BasicProfil4> = {firstName: 'toto', lastName: 'titi', userProfil: {homeTown: 'denver'}};
    const userEducationProfil4: User4<EducationProfil4> = {firstName: 'toto', lastName: 'titi', userProfil: {graduatedYear: '1999'}};

    // (5)
    const userManager5: UserManager5 = {firstName: 'toto', departments: ['dep1', 'dep2']};
/*
Il existe toutefois une différence entre l'union et l'héritage. Lorsque l'on utilise l'union et qu'il y a une clé commune de différents types, comme nous avons l'âge comme un nombre dans User et comme une chaîne de caractères dans Manager, la propriété age sur le type d'union résultant, ManagingUser, aurait le type never, mais TypeScript va maintenant lancer une erreur de compilation, il va juste le taper comme never.
Le type never indique que quelque chose n'est pas correct avec notre logique implémentée, ce type devrait être utilisé pour indiquer un état qui ne devrait jamais se produire.
*/

    //



/*
Quand utiliser quoi ?

Classes :     n'utilisez jamais de classes pour la déclaration de modèles, utilisez-les uniquement pour la logique qui justifie d'avoir des instances ; ou pour le stockage de fonctionnalités, comme les services utilitaires, les services API, etc.
              J'utilise rarement les classes, je préfère aujourd'hui les fonctions à espacement de noms (namespaced functions) plutôt que d'avoir un wrapper de classe, car j'ai tendance à privilégier la composition plutôt que la POO. Mais cela dépend du framework/projet avec lequel vous travaillez et de la façon dont vous avez décidé avec votre équipe d'aborder la question. En termes de performances, c'est la même chose, c'est-à-dire une seule classe pour stocker les fonctions ou avoir les fonctions espacées par des noms.
Interfaces :  utilisez-les plutôt que les types pour les DTO simples. En effet, les interfaces peuvent s'étendre les unes les autres tout en restant utilisables dans les types d'union et d'intersection. Elles bénéficient également de la fusion des déclarations. Cela nous donne de la flexibilité, bien que l'utilisation de types soit également acceptable, encore une fois, cela dépend de vos conventions sur le projet. Mais n'utilisez jamais de classes pour cela.
Types :       utilisez-les pour les types d'union et d'intersection et pour les types de fonction. Principalement parce que vous ne pouvez pas utiliser une interface pour stocker un type d'union ou d'intersection.
*/
}

  ngOnInit(): void {
  }

}
