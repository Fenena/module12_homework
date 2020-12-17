function Device(name, brand, watt, weight) {
  this.getName = name;
  this.getBrand = function () {
    console.log(`Марка: ${brand}`)
  }
  this.Watt = watt;
  this.getDimensions = function () {
    console.log(`Вес: ${weight} кг`)
  }
}

const teapot = new Device('Чайник', 'Bosch ', 2400, 1.86);
// новове свойство чайника
teapot.getVolume = function (volume) {
  console.log(`Объем: ${volume} л`)
}
//вкл/выкл + мощность чайника
teapot.getSwitch = function () {
  dev = true
  if (dev == true)
    console.log(teapot.getName + ' включен(а) и его мощность: ' + teapot.Watt);
  else
    console.log(teapot.getName + ' выключен(а) и его мощность равен 0');
}

const razor = new Device('Бритва', 'Philips', 5, 0.28);
// новове свойство бритвы
razor.getShaving = function (shaving) {
  console.log(`Система бритья: ${shaving}`)
}
//вкл/выкл + мощность бритвы
razor.getSwitch = function () {
  dev = false
  if (dev == true)
    console.log(razor.getName + ' включен(а) и его мощность: ' + razor.Watt);
  else
    console.log(razor.getName + ' выключен(а) и его мощность равен 0');
}

console.log('Название прибора: ' + teapot.getName)
teapot.getBrand()
teapot.getDimensions()
teapot.getVolume(1.5)
teapot.getSwitch()

console.log('')

console.log('Название прибора: ' + razor.getName)
razor.getBrand()
razor.getDimensions()
razor.getShaving('роторная')
razor.getSwitch()
