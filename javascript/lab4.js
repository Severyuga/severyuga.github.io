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
  }
  
  
  // Создаем экземпляр класса Book
  const book = new Book('Мастер и Маргарита', 1966, 500);
  
  // Изменяем значения свойств экземпляра класса Book
  book.title = 'Новое название';
  book.pubYear = 2022;
  book.price = 1000;
  
  console.log(book.show()); // Название: Новое название, цена: 1000

  
