// Примерное меню на 4 недели. Порции и калорийность ориентировочные.
// При лечебной диете сверяйте ограничения и размеры порций с лечащим врачом.

export const recipes = [
  {
    id: 'oatmeal-banana', title: 'Овсяная каша с бананом', emoji: '🥣', category: 'Завтрак',
    time: '20–25 мин', mode: 'Молочная каша', kcal: 350,
    ingredients: [{ name: 'Овсяные хлопья', amount: '50 г' }, { name: 'Молоко 2,5%', amount: '150 мл' }, { name: 'Вода', amount: '150 мл' }, { name: 'Банан', amount: '80 г' }],
    steps: ['Положи хлопья в чашу мультиварки.', 'Добавь молоко и воду, перемешай.', 'Готовь на режиме «Молочная каша» 20–25 минут.', 'Добавь нарезанный банан.']
  },
  {
    id: 'rice-apple-porridge', title: 'Рисовая каша с яблоком', emoji: '🍎', category: 'Завтрак',
    time: '30–40 мин', mode: 'Молочная каша', kcal: 330,
    ingredients: [{ name: 'Рис сухой', amount: '55 г' }, { name: 'Молоко 2,5%', amount: '150 мл' }, { name: 'Вода', amount: '150 мл' }, { name: 'Яблоко', amount: '100 г' }],
    steps: ['Промой рис.', 'Добавь молоко и воду.', 'Готовь на режиме «Молочная каша» 30–40 минут.', 'Яблоко очисти при необходимости, нарежь и добавь в готовую кашу.']
  },
  {
    id: 'buckwheat-milk', title: 'Гречневая молочная каша', emoji: '🥣', category: 'Завтрак',
    time: '30 мин', mode: 'Каша', kcal: 320,
    ingredients: [{ name: 'Гречка сухая', amount: '50 г' }, { name: 'Молоко 2,5%', amount: '180 мл' }, { name: 'Вода', amount: '120 мл' }],
    steps: ['Промой гречку.', 'Добавь воду и молоко в чашу.', 'Готовь на режиме «Каша» до мягкости крупы.', 'При необходимости добавь немного тёплой воды.']
  },
  {
    id: 'cottage-casserole', title: 'Творожная запеканка с яблоком', emoji: '🍎', category: 'Завтрак',
    time: '45–55 мин', mode: 'Выпечка', kcal: 330,
    ingredients: [{ name: 'Творог 5%', amount: '180 г' }, { name: 'Яйцо', amount: '1 шт.' }, { name: 'Манка', amount: '20 г' }, { name: 'Молоко', amount: '30 мл' }, { name: 'Яблоко', amount: '80 г' }],
    steps: ['Смешай творог, яйцо, манку и молоко.', 'Добавь нарезанное яблоко.', 'Выложи массу в чашу на пергамент.', 'Готовь на режиме «Выпечка» 45–55 минут и дай немного остыть.']
  },
  {
    id: 'cottage-banana', title: 'Творог с бананом и йогуртом', emoji: '🍌', category: 'Завтрак',
    time: '5 мин', mode: 'Без приготовления', kcal: 300,
    ingredients: [{ name: 'Творог 5%', amount: '180 г' }, { name: 'Банан', amount: '80 г' }, { name: 'Натуральный йогурт', amount: '50 г' }],
    steps: ['Разомни творог вилкой.', 'Добавь йогурт и перемешай.', 'Нарежь банан и подай с творогом.']
  },
  {
    id: 'omelette-steam', title: 'Паровый омлет', emoji: '🍳', category: 'Завтрак',
    time: '20 мин', mode: 'На пару', kcal: 260,
    ingredients: [{ name: 'Яйца', amount: '2 шт.' }, { name: 'Молоко', amount: '60 мл' }, { name: 'Хлеб пшеничный', amount: '40 г' }],
    steps: ['Взбей яйца с молоком без образования пены.', 'Перелей в небольшую жаропрочную форму.', 'Готовь в паровом контейнере 15–20 минут до полного схватывания.', 'Подай с пшеничным хлебом.']
  },
  {
    id: 'oat-cottage-pancake', title: 'Овсяно-творожная запеканка', emoji: '🥞', category: 'Завтрак',
    time: '35–45 мин', mode: 'Выпечка', kcal: 340,
    ingredients: [{ name: 'Творог 5%', amount: '150 г' }, { name: 'Овсяные хлопья', amount: '35 г' }, { name: 'Яйцо', amount: '1 шт.' }, { name: 'Банан', amount: '50 г' }],
    steps: ['Измельчи хлопья до крупной крошки.', 'Смешай с творогом, яйцом и размятым бананом.', 'Выложи в небольшую форму.', 'Готовь на режиме «Выпечка» 35–45 минут.']
  },
  {
    id: 'semolina-porridge', title: 'Манная каша', emoji: '🥣', category: 'Завтрак',
    time: '15–20 мин', mode: 'Молочная каша', kcal: 300,
    ingredients: [{ name: 'Манная крупа', amount: '35 г' }, { name: 'Молоко 2,5%', amount: '200 мл' }, { name: 'Вода', amount: '100 мл' }],
    steps: ['Смешай молоко и воду в чаше.', 'На режиме «Молочная каша» постепенно всыпь манку, помешивая.', 'Готовь 10–15 минут, затем дай постоять 5 минут.']
  },
  {
    id: 'millet-pumpkin', title: 'Пшённая каша с тыквой', emoji: '🎃', category: 'Завтрак',
    time: '35–45 мин', mode: 'Каша', kcal: 320,
    ingredients: [{ name: 'Пшено сухое', amount: '50 г' }, { name: 'Тыква', amount: '120 г' }, { name: 'Молоко', amount: '120 мл' }, { name: 'Вода', amount: '180 мл' }],
    steps: ['Промой пшено горячей водой.', 'Нарежь тыкву мелкими кубиками.', 'Добавь всё в чашу и готовь на режиме «Каша» 35–45 минут.']
  },
  {
    id: 'baked-apple-cottage', title: 'Запечённое яблоко с творогом', emoji: '🍏', category: 'Завтрак',
    time: '25–30 мин', mode: 'Выпечка', kcal: 250,
    ingredients: [{ name: 'Яблоко', amount: '1 шт. (150 г)' }, { name: 'Творог 5%', amount: '100 г' }, { name: 'Мёд', amount: '5 г (по желанию)' }],
    steps: ['Удали сердцевину яблока, не прорезая дно.', 'Наполни творогом.', 'Готовь на режиме «Выпечка» 20–25 минут до мягкости.']
  },
  {
    id: 'chicken-rice-soup', title: 'Суп с курицей и рисом', emoji: '🍲', category: 'Обед',
    time: '45–55 мин', mode: 'Суп', kcal: 360,
    ingredients: [{ name: 'Куриное филе', amount: '120 г' }, { name: 'Рис сухой', amount: '25 г' }, { name: 'Картофель', amount: '100 г' }, { name: 'Морковь', amount: '40 г' }, { name: 'Вода', amount: '500 мл' }],
    steps: ['Нарежь курицу и овощи небольшими кусочками.', 'Промой рис.', 'Положи ингредиенты в чашу и залей водой.', 'Готовь на режиме «Суп» 45–55 минут до полной готовности курицы.']
  },
  {
    id: 'turkey-meatballs-rice', title: 'Тефтели из индейки с рисом', emoji: '🍚', category: 'Обед',
    time: '40–50 мин', mode: 'Тушение', kcal: 480,
    ingredients: [{ name: 'Фарш индейки', amount: '160 г' }, { name: 'Рис сухой', amount: '60 г' }, { name: 'Яйцо', amount: '½ шт.' }, { name: 'Морковь', amount: '60 г' }, { name: 'Вода', amount: '200 мл' }],
    steps: ['Смешай фарш с половиной взбитого яйца и сформируй тефтели.', 'Промой рис, натри морковь.', 'Положи всё в чашу, добавь воду.', 'Готовь на режиме «Тушение» 40–50 минут до полной готовности.']
  },
  {
    id: 'pollock-potato', title: 'Минтай с картофелем на пару', emoji: '🐟', category: 'Ужин',
    time: '30–35 мин', mode: 'На пару', kcal: 390,
    ingredients: [{ name: 'Филе минтая', amount: '180 г' }, { name: 'Картофель', amount: '220 г' }, { name: 'Кабачок', amount: '150 г' }, { name: 'Растительное масло', amount: '5 г' }],
    steps: ['Нарежь картофель небольшими кусочками.', 'Картофель положи в чашу с водой, рыбу и кабачок — в паровой контейнер.', 'Готовь на пару 25–35 минут до готовности.', 'Добавь масло в готовое блюдо.']
  },
  {
    id: 'chicken-buckwheat', title: 'Курица с гречкой и морковью', emoji: '🍗', category: 'Обед',
    time: '40–45 мин', mode: 'Крупа / тушение', kcal: 470,
    ingredients: [{ name: 'Куриное филе', amount: '160 г' }, { name: 'Гречка сухая', amount: '65 г' }, { name: 'Морковь', amount: '70 г' }, { name: 'Растительное масло', amount: '5 г' }, { name: 'Вода', amount: '220 мл' }],
    steps: ['Промой гречку, нарежь курицу и морковь.', 'Положи всё в чашу, добавь воду и масло.', 'Готовь на режиме «Гречка» или «Крупа» 35–45 минут.', 'Проверь готовность курицы и мягкость крупы.']
  },
  {
    id: 'vegetable-rice-soup', title: 'Овощной суп с рисом', emoji: '🥕', category: 'Обед',
    time: '40–50 мин', mode: 'Суп', kcal: 230,
    ingredients: [{ name: 'Картофель', amount: '120 г' }, { name: 'Морковь', amount: '50 г' }, { name: 'Кабачок', amount: '120 г' }, { name: 'Рис сухой', amount: '25 г' }, { name: 'Вода', amount: '500 мл' }],
    steps: ['Нарежь овощи небольшими кубиками.', 'Промой рис.', 'Положи всё в чашу и залей водой.', 'Готовь на режиме «Суп» 40–50 минут до мягкости овощей.']
  },
  {
    id: 'chicken-steam-cutlets', title: 'Паровые куриные котлеты с картофелем', emoji: '🍽️', category: 'Обед',
    time: '30–40 мин', mode: 'На пару', kcal: 440,
    ingredients: [{ name: 'Куриный фарш', amount: '160 г' }, { name: 'Яйцо', amount: '½ шт.' }, { name: 'Картофель', amount: '250 г' }, { name: 'Морковь', amount: '70 г' }],
    steps: ['Смешай фарш с яйцом и сформируй котлеты.', 'Картофель и морковь положи в чашу с водой.', 'Котлеты размести в паровом контейнере.', 'Готовь на пару 30–40 минут и проверь полную готовность котлет.']
  },
  {
    id: 'turkey-potato-stew', title: 'Индейка, тушённая с картофелем', emoji: '🥘', category: 'Ужин',
    time: '45–55 мин', mode: 'Тушение', kcal: 450,
    ingredients: [{ name: 'Филе индейки', amount: '170 г' }, { name: 'Картофель', amount: '250 г' }, { name: 'Морковь', amount: '70 г' }, { name: 'Кабачок', amount: '120 г' }, { name: 'Растительное масло', amount: '5 г' }, { name: 'Вода', amount: '150 мл' }],
    steps: ['Нарежь индейку и овощи.', 'Положи ингредиенты в чашу, добавь воду и масло.', 'Готовь на режиме «Тушение» 45–55 минут.', 'Проверь полную готовность мяса.']
  },
  {
    id: 'pollock-rice', title: 'Минтай с рисом и морковью', emoji: '🐟', category: 'Ужин',
    time: '30–40 мин', mode: 'На пару + крупа', kcal: 430,
    ingredients: [{ name: 'Филе минтая', amount: '180 г' }, { name: 'Рис сухой', amount: '60 г' }, { name: 'Морковь', amount: '70 г' }, { name: 'Растительное масло', amount: '5 г' }],
    steps: ['Промой рис и приготовь его на режиме «Рис».', 'Рыбу и морковь приготовь в паровом контейнере 20–25 минут.', 'Проверь готовность рыбы и добавь масло.']
  },
  {
    id: 'beef-steam-buckwheat', title: 'Нежная говядина с гречкой', emoji: '🥩', category: 'Обед',
    time: '60–80 мин', mode: 'Тушение + крупа', kcal: 490,
    ingredients: [{ name: 'Постная говядина', amount: '150 г' }, { name: 'Гречка сухая', amount: '60 г' }, { name: 'Морковь', amount: '60 г' }, { name: 'Вода', amount: '250 мл' }],
    steps: ['Нарежь постную говядину небольшими кусочками.', 'Туши с морковью и водой 60–80 минут до мягкости.', 'Отдельно приготовь гречку.', 'Подавай без обжаривания.']
  },
  {
    id: 'zucchini-turkey', title: 'Тефтели из индейки с кабачком', emoji: '🥒', category: 'Ужин',
    time: '40–50 мин', mode: 'Тушение', kcal: 360,
    ingredients: [{ name: 'Фарш индейки', amount: '160 г' }, { name: 'Кабачок', amount: '180 г' }, { name: 'Рис сухой', amount: '30 г' }, { name: 'Яйцо', amount: '½ шт.' }, { name: 'Вода', amount: '150 мл' }],
    steps: ['Натри кабачок и слегка отожми лишнюю жидкость.', 'Смешай с фаршем, рисом и яйцом.', 'Сформируй небольшие тефтели и добавь воду.', 'Готовь на режиме «Тушение» 40–50 минут до полной готовности.']
  },
  {
    id: 'chicken-pasta', title: 'Куриное филе с макаронами', emoji: '🍝', category: 'Обед',
    time: '35–45 мин', mode: 'Тушение + варка', kcal: 460,
    ingredients: [{ name: 'Куриное филе', amount: '150 г' }, { name: 'Макароны из твёрдых сортов', amount: '65 г' }, { name: 'Морковь', amount: '50 г' }, { name: 'Растительное масло', amount: '5 г' }],
    steps: ['Отвари макароны отдельно до мягкости.', 'Курицу и морковь нарежь, добавь немного воды.', 'Туши в мультиварке 25–30 минут до готовности.', 'Смешай с макаронами и добавь масло.']
  },
  {
    id: 'baked-fish-veg', title: 'Рыба с кабачком', emoji: '🐟', category: 'Ужин',
    time: '30–35 мин', mode: 'На пару', kcal: 300,
    ingredients: [{ name: 'Филе минтая', amount: '180 г' }, { name: 'Кабачок', amount: '200 г' }, { name: 'Картофель', amount: '150 г' }, { name: 'Растительное масло', amount: '5 г' }],
    steps: ['Нарежь кабачок и картофель.', 'Положи рыбу и овощи в паровой контейнер.', 'Готовь на пару 25–35 минут до готовности.', 'Добавь масло перед подачей.']
  },
  {
    id: 'chicken-vegetable-stew', title: 'Курица, тушённая с овощами', emoji: '🍲', category: 'Ужин',
    time: '40–50 мин', mode: 'Тушение', kcal: 380,
    ingredients: [{ name: 'Куриное филе', amount: '160 г' }, { name: 'Картофель', amount: '180 г' }, { name: 'Морковь', amount: '60 г' }, { name: 'Кабачок', amount: '150 г' }, { name: 'Вода', amount: '120 мл' }],
    steps: ['Нарежь курицу и овощи.', 'Сложи всё в чашу и добавь воду.', 'Готовь на режиме «Тушение» 40–50 минут до полной готовности курицы.']
  },
  {
    id: 'rice-turkey-bowl', title: 'Индейка с рисом', emoji: '🍚', category: 'Обед',
    time: '40–50 мин', mode: 'Тушение + крупа', kcal: 450,
    ingredients: [{ name: 'Филе индейки', amount: '160 г' }, { name: 'Рис сухой', amount: '60 г' }, { name: 'Морковь', amount: '60 г' }, { name: 'Вода', amount: '220 мл' }],
    steps: ['Приготовь рис на режиме «Рис».', 'Индейку и морковь нарежь небольшими кусочками.', 'Туши с небольшим количеством воды 30–35 минут.', 'Подавай вместе.']
  },
  {
    id: 'potato-carrot-mash-fish', title: 'Картофельное пюре с минтаем', emoji: '🥔', category: 'Ужин',
    time: '30–40 мин', mode: 'Варка + пар', kcal: 410,
    ingredients: [{ name: 'Филе минтая', amount: '180 г' }, { name: 'Картофель', amount: '250 г' }, { name: 'Молоко', amount: '40 мл' }, { name: 'Растительное масло', amount: '5 г' }],
    steps: ['Отвари картофель до мягкости и разомни с тёплым молоком.', 'Минтай приготовь на пару 20–25 минут.', 'Проверь готовность рыбы и подай с пюре.']
  },
  {
    id: 'pumpkin-soup-chicken', title: 'Крем-суп из тыквы с курицей', emoji: '🎃', category: 'Обед',
    time: '40–50 мин', mode: 'Суп', kcal: 340,
    ingredients: [{ name: 'Тыква', amount: '180 г' }, { name: 'Картофель', amount: '80 г' }, { name: 'Куриное филе', amount: '100 г' }, { name: 'Молоко', amount: '50 мл' }, { name: 'Вода', amount: '400 мл' }],
    steps: ['Нарежь тыкву, картофель и курицу.', 'Вари на режиме «Суп» 35–45 минут до мягкости.', 'Измельчи овощи блендером, курицу нарежь мелко.', 'Добавь молоко и прогрей без интенсивного кипения.']
  },
  {
    id: 'cottage-noodle', title: 'Творожная запеканка с вермишелью', emoji: '🍮', category: 'Завтрак',
    time: '40–50 мин', mode: 'Выпечка', kcal: 350,
    ingredients: [{ name: 'Творог 5%', amount: '160 г' }, { name: 'Вермишель сухая', amount: '40 г' }, { name: 'Яйцо', amount: '1 шт.' }, { name: 'Натуральный йогурт', amount: '30 г' }],
    steps: ['Отвари вермишель и остуди.', 'Смешай творог, яйцо и йогурт.', 'Соедини с вермишелью, выложи в форму.', 'Готовь на режиме «Выпечка» 35–45 минут.']
  },
  {
    id: 'vegetable-omelette', title: 'Омлет с кабачком на пару', emoji: '🍳', category: 'Завтрак',
    time: '20–25 мин', mode: 'На пару', kcal: 280,
    ingredients: [{ name: 'Яйца', amount: '2 шт.' }, { name: 'Молоко', amount: '50 мл' }, { name: 'Кабачок', amount: '80 г' }, { name: 'Хлеб пшеничный', amount: '30 г' }],
    steps: ['Натри кабачок и слегка отожми.', 'Смешай с яйцами и молоком.', 'Перелей в форму и готовь на пару 15–20 минут.', 'Подай с хлебом.']
  },
  {
    id: 'oatmeal-pear', title: 'Овсяная каша с грушей', emoji: '🍐', category: 'Завтрак',
    time: '20–25 мин', mode: 'Молочная каша', kcal: 340,
    ingredients: [{ name: 'Овсяные хлопья', amount: '50 г' }, { name: 'Молоко', amount: '150 мл' }, { name: 'Вода', amount: '150 мл' }, { name: 'Груша', amount: '100 г' }],
    steps: ['Смешай хлопья, молоко и воду.', 'Готовь на режиме «Молочная каша» 20–25 минут.', 'Добавь очищенную нарезанную грушу.']
  },
  {
    id: 'chicken-couscous', title: 'Курица с кус-кусом и морковью', emoji: '🍗', category: 'Обед',
    time: '25–35 мин', mode: 'Тушение', kcal: 440,
    ingredients: [{ name: 'Куриное филе', amount: '150 г' }, { name: 'Кус-кус сухой', amount: '60 г' }, { name: 'Морковь', amount: '60 г' }, { name: 'Вода', amount: '180 мл' }],
    steps: ['Курицу и морковь нарежь небольшими кусочками.', 'Туши с водой 25–30 минут до готовности.', 'Кус-кус залей горячей водой по инструкции и дай набухнуть.', 'Подавай вместе.']
  },
  {
    id: 'steamed-turkey-potato', title: 'Паровые котлеты из индейки с пюре', emoji: '🥔', category: 'Ужин',
    time: '35–45 мин', mode: 'На пару', kcal: 430,
    ingredients: [{ name: 'Фарш индейки', amount: '160 г' }, { name: 'Яйцо', amount: '½ шт.' }, { name: 'Картофель', amount: '230 г' }, { name: 'Молоко', amount: '40 мл' }],
    steps: ['Сформируй котлеты из фарша и яйца.', 'Картофель отвари в чаше.', 'Котлеты готовь в паровом контейнере 25–30 минут.', 'Разомни картофель с тёплым молоком.']
  },
  {
    id: 'beef-rice-stew', title: 'Тушёная говядина с рисом', emoji: '🥩', category: 'Обед',
    time: '60–80 мин', mode: 'Тушение + крупа', kcal: 480,
    ingredients: [{ name: 'Постная говядина', amount: '150 г' }, { name: 'Рис сухой', amount: '60 г' }, { name: 'Морковь', amount: '60 г' }, { name: 'Вода', amount: '250 мл' }],
    steps: ['Говядину нарежь мелко.', 'Туши с морковью и водой 60–80 минут до мягкости.', 'Отдельно приготовь рис.', 'Подавай без обжаривания.']
  },
  {
    id: 'zucchini-soup-turkey', title: 'Лёгкий суп с индейкой и кабачком', emoji: '🥣', category: 'Обед',
    time: '45–55 мин', mode: 'Суп', kcal: 320,
    ingredients: [{ name: 'Филе индейки', amount: '120 г' }, { name: 'Картофель', amount: '100 г' }, { name: 'Кабачок', amount: '100 г' }, { name: 'Морковь', amount: '40 г' }, { name: 'Вода', amount: '500 мл' }],
    steps: ['Нарежь индейку и овощи небольшими кусочками.', 'Положи в чашу, залей водой.', 'Готовь на режиме «Суп» 45–55 минут до готовности мяса и овощей.']
  },
  {
    id: 'fish-buckwheat', title: 'Минтай с гречкой', emoji: '🐟', category: 'Ужин',
    time: '30–40 мин', mode: 'Пар + крупа', kcal: 420,
    ingredients: [{ name: 'Филе минтая', amount: '180 г' }, { name: 'Гречка сухая', amount: '60 г' }, { name: 'Морковь', amount: '60 г' }, { name: 'Растительное масло', amount: '5 г' }],
    steps: ['Приготовь гречку на режиме «Крупа».', 'Минтай и морковь готовь на пару 20–25 минут.', 'Подавай с гречкой, добавив масло.']
  },
  {
    id: 'chicken-potato-balls', title: 'Куриные фрикадельки с картофелем', emoji: '🍲', category: 'Обед',
    time: '40–50 мин', mode: 'Суп', kcal: 390,
    ingredients: [{ name: 'Куриный фарш', amount: '160 г' }, { name: 'Картофель', amount: '180 г' }, { name: 'Морковь', amount: '50 г' }, { name: 'Рис сухой', amount: '20 г' }, { name: 'Вода', amount: '500 мл' }],
    steps: ['Сформируй маленькие фрикадельки из куриного фарша.', 'Нарежь картофель и морковь, промой рис.', 'Залей водой и готовь на режиме «Суп» 40–50 минут до готовности.']
  },
  {
    id: 'turkey-cabbage-stew', title: 'Индейка с мягкой тушёной капустой', emoji: '🥬', category: 'Ужин',
    time: '45–55 мин', mode: 'Тушение', kcal: 370,
    ingredients: [{ name: 'Филе индейки', amount: '160 г' }, { name: 'Капуста белокочанная', amount: '180 г' }, { name: 'Морковь', amount: '50 г' }, { name: 'Растительное масло', amount: '5 г' }, { name: 'Вода', amount: '100 мл' }],
    steps: ['Тонко нашинкуй капусту, нарежь индейку и морковь.', 'Добавь воду и готовь на режиме «Тушение» 45–55 минут.', 'Убедись, что капуста стала мягкой, а мясо полностью приготовилось.']
  }
]

