import { Fragment, useState } from "react";
import Image1 from "./assets/1984.jpg";
import Image2 from "./assets/great-gatsby.jpg";
import Image3 from "./assets/mockingbird.jpg";
import Image4 from "./assets/harry-potter.jpg";
import Image5 from "./assets/pride-and-prejudice.jpg";
import Image6 from "./assets/moby-dick.webp";
import Image7 from "./assets/Catcher-Rye.jpeg";
import Image8 from "./assets/Lord-of-the-Rings.jpeg";
import Image9 from "./assets/Brave-New-World.jpeg";
import Image10 from "./assets/Crime-and-Punishment.webp";
import Image11 from "./assets/Hobbit.jpeg";
import Image12 from "./assets/Frankenstein.webp";
import Image13 from "./assets/Alchemist.jpeg";
import Image14 from "./assets/Dracula.webp";
import Image15 from "./assets/Little-Women.jpeg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal";

export const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      image: Image3,
      genre: "Historical Fiction",
      rating: 4.9,
      description:
        "A story of racial injustice and childhood innocence in the Deep South.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      image: Image1,
      genre: "Dystopian",
      rating: 4.8,
      description:
        "A haunting vision of a totalitarian future ruled by surveillance and control.",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: Image2,
      genre: "Classic",
      rating: 4.7,
      description:
        "A critique of the American Dream told through the mysterious Jay Gatsby.",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      image: Image5,
      genre: "Romance",
      rating: 4.6,
      description:
        "A witty romantic tale about manners, love, and social standing.",
    },
    {
      id: 5,
      title: "Harry Potter ",
      author: "J.K. Rowling",
      year: 1997,
      image: Image4,
      genre: "Fantasy",
      rating: 4.9,
      description:
        "The magical beginning of Harry Potter’s journey at Hogwarts.",
    },
    {
      id: 6,
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      image: Image6,
      genre: "Adventure",
      rating: 4.3,
      description:
        "Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.",
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      image: Image7,
      genre: "Coming-of-age",
      rating: 4.5,
      description:
        "Holden Caulfield’s cynical journey through adolescence and alienation.",
    },
    {
      id: 8,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      image: Image8,
      genre: "Fantasy",
      rating: 5.0,
      description: "An epic battle between good and evil in Middle-earth.",
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      image: Image9,
      genre: "Science Fiction",
      rating: 4.6,
      description:
        "A futuristic world built on technology, control, and pleasure.",
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      image: Image10,
      genre: "Philosophical Fiction",
      rating: 4.8,
      description:
        "A psychological exploration of guilt and morality after committing a crime.",
    },
    {
      id: 11,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      image: Image11,
      genre: "Fantasy",
      rating: 4.8,
      description:
        "Bilbo Baggins embarks on an adventure to win a share of treasure guarded by a dragon.",
    },
    {
      id: 12,
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818,
      image: Image12,
      genre: "Horror",
      rating: 4.4,
      description:
        "A young scientist creates a sentient creature with tragic consequences.",
    },
    {
      id: 13,
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      image: Image13,
      genre: "Philosophical Fiction",
      rating: 4.7,
      description:
        "A shepherd’s spiritual journey to discover his personal legend.",
    },
    {
      id: 14,
      title: "Dracula",
      author: "Bram Stoker",
      year: 1897,
      image: Image14,
      genre: "Gothic Horror",
      rating: 4.3,
      description: "A chilling tale of the infamous vampire Count Dracula.",
    },
    {
      id: 15,
      title: "Little Women",
      author: "Louisa May Alcott",
      year: 1868,
      image: Image15,
      genre: "Coming-of-age",
      rating: 4.5,
      description:
        "The heartfelt story of four sisters growing up during the Civil War era.",
    },
  ]);
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <>
      <Header />
      <main className="main bg-[#c4c4c4] p-6 md:p-9">
        <img className="rounded-2xl  w-[1130px] ml-auto mr-auto h-[300px] object-cover mb-7 " src="src/assets/BingWallpaper.jpg" alt="" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center align-elements">
          {books.map((book) => (
            <li
              key={book.id}
              className="group rounded-2xl overflow-hidden max-w-full w-full sm:w-[320px] md:w-[360px] mx-auto bg-[#444444] flex flex-col shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className="relative h-[300px] overflow-hidden bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${book.image})` }}
              >
                <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
                <img
                  src={book.image}
                  alt="book"
                  className="relative z-10 w-[150px] h-[230px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl text-white mb-1">{book.title}</h3>
                <h4 className="text-gray-300 mb-3">
                  by <span className="italic"> {book.author} </span> (Author)
                </h4>

                <div className="flex text-gray-400 mb-3">
                  <p className="border border-gray-500 text-white px-3 py-1 rounded">
                    {book.genre}
                  </p>
                  <p className="ml-auto">{book.rating} ⭐</p>
                </div>

                <p className="text-gray-200 mb-5 flex-grow">
                  {book.description}
                </p>

                <div className="flex items-center">
                  <p className="text-gray-300">Written in {book.year}</p>
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="btn ml-auto"
                  >
                    more
                  </button>
                 
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Modal
        book={selectedBook}
        isOpen={selectedBook !== null}
        onClose={() => setSelectedBook(null)}
      />
      </main>
      <Footer />
    </>
  );
};
