class Weather {
  constructor(id, main, description, icon) {
    this.description = description;
    this.id = id;
    this.main = main;
    this.icon = icon;
    }


}

function JSONToWeather(jsonObject) {
  const {
    id: id,
    main: main,
    description: description,
    icon: icon
  } = jsonObject; // destructuring

  const weather = new Weather(id,main,description,icon)

  return weather;
}
