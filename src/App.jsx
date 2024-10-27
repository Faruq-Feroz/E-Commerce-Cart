import { useState } from 'react';
import Search from './Search';
import Show from './Show';
import { FaShoppingCart } from 'react-icons/fa'; 
import UserCart from './UserCart';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
    const [courses, setCourses] = useState([
        { id: 1, name: 'Sony Bravia', price: 60000, image: 'https://i.pinimg.com/474x/06/ac/7f/06ac7fbdb73b4ca259170c65cef70db5.jpg' },
        { id: 2, name: 'Microwave Oven', price: 20000, image: 'https://i.pinimg.com/474x/40/06/f6/4006f6a2e04fa3a6ec23ef48d4c946f1.jpg' },
        { id: 3, name: 'Electric Oven', price: 30000, image: 'https://i.pinimg.com/474x/c7/a6/5d/c7a65d94f805dd069144471445573892.jpg' },
       
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const addCourseToCartFunction = (course) => {
        const alreadyCourses = cartCourses.find(item => item.product.id === course.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, { product: course, quantity: 1 }]);
        }
    };

    const deleteCourseFromCartFunction = (course) => {
        const updatedCart = cartCourses.filter(item => item.product.id !== course.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = courses.filter(course => 
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Faruq Store</h1>
                <Search 
                    searchCourse={searchCourse} 
                    courseSearchUserFunction={courseSearchUserFunction} 
                />
                <div className="cart-icon">
                    <FaShoppingCart size={30} /> {/* Placing the cart icon */}
                    <div>Cart ({cartCourses.reduce((acc, item) => acc + item.quantity, 0)})</div>
                </div>
            </header>
            <main className="App-main">
                <Show 
                    filterCourseFunction={filterCourseFunction} 
                    addCourseToCartFunction={addCourseToCartFunction} 
                />
                <UserCart 
                    cartCourses={cartCourses} 
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction} 
                    totalAmountCalculationFunction={totalAmountCalculationFunction} 
                />
            </main>
        </div>
    );
}

export default App;
