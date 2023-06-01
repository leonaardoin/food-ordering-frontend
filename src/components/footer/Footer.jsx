import React from "react"
import classes from "./footer.module.css"
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Hours of Operation</h2>
          <ul className={classes.list}>
            <li>Monday-Friday</li>
            <li className={classes.workingTime}>11:00am - 08:00pm</li>
            <li>Saturday</li>
            <li className={classes.workingTime}>10:00am - 10:00pm</li>
            <li>Sunday</li>
            <li className={classes.workingTime}>12:00pm - 06:00pm</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Social Media</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer