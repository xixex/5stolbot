export const recipes = [
  {
    id: 'oatmeal-banana', title: 'Овсяная каша с бананом', emoji: '🥣', category: 'Завтрак',
    time: '25 мин', mode: 'Молочная каша', kcal: 450,
    ingredients: [
      { name: 'Овсяные хлопья', amount: '70 г' },
      { name: 'Молоко 2,5%', amount: '200 мл' },
      { name: 'Вода', amount: '150 мл' },
      { name: 'Банан', amount: '120 г' }
    ],
    steps: ['Засыпь хлопья в чашу мультиварки.', 'Влей молоко и воду, перемешай.', 'Готовь на режиме «Молочная каша» 20–25 минут.', 'Добавь нарезанный банан после приготовления.']
  },
  {
    id: 'chicken-soup-buckwheat', title: 'Куриный суп и гречка с курицей', emoji: '🍲', category: 'Обед',
    time: '50 мин', mode: 'Суп + Крупа', kcal: 700,
    ingredients: [
      { name: 'Куриное филе', amount: '180 г' },
      { name: 'Рис для супа', amount: '30 г' },
      { name: 'Картофель', amount: '100 г' },
      { name: 'Морковь', amount: '50 г' },
      { name: 'Гречка (сухая)', amount: '70 г' },
      { name: 'Вода', amount: 'по инструкции к мультиварке' }
    ],
    steps: ['Для супа нарежь курицу и овощи, промой рис.', 'Положи ингредиенты супа в чашу, залей водой.', 'Готовь на режиме «Суп» около 45–50 минут и проверь готовность курицы.', 'Отдельно приготовь гречку с водой на режиме «Крупа».', 'Порционируй суп и гречку с курицей.']
  },
  {
    id: 'pollock-potato-zucchini', title: 'Минтай с картофелем и кабачком', emoji: '🐟', category: 'Ужин',
    time: '30 мин', mode: 'На пару', kcal: 400,
    ingredients: [
      { name: 'Филе минтая', amount: '200 г' },
      { name: 'Картофель', amount: '250 г' },
      { name: 'Кабачок', amount: '200 г' },
      { name: 'Растительное масло', amount: '10 г' }
    ],
    steps: ['Нарежь картофель небольшими кусочками.', 'Положи картофель в чашу с водой, рыбу и кабачок — в паровой контейнер.', 'Готовь на режиме «На пару» 25–35 минут, проверяя готовность.', 'Добавь масло в готовое блюдо.']
  },
  {
    id: 'cottage-casserole', title: 'Творожная запеканка с яблоком', emoji: '🍎', category: 'Завтрак',
    time: '50 мин', mode: 'Выпечка', kcal: 430,
    ingredients: [
      { name: 'Творог 5%', amount: '200 г' },
      { name: 'Яйцо', amount: '1 шт.' },
      { name: 'Манка', amount: '30 г' },
      { name: 'Молоко', amount: '50 мл' },
      { name: 'Яблоко', amount: '100 г' },
      { name: 'Сахар', amount: '10 г' }
    ],
    steps: ['Смешай творог, яйцо, манку, молоко и сахар.', 'Добавь яблоко без сердцевины, нарезанное кубиками.', 'Выложи массу в чашу на подходящий пергамент для выпечки.', 'Готовь на режиме «Выпечка» 40–50 минут. Дай постоять 10 минут перед извлечением.']
  },
  {
    id: 'turkey-meatballs', title: 'Тефтели из индейки с рисом', emoji: '🍚', category: 'Обед',
    time: '45 мин', mode: 'Тушение', kcal: 500,
    ingredients: [
      { name: 'Фарш индейки', amount: '180 г' },
      { name: 'Рис (сухой)', amount: '70 г' },
      { name: 'Яйцо', amount: '½ шт.' },
      { name: 'Морковь', amount: '100 г' },
      { name: 'Сметана 10%', amount: '30 г' },
      { name: 'Вода', amount: '250–300 мл' }
    ],
    steps: ['Смешай фарш с половиной взбитого яйца и сформируй небольшие тефтели.', 'Промой рис и нарежь морковь.', 'Положи всё в чашу, добавь воду.', 'Готовь на режиме «Тушение» 35–45 минут до полной готовности.', 'Сметану добавь перед подачей.']
  },
  {
    id: 'chicken-buckwheat', title: 'Курица с гречкой и морковью', emoji: '🍗', category: 'Обед / ужин',
    time: '45 мин', mode: 'Крупа', kcal: 550,
    ingredients: [
      { name: 'Куриное филе', amount: '180 г' },
      { name: 'Гречка (сухая)', amount: '80 г' },
      { name: 'Морковь', amount: '100 г' },
      { name: 'Растительное масло', amount: '5 г' },
      { name: 'Вода', amount: '250 мл' }
    ],
    steps: ['Промой гречку, нарежь курицу и морковь.', 'Положи всё в чашу, добавь воду и масло.', 'Готовь на режиме «Гречка» или «Крупа» 35–45 минут.', 'Проверь готовность курицы и мягкость крупы.']
  },
  {
    id: 'rice-milk-banana', title: 'Рисовая молочная каша с бананом', emoji: '🍌', category: 'Завтрак',
    time: '40 мин', mode: 'Молочная каша', kcal: 430,
    ingredients: [
      { name: 'Рис (сухой)', amount: '70 г' },
      { name: 'Молоко 2,5%', amount: '250 мл' },
      { name: 'Вода', amount: '150 мл' },
      { name: 'Банан', amount: '100 г' }
    ],
    steps: ['Промой рис.', 'Добавь молоко и воду в чашу.', 'Готовь на режиме «Молочная каша» 30–40 минут.', 'Подавай с нарезанным бананом.']
  },
  {
    id: 'vegetable-soup', title: 'Овощной суп с рисом', emoji: '🥕', category: 'Обед',
    time: '45 мин', mode: 'Суп', kcal: 200,
    ingredients: [
      { name: 'Картофель', amount: '125 г' },
      { name: 'Морковь', amount: '50 г' },
      { name: 'Кабачок', amount: '100 г' },
      { name: 'Рис (сухой)', amount: '20 г' },
      { name: 'Вода', amount: '500 мл' }
    ],
    steps: ['Нарежь овощи небольшими кубиками.', 'Промой рис.', 'Положи всё в чашу и залей водой.', 'Готовь на режиме «Суп» 40–50 минут до мягкости овощей.']
  },
  {
    id: 'fish-rice-veg', title: 'Минтай с рисом и овощами', emoji: '🐟', category: 'Ужин',
    time: '35 мин', mode: 'Рис + пар', kcal: 450,
    ingredients: [
      { name: 'Филе минтая', amount: '200 г' },
      { name: 'Рис (сухой)', amount: '70 г' },
      { name: 'Морковь', amount: '100 г' },
      { name: 'Кабачок', amount: '150 г' },
      { name: 'Растительное масло', amount: '5 г' }
    ],
    steps: ['Промой рис и положи в чашу с водой в соответствии с инструкцией к мультиварке.', 'Рыбу и овощи размести в паровом контейнере.', 'Используй режим «Рис» с паровым контейнером, если это допускает конструкция. Иначе приготовь рыбу отдельно на пару.', 'Проверь готовность и добавь масло.']
  },
  {
    id: 'cottage-oats-banana', title: 'Творог с овсянкой и бананом', emoji: '🥣', category: 'Завтрак',
    time: '20 мин', mode: 'Каша', kcal: 450,
    ingredients: [
      { name: 'Творог 5%', amount: '200 г' },
      { name: 'Овсяные хлопья', amount: '50 г' },
      { name: 'Молоко', amount: '100 мл' },
      { name: 'Банан', amount: '120 г' }
    ],
    steps: ['Приготовь хлопья с молоком на режиме «Каша» 15–20 минут.', 'Дай немного остыть.', 'Добавь творог и нарезанный банан.']
  },
  {
    id: 'chicken-steam-cutlets', title: 'Паровые куриные котлеты с картофелем', emoji: '🍽️', category: 'Обед',
    time: '35 мин', mode: 'На пару', kcal: 450,
    ingredients: [
      { name: 'Куриный фарш', amount: '180 г' },
      { name: 'Яйцо', amount: '½ шт.' },
      { name: 'Картофель', amount: '300 г' },
      { name: 'Морковь', amount: '100 г' }
    ],
    steps: ['Смешай фарш с яйцом и сформируй котлеты.', 'Картофель и морковь положи в чашу с водой.', 'Котлеты размести в паровом контейнере.', 'Готовь на пару 30–35 минут и проверь полную готовность котлет.']
  },
  {
    id: 'turkey-potato-stew', title: 'Индейка, тушённая с картофелем', emoji: '🥘', category: 'Ужин',
    time: '55 мин', mode: 'Тушение', kcal: 500,
    ingredients: [
      { name: 'Филе индейки', amount: '200 г' },
      { name: 'Картофель', amount: '300 г' },
      { name: 'Морковь', amount: '100 г' },
      { name: 'Кабачок', amount: '150 г' },
      { name: 'Растительное масло', amount: '5 г' },
      { name: 'Вода', amount: '150 мл' }
    ],
    steps: ['Нарежь индейку и овощи.', 'Положи ингредиенты в чашу, добавь воду и масло.', 'Готовь на режиме «Тушение» 45–55 минут.', 'Проверь полную готовность мяса.']
  }
]

