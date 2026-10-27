<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { recipes, weekPlan, shoppingGroups } from '~/data/menu.js'

const activeTab = ref('menu')
const selectedDay = ref(0)
const openedRecipe = ref(null)
const search = ref('')
const checkedItems = ref([])
const favorites = ref([])
const tgReady = ref(false)

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const mealNames = ['Завтрак', 'Обед', 'Ужин']
const currentPlan = computed(() => weekPlan[selectedDay.value])
const currentRecipes = computed(() => currentPlan.value.meals.map(id => recipes.find(r => r.id === id)).filter(Boolean))
const dayCalories = computed(() => currentRecipes.value.reduce((sum, r) => sum + (r.kcal || 0), 0))
const allShoppingItems = computed(() => shoppingGroups.flatMap(group => group.items.map(item => ({ ...item, group: group.title }))))
const filteredRecipes = computed(() => {
  const q = search.value.trim().toLowerCase()
  return recipes.filter(recipe => {
    const matchesSearch = !q || [recipe.title, ...recipe.ingredients.map(i => i.name)].join(' ').toLowerCase().includes(q)
    const matchesFavorite = activeTab.value !== 'favorites' || favorites.value.includes(recipe.id)
    return matchesSearch && matchesFavorite
  })
})
const checkedCount = computed(() => checkedItems.value.length)

onMounted(() => {
  try {
    checkedItems.value = JSON.parse(localStorage.getItem('stol5-checked') || '[]')
    favorites.value = JSON.parse(localStorage.getItem('stol5-favorites') || '[]')
  } catch {
    checkedItems.value = []
    favorites.value = []
  }

  const tg = window.Telegram?.WebApp
  if (tg) {
    tg.ready()
    tg.expand()
    tg.setHeaderColor?.('#f5f7f2')
    tg.setBackgroundColor?.('#f5f7f2')
    tgReady.value = true
  }
})

watch(checkedItems, value => {
  if (import.meta.client) localStorage.setItem('stol5-checked', JSON.stringify(value))
}, { deep: true })

watch(favorites, value => {
  if (import.meta.client) localStorage.setItem('stol5-favorites', JSON.stringify(value))
}, { deep: true })

function toggleShopping(id) {
  checkedItems.value = checkedItems.value.includes(id)
    ? checkedItems.value.filter(item => item !== id)
    : [...checkedItems.value, id]
}
function toggleFavorite(id) {
  favorites.value = favorites.value.includes(id)
    ? favorites.value.filter(item => item !== id)
    : [...favorites.value, id]
}
function openRecipe(recipe) {
  openedRecipe.value = recipe
}
function closeRecipe() {
  openedRecipe.value = null
}
function goTo(tab) {
  activeTab.value = tab
  openedRecipe.value = null
}
function shareRecipe(recipe) {
  const text = `${recipe.title}\n\nИнгредиенты:\n${recipe.ingredients.map(i => `• ${i.name} — ${i.amount}`).join('\n')}\n\nПриготовление:\n${recipe.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}`
  const tg = window.Telegram?.WebApp
  if (tg?.showPopup) {
    tg.showPopup({ title: recipe.title, message: 'Рецепт готов к отправке. Используй меню Telegram, чтобы скопировать или переслать текст.', buttons: [{ type: 'ok' }] })
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).catch(() => {})
  } else if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => {})
  }
}
function copyShopping() {
  const text = shoppingGroups.map(group => `${group.title}\n${group.items.map(item => `- ${item.name} — ${item.amount}`).join('\n')}`).join('\n\n')
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      const tg = window.Telegram?.WebApp
      tg?.showAlert?.('Список покупок скопирован')
    }).catch(() => {})
  }
}
</script>

