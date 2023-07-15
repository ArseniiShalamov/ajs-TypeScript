import Busket from "./Basket";
import Movie from "./movie";

const busket = new Busket();
const movie = new Movie(
    1,
    "Мстители",
    100,
    2012,
    "США",
    "Avengers Assemble!",
    ["Фантастика", "Боевик", "Фентези", "Приключения"],
    "137 мин. / 02:17"
);

busket.add(movie);
console.log(busket);