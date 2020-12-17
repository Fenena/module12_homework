class Device {
    constructor(name, brand, watt, weight, swich, volume) {
      this.name = name;
      this.brand = brand;
      this.watt = watt;
      this.dimensions = weight;
      this.swich = swich;
      this.volume = volume;
    }
    get Show() {
      return `Название прибора: ${this.name} \r\nМарка: ${this.brand} \r\nМощность: ${this.watt} Вт \r\nГабариты: ${this.dimensions} кг`;
    }
    set Show(newValue) {
      [this.name, this.brand, this.watt, this.dimensions, this.swich, this.volume] = newValue.split(' ');
    }
    Switch() {
      if (this.swich == true)
        console.log(`${this.name}` + ' включен(а) и его мощность: ' + `${this.watt}`);
      else
        console.log(`${this.name}` + ' выключен(а) и его мощность равен 0');
    }
    Dop(){
      if (this.name == 'Чайник'){
        console.log(`Объем: ${this.volume} л`);
      }
      else{
        console.log(`Система бритья: ${this.volume}`);
      }
    }
  }
  
  let teapot = new Device('Чайник', 'Bosch ', 2400, 1.86, true, 1.5);
  console.log(teapot.Show);
  teapot.Dop();
  teapot.Switch();
  
  const razor = new Device('Бритва', 'Philips', 5, 0.28, false, 'роторная');
  console.log(razor.Show);
  razor.Dop();
  razor.Switch();