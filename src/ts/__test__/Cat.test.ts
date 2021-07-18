import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('checking if an item has been added to the cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители',0,2012,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  cart.add(movie);

  expect([...cart.items]).toEqual([movie]);
});

test('checking the calculation of the amount without discount', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители',400,2012,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  const movie1 = new Movie(2, 'Стражи порядка',500,2011,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  cart.add(movie);
  cart.add(movie1);

  expect(cart.totalCostWithoutDiscount()).toBe(900);
});

test('checking the calculation of the discount amount', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители',400,2012,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  const movie1 = new Movie(2, 'Стражи порядка',500,2011,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  cart.add(movie);
  cart.add(movie1);

  expect(cart.totalDiscountedPrice(20)).toBe(880);
});

test('product removal check', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители',400,2012,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  const movie1 = new Movie(2, 'Стражи порядка',500,2011,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  cart.add(movie);
  cart.add(movie1);

  expect(cart.delete(1)).toEqual([movie1]);
});
