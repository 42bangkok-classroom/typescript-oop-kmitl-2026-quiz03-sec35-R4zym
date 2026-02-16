import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
  protected name: string = 'Unknown';
  public generation: number = 0;

  constructor(name: string ,x: string ,y: number ,z: number) {
    super(name)
    this.name = x ;
    this.generation = 
  }
}