export const weekPlan = [
  { day: 'Понедельник', meals: ['oatmeal-banana', 'chicken-soup-buckwheat', 'pollock-potato-zucchini'] },
  { day: 'Вторник', meals: ['cottage-casserole', 'turkey-meatballs', 'chicken-buckwheat'] },
  { day: 'Среда', meals: ['rice-milk-banana', 'chicken-soup-buckwheat', 'fish-rice-veg'] },
  { day: 'Четверг', meals: ['cottage-oats-banana', 'vegetable-soup', 'cottage-casserole'] },
  { day: 'Пятница', meals: ['oatmeal-banana', 'chicken-soup-buckwheat', 'chicken-steam-cutlets'] },
  { day: 'Суббота', meals: ['rice-milk-banana', 'turkey-meatballs', 'turkey-potato-stew'] },
  { day: 'Воскресенье', meals: ['cottage-casserole', 'chicken-soup-buckwheat', 'fish-rice-veg'] }
]

export const shoppingGroups = [
  {
    title: 'Мясо и рыба',
    items: [
      { id: 'shop-chicken', name: 'Куриное филе / фарш', amount: '1,2 кг' },
      { id: 'shop-turkey', name: 'Филе или фарш индейки', amount: '600 г' },
      { id: 'shop-pollock', name: 'Минтай без костей', amount: '800 г' }
    ]
  },
  {
    title: 'Молочные продукты и яйца',
    items: [
      { id: 'shop-cottage', name: 'Творог 5%', amount: '700 г' },
      { id: 'shop-milk', name: 'Молоко', amount: '1,5 л' },
      { id: 'shop-sourcream', name: 'Сметана 10%', amount: '100 г' },
      { id: 'shop-eggs', name: 'Яйца', amount: '4 шт.' }
    ]
  },
  {
    title: 'Крупы',
    items: [
      { id: 'shop-oats', name: 'Овсяные хлопья', amount: '300 г' },
      { id: 'shop-buckwheat', name: 'Гречка', amount: '400 г' },
      { id: 'shop-rice', name: 'Рис', amount: '500 г' },
      { id: 'shop-semolina', name: 'Манка', amount: '100 г' }
    ]
  },
  {
    title: 'Овощи и фрукты',
    items: [
      { id: 'shop-potato', name: 'Картофель', amount: '3 кг' },
      { id: 'shop-carrot', name: 'Морковь', amount: '1,5 кг' },
      { id: 'shop-zucchini', name: 'Кабачки', amount: '1,5 кг' },
      { id: 'shop-banana', name: 'Бананы', amount: '6 шт.' },
      { id: 'shop-apple', name: 'Яблоки', amount: '6 шт.' }
    ]
  },
  {
    title: 'Прочее',
    items: [
      { id: 'shop-oil', name: 'Растительное масло', amount: '1 небольшая бутылка' },
      { id: 'shop-sugar', name: 'Сахар', amount: '100 г' },
      { id: 'shop-salt', name: 'Соль', amount: 'по необходимости' }
    ]
  }
]
