import Busket from "../Basket";
import Movie from "../movie";

const movie = new Movie(
  1,
  "Не смотрите наверх",
  100,
  2021,
  "США",
  "На основе действительно возможных событий",
  ["Драма", "Фантастика", "Комедия"],
  "138 мин. / 02:18"
);

const movie1 = new Movie( 
  2,
  "Паразиты",
  200,
  2019,
  "Южная Корея",
  "Найди злоумышленника",
  ["Драма", "Триллер", "Комедия"],
  "131 мин. / 02:11"
);

test("add new Movie in a Busket", () => {
  const busket = new Busket();
  busket.add(movie);

  const result = busket.items;
  const expected = [movie];
  expect(result).toEqual(expected);
});

test("length new busket should be 0", () => {
  const busket = new Busket();

  const result = busket.items.length;
  const expected = 0;
  expect(result).toBe(expected);
});

test("cost busket should be 300", () => {
  const busket = new Busket();
  busket.add(movie);
  busket.add(movie1);

  const result = busket.totalCost();
  const expected = 300;

  expect(result).toEqual(expected);
});

test("cost busket with discount should be 150", () => {
  const busket = new Busket();
  busket.add(movie);
  busket.add(movie1);

  const result = busket.discountPrice(50);
  const expected = 150;

  expect(result).toEqual(expected);
});

test("cost busket with discount should be 150", () => {
  const busket = new Busket();
  busket.add(movie);
  busket.add(movie1);
  busket.deleteItem(2);

  const result = busket.items;
  const expected = [movie];

  expect(result).toEqual(expected);
});