// import React from "react";
// import { Link } from "react-router-dom";

const book = {
  title: "El principito",
  author: "Antoine de Saint-Exupéry",
  editorial: "Emecé",
  thematic: "Literatura infantil",
  publicationYear: 1943,
  publicationCountry: "Estados Unidos",
  language: "Español",
  recommendedAge: "6+",
  size: "Medio",
  image:
    "https://www.papelerabariloche.com.ar/img/p/064735/1.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
};

const BookDetail = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <h2 className="text-lg text-gray-600 mb-4">by {book.author}</h2>
      <ul className="mb-4">
        <li className="text-sm text-red-600">Editorial: {book.editorial}</li>
        <li className="text-sm text-gray-500">Temática: {book.thematic}</li>
        <li className="text-sm text-gray-500">
          Año de publicación: {book.publicationYear}
        </li>
        <li className="text-sm text-gray-500">
          País de publicación:{book.publicationCountry}
        </li>
        <li className="text-sm text-gray-500">Idioma: {book.language}</li>
        <li className="text-sm text-gray-500">
          Edad recomendada: {book.recommendedAge}
        </li>
        <li className="text-sm text-gray-500">Tamaño: {book.size}</li>
      </ul>
      <img
        className="w-48 h-48 object-contain mb-4 mx-auto rounded-xl"
        src={book.image}
        alt=""
      />
      <br />

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
        Ver opciones de adquisición
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Sinopsis</h2>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,{" "}
          <br />
          fugiat modi dolor ut accusantium debitis ex earum dolore accusamus{" "}
          <br />
          repellat similique officia fuga. Soluta voluptates aliquid aperiam{" "}
          <br />
          odit nihil veritatis.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Reseñas editoriales</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Asombroso</h3>
          <p className="text-sm text-gray-600 mt-2">
            El Principito es uno de los mejores libros que leí cuando era niña
          </p>
          <h3 className="text-md font-semibold mt-2">Graciela Divaza</h3>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Opiniones</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Alfonso Rodriguez</h3>
          <p className="text-sm text-gray-600 mt-2">
            Acá alguien a quien le gusta la lectura dejará su opinión
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
