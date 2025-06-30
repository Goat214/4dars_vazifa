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
import Image16 from "./assets/BingWallpaper.jpg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import Book from "./Book";
export const App = () => {
  const addDummyBook = () => {
    const newBook = {
      id: Date.now(),
    };
    setBooks([...books, newBook]);
  };

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
  const [imageLoaded, setImageLoaded] = useState(false);

  const deletedBooks = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const hisob = 0;

  if (books.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] px-6">
        <div className="text-center bg-white/5 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/20 max-w-xl w-full">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 mx-auto text-white drop-shadow-xl animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow">
            Hozircha kitob yo‘q
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Siz hali hech qanday kitob qo‘shmagansiz. Yoki ularni o‘chirib
            yuborgandirsiz :)
          </p>
          <button
            className="btn btn-accent btn-wide shadow-md"
            onClick={addDummyBook}
          >
            Kitob qo‘shish
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="main bg-[#c4c4c4] p-6 md:p-9">
        <div className="relative w-[1130px] h-[300px] mx-auto mb-7 rounded-2xl overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 animate-pulse z-10">
              <span className="loading loading-bars loading-md"></span>
            </div>
          )}
          <img
            className="rounded-2xl w-full h-full object-cover transition-opacity duration-500"
            src={Image16}
            alt=""
            style={{ opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <h2 className="align-elements text-black text-2xl font-bold mb-2.5">
          Top 15 books:
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center align-elements">
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                deletedBooks={deletedBooks}
                setSelectedBook={setSelectedBook}
              />
            );
          })}
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
