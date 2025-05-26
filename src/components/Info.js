"use client"

import { useState } from "react"
import "../styles/info.css"

function Info() {
  const [calculatorData, setCalculatorData] = useState({
    household: 2,
    showers: 1,
    laundry: 3,
    dishwasher: 3,
  })

  const [waterUsage, setWaterUsage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCalculatorData((prevState) => ({
      ...prevState,
      [name]: Number.parseInt(value),
    }))
  }

  const calculateWaterUsage = (e) => {
    e.preventDefault()

    // Simple calculation for demonstration
    const showerUsage = calculatorData.showers * calculatorData.household * 17 // gallons per shower
    const laundryUsage = calculatorData.laundry * 40 // gallons per load
    const dishwasherUsage = calculatorData.dishwasher * 6 // gallons per load

    const totalWeeklyUsage = showerUsage + laundryUsage + dishwasherUsage
    setWaterUsage(totalWeeklyUsage)

    // Show result box
    document.querySelector(".result-box").classList.add("active")
  }

  return (
    <div className="info-container">
      <header className="info-header">
        <h1>Water Management Information</h1>
        <p>Learn about water conservation, usage statistics, and how you can make a difference.</p>
      </header>

      <div className="info-content">
        <section className="facts-section">
          <h2>Water Facts</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <div className="fact-icon">💧</div>
              <div className="fact-content">
                <h3>Global Water Crisis</h3>
                <p>
                  By 2025, two-thirds of the world's population may face water shortages. Water conservation is more
                  important than ever.
                </p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🚿</div>
              <div className="fact-content">
                <h3>Household Usage</h3>
                <p>
                  The average American family uses more than 300 gallons of water per day, with 70% of this usage
                  occurring indoors.
                </p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🌊</div>
              <div className="fact-content">
                <h3>Water Distribution</h3>
                <p>
                  While 71% of Earth is covered in water, only 3% is freshwater, and just 0.5% is available for
                  consumption.
                </p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">💰</div>
              <div className="fact-content">
                <h3>Economic Impact</h3>
                <p>
                  Water scarcity could reduce GDP by 6% in some regions by 2050, leading to economic instability and
                  migration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tips-section">
          <h2>Water Conservation Tips</h2>
          <ul className="tips-list">
            <li className="tip-item">
              <h3>Fix Leaky Faucets</h3>
              <p>
                A dripping faucet can waste up to 3,000 gallons per year. Regularly check and fix leaks in your home.
              </p>
            </li>
            <li className="tip-item">
              <h3>Install Water-Efficient Fixtures</h3>
              <p>
                Low-flow showerheads and toilets can reduce water usage by up to 60%. Look for WaterSense labeled
                products.
              </p>
            </li>
            <li className="tip-item">
              <h3>Collect Rainwater</h3>
              <p>
                Use rain barrels to collect water for gardening and outdoor cleaning. This can save thousands of gallons
                annually.
              </p>
            </li>
            <li className="tip-item">
              <h3>Optimize Laundry and Dishwashing</h3>
              <p>Only run full loads in washing machines and dishwashers. This maximizes water efficiency per cycle.</p>
            </li>
            <li className="tip-item">
              <h3>Water Plants Strategically</h3>
              <p>
                Water gardens early in the morning or late in the evening to reduce evaporation. Use drip irrigation for
                targeted watering.
              </p>
            </li>
          </ul>
        </section>

        <section className="calculator-section">
          <h2>Water Usage Calculator</h2>
          <form className="calculator-form" onSubmit={calculateWaterUsage}>
            <div className="calc-group">
              <label htmlFor="household">People in Household</label>
              <input
                type="number"
                id="household"
                name="household"
                className="calc-control"
                min="1"
                max="10"
                value={calculatorData.household}
                onChange={handleInputChange}
              />
            </div>
            <div className="calc-group">
              <label htmlFor="showers">Average Showers Per Person (Daily)</label>
              <input
                type="number"
                id="showers"
                name="showers"
                className="calc-control"
                min="0"
                max="5"
                step="0.5"
                value={calculatorData.showers}
                onChange={handleInputChange}
              />
            </div>
            <div className="calc-group">
              <label htmlFor="laundry">Loads of Laundry (Weekly)</label>
              <input
                type="number"
                id="laundry"
                name="laundry"
                className="calc-control"
                min="0"
                max="20"
                value={calculatorData.laundry}
                onChange={handleInputChange}
              />
            </div>
            <div className="calc-group">
              <label htmlFor="dishwasher">Dishwasher Cycles (Weekly)</label>
              <input
                type="number"
                id="dishwasher"
                name="dishwasher"
                className="calc-control"
                min="0"
                max="20"
                value={calculatorData.dishwasher}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="calc-btn">
              Calculate Usage
            </button>
          </form>

          <div className="result-box">
            <div className="result-value">{waterUsage} gallons</div>
            <div className="result-text">Estimated weekly water usage</div>
          </div>
        </section>

        <section className="resources-section">
          <h2>Water Management Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-image">📚</div>
              <div className="resource-content">
                <h3>Educational Materials</h3>
                <p>Access free educational resources about water conservation and management.</p>
                <a href="#" className="resource-link">
                  Browse Resources
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-image">🔍</div>
              <div className="resource-content">
                <h3>Water Audit Tools</h3>
                <p>Professional tools to analyze and optimize your water consumption.</p>
                <a href="#" className="resource-link">
                  Get Started
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-image">📱</div>
              <div className="resource-content">
                <h3>Mobile Applications</h3>
                <p>Track your water usage and get personalized conservation tips.</p>
                <a href="#" className="resource-link">
                  Download Now
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-image">🌐</div>
              <div className="resource-content">
                <h3>Global Initiatives</h3>
                <p>Learn about worldwide water conservation efforts and how to participate.</p>
                <a href="#" className="resource-link">
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Info

