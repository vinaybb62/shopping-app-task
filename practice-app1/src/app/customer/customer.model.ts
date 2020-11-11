export class Items {
  public name: string;
  public description: string;
  public imagePath: string;
  public amount: string;

  constructor(name: string, desc: string, imagePath: string, amount: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.amount = amount;
  }
}
