import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man_eating.png'

const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Vegan Food Delivery</h2>
          <p className={classes.firstMsg}>Welcome to your one stop shop for <span>the ultimate vegan food....</span></p>
          <p className={classes.secondMsg}>
            Allergic to <span>dairy</span>, can't have <br /> <span>tree nuts</span>,
            milk make you <span>moody</span>?
          </p>
          <p className={classes.desc}>
            If you're staying away from steak, ducking chicken, or whatever reason you're going meatleass this meal, we've got you covered with all your favorite foods!
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}><a href="#foods">See what's available <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero