export class Recipe {
  public name: string;
  public descripcion: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.descripcion = desc;
    this.imagePath = imagePath;
  }
}
