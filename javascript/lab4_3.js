class Book {
    constructor(title, pubYear, price) {
      this._title = title;
      this._pubYear = pubYear;
      this._price = price;
    }
  
    // Геттеры
    get title() {
      return this._title;
    }
  
    get pubYear() {
      return this._pubYear;
    }
  
    get price() {
      return this._price;
    }
  
    // Сеттеры
    set title(value) {
      if (value === '') {
        throw new Error('Название книги не может быть пустой строкой');
      }
  
      this._title = value;
    }
  
    set pubYear(value) {
      if (value <= 0) {
        throw new Error('Год публикации должен быть положительным числом');
      }
  
      this._pubYear = value;
    }
  
    set price(value) {
      if (value <= 0) {
        throw new Error('Цена книги должна быть положительным числом');
      }
  
      this._price = value;
    }
  
    // Метод show
    show() {
      return `Название: ${this.title}, цена: ${this.price}`;
    }
      // Статический метод compare
  static compare(book1, book2) {
    if (book1.pubYear > book2.pubYear) {
      return 1;
    } else if (book1.pubYear < book2.pubYear) {
      return -1;
    } else {
      return 0;
    }
  }
}

// Создаем массив books из трех экземпляров класса Book
const books = [
  new Book('Мастер и Маргарита', 1966, 500),
  new Book('Война и мир', 1869, 1000),
  new Book('Анна Каренина', 1877, 800)
];

// Сортируем массив books с помощью метода Book.compare
books.sort(Book.compare);

// Выводим отсортированный массив books
books.forEach(book => console.log(book.show()));

  
  
 