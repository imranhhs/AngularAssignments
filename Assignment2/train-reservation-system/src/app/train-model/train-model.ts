export class Train {
  public id: number
  public name: string
  public number: number
  public source: string
  public destination: string
  public fare: number

  constructor(id?: number, name?: string, number?: number, source?: string, destination?: string, fare?: number) {
    this.id = id
    this.name = name
    this.number = number
    this.source = source
    this.destination = destination
    this.fare = fare
  }

}
