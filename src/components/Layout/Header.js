
//A common pattern in React is for a component to return multiple elements.
//Fragments let you group a list of children without adding extra nodes to the DOM.
import {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCardButton';
import classes from './Header.module.css';


const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton />
                
            </header>

            {/* "-" אנו רושמים את הקלאס הזה עם סוגריים מרובעים מכיוון שהשם של הקלאס הזה מכיל {classes['main-image']} */}
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table food"/>
            </div>
        </Fragment>
    );
};

export default Header;