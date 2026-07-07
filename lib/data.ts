// ============================================================
// Nilov Catering — Complete Data Layer
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  category: string;
  categoryLabel: string;
  image: string;
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
  isPopular?: boolean;
  isNew?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
  company?: string;
  role?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialization: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  group?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  categoryLabel: string;
  width: number;
  height: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  pricePerPerson: number;
  features: string[];
  isPopular?: boolean;
  description: string;
  includes?: string[];
  minGuests?: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface AdditionalService {
  id: string;
  name: string;
  description: string;
  price: number;
  priceType: "fixed" | "per-guest" | "per-hour";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustMark {
  name: string;
  logo?: string;
}

// ============================================================
// Navigation
// ============================================================

export const navItems: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Меню", href: "/menu" },
  { label: "Галерея", href: "/gallery" },
  { label: "Отзывы", href: "/testimonials" },
  { label: "Цены", href: "/pricing" },
  { label: "Контакты", href: "/contact" },
];

// ============================================================
// Menu Categories
// ============================================================

export const menuCategories = [
  { id: "canape", label: "Закуски" },
  { id: "salads", label: "Салаты" },
  { id: "hot", label: "Горячее" },
  { id: "desserts", label: "Десерты" },
  { id: "drinks", label: "Напитки" },
  { id: "summer", label: "Сезонное" },
  { id: "bbq", label: "BBQ и гриль" },
  { id: "kids", label: "Детское" },
];

// ============================================================
// Menu Items (42 dishes)
// ============================================================

