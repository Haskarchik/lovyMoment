// Заготовка
// {
//   id: "айді",  //- одним оригінальним словом замість "айді"
//   tags: ["child-party","city-day", "festival", "corporate","promotion","birthday"], // - вибираємо теги які потрібно, інші удаляємо
//   name: "імя ", // - замість "імя" - написати назву товару
//   img: "./img/catalog/mega-tetris.jpg",
//   price: " 1500 грн/ 2 години", // - замість " 1500 грн/ 2 години" - написати прайс товару
//   descriptions: ``, //- блок опису, якщо блок не потрібний  тоді залишаємо таким
//   complactation: ["", "", "", "", ""], // - комплектація, скільки треба стільки і добавляєм, якщо блок не потрібний  тоді залишаємо таким
//   varning: "", // - блок Важливо, якесь застереження чи тому подібне, якщо блок не потрібний  тоді залишаємо таким
// },
//

export const CATALOG = [
  {
    id: "Briz",
    tags: ["corporate", "festival", "promotion"],
    name: "Морський Бриз",
    img: "../img/catalog/Briz.jpg",
    albom: [
      "https://lh3.googleusercontent.com/pw/AM-JKLWGXP99cNR1fcTkhOAeAWk4yMT_LGa7Y8pIzyQ7m0Z177Jc0F9RoAnjK5f9IF7kP218Bx5pOMUP4Yd2Mufu-0DHCg-OhQd00TAqKGlAB_deYH6m_v7ty8-XfhqMCFdw4eo5OU2PozrqlZrNyGvC_t3hgA=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUy8gLBDMn-ZfKP3veDcbnrJ071DKxA-ZxoEKw2naRZk427Y-aOaMdawqwJCRPHCApUHdjX7nq_juXCai19MMzvHNeTIzIttqPzRp__lCAs3SiJ19CGXuAY8hVTwxu49knM_19c_F4G5T8tO9IHhUja9w=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUMKglAzvWIkiDiHlJeIlC8S-Dk7qg0-OPNvKCoJGUaKIhYBl0h_xP65FneLZ1JPdKYlAwrpFhSlRJLm30wRrQxqiHsGQbzFf5dOgJMycwXrqyFBIdJWaevrVI7da-H4Ng52m8srKZ9NXI8VbstVe6sQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLXFGj5CgMZmfw1OVKV750ZQk_cICkjRs_v97ll12abMAogEXMXb-2VU3N35nX6UVSWIXUcM35RU-NHsoNdpYRHFPNoV5bu23syJ9zS9RV4zV8j5x1qw0x5f-padpRtbJF5bgbCb5lKz4OLGBWLEod4g0g=w422-h937-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLXIP4_3zWmYcDM3MHDl0iCoPrdkKuGEGpvFZ_6LnHTHC7MqPLzzkEXZDIoSFnO75AC1bEYnHdU5tpJAEQPXneeC7ImqBHvNaHQw1DzhokY1tUJyLn1Z7pXcaOvanCnYEGNc1CeIrX2P19mXs5zK47uJWA=w1920-h864-no?authuser=0 ",
    ],
    video:'',
    price: "9000 грн/добу",
    descriptions: `Про что фильм «Доктор Стрэндж: В мультивселенной безумия»:
      Доктор Стивен Стрэндж отправляется на свадебное торжество своей бывшей 
      коллеги Кристен Палмер, попутно размышляя о собственном будущем. Измученный
      причудливыми снами о загадочной фигуре, Стрэндж вступает в контакт с Америкой 
      Чавес — девочкой-подростком, скрывающейся от смертоносной силы, которая хочет 
      похитить способность девочки путешествовать по мультивселенной. Вместе с Вонгом 
      и Вандой Максимофф Стрэндж намерен защитить девочку, и для этого супергерои сперва
      должны выследить могущественного злодея, ведущего на неё охоту.`,
    complactation: [" ", "Горка", "Турбінка", "інструктор", " "],
    varning: " Стрэндж намерен защитить девочку",
  },
  {
    id: "Minion",
    tags: ["city-day", "festival"],
    name: "Міньйон",
    img: "../img/catalog/minion.jpg",
    albom: [
      "https://lh3.googleusercontent.com/pw/AM-JKLWGXP99cNR1fcTkhOAeAWk4yMT_LGa7Y8pIzyQ7m0Z177Jc0F9RoAnjK5f9IF7kP218Bx5pOMUP4Yd2Mufu-0DHCg-OhQd00TAqKGlAB_deYH6m_v7ty8-XfhqMCFdw4eo5OU2PozrqlZrNyGvC_t3hgA=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUy8gLBDMn-ZfKP3veDcbnrJ071DKxA-ZxoEKw2naRZk427Y-aOaMdawqwJCRPHCApUHdjX7nq_juXCai19MMzvHNeTIzIttqPzRp__lCAs3SiJ19CGXuAY8hVTwxu49knM_19c_F4G5T8tO9IHhUja9w=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUMKglAzvWIkiDiHlJeIlC8S-Dk7qg0-OPNvKCoJGUaKIhYBl0h_xP65FneLZ1JPdKYlAwrpFhSlRJLm30wRrQxqiHsGQbzFf5dOgJMycwXrqyFBIdJWaevrVI7da-H4Ng52m8srKZ9NXI8VbstVe6sQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLVm56kBSojDYdqF4QtISe68WDEruD81Uh4nwi-Dlje7imhptcxgymmBC-JLlsf6qA0_yHAMnuDkgo_hMHnv-63EX5GE4YbAQuGc5YnRy_SvKBA5diIT77NQ1dz8ihiippL5IOjAPpC5si8Kpue5poWkQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLXIP4_3zWmYcDM3MHDl0iCoPrdkKuGEGpvFZ_6LnHTHC7MqPLzzkEXZDIoSFnO75AC1bEYnHdU5tpJAEQPXneeC7ImqBHvNaHQw1DzhokY1tUJyLn1Z7pXcaOvanCnYEGNc1CeIrX2P19mXs5zK47uJWA=w1920-h864-no?authuser=0 ",
    ],
    price: "10000 грн/добу",
    descriptions: `о загадочной фигуре, Стрэндж вступает в контакт с Америкой 
      Чавес — девочкой-подростком, скрывающейся от смертоносной силы, которая хочет 
      похитить способность девочки путешествов`,
    complactation: ["Горка", "Турбінка", "інструктор", " 1"],
    varning: " Стрэндж намерен защитить девочку",
  },
  {
    id: "batyt",
    tags: ["corporate", "birthday"],
    name: "Батут",
    img: "../img/catalog/batyt.webp",
    albom: [
      "https://lh3.googleusercontent.com/pw/AM-JKLWGXP99cNR1fcTkhOAeAWk4yMT_LGa7Y8pIzyQ7m0Z177Jc0F9RoAnjK5f9IF7kP218Bx5pOMUP4Yd2Mufu-0DHCg-OhQd00TAqKGlAB_deYH6m_v7ty8-XfhqMCFdw4eo5OU2PozrqlZrNyGvC_t3hgA=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUy8gLBDMn-ZfKP3veDcbnrJ071DKxA-ZxoEKw2naRZk427Y-aOaMdawqwJCRPHCApUHdjX7nq_juXCai19MMzvHNeTIzIttqPzRp__lCAs3SiJ19CGXuAY8hVTwxu49knM_19c_F4G5T8tO9IHhUja9w=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUMKglAzvWIkiDiHlJeIlC8S-Dk7qg0-OPNvKCoJGUaKIhYBl0h_xP65FneLZ1JPdKYlAwrpFhSlRJLm30wRrQxqiHsGQbzFf5dOgJMycwXrqyFBIdJWaevrVI7da-H4Ng52m8srKZ9NXI8VbstVe6sQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLVm56kBSojDYdqF4QtISe68WDEruD81Uh4nwi-Dlje7imhptcxgymmBC-JLlsf6qA0_yHAMnuDkgo_hMHnv-63EX5GE4YbAQuGc5YnRy_SvKBA5diIT77NQ1dz8ihiippL5IOjAPpC5si8Kpue5poWkQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLXIP4_3zWmYcDM3MHDl0iCoPrdkKuGEGpvFZ_6LnHTHC7MqPLzzkEXZDIoSFnO75AC1bEYnHdU5tpJAEQPXneeC7ImqBHvNaHQw1DzhokY1tUJyLn1Z7pXcaOvanCnYEGNc1CeIrX2P19mXs5zK47uJWA=w1920-h864-no?authuser=0 ",
    ],
    price: "5000 грн/годину",
    descriptions: ``,
    complactation: ["", "", "", "", ""],
    varning: "",
  },
  {
    id: "tetris",
    tags: ["child-party"],
    name: "Мега тетріс ",
    img: "./img/catalog/mega-tetris.jpg",
    albom: [
      "https://lh3.googleusercontent.com/pw/AM-JKLWGXP99cNR1fcTkhOAeAWk4yMT_LGa7Y8pIzyQ7m0Z177Jc0F9RoAnjK5f9IF7kP218Bx5pOMUP4Yd2Mufu-0DHCg-OhQd00TAqKGlAB_deYH6m_v7ty8-XfhqMCFdw4eo5OU2PozrqlZrNyGvC_t3hgA=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUy8gLBDMn-ZfKP3veDcbnrJ071DKxA-ZxoEKw2naRZk427Y-aOaMdawqwJCRPHCApUHdjX7nq_juXCai19MMzvHNeTIzIttqPzRp__lCAs3SiJ19CGXuAY8hVTwxu49knM_19c_F4G5T8tO9IHhUja9w=w1920-h864-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AM-JKLUMKglAzvWIkiDiHlJeIlC8S-Dk7qg0-OPNvKCoJGUaKIhYBl0h_xP65FneLZ1JPdKYlAwrpFhSlRJLm30wRrQxqiHsGQbzFf5dOgJMycwXrqyFBIdJWaevrVI7da-H4Ng52m8srKZ9NXI8VbstVe6sQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLVm56kBSojDYdqF4QtISe68WDEruD81Uh4nwi-Dlje7imhptcxgymmBC-JLlsf6qA0_yHAMnuDkgo_hMHnv-63EX5GE4YbAQuGc5YnRy_SvKBA5diIT77NQ1dz8ihiippL5IOjAPpC5si8Kpue5poWkQg=w1920-h864-no?authuser=0 ",
      "https://lh3.googleusercontent.com/pw/AM-JKLXIP4_3zWmYcDM3MHDl0iCoPrdkKuGEGpvFZ_6LnHTHC7MqPLzzkEXZDIoSFnO75AC1bEYnHdU5tpJAEQPXneeC7ImqBHvNaHQw1DzhokY1tUJyLn1Z7pXcaOvanCnYEGNc1CeIrX2P19mXs5zK47uJWA=w1920-h864-no?authuser=0 ",
    ],
    price: " 1500 грн/2 години",
    descriptions: ``,
    complactation: ["", "", "", "", ""],
    varning: "",
  },
  
];
