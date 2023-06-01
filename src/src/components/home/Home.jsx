import React from 'react'
import classes from './home.module.css'
import Foods from '../foods/Foods'
import Newsletter from '../newsletter/Newsletter'
import Hero from '../hero/Hero'

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Vegan Food Delivery</span>
            <h2 className={classes.deliveryTitle}>the best of vegan food delivery in one place</h2>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home