export const menuItems: MenuItem[] = [
  // 1. Canape (8)
  { id: "c01", name: "Канапе с лососем", description: "Нежный филе лосося на хрустящем тосте с каперсным соусом", price: 120, weight: "25 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c01_canape_salmon.png", calories: 65, proteins: 5, fats: 3, carbs: 5 },
  { id: "c02", name: "Канапе с икрой красной", description: "Тост с сливочным маслом и щедрой порцией красной икры", price: 180, weight: "25 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c02_canape_caviar.png", calories: 78, proteins: 4, fats: 5, carbs: 4, isPopular: true },
  { id: "c03", name: "Тарталетка с оливье", description: "Хрустящая тарталетка с классическим салатом оливье", price: 90, weight: "30 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c03_tartlet_olivier.png", calories: 82, proteins: 3, fats: 5, carbs: 6 },
  { id: "c04", name: "Канапе с ветчиной и сыром", description: "Ветчина высшего сорта с сыром Гауда на подушке из руколы", price: 100, weight: "25 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c04_ham_cheese.png", calories: 88, proteins: 6, fats: 5, carbs: 4 },
  { id: "c05", name: "Рулетик из лаваша с курицей", description: "Тонкий лаваш с сочной курицей, овощами и нежным соусом", price: 85, weight: "35 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c05_lavash_roll.png", calories: 76, proteins: 5, fats: 3, carbs: 7 },
  { id: "c06", name: "Канапе с креветкой и авокадо", description: "Тигровая креветка со спелым авокадо на мини-багете", price: 150, weight: "30 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c06_canape_shrimp.png", calories: 72, proteins: 6, fats: 4, carbs: 3, isPopular: true },
  { id: "c07", name: "Брускетта с томатами и базиликом", description: "Поджаренный хлеб с спелыми томатами, чесноком и свежим базиликом", price: 95, weight: "40 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c07_bruschetta.png", calories: 68, proteins: 2, fats: 3, carbs: 9, isVegetarian: true },
  { id: "c08", name: "Канапе с бри и виноградом", description: "Пикантный сыр бри с виноградом на грецком орехе", price: 130, weight: "30 г", category: "canape", categoryLabel: "Закуски", image: "/images/menu/c08_brie.png", calories: 85, proteins: 4, fats: 6, carbs: 5, isVegetarian: true, isPopular: true },

  // 2. Salads (8)
  { id: "s01", name: "Цезарь с курицей", description: "Классический Цезарь с хрустящими гренками, пармезаном и фирменным соусом", price: 280, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s01_caesar.png", calories: 245, proteins: 18, fats: 14, carbs: 12, isPopular: true },
  { id: "s02", name: "Греческий", description: "Свежие овощи, фета, оливки с оливковым маслом и лимонным соком", price: 250, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s02_greek.png", calories: 165, proteins: 6, fats: 12, carbs: 8, isVegetarian: true },
  { id: "s03", name: "С лососем и авокадо", description: "Сливочный микс из слабосолёного лосося и спелого авокадо", price: 380, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s03_salmon_avocado.png", calories: 210, proteins: 16, fats: 14, carbs: 6, isPopular: true },
  { id: "s04", name: "Оливье классический", description: "Любимый праздничный салат с картофелем, горошком и докторской колбасой", price: 220, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s04_olivier.png", calories: 195, proteins: 8, fats: 12, carbs: 14 },
  { id: "s05", name: "Капрезе", description: "Нежная моцарелла с томатами, базиликом и бальзамическим соусом", price: 290, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s05_caprese.png", calories: 155, proteins: 10, fats: 11, carbs: 5, isVegetarian: true },
  { id: "s06", name: "С тигровыми креветками", description: "Гриль-креветки на подушке из микса зелени с цитрусовой заправкой", price: 420, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s06_shrimp_salad.png", calories: 175, proteins: 20, fats: 8, carbs: 6, isPopular: true },
  { id: "s07", name: "Тёплый с говядиной", description: "Тёплая говяжья вырезка с руколой, вишнёвыми томатами и пармезаном", price: 350, weight: "160 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s07_beef_salad.png", calories: 235, proteins: 22, fats: 14, carbs: 5 },
  { id: "s08", name: "Селёдка под шубой", description: "Классический слоёный салат с сельдью, свёклой, картофелем и морковью", price: 200, weight: "150 г", category: "salads", categoryLabel: "Салаты", image: "/images/menu/s08_herring.png", calories: 220, proteins: 12, fats: 14, carbs: 12 },

  // 3. Hot (8)
  { id: "h01", name: "Сибас на гриле", description: "Средиземноморский сибас с травами, лимоном и овощами гриль", price: 650, weight: "200 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h01_sea_bass.png", calories: 198, proteins: 28, fats: 8, carbs: 3, isPopular: true },
  { id: "h02", name: "Медальоны из говяжьей вырезки", description: "Нежные медальоны с трюфельным пюре и соусом из красного вина", price: 720, weight: "220 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h02_beef_medallion.png", calories: 320, proteins: 32, fats: 18, carbs: 8, isPopular: true },
  { id: "h03", name: "Куриная грудка в песто", description: "Сочная куриная грудка с соусом песто и овощами на гарнир", price: 480, weight: "200 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h03_chicken_pesto.png", calories: 245, proteins: 30, fats: 12, carbs: 6 },
  { id: "h04", name: "Лосось в сливочно-шпинатном соусе", description: "Филе лосося с нежным шпинатным соусом и картофельным пюре", price: 590, weight: "200 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h04_salmon_spinach.png", calories: 310, proteins: 28, fats: 18, carbs: 10, isPopular: true },
  { id: "h05", name: "Свиная вырезка с яблоками", description: "Запечённая свиная вырезка с карамелизированными яблоками", price: 520, weight: "220 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h05_pork_apple.png", calories: 295, proteins: 26, fats: 16, carbs: 12 },
  { id: "h06", name: "Дорадо с цитрусовыми", description: "Целая дорадо в цитрусовом маринаде с зеленью", price: 620, weight: "200 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h06_dorado.png", calories: 185, proteins: 26, fats: 7, carbs: 4, isPopular: true },
  { id: "h07", name: "Бефстроганов", description: "Классический бефстроганов из говядины со сметанным соусом", price: 450, weight: "250 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h07_stroganoff.png", calories: 340, proteins: 28, fats: 20, carbs: 12 },
  { id: "h08", name: "Овощное рагу", description: "Сезонные овощи, тушённые в томатном соусе с прованскими травами", price: 380, weight: "200 г", category: "hot", categoryLabel: "Горячее", image: "/images/menu/h08_veg_stew.png", calories: 120, proteins: 4, fats: 5, carbs: 15, isVegetarian: true, isGlutenFree: true },

  // 4. Desserts (8)
  { id: "d01", name: "Тирамису", description: "Итальянский десерт с маскарпоне, кофе и какао", price: 250, weight: "120 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d01_tiramisu.png", calories: 320, proteins: 6, fats: 18, carbs: 32, isPopular: true },
  { id: "d02", name: "Чизкейк Нью-Йорк", description: "Классический нью-йоркский чизкейк с ягодным соусом", price: 230, weight: "120 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d02_cheesecake.png", calories: 350, proteins: 7, fats: 22, carbs: 30, isPopular: true },
  { id: "d03", name: "Эклеры", description: "Заварные эклеры с кремом из ванильного заварного крема", price: 180, weight: "60 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d03_eclair.png", calories: 195, proteins: 4, fats: 10, carbs: 24 },
  { id: "d04", name: "Макаронс ассорти", description: "Набор из 6 макарон с разными начинками: фисташка, малина, ваниль", price: 300, weight: "100 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d04_macarons.png", calories: 280, proteins: 5, fats: 12, carbs: 38, isPopular: true, isGlutenFree: true },
  { id: "d05", name: "Фруктовая тарелка", description: "Ассорти из свежих сезонных фруктов, красиво выложенных на блюде", price: 280, weight: "200 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d05_fruit_plate.png", calories: 85, proteins: 1, fats: 0.5, carbs: 20, isVegetarian: true, isGlutenFree: true },
  { id: "d06", name: "Шоколадный фондан", description: "Тёплый шоколадный кекс с жидкой начинкой и шариком мороженого", price: 290, weight: "120 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d06_fondant.png", calories: 380, proteins: 6, fats: 20, carbs: 42, isPopular: true },
  { id: "d07", name: "Панкейки с ягодами", description: "Пышные панкейки с кленовым сиропом и свежими ягодами", price: 240, weight: "180 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d07_pancakes.png", calories: 290, proteins: 7, fats: 8, carbs: 48 },
  { id: "d08", name: "Наполеон", description: "Хрустящие слои слоёного теста с нежным заварным кремом", price: 220, weight: "120 г", category: "desserts", categoryLabel: "Десерты", image: "/images/menu/d08_napoleon.png", calories: 310, proteins: 5, fats: 18, carbs: 34 },

  // 5. Drinks (4)
  { id: "b01", name: "Морс клюквенный", description: "Освежающий морс из свежей клюквы с мятой", price: 80, weight: "200 мл", category: "drinks", categoryLabel: "Напитки", image: "/images/menu/b01_mors.png", calories: 55, proteins: 0, fats: 0, carbs: 13, isVegetarian: true, isGlutenFree: true },
  { id: "b02", name: "Лимонад домашний", description: "Домашний лимонад с лимоном, мятой и натуральным сиропом", price: 100, weight: "300 мл", category: "drinks", categoryLabel: "Напитки", image: "/images/menu/b02_lemonade.png", calories: 70, proteins: 0, fats: 0, carbs: 17, isPopular: true, isVegetarian: true, isGlutenFree: true },
  { id: "b03", name: "Чай ассорти", description: "Выбор из чёрного, зелёного, травяного или фруктового чая", price: 60, weight: "300 мл", category: "drinks", categoryLabel: "Напитки", image: "/images/menu/b03_tea.png", calories: 2, proteins: 0, fats: 0, carbs: 0.5, isVegetarian: true, isGlutenFree: true },
  { id: "b04", name: "Кофе эспрессо", description: "Классический двойной эспрессо из зёрен арабики", price: 90, weight: "30 мл", category: "drinks", categoryLabel: "Напитки", image: "/images/menu/b04_espresso.png", calories: 5, proteins: 0.3, fats: 0.2, carbs: 0.5, isVegetarian: true, isGlutenFree: true },

  // 6. Summer Seasonal (5)
  { id: "su01", name: "Окрошка на кефире", description: "Освежающая окрошка на кефире с огурцом, редисом и зеленью", price: 180, weight: "250 мл", category: "summer", categoryLabel: "Сезонное", image: "/images/menu/su01_okroshka.png", calories: 85, proteins: 4, fats: 3, carbs: 10, isNew: true, isPopular: true },
  { id: "su02", name: "Свекольник холодный", description: "Холодный свекольник со сметаной и свежим укропом", price: 190, weight: "250 мл", category: "summer", categoryLabel: "Сезонное", image: "/images/menu/su02_svekolnik.png", calories: 65, proteins: 2, fats: 2, carbs: 10, isNew: true, isVegetarian: true },
  { id: "su03", name: "Салат с клубникой и фетой", description: "Лёгкий салат со свежей клубникой, фетой, шпинатом и ореховым dressing", price: 320, weight: "150 г", category: "summer", categoryLabel: "Сезонное", image: "/images/menu/su03_strawberry_feta.png", calories: 145, proteins: 7, fats: 9, carbs: 10, isNew: true, isVegetarian: true, isPopular: true },
  { id: "su04", name: "Гаспачо", description: "Испанский томатный суп-пюре, подаётся холодным с гренками", price: 250, weight: "250 мл", category: "summer", categoryLabel: "Сезонное", image: "/images/menu/su04_gazpacho.png", calories: 55, proteins: 2, fats: 3, carbs: 7, isNew: true, isVegetarian: true, isGlutenFree: true },
  { id: "su05", name: "Карпаччо из томатов", description: "Тонко нарезанные томаты разных сортов с песто и пармезаном", price: 340, weight: "120 г", category: "summer", categoryLabel: "Сезонное", image: "/images/menu/su05_tomato_carpaccio.png", calories: 95, proteins: 4, fats: 6, carbs: 8, isNew: true, isVegetarian: true, isPopular: true },

  // 7. BBQ (5)
  { id: "bb01", name: "Шашлык из свинины", description: "Маринованная свиная шея на углях с соусом ткемали", price: 550, weight: "250 г", category: "bbq", categoryLabel: "BBQ и гриль", image: "/images/menu/bb01_shashlik.png", calories: 410, proteins: 32, fats: 28, carbs: 4, isPopular: true },
  { id: "bb02", name: "Шашлык из курицы", description: "Нежное куриное филе в маринаде с паприкой и чесноком", price: 420, weight: "200 г", category: "bbq", categoryLabel: "BBQ и гриль", image: "/images/menu/bb02_chicken_shashlik.png", calories: 250, proteins: 35, fats: 10, carbs: 3 },
  { id: "bb03", name: "Люля-кебаб", description: "Сочные люля-кебаб из баранины с зеленью и специями", price: 580, weight: "250 г", category: "bbq", categoryLabel: "BBQ и гриль", image: "/images/menu/bb03_lyulya.png", calories: 380, proteins: 28, fats: 26, carbs: 4, isPopular: true },
  { id: "bb04", name: "Овощи гриль", description: "Ассорти сезонных овощей на гриле с оливковым маслом и травами", price: 350, weight: "200 г", category: "bbq", categoryLabel: "BBQ и гриль", image: "/images/menu/bb04_grilled_veg.png", calories: 95, proteins: 3, fats: 5, carbs: 10, isVegetarian: true, isGlutenFree: true },
  { id: "bb05", name: "Рибай стейк", description: "Мраморный рибай стейк прожарки medium с соусом из розмарина", price: 890, weight: "300 г", category: "bbq", categoryLabel: "BBQ и гриль", image: "/images/menu/bb05_ribeye.png", calories: 520, proteins: 42, fats: 36, carbs: 2, isPopular: true },

  // 8. Kids (4)
  { id: "k01", name: "Мини-бургеры", description: "Миниатюрные бургеры с куриным котлетой, сыром и овощами", price: 220, weight: "120 г", category: "kids", categoryLabel: "Детское", image: "/images/menu/k01_mini_burger.png", calories: 260, proteins: 14, fats: 12, carbs: 22, isPopular: true },
  { id: "k02", name: "Наггетсы", description: "Хрустящие куриные наггетсы с соусом барбекю", price: 200, weight: "100 г", category: "kids", categoryLabel: "Детское", image: "/images/menu/k02_nuggets.png", calories: 280, proteins: 16, fats: 15, carbs: 18 },
  { id: "k03", name: "Фруктовые канапе", description: "Яркие канапе из свежих фруктов на безопасных шпажках", price: 180, weight: "100 г", category: "kids", categoryLabel: "Детское", image: "/images/menu/k03_fruit_skewers.png", calories: 65, proteins: 0.5, fats: 0.3, carbs: 16, isVegetarian: true, isGlutenFree: true },
  { id: "k04", name: "Мини-пицца Маргарита", description: "Мини-пицца с томатным соусом, моцареллой и базиликом", price: 250, weight: "100 г", category: "kids", categoryLabel: "Детское", image: "/images/menu/k04_mini_pizza.png", calories: 240, proteins: 10, fats: 8, carbs: 30, isVegetarian: true },
];

// ============================================================
// Services (5)
// ============================================================

export const services: Service[] = [
  { id: "s1", slug: "furshet", title: "Фуршет", description: "Элегантная подача канапе и закусок для cocktail receptions и лёгких мероприятий.", image: "/images/services/enhanced_wedding.png", features: ["Элегантная подача канапе", "Мобильные станции обслуживания", "Персональный сомелье", "Авторские закуски шеф-повара", "Декор и сервировка", "Обслуживание от 1 часа"] },
  { id: "s2", slug: "banket", title: "Банкет", description: "Классический банкет с полной сервировкой, трёхразовым меню и обслуживанием официантами.", image: "/images/hero/hero_catering.png", features: ["Классическая посадка за столы", "Полное трёхразовое меню", "Обслуживание официантами", "Авторское банкетное меню", "Сервировка и декор столов", "Координация вечерней программы"] },
  { id: "s3", slug: "svadba", title: "Свадьбы", description: "Более 850 свадеб за 19 лет. Авторское меню, идеальная сервировка, свадебный координатор.", image: "/images/services/enhanced_wedding.png", features: ["Более 850 свадеб за 19 лет", "Авторское свадебное меню", "Идеальная сервировка", "Свадебный координатор", "Детальный тайминг вечера", "Дегустация для пары"] },
  { id: "s4", slug: "korporativ", title: "Корпоративы", description: "Бизнес-формат обслуживания: кофе-брейки, ланч-пакеты, брендирование блюд.", image: "/images/services/enhanced_corporate.png", features: ["Бизнес-формат обслуживания", "Кофе-брейк и ланч-пакеты", "Брендирование блюда", "Обслуживание от 20 человек", "Своё оборудование и посуда", "Гибкое меню под бюджет"] },
  { id: "s5", slug: "bar", title: "Бар", description: "Коктейльные станции, профессиональные бармены, авторские коктейли и мобильный бар.", image: "/images/gallery/10_bar_station.png", features: ["Коктейльные станции", "Профессиональные бармены", "Авторские коктейли", "Мобильный бар", "Безалкогольные опции", "Интерактивная подача"] },
];

// ============================================================
// Pricing Packages (5)
// ============================================================

export const pricingPackages: PricingPackage[] = [
  { id: "basic", name: "Базовый фуршет", pricePerPerson: 1500, minGuests: 20, description: "Идеально для лёгких мероприятий и кофе-брейков.", features: ["4 вида канапе", "1 салат на выбор", "1 горячее блюдо", "1 десерт", "Напитки в ассортименте"], includes: ["Фуршетная подача", "Сервировка", "Обслуживание 3 часа"] },
  { id: "premium", name: "Премиум банкет", pricePerPerson: 3500, minGuests: 15, isPopular: true, description: "Полноценный банкет для торжественных событий.", features: ["6 видов канапе", "2 салата на выбор", "2 горячих блюда", "Сырная тарелка", "2 десерта", "Обслуживание официантами"], includes: ["Банкетная подача", "Сервировка", "Обслуживание 5 часов", "Координатор"] },
  { id: "vip", name: "Люкс VIP", pricePerPerson: 7000, minGuests: 10, description: "Эксклюзивное обслуживание для особых мероприятий.", features: ["8 видов канапе", "3 салата", "3 горячих блюда", "Морепродукты", "Пирамида шампанского", "Бармен и официанты"], includes: ["VIP-обслуживание", "Авторское меню", "Декор", "Координатор", "Барная станция"] },
  { id: "bbq", name: "Летний BBQ", pricePerPerson: 2200, minGuests: 15, description: "Для пикников и летних мероприятий на природе.", features: ["2 вида канапе", "1 салат", "2 блюда на гриль", "1 десерт", "Домашний лимонад"], includes: ["Гриль-станция", "Сервировка", "Обслуживание 4 часа"] },
  { id: "kids", name: "Детский праздник", pricePerPerson: 1200, minGuests: 10, description: "Специальное меню для детских праздников и семейных мероприятий.", features: ["3 блюда из детского меню", "Фруктовые канапе", "Напитки", "Мини-десерты"], includes: ["Детская сервировка", "Обслуживание 3 часа", "Аниматор по запросу"] },
];

// ============================================================
// Additional Services (8)
// ============================================================

export const additionalServices: AdditionalService[] = [
  { id: "a1", name: "Шоколадный фонтан", description: "Шоколадный фонтан с фруктами и маршмеллоу", price: 15000, priceType: "fixed" },
  { id: "a2", name: "Пирамиды из шампанского", description: "Пирамида из бокалов с шампанским", price: 8000, priceType: "fixed" },
  { id: "a3", name: "Доставка закусок", description: "Доставка канапе и закусок на площадку", price: 350, priceType: "per-guest" },
  { id: "a4", name: "Торты на заказ", description: "Авторский торт от шеф-кондитера", price: 5000, priceType: "fixed" },
  { id: "a5", name: "Аренда оборудования", description: "Аренда посуды, оборудования и инвентаря", price: 3000, priceType: "per-hour" },
  { id: "a6", name: "Оформление зала", description: "Декор и оформление помещения", price: 25000, priceType: "fixed" },
  { id: "a7", name: "Флористическое сопровождение", description: "Цветочные композиции и флористика", price: 12000, priceType: "fixed" },
  { id: "a8", name: "Выездная регистрация", description: "Организация выездной церемонии", price: 35000, priceType: "fixed" },
];

// ============================================================
// Stats
// ============================================================

export const stats: Stat[] = [
  { value: 19, suffix: "+", label: "Лет опыта" },
  { value: 3500, suffix: "+", label: "Мероприятий" },
  { value: 150000, suffix: "+", label: "Довольных гостей" },
  { value: 98, suffix: "%", label: "Положительных отзывов" },
];

// ============================================================
// Trust Marks
// ============================================================

export const trustMarks: TrustMark[] = [
  { name: "Газпром" },
  { name: "Лента" },
  { name: "Яндекс" },
  { name: "Сбербанк" },
  { name: "Ростелеком" },
  { name: "ВТБ" },
  { name: "X5 Group" },
  { name: "Магнит" },
];

// ============================================================
// Testimonials (8)
// ============================================================

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Анна Петрова", event: "Свадьба", date: "2025-03-15", rating: 5, text: "Кейтеринг превзошёл все ожидания! Гости были в восторге от канапе с лососем и авторских десертов. Обслуживание на высшем уровне, каждый официант вежлив и профессионален.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=АП", company: "Events.ru", role: "Бухгалтер" },
  { id: "t2", name: "Дмитрий Козлов", event: "Корпоратив", date: "2025-01-22", rating: 5, text: "Заказывали обслуживание на корпоратив на 200 человек. Всё было организовано безупречно — от кофе-брейка до фуршета. Коллеги до сих пор вспоминают шоколадный фондан.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=ДК", company: "ТехноСтарт", role: "HR-директор" },
  { id: "t3", name: "Елена Смирнова", event: "День рождения", date: "2024-12-08", rating: 4, text: "Отличный кейтеринг на юбилей! Шашлык из свинины — просто тает во рту. Единственное, хотелось бы больше вегетарианских опций в меню.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=ЕС", company: "Freelance", role: "Дизайнер" },
  { id: "t4", name: "Михаил Волков", event: "Свадьба", date: "2025-05-10", rating: 5, text: "Пирамида из шампанского стала главным украшением вечера! Меню было продумано до мелочей, координатор контролировал каждый этап. Рекомендую всем невестам.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=МВ", company: "Волков и партнёры", role: "Юрист" },
  { id: "t5", name: "Ольга Николаева", event: "Корпоратив", date: "2024-11-30", rating: 5, text: "Третий год подряд заказываем кейтеринг у Nilov для новогоднего корпоратива. Всегда стабильное качество, вкусная еда и отлично обученный персонал.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=ОН", company: "ФинансГрупп", role: "Офис-менеджер" },
  { id: "t6", name: "Андрей Белов", event: "Юбилей", date: "2025-02-14", rating: 5, text: "Отметили 50-летие на 80 человек. Банкетное меню — выше всяких похвал. Медальоны из говяжьей вырезки и дорадо с цитрусовыми — шедевры!", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=АБ", company: "СтройИнвест", role: "Генеральный директор" },
  { id: "t7", name: "Мария Иванова", event: "День рождения", date: "2025-04-20", rating: 4, text: "Заказывали детский праздник на 30 человек. Дети были в восторге от мини-бургеров и фруктовых канапе. Взрослые тоже не остались без внимания.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=МИ", company: "MedCenter", role: "Врач" },
  { id: "t8", name: "Сергей Кузнецов", event: "Корпоратив", date: "2025-06-05", rating: 5, text: "Барная станция с авторскими коктейлями стала хитом нашего мероприятия! Бармены показывали шоу при подготовке напитков. Невероятная атмосфера.", avatar: "https://placehold.co/100x100/200,169,126/44,44,44?text=СК", company: "Digital Agency", role: "CEO" },
];

// ============================================================
// Team Members (4)
// ============================================================

export const teamMembers: TeamMember[] = [
  { id: "tm1", name: "Алексей Нилов", role: "Шеф-повар", bio: "Основатель компании. Более 25 лет опыта в haute cuisine. Работал в ресторанах Франции и Италии. Создаёт авторское меню для каждого мероприятия, уделяя внимание каждой детали.", photo: "https://placehold.co/400x500/200,169,126/44,44,44?text=АН", specialization: "Авторская кухня, французская и итальянская culinary традиции" },
  { id: "tm2", name: "Ирина Васильева", role: "Менеджер мероприятий", bio: "Организовала более 1200 мероприятий за 12 лет работы. Превращает каждую заявку в безупречное событие. От первой консультации до финального аккорда — всё под контролем.", photo: "https://placehold.co/400x500/200,169,126/44,44,44?text=ИВ", specialization: "Свадебные и корпоративные мероприятия, логистика" },
  { id: "tm3", name: "Павел Орлов", role: "Сомелье", bio: "Сертифицированный сомелье с международным дипломом WSET Level 3. Подбирает идеальные напитки к каждому блюду. Создаёт уникальные коктейльные карты.", photo: "https://placehold.co/400x500/200,169,126/44,44,44?text=ПО", specialization: "Винная карта, авторские коктейли, безалкогольные пары" },
  { id: "tm4", name: "Наталья Соколова", role: "Координатор", bio: "Отвечает за тайминг и координацию на площадке. Обеспечивает синхронную работу кухни, официантов и барменов. Ни одна деталь не ускользает от её внимания.", photo: "https://placehold.co/400x500/200,169,126/44,44,44?text=НС", specialization: "Операционное управление, работа с командой на площадке" },
];

// ============================================================
// FAQ (12, grouped)
// ============================================================

export const faqItems: FAQItem[] = [
  // Бронирование
  { id: "f1", question: "Какое минимальное количество гостей для заказа?", answer: "Минимальный заказ зависит от формата обслуживания. Для фуршета — от 20 человек, для банкета — от 15, для VIP-обслуживания — от 10. Мы также обслуживаем детские праздники от 10 персон.", group: "Бронирование" },
  { id: "f2", question: "В каких зонах Санкт-Петербурга вы работаете?", answer: "Мы работаем по всему Санкт-Петербургу и Ленинградской области. Также выезжаем в Выборг, Петергоф, Царское Село, Павловск и другие пригороды. Доставка за пределы КАД обсуждается индивидуально.", group: "Бронирование" },
  { id: "f3", question: "За сколько нужно бронировать кейтеринг?", answer: "Рекомендуем бронировать минимум за 2 недели до мероприятия. Для свадеб в сезон (май-сентябрь) — за 1-2 месяца. Экстренные заказы (за 2-3 дня) возможны при наличии свободных дат.", group: "Бронирование" },
  // Меню
  { id: "f4", question: "Есть ли в меню вегетарианские и диетические опции?", answer: "Да, в нашем меню более 15 вегетарианских и безглютеновых позиций. Мы также можем адаптировать любое блюдо под диетические требования: безлактозное, безглютеновое, кето-меню. Обязательно укажите это при заказе.", group: "Меню" },
  { id: "f5", question: "Можно ли внести изменения в меню?", answer: "Безусловно! Меню полностью адаптируется под ваши пожелания. Вы можете заменить блюда, добавить фирменные позиции шеф-повара или заказать индивидуальное меню. Замена до 3 позиций — бесплатно.", group: "Меню" },
  { id: "f6", question: "Предоставляете ли вы алкогольные напитки?", answer: "Мы не продаём алкоголь напрямую, но обеспечиваем полное барное обслуживание: сомелье подбирает вино к меню, бармены готовят авторские коктейли. Алкоголь закупается вами или через наших лицензированных партнёров.", group: "Меню" },
  // Оплата
  { id: "f7", question: "Какие способы оплаты вы принимаете?", answer: "Принимаем оплату банковским переводом (безналичный расчёт для юрлиц), оплату по карте (Visa, MasterCard, МИР) и наличными. Для корпоративных клиентов предоставляем полный пакет документов.", group: "Оплата" },
  { id: "f8", question: "Можно ли отменить или перенести заказ?", answer: "Бесплатная отмена или перенос — за 7 дней до мероприятия. При отмене за 3-7 дней удерживается 30% предоплаты. Менее чем за 3 дня — 50%. Мы стараемся найти компромисс в любой ситуации.", group: "Оплата" },
  { id: "f9", question: "Нужна ли предоплата?", answer: "Да, стандартная предоплата составляет 50% от суммы заказа при заключении договора. Оставшиеся 50% оплачиваются не позднее, чем за 1 день до мероприятия. Для постоянных клиентов возможны индивидуальные условия.", group: "Оплата" },
  // Логистика
  { id: "f10", question: "Как осуществляется доставка и развёртывание?", answer: "Мы приезжаем на площадку за 2-3 часа до начала мероприятия. Привозим всё необходимое: оборудование, посуду, ингредиенты. После мероприятия убираем и вывозим всё за 1-2 часа.", group: "Логистика" },
  { id: "f11", question: "Сколько времени нужно на обслуживание?", answer: "Стандартное время обслуживания: фуршет — 3 часа, банкет — 5 часов, кофе-брейк — 1-2 часа. Увеличение времени оплачивается дополнительно из расчёта 1000 ₽/час за каждого сотрудника.", group: "Логистика" },
  { id: "f12", question: "Что если мне не хватает посуды или оборудования?", answer: "В стоимость любого пакета уже включена аренда посуды, столовых приборов и сервировки. Дополнительное оборудование (шатры, таблички, тематический декор) предоставляется по запросу за отдельную плату.", group: "Логистика" },
];

// ============================================================
// Gallery Images (17)
// ============================================================

export const galleryImages: GalleryImage[] = [
  { id: "g01", src: "/images/gallery/01_canape.png", alt: "Канапе и закуски для фуршета", category: "menu", categoryLabel: "Меню", width: 1344, height: 768 },
  { id: "g02", src: "/images/gallery/02_chef_plating.png", alt: "Шеф-повар оформляет блюдо", category: "team", categoryLabel: "Команда", width: 1344, height: 768 },
  { id: "g03", src: "/images/gallery/03_dessert_table.png", alt: "Десертный стол на мероприятии", category: "desserts", categoryLabel: "Десерты", width: 1344, height: 768 },
  { id: "g04", src: "/images/gallery/04_champagne_pyramid.png", alt: "Пирамида из шампанского", category: "bar", categoryLabel: "Бар", width: 1344, height: 768 },
  { id: "g05", src: "/images/gallery/05_team_serving.png", alt: "Команда обслуживания на площадке", category: "services", categoryLabel: "Услуги", width: 1344, height: 768 },
  { id: "g06", src: "/images/gallery/06_salad_plate.png", alt: "Салатная тарелка с авторским блюдом", category: "menu", categoryLabel: "Меню", width: 1024, height: 1024 },
  { id: "g07", src: "/images/gallery/07_main_dish.png", alt: "Горячее блюдо на подаче", category: "menu", categoryLabel: "Меню", width: 1024, height: 1024 },
  { id: "g08", src: "/images/gallery/08_coffee_break.png", alt: "Организация кофе-брейка", category: "services", categoryLabel: "Услуги", width: 1344, height: 768 },
  { id: "g09", src: "/images/gallery/09_table_setup.png", alt: "Сервировка банкетного стола", category: "decor", categoryLabel: "Оформление", width: 1344, height: 768 },
  { id: "g10", src: "/images/gallery/10_bar_station.png", alt: "Коктейльная барная станция", category: "bar", categoryLabel: "Бар", width: 1344, height: 768 },
  { id: "g11", src: "/images/gallery/11_wedding_cake.png", alt: "Свадебный торт от шеф-кондитера", category: "desserts", categoryLabel: "Десерты", width: 1024, height: 1024 },
  { id: "g12", src: "/images/gallery/12_team_portrait.png", alt: "Команда Nilov Catering", category: "team", categoryLabel: "Команда", width: 1344, height: 768 },
  { id: "g13", src: "/images/gallery/13_venue.png", alt: "Площадка для мероприятия", category: "venues", categoryLabel: "Площадки", width: 1344, height: 768 },
  { id: "g14", src: "/images/gallery/14_seafood.png", alt: "Морепродукты на подаче", category: "menu", categoryLabel: "Меню", width: 1024, height: 1024 },
  { id: "g15", src: "/images/gallery/14_seafood_platter.png", alt: "Тарелка с морепродуктами", category: "menu", categoryLabel: "Меню", width: 1024, height: 1024 },
  { id: "g16", src: "/images/gallery/15_infographic.png", alt: "Процесс организации кейтеринга", category: "process", categoryLabel: "Процесс", width: 1344, height: 768 },
  { id: "g17", src: "/images/gallery/13_venue_decoration.png", alt: "Оформление площадки для мероприятия", category: "decor", categoryLabel: "Оформление", width: 1344, height: 768 },
];

// ============================================================
// Blog Posts (3)
// ============================================================

export const blogPosts: BlogPost[] = [
  {
    id: "bp1",
    slug: "trendy-kateringa-2025",
    title: "Тренды кейтеринга 2025: что нового в мире выездного питания",
    excerpt: "Обзор главных трендов кейтеринговой индустрии: от эко-подхода до интерактивных станций и персонализированных меню.",
    content: `<h2>Экологичность и осознанное потребление</h2>
<p>В 2025 году экологичность стала не просто модным словом, а обязательным требованием для кейтеринговых компаний. Биоразлагаемая посуда, локальные продукты от фермеров Ленинградской области и минимальный пищевой отход — стандарт, к которому стремится индустрия. Мы в Nilov Catering уже несколько лет сотрудничаем с фермерскими хозяйствами и перешли на 100% перерабатываемую упаковку.</p>

<h2>Интерактивные станции и шоу-поварение</h2>
<p>Гости хотят не просто есть, а получать впечатления. Коктейльные станции с мастер-классами, pasta-станции где повар готовит пасту на глазах у гостей, и десертные бары с сборкой тартов и мороженого — всё это становится нормой. Интерактив превращает приём пищи в развлечение.</p>

<h2>Персонализированные меню</h2>
<p>Стандартное меню на 50 человек уходит в прошлое. Современные заказчики хотят меню, отражающее их историю: блюда родом из детства невесты, коктейли в цветовой гамме бренда компании, десерты с инициалами юбиляра. Технологии позволяют быстро адаптировать меню под любые пожелания.</p>

<h2>Микро-мероприятия и private dining</h2>
<p>Тренд на камерные мероприятия продолжается. Банкеты на 10-15 человек с выездным шеф-поваром, семейные ужины на природе, романтические ужины для двоих — кейтеринг становится доступнее и интимнее. Это открывает новые возможности для ресторанов и кейтеринговых компаний.</p>`,
    date: "2025-06-15",
    image: "/images/gallery/05_team_serving.png",
    author: "Алексей Нилов",
    category: "Тренды",
  },
  {
    id: "bp2",
    slug: "kak-vybrat-menyu-dlya-svadby",
    title: "Как выбрать меню для свадьбы: полное руководство от шеф-повара",
    excerpt: "Пошаговый гайд по выбору свадебного меню: от количества гостей до учёта диетических предпочтений и сезонности продуктов.",
    content: `<h2>Определите формат приёма пищи</h2>
<p>Первый и самый важный шаг — понять, как будет организовано питание на вашей свадьбе. Основные форматы: фуршет (гости свободно перемещаются и берут закуски), банкет (посадка за столы с полным обслуживанием) и комбинированный формат (фуршетная часть в начале, затем посадка за столы). Каждый формат диктует свой состав блюд и бюджет.</p>

<h2>Учитывайте количество и состав гостей</h2>
<p>Для 50 человек и 200 — принципиально разные подходы. На малых свадьбах можно позволить себе больше разнообразия и сложные блюда. На крупных — упор на надёжность и скорость подачи. Обязательно учитывайте: вегетарианцев (обычно 10-15% гостей), аллергиков, детей, пожилых людей. Подготовьте альтернативные варианты.</p>

<h2>Следите за сезонностью</h2>
<p>Летняя свадьба — идеальное время для лёгких салатов, свежих овощей и ягодных десертов. Зимняя — тёплые блюда, горячие супы, шоколадные десерты. Использование сезонных продуктов не только лучше по вкусу, но и дешевле. Меню из сезонных продуктов всегда выигрывает у экзотических импортных аналогов.</p>

<h2>Не забудьте про дегустацию</h2>
<p>Профессиональные кейтеринговые компании предлагают дегустацию перед свадьбой. Это ваш шанс попробовать все блюда, оценить подачу и внести коррективы. Приходите на дегустацию голодными и обязательно берите с собой вторую половинку — вкусы должны совпадать!</p>`,
    date: "2025-05-20",
    image: "/images/gallery/11_wedding_cake.png",
    author: "Ирина Васильева",
    category: "Советы",
  },
  {
    id: "bp3",
    slug: "korporativnyj-katering-polnyj-gid",
    title: "Корпоративный кейтеринг: полный гид для HR и офис-менеджеров",
    excerpt: "Всё о корпоративном кейтеринге: от выбора формата до бюджетирования и отчётности. Практические советы от опытного менеджера.",
    content: `<h2>Форматы корпоративного питания</h2>
<p>Корпоративный кейтеринг — это не только банкеты на юбилеи компании. Основные форматы: ежедневные бизнес-ланчи (от 200 ₽/чел), кофе-брейки на совещаниях (от 300 ₽/чел), фуршеты на корпоративах (от 1500 ₽/чел), и полные банкеты для торжественных событий. Выбор формата зависит от повода, бюджета и количества участников.</p>

<h2>Бюджетирование и оптимизация расходов</h2>
<p>Главный секрет экономии без потери качества — правильный расчёт порций. Опытный кейтеринг никогда не предлагает «всё и сразу». Для кофе-брейка на 2 часа достаточно 3-4 вида закусок и 2 напитка. Для фуршета на 3 часа — 6-8 позиций. Переплата за лишние позиции — самая частая ошибка при заказе.</p>

<h2>Брендирование и корпоративная идентичность</h2>
<p>Современный корпоративный кейтеринг — это часть имиджа компании. Брендирование стаканчиков, логотип на десертах, фирменные коктейли в цветах компании — всё это создаёт единое визуальное пространство мероприятия. Мы предлагаем полный цикл брендирования блюд и упаковки.</p>

<h2>Документооборот и закупки</h2>
<p>Для юридических лиц мы предоставляем полный пакет документов: договор, счёт, акт выполненных работ, счёт-фактуру. Работаем с НДС и без. Для регулярных клиентов предлагаем месячное обслуживание с единой отчётностью и гибкой системой оплаты.</p>`,
    date: "2025-04-10",
    image: "/images/gallery/08_coffee_break.png",
    author: "Ольга Николаева",
    category: "Бизнес",
  },
];