const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

export const weekPlan = [
  {
    title: 'Неделя 1',
    days: [
      { day: weekDays[0], meals: ['oatmeal-banana', 'chicken-rice-soup', 'pollock-potato'] },
      { day: weekDays[1], meals: ['cottage-casserole', 'turkey-meatballs-rice', 'chicken-buckwheat'] },
      { day: weekDays[2], meals: ['rice-apple-porridge', 'vegetable-rice-soup', 'pollock-rice'] },
      { day: weekDays[3], meals: ['omelette-steam', 'chicken-steam-cutlets', 'turkey-potato-stew'] },
      { day: weekDays[4], meals: ['buckwheat-milk', 'chicken-rice-soup', 'baked-fish-veg'] },
      { day: weekDays[5], meals: ['cottage-banana', 'chicken-pasta', 'zucchini-turkey'] },
      { day: weekDays[6], meals: ['millet-pumpkin', 'pumpkin-soup-chicken', 'fish-buckwheat'] }
    ]
  },
  {
    title: 'Неделя 2',
    days: [
      { day: weekDays[0], meals: ['semolina-porridge', 'beef-steam-buckwheat', 'chicken-vegetable-stew'] },
      { day: weekDays[1], meals: ['oat-cottage-pancake', 'chicken-couscous', 'pollock-potato'] },
      { day: weekDays[2], meals: ['oatmeal-pear', 'zucchini-soup-turkey', 'steamed-turkey-potato'] },
      { day: weekDays[3], meals: ['cottage-noodle', 'chicken-potato-balls', 'fish-buckwheat'] },
      { day: weekDays[4], meals: ['rice-apple-porridge', 'rice-turkey-bowl', 'baked-fish-veg'] },
      { day: weekDays[5], meals: ['vegetable-omelette', 'chicken-rice-soup', 'turkey-cabbage-stew'] },
      { day: weekDays[6], meals: ['baked-apple-cottage', 'beef-rice-stew', 'pollock-rice'] }
    ]
  },
  {
    title: 'Неделя 3',
    days: [
      { day: weekDays[0], meals: ['oatmeal-banana', 'chicken-couscous', 'fish-buckwheat'] },
      { day: weekDays[1], meals: ['cottage-banana', 'zucchini-soup-turkey', 'chicken-vegetable-stew'] },
      { day: weekDays[2], meals: ['millet-pumpkin', 'beef-rice-stew', 'pollock-potato'] },
      { day: weekDays[3], meals: ['omelette-steam', 'chicken-potato-balls', 'turkey-cabbage-stew'] },
      { day: weekDays[4], meals: ['cottage-casserole', 'pumpkin-soup-chicken', 'steamed-turkey-potato'] },
      { day: weekDays[5], meals: ['buckwheat-milk', 'rice-turkey-bowl', 'baked-fish-veg'] },
      { day: weekDays[6], meals: ['oatmeal-pear', 'beef-steam-buckwheat', 'zucchini-turkey'] }
    ]
  },
  {
    title: 'Неделя 4',
    days: [
      { day: weekDays[0], meals: ['rice-apple-porridge', 'chicken-rice-soup', 'turkey-potato-stew'] },
      { day: weekDays[1], meals: ['baked-apple-cottage', 'chicken-pasta', 'fish-buckwheat'] },
      { day: weekDays[2], meals: ['semolina-porridge', 'zucchini-soup-turkey', 'pollock-potato'] },
      { day: weekDays[3], meals: ['oat-cottage-pancake', 'beef-rice-stew', 'chicken-vegetable-stew'] },
      { day: weekDays[4], meals: ['vegetable-omelette', 'turkey-meatballs-rice', 'baked-fish-veg'] },
      { day: weekDays[5], meals: ['cottage-noodle', 'chicken-couscous', 'turkey-cabbage-stew'] },
      { day: weekDays[6], meals: ['oatmeal-banana', 'chicken-potato-balls', 'pollock-rice'] }
    ]
  }
]