<template>
  <main class="app-shell">
    <header class="topbar">
      <div class="brand-mark" aria-hidden="true">🥣</div>
      <div class="brand-copy">
        <p class="eyebrow">ЛИЧНЫЙ КУЛИНАРНЫЙ ПОМОЩНИК</p>
        <h1>Моё меню</h1>
        <p class="subheading">Стол № 5 · мультиварка</p>
      </div>
      <span v-if="tgReady" class="telegram-pill">Telegram</span>
    </header>

    <section v-if="activeTab === 'menu'" class="content">
      <div class="intro-card">
        <div>
          <p class="eyebrow light">ПЛАН НА НЕДЕЛЮ</p>
          <h2>Что готовим?</h2>
          <p>Выбери день и открой рецепт.</p>
        </div>
        <span class="intro-emoji" aria-hidden="true">🍲</span>
      </div>

      <div class="day-picker" role="tablist" aria-label="Дни недели">
        <button
          v-for="(day, index) in days"
          :key="day"
          class="day-button"
          :class="{ active: selectedDay === index }"
          :aria-selected="selectedDay === index"
          role="tab"
          @click="selectedDay = index"
        >
          <span>{{ day }}</span>
          <small>{{ index + 1 }}</small>
        </button>
      </div>

      <div class="section-heading">
        <div>
          <p class="eyebrow">ТВОЙ ПЛАН</p>
          <h2>{{ dayNames[selectedDay] }}</h2>
        </div>
        <div class="calorie-chip">
          <strong>≈ {{ dayCalories }}</strong>
          <span>ккал*</span>
        </div>
      </div>

      <article v-for="(recipe, index) in currentRecipes" :key="recipe.id" class="meal-card">
        <div class="meal-topline">
          <span class="meal-type">{{ mealNames[index] }}</span>
          <button class="icon-button" :aria-label="favorites.includes(recipe.id) ? 'Убрать из избранного' : 'В избранное'" @click="toggleFavorite(recipe.id)">
            {{ favorites.includes(recipe.id) ? '♥' : '♡' }}
          </button>
        </div>
        <button class="recipe-open" @click="openRecipe(recipe)">
          <span class="recipe-emoji">{{ recipe.emoji }}</span>
          <span class="recipe-info">
            <strong>{{ recipe.title }}</strong>
            <span class="recipe-meta">◷ {{ recipe.time }} <span class="dot">·</span> ≈ {{ recipe.kcal }} ккал</span>
          </span>
          <span class="chevron">›</span>
        </button>
        <div class="meal-footer">
          <span>Мультиварка: {{ recipe.mode }}</span>
          <button class="text-button" @click="openRecipe(recipe)">Рецепт →</button>
        </div>
      </article>

      <p class="footnote">*Калорийность приблизительная и требует проверки по фактическим продуктам и порциям. Это пример меню, а не индивидуальное медицинское назначение.</p>
    </section>

    <section v-else-if="activeTab === 'recipes' || activeTab === 'favorites'" class="content">
      <div class="section-heading page-heading">
        <div>
          <p class="eyebrow">{{ activeTab === 'favorites' ? 'СОХРАНЁННОЕ' : 'КУЛИНАРНАЯ КНИГА' }}</p>
          <h2>{{ activeTab === 'favorites' ? 'Избранное' : 'Все рецепты' }}</h2>
        </div>
        <span class="count-chip">{{ filteredRecipes.length }}</span>
      </div>
      <label class="search-box">
        <span>⌕</span>
        <input v-model="search" type="search" placeholder="Найти блюдо или ингредиент" />
      </label>
      <div v-if="filteredRecipes.length" class="recipe-list">
        <article v-for="recipe in filteredRecipes" :key="recipe.id" class="meal-card compact-card">
          <div class="meal-topline">
            <span class="meal-type">{{ recipe.category }}</span>
            <button class="icon-button" @click="toggleFavorite(recipe.id)">{{ favorites.includes(recipe.id) ? '♥' : '♡' }}</button>
          </div>
          <button class="recipe-open" @click="openRecipe(recipe)">
            <span class="recipe-emoji">{{ recipe.emoji }}</span>
            <span class="recipe-info">
              <strong>{{ recipe.title }}</strong>
              <span class="recipe-meta">◷ {{ recipe.time }} <span class="dot">·</span> ≈ {{ recipe.kcal }} ккал</span>
            </span>
            <span class="chevron">›</span>
          </button>
        </article>
      </div>
      <div v-else class="empty-state">
        <span>📖</span>
        <strong>{{ activeTab === 'favorites' ? 'Пока нет избранных рецептов' : 'Ничего не найдено' }}</strong>
        <p>{{ activeTab === 'favorites' ? 'Нажми ♡ у понравившегося блюда.' : 'Попробуй изменить поисковый запрос.' }}</p>
      </div>
    </section>

    <section v-else class="content">
      <div class="section-heading page-heading">
        <div>
          <p class="eyebrow">ПОДГОТОВКА К НЕДЕЛЕ</p>
          <h2>Список покупок</h2>
        </div>
        <span class="count-chip">{{ checkedCount }}/{{ allShoppingItems.length }}</span>
      </div>
      <div class="progress-track"><div class="progress-value" :style="{ width: `${allShoppingItems.length ? checkedCount / allShoppingItems.length * 100 : 0}%` }"></div></div>
      <p class="muted">Отмечай продукты по мере покупки. Отметки сохраняются на этом устройстве.</p>
      <section v-for="group in shoppingGroups" :key="group.title" class="shopping-group">
        <h3>{{ group.title }}</h3>
        <label v-for="item in group.items" :key="item.id" class="shopping-row" :class="{ checked: checkedItems.includes(item.id) }">
          <input type="checkbox" :checked="checkedItems.includes(item.id)" @change="toggleShopping(item.id)" />
          <span class="custom-check"></span>
          <span class="shopping-name">{{ item.name }}</span>
          <span class="shopping-amount">{{ item.amount }}</span>
        </label>
      </section>
      <button class="secondary-button full-button" @click="copyShopping">Скопировать список</button>
      <button class="plain-button full-button" @click="checkedItems = []">Снять все отметки</button>
    </section>

    <nav class="bottom-nav" aria-label="Главная навигация">
      <button :class="{ selected: activeTab === 'menu' }" @click="goTo('menu')"><span>▦</span><small>Меню</small></button>
      <button :class="{ selected: activeTab === 'recipes' }" @click="goTo('recipes')"><span>▤</span><small>Рецепты</small></button>
      <button :class="{ selected: activeTab === 'shopping' }" @click="goTo('shopping')"><span>☷</span><small>Покупки</small><i v-if="checkedCount < allShoppingItems.length"></i></button>
      <button :class="{ selected: activeTab === 'favorites' }" @click="goTo('favorites')"><span>♡</span><small>Избранное</small></button>
    </nav>

    <Transition name="sheet">
      <div v-if="openedRecipe" class="modal-backdrop" @click.self="closeRecipe">
        <section class="recipe-sheet" role="dialog" aria-modal="true" :aria-label="openedRecipe.title">
          <div class="sheet-handle"></div>
          <button class="close-button" aria-label="Закрыть рецепт" @click="closeRecipe">×</button>
          <div class="detail-hero">
            <span>{{ openedRecipe.emoji }}</span>
            <p class="eyebrow">{{ openedRecipe.category }}</p>
            <h2>{{ openedRecipe.title }}</h2>
            <div class="detail-chips">
              <span>◷ {{ openedRecipe.time }}</span>
              <span>≈ {{ openedRecipe.kcal }} ккал</span>
              <span>{{ openedRecipe.mode }}</span>
            </div>
          </div>
          <div class="detail-content">
            <h3>Ингредиенты</h3>
            <div v-for="ingredient in openedRecipe.ingredients" :key="ingredient.name" class="ingredient-row">
              <span>{{ ingredient.name }}</span>
              <strong>{{ ingredient.amount }}</strong>
            </div>
            <h3 class="steps-title">Как приготовить</h3>
            <div v-for="(step, index) in openedRecipe.steps" :key="step" class="step-row">
              <span class="step-number">{{ index + 1 }}</span>
              <p>{{ step }}</p>
            </div>
            <div class="note-card">
              <strong>Обрати внимание</strong>
              <p>Время зависит от модели мультиварки. Проверяй полную готовность мяса и рыбы. Калорийность ориентировочная.</p>
            </div>
            <button class="primary-button full-button" @click="toggleFavorite(openedRecipe.id)">
              {{ favorites.includes(openedRecipe.id) ? '♥ В избранном' : '♡ Добавить в избранное' }}
            </button>
            <button class="secondary-button full-button" @click="shareRecipe(openedRecipe)">Скопировать рецепт</button>
          </div>
        </section>
      </div>
    </Transition>
  </main>
</template>
