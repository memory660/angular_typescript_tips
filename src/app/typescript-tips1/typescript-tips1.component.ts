import { Component, OnInit } from '@angular/core';

// --------------------------------------
export interface UserProfil {
  firstName?: string;
  lastName: string;

  myFn1: (id: number) => string;
  myFn2(id: number): string;
}

export class MyClass1 implements UserProfil {
  lastName = 'tutu';

  myFn1(id: number) {
    return 'toto';
  }
  myFn2(id: number) {
    return 'toto';
  }
}

// --------------------------------------
export interface User1 {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
}

export interface User2 {
  firstName?: string;
  lastName: string;
}
// --------------------------------------

@Component({
  selector: 'app-typescript-tips1',
  templateUrl: './typescript-tips1.component.html',
  styleUrls: ['./typescript-tips1.component.scss']
})
export class TypescriptTips1Component implements OnInit {

  constructor() {
    const myUser = (user: User1): void => { console.log(user)}
    myUser({firstName: 'toto', lastName: 'tutu', age: 10, image: ''});

    // --------------------------------------

    // Partial<T>
    // firstName et lastName, sont devenu optionnel
    type UserPatchModel1 = Partial<User1>;
    const testUser11: UserPatchModel1 = { firstName: 'toto' };
    // ou
    const testUser12: Partial<User1> = { firstName: 'toto' };

    // Required<T>
    type UserPatchModel2= Required<User2>;
    const testUser21: UserPatchModel2  = { firstName: 'toto', lastName: 'tutu' };
    // ou
    const testUser22: Required<User2>  = { firstName: 'toto', lastName: 'tutu' };

    // NonNullable<T>
    // Il renvoie un type basé sur T en excluant undefined et null du type T générique.
    type NonNullableString = NonNullable<string | undefined | null>;
    const correct: NonNullableString = 'toto';
    // errors :
    // const error1: NonNullableString = undefined;
    // const error2: NonNullableString = null;

    // Readonly<T>
    // ok pour l'initialisation
    let immutableUser: Readonly<User1> = { firstName: 'toto', lastName: 'tutu', age: 10, image: ''};
    // errors :
    // immutableUser.firstName = 'titi';
    // la fonctionnalité readonly s'applique uniquement aux clés, et non à l'objet lui-même (donc on peut modifier l'objet en entier)
    immutableUser = { firstName: 'tata', lastName: 'tete', age: 11, image: ''};

    // unions de chaînes comme types
    type ShapeType = 'circle' | 'area';
    type Shape = { shapeType: ShapeType, area: number};
    const myShape: Shape = { shapeType: 'circle', area: 53};

    // Pick<T, K>
    // création d'un type à partir d'un autre type (en ajoutant les clés voulus)
    const user3: Pick<User1, "firstName" | "lastName"> = { firstName: 'tktk', lastName: 'tptp'};

    // Omit<T, K>
    // création d'un type à partir d'un autre type (en ometant les clés non désirés)
    const user4: Omit<User1, "firstName" | "lastName"> = { age: 21, image: ''};

    // Pick<T, K>   et   Omit<T, K>
    // si une clé est facultative et que cette clé est présente dans le type résultant, elle sera également facultative dans le nouveau type

    // Exclure<U, E>
    // À ne pas confondre avec Omit<T, U>.

    // Extract<T, U>

    // Parameters<T>

    // ReturnType<T>
  }

  ngOnInit(): void {
  }

}
