import React from "react";

function Categories({ value, onChangeCategorie }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categorieName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategorie(index)}
            className={value == index ? "active" : ""}
          >
            {categorieName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
