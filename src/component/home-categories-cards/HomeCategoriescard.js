import { HiDotsCircleHorizontal } from 'react-icons/hi'
import Category1 from '../../assets/category-1.png'
import Category2 from '../../assets/category-2.png'
import Category3 from '../../assets/category-3.png'
import Category4 from '../../assets/category-4.png'
import Category5 from '../../assets/category-5.png'
import Category6 from '../../assets/category-6.png'
import { AllmenuData } from '../component'


  const burgerCount = AllmenuData.filter(item => item.category === "biryani").length;
  const biryaniCount = AllmenuData.filter(item => item.category === "burger").length;
  const pizzaCount = AllmenuData.filter(item => item.category === "pizza").length;
  const drinkCount = AllmenuData.filter(item => item.category === "drink").length;
  const desertCount = AllmenuData.filter(item => item.category === "desert").length;

let Categorycarddata = [
  {
    key:'1',
image: Category1,
name:"Biryani",

totalItems: biryaniCount + ' items' 
},
{
    key:'2',
image:Category2,
name:"Burger",
totalItems: burgerCount + ' items' 
},
{
    key:'3',
image:Category3,
name:"Pizza",
totalItems: pizzaCount + ' items' 
},
{
    key:'4',
  image:Category4,
name:"Drinks",
totalItems: drinkCount + ' items' 
},
{
    key:'5',
image:Category5,
name:"Desserts",
totalItems: desertCount + ' items' 
},
{
    key:'6',
  image:Category6,
name:"More"
}
]
export default Categorycarddata