// Списки закупки на одного человека на 7 дней. Количества округлены до удобных покупок.
// Базовые продукты (вода, соль) не учитываются. Проверь упаковки и запасы дома.
export const shoppingByWeek = [
  {
    title: 'Неделя 1',
    groups: [
      { title: 'Мясо и рыба', items: [
        { id: 'w1-chicken', name: 'Куриное филе / фарш', amount: '1,2 кг' },
        { id: 'w1-turkey', name: 'Индейка / фарш индейки', amount: '700 г' },
        { id: 'w1-pollock', name: 'Филе минтая', amount: '900 г' }
      ]},
      { title: 'Молочные продукты и яйца', items: [
        { id: 'w1-milk', name: 'Молоко', amount: '1,5 л' },
        { id: 'w1-cottage', name: 'Творог 5%', amount: '400 г' },
        { id: 'w1-yogurt', name: 'Натуральный йогурт', amount: '1 маленькая упаковка' },
        { id: 'w1-eggs', name: 'Яйца', amount: '6 шт.' }
      ]},
      { title: 'Крупы и хлеб', items: [
        { id: 'w1-oats', name: 'Овсяные хлопья', amount: '100 г' },
        { id: 'w1-rice', name: 'Рис', amount: '350 г' },
        { id: 'w1-buckwheat', name: 'Гречка', amount: '300 г' },
        { id: 'w1-millet', name: 'Пшено', amount: '100 г' },
        { id: 'w1-pasta', name: 'Макароны', amount: '100 г' },
        { id: 'w1-bread', name: 'Пшеничный хлеб', amount: '1 небольшая буханка' }
      ]},
      { title: 'Овощи и фрукты', items: [
        { id: 'w1-potato', name: 'Картофель', amount: '2 кг' },
        { id: 'w1-carrot', name: 'Морковь', amount: '700 г' },
        { id: 'w1-zucchini', name: 'Кабачки', amount: '1 кг' },
        { id: 'w1-apple', name: 'Яблоки', amount: '3 шт.' },
        { id: 'w1-banana', name: 'Бананы', amount: '3 шт.' },
        { id: 'w1-pumpkin', name: 'Тыква', amount: '400 г' },
        { id: 'w1-cabbage', name: 'Капуста', amount: '300 г' }
      ]},
      { title: 'Прочее', items: [
        { id: 'w1-oil', name: 'Растительное масло', amount: '1 небольшая бутылка' }
      ]}
    ]
  },
  {
    title: 'Неделя 2',
    groups: [
      { title: 'Мясо и рыба', items: [
        { id: 'w2-chicken', name: 'Куриное филе / фарш', amount: '900 г' },
        { id: 'w2-turkey', name: 'Индейка / фарш индейки', amount: '900 г' },
        { id: 'w2-beef', name: 'Постная говядина', amount: '400 г' },
        { id: 'w2-pollock', name: 'Филе минтая', amount: '700 г' }
      ]},
      { title: 'Молочные продукты и яйца', items: [
        { id: 'w2-milk', name: 'Молоко', amount: '1 л' },
        { id: 'w2-cottage', name: 'Творог 5%', amount: '500 г' },
        { id: 'w2-yogurt', name: 'Натуральный йогурт', amount: '1 маленькая упаковка' },
        { id: 'w2-eggs', name: 'Яйца', amount: '6 шт.' }
      ]},
      { title: 'Крупы и хлеб', items: [
        { id: 'w2-semolina', name: 'Манная крупа', amount: '100 г' },
        { id: 'w2-oats', name: 'Овсяные хлопья', amount: '100 г' },
        { id: 'w2-rice', name: 'Рис', amount: '400 г' },
        { id: 'w2-buckwheat', name: 'Гречка', amount: '250 г' },
        { id: 'w2-couscous', name: 'Кус-кус', amount: '100 г' },
        { id: 'w2-vermicelli', name: 'Вермишель', amount: '100 г' },
        { id: 'w2-bread', name: 'Пшеничный хлеб', amount: '1 небольшая буханка' }
      ]},
      { title: 'Овощи и фрукты', items: [
        { id: 'w2-potato', name: 'Картофель', amount: '2 кг' },
        { id: 'w2-carrot', name: 'Морковь', amount: '700 г' },
        { id: 'w2-zucchini', name: 'Кабачки', amount: '800 г' },
        { id: 'w2-pear', name: 'Груши', amount: '2 шт.' },
        { id: 'w2-apple', name: 'Яблоки', amount: '3 шт.' },
        { id: 'w2-banana', name: 'Бананы', amount: '2 шт.' },
        { id: 'w2-pumpkin', name: 'Тыква', amount: '300 г' },
        { id: 'w2-cabbage', name: 'Капуста', amount: '400 г' }
      ]},
      { title: 'Прочее', items: [
        { id: 'w2-oil', name: 'Растительное масло', amount: '1 небольшая бутылка' }
      ]}
    ]
  },
  {
    title: 'Неделя 3',
    groups: [
      { title: 'Мясо и рыба', items: [
        { id: 'w3-chicken', name: 'Куриное филе / фарш', amount: '1 кг' },
        { id: 'w3-turkey', name: 'Индейка / фарш индейки', amount: '900 г' },
        { id: 'w3-beef', name: 'Постная говядина', amount: '500 г' },
        { id: 'w3-pollock', name: 'Филе минтая', amount: '800 г' }
      ]},
      { title: 'Молочные продукты и яйца', items: [
        { id: 'w3-milk', name: 'Молоко', amount: '1,2 л' },
        { id: 'w3-cottage', name: 'Творог 5%', amount: '500 г' },
        { id: 'w3-yogurt', name: 'Натуральный йогурт', amount: '1 маленькая упаковка' },
        { id: 'w3-eggs', name: 'Яйца', amount: '6 шт.' }
      ]},
      { title: 'Крупы и хлеб', items: [
        { id: 'w3-oats', name: 'Овсяные хлопья', amount: '150 г' },
        { id: 'w3-rice', name: 'Рис', amount: '350 г' },
        { id: 'w3-buckwheat', name: 'Гречка', amount: '300 г' },
        { id: 'w3-millet', name: 'Пшено', amount: '100 г' },
        { id: 'w3-couscous', name: 'Кус-кус', amount: '100 г' },
        { id: 'w3-bread', name: 'Пшеничный хлеб', amount: '1 небольшая буханка' }
      ]},
      { title: 'Овощи и фрукты', items: [
        { id: 'w3-potato', name: 'Картофель', amount: '2 кг' },
        { id: 'w3-carrot', name: 'Морковь', amount: '800 г' },
        { id: 'w3-zucchini', name: 'Кабачки', amount: '1 кг' },
        { id: 'w3-apple', name: 'Яблоки', amount: '2 шт.' },
        { id: 'w3-banana', name: 'Бананы', amount: '3 шт.' },
        { id: 'w3-pear', name: 'Груши', amount: '2 шт.' },
        { id: 'w3-pumpkin', name: 'Тыква', amount: '400 г' },
        { id: 'w3-cabbage', name: 'Капуста', amount: '400 г' }
      ]},
      { title: 'Прочее', items: [
        { id: 'w3-oil', name: 'Растительное масло', amount: '1 небольшая бутылка' }
      ]}
    ]
  },
  {
    title: 'Неделя 4',
    groups: [
      { title: 'Мясо и рыба', items: [
        { id: 'w4-chicken', name: 'Куриное филе / фарш', amount: '1,1 кг' },
        { id: 'w4-turkey', name: 'Индейка / фарш индейки', amount: '900 г' },
        { id: 'w4-beef', name: 'Постная говядина', amount: '300 г' },
        { id: 'w4-pollock', name: 'Филе минтая', amount: '800 г' }
      ]},
      { title: 'Молочные продукты и яйца', items: [
        { id: 'w4-milk', name: 'Молоко', amount: '1,2 л' },
        { id: 'w4-cottage', name: 'Творог 5%', amount: '500 г' },
        { id: 'w4-yogurt', name: 'Натуральный йогурт', amount: '1 маленькая упаковка' },
        { id: 'w4-eggs', name: 'Яйца', amount: '6 шт.' }
      ]},
      { title: 'Крупы и хлеб', items: [
        { id: 'w4-semolina', name: 'Манная крупа', amount: '100 г' },
        { id: 'w4-oats', name: 'Овсяные хлопья', amount: '150 г' },
        { id: 'w4-rice', name: 'Рис', amount: '400 г' },
        { id: 'w4-buckwheat', name: 'Гречка', amount: '250 г' },
        { id: 'w4-pasta', name: 'Макароны', amount: '100 г' },
        { id: 'w4-couscous', name: 'Кус-кус', amount: '100 г' },
        { id: 'w4-vermicelli', name: 'Вермишель', amount: '100 г' },
        { id: 'w4-bread', name: 'Пшеничный хлеб', amount: '1 небольшая буханка' }
      ]},
      { title: 'Овощи и фрукты', items: [
        { id: 'w4-potato', name: 'Картофель', amount: '2 кг' },
        { id: 'w4-carrot', name: 'Морковь', amount: '800 г' },
        { id: 'w4-zucchini', name: 'Кабачки', amount: '800 г' },
        { id: 'w4-apple', name: 'Яблоки', amount: '3 шт.' },
        { id: 'w4-banana', name: 'Бананы', amount: '2 шт.' },
        { id: 'w4-pear', name: 'Груши', amount: '1–2 шт.' },
        { id: 'w4-cabbage', name: 'Капуста', amount: '400 г' },
        { id: 'w4-pumpkin', name: 'Тыква', amount: '200 г' }
      ]},
      { title: 'Прочее', items: [
        { id: 'w4-oil', name: 'Растительное масло', amount: '1 небольшая бутылка' }
      ]}
    ]
  }
]
