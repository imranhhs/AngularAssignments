import { Product } from "./product.model";
import { Train } from "./train-booking/train.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
  private dataSource: SimpleDataSource;
  private products: Product[];
  private trains: Train[];

  private locator = (p: Product, id: number) => p.id == id;
  private trainLocator = (train: Train, trainNumber: string) => train.trainNumber == trainNumber;

  constructor() {
    this.dataSource = new SimpleDataSource();

    this.products = new Array<Product>();
    this.trains = new Array<Train>();

    this.dataSource.getData().forEach(p => this.products.push(p));
    this.dataSource.getTrains().forEach((train) => this.trains.push(train));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTrains(): Train[] {
    return [...this.trains];
  }

  getProduct(id: number): Product {
    return this.products.find((p) => this.locator(p, id));
  }

  getTrain(trainNumber: string): Train {
    return this.trains.find((train) => this.trainLocator(train, trainNumber));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products.findIndex((p) => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.products.findIndex((p) => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  swapProduct() {
    let p = this.products.shift();
    this.products.push(new Product(p.id, p.name, p.category, p.price));
  }
}
