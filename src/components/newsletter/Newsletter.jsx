import React from 'react'
import classes from './newsletter.module.css'
import {AiOutlineSend} from 'react-icons/ai'

const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Stay Up To Date</h4>
        <h2 className={classes.title}>Subscribe Now!</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder='Enter email...'/>
          <AiOutlineSend className={classes.sendIcon}/>
        </div>
      </div>
    </section>
  )
}

export default Newsletter