// "use client"

// import { useEffect } from "react"
// import "../styles/about.css"

// function About() {
//   // Animation for stats counting
//   useEffect(() => {
//     const statNumbers = document.querySelectorAll(".stat-number")

//     const animateValue = (obj, start, end, duration) => {
//       let startTimestamp = null
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1)
//         obj.innerHTML = Math.floor(progress * (end - start) + start)
//         if (progress < 1) {
//           window.requestAnimationFrame(step)
//         }
//       }
//       window.requestAnimationFrame(step)
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const target = entry.target
//             const endValue = Number.parseInt(target.getAttribute("data-value"))
//             animateValue(target, 0, endValue, 2000)
//             observer.unobserve(target)
//           }
//         })
//       },
//       { threshold: 0.5 },
//     )

//     statNumbers.forEach((statNumber) => {
//       observer.observe(statNumber)
//     })

//     return () => {
//       statNumbers.forEach((statNumber) => {
//         observer.unobserve(statNumber)
//       })
//     }
//   }, [])

//   return (
//     <div className="about-container">
//       <header className="about-header">
//         <h1>About Us</h1>
//         <p>
//           We are dedicated to revolutionizing water management through innovative solutions and sustainable practices.
//         </p>
//       </header>

//       <div className="about-content">
//         <section className="mission-section">
//           <h2>Our Mission</h2>
//           <p>
//             At Water Management Systems, our mission is to preserve and protect our planet's most precious resource -
//             water. We develop cutting-edge technologies and systems that enable efficient water usage, conservation, and
//             management for residential, commercial, and industrial applications.
//           </p>
//           <p>
//             Founded in 2010, we have been at the forefront of water conservation innovation, helping communities and
//             businesses reduce water waste, lower costs, and contribute to a more sustainable future.
//           </p>
//         </section>

//         <section className="stats-section">
//           <h2>Our Impact</h2>
//           <div className="stats-grid">
//             <div className="stat-item">
//               <div className="stat-number" data-value="500">
//                 0
//               </div>
//               <div className="stat-label">Projects Completed</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-number" data-value="10">
//                 0
//               </div>
//               <div className="stat-label">Countries Served</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-number" data-value="5">
//                 0
//               </div>
//               <div className="stat-label">Billion Gallons Saved</div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-number" data-value="98">
//                 0
//               </div>
//               <div className="stat-label">Client Satisfaction %</div>
//             </div>
//           </div>
//         </section>

//         <section className="team-section">
//           <h2>Our Team</h2>
//           <div className="team-grid">
//             <div className="team-member">
//               <div className="member-image">JD</div>
//               <div className="member-info">
//                 <h3>John Doe</h3>
//                 <p className="member-role">Founder & CEO</p>
//                 <p>Water conservation expert with 15+ years of experience in environmental engineering.</p>
//               </div>
//             </div>
//             <div className="team-member">
//               <div className="member-image">JS</div>
//               <div className="member-info">
//                 <h3>Jane Smith</h3>
//                 <p className="member-role">Chief Technology Officer</p>
//                 <p>Leading our R&D team to develop innovative water management solutions.</p>
//               </div>
//             </div>
//             <div className="team-member">
//               <div className="member-image">RJ</div>
//               <div className="member-info">
//                 <h3>Robert Johnson</h3>
//                 <p className="member-role">Head of Operations</p>
//                 <p>Ensuring smooth implementation of our water management systems worldwide.</p>
//               </div>
//             </div>
//             <div className="team-member">
//               <div className="member-image">ML</div>
//               <div className="member-info">
//                 <h3>Maria Lopez</h3>
//                 <p className="member-role">Sustainability Director</p>
//                 <p>Guiding our environmental initiatives and community outreach programs.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default About

"use client"

import { useEffect } from "react"
import "../styles/about.css"

function About() {
  // Animation for stats counting
  useEffect(() => {
    const statNumbers = document.querySelectorAll(".stat-number")

    const animateValue = (obj, start, end, duration) => {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        obj.innerHTML = Math.floor(progress * (end - start) + start)
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            const endValue = Number.parseInt(target.getAttribute("data-value"))
            animateValue(target, 0, endValue, 2000)
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.5 },
    )

    statNumbers.forEach((statNumber) => {
      observer.observe(statNumber)
    })

    return () => {
      statNumbers.forEach((statNumber) => {
        observer.unobserve(statNumber)
      })
    }
  }, [])

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          We are dedicated to revolutionizing water management through innovative solutions and sustainable practices.
        </p>
      </header>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Water Management Systems, our mission is to preserve and protect our planet's most precious resource -
            water. We develop cutting-edge technologies and systems that enable efficient water usage, conservation, and
            management for residential, commercial, and industrial applications.
          </p>
          <p>
            Founded in 2010, we have been at the forefront of water conservation innovation, helping communities and
            businesses reduce water waste, lower costs, and contribute to a more sustainable future.
          </p>
        </section>

        <section className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-value="500">
                0
              </div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-value="10">
                0
              </div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-value="5">
                0
              </div>
              <div className="stat-label">Billion Gallons Saved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-value="98">
                0
              </div>
              <div className="stat-label">Client Satisfaction %</div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">JD</div>
              <div className="member-info">
                <h3>John Doe</h3>
                <p className="member-role">Founder & CEO</p>
                <p>Water conservation expert with 15+ years of experience in environmental engineering.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">JS</div>
              <div className="member-info">
                <h3>Jane Smith</h3>
                <p className="member-role">Chief Technology Officer</p>
                <p>Leading our R&D team to develop innovative water management solutions.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">RJ</div>
              <div className="member-info">
                <h3>Robert Johnson</h3>
                <p className="member-role">Head of Operations</p>
                <p>Ensuring smooth implementation of our water management systems worldwide.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">ML</div>
              <div className="member-info">
                <h3>Maria Lopez</h3>
                <p className="member-role">Sustainability Director</p>
                <p>Guiding our environmental initiatives and community outreach programs.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

