import Food1 from '../../assets/food-1.png'
import Food2 from '../../assets/margherita-pizza.jpg'
import Food3 from '../../assets/chicken-burger.png'
import Food4 from '../../assets/chicken-biryani.png'
import Food5 from '../../assets/cake.png'
import Food6 from '../../assets/drink.png'
import Food7 from '../../assets/pepperoni-pizza.jpg'
import ratingStar from '../../assets/ratingStar.png'
import ratingStarfull from '../../assets/ratingStarfull.png'
import ratingStarfull2 from '../../assets/ratingStarfull-2.png'
import ratingStarfull3 from '../../assets/ratingStarfull-3.png'

const AllmenuData = [
  // Burger
  {
    key: 1,
    image: Food1,
    name: "Zinger Burger",
    price: '399',
    rating: '4.8',
    ratingStar: ratingStar,
    ratingstarfull: ratingStarfull,
    category: 'burger',
    discountedprice:'300',

    discount:'-20%'
  },
  {
    key: 3,
    image: Food3,
    name: "Chicken Burger",
    price: '800',
    rating: '4.9',
    ratingStar: ratingStar,
    category: 'burger',
    ratingstarfull: ratingStarfull2,


    discountedprice:'300',

    discount:'- 30%'

  },

  // Biryani
  {
    key: 4,
    image: Food4,
    name: "Chicken Biryani",
    price: '200',
    rating: '4.5',
    ratingStar: ratingStar,
    category: 'biryani',
    discountedprice:'300',
    ratingstarfull: ratingStarfull,

    discount:'-20%'

  },

  // Pizza
  {
    key: 2,
    image: Food2,
    name: "Margherita Pizza",
    price: '1200',
    rating: '4.6',
    ratingStar: ratingStar,
    category: 'pizza',
    discountedprice:'300',
    ratingstarfull: ratingStarfull3,

    discount:'-25%'

  },
  {
    key: 7,
    image: Food7,
    name: "Pepperoni Pizza",
    price: '400',
    rating: '4.5',
    ratingStar: ratingStar,
    category: 'pizza',
    discountedprice:'300',
    ratingstarfull: ratingStarfull,

    discount:'-20%'

  },

  // Drink
  {
    key: 6,
    image: Food6,
    name: "Juice",
    price: '400',
    rating: '4.5',
    ratingStar: ratingStar,
    category: 'drink',
    discountedprice:'300',
    ratingstarfull: ratingStarfull2,

    discount:'-20%'

  },

  // Desert
  {
    key: 5,
    image: Food5,
    name: "Cream cake",
    price: '1000',
    rating: '4.5',
    ratingStar: ratingStar,
    category: 'desert',
    discount:'-10%',
    discountedprice:'300',
    ratingstarfull: ratingStarfull3,

  }
];
export default AllmenuData;