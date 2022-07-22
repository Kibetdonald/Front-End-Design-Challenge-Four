import React from 'react'
import './FirstSection.scss';
import bgImage from '../../assets/images/bg.png'

export default function FirstSection() {
  return (
    
    <section class="hero" id="home">
    <div class="container">

      <div class="hero-content">

        <h1 class="h1 hero-title">Financial Dreams?</h1>

        <p class="hero-text">
          We help you set goals for your money and a plan to reach them.
          Spend, save, and invest for what matters most to you, all in one place.
        </p>

        <button class="btn btn-primary">Get started</button>

      </div>

      <div class="hero-banner"></div>

    </div>

    <img src={bgImage} alt="shape" class="shape-content"/>
  </section>

  )
}
