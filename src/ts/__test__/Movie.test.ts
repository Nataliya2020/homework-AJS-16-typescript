import Movie from "../domain/Movie";

test('verifying the correct creation of an object of class Movie', () => {

  const movie = new Movie(1, 'Мстители',0,2012,'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17');
  const expected = {
    id: 1,
    name: 'Мстители',
    price: 0,
    year: 2012,
    country: 'США',
    tagline: 'Avengers Assemble!',
    genre: 'фантастика, боевик, фэнтези, приключения',
    time: '137 мин. / 02:17'
  }

  expect(movie).toEqual(expected);
})
