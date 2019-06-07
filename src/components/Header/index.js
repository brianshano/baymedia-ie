import React from 'react';
// import Link from 'gatsby-link';
import './styles.scss';

const Header = () => (
  <>
    <header className="section1 parallax background-svg">{/* </div> */}</header>
    <div className="section2 cta-bar">
      <div>Simple</div>
      <div>Elegant</div>
      <div>Beautiful</div>
    </div>
    <div class="company-logo">
      <h1 class="baymedia-logo">
        <span class="company-logo-bay"> Bay </span> Media
      </h1>
      <h2 class="baymedia-tag">Street Dressing Experts</h2>
    </div>
    <style jsx>{`
      html,
      body {
        padding: 0;
        margin: 0;
        background-image: linear-gradient(
          to right top,
          #29aae4,
          #379fea,
          #5692ec,
          #7882e7,
          #986fda
        );
        position: relative;
      }
      .company-logo {
        position: absolute;
        padding: 2rem;
        top: 0;
        text-transform: uppercase;
      }
      .company-logo-bay {
        color: grey;
      }
      .baymedia-logo {
        position: absolute;
        color: #29aae4;
        padding: 0.2rem;
        text-align: center;
        background-color: hsla(0, 0%, 100%, 0.63);
      }
      .baymedia-tag {
        position: relative;
        top: 3rem;
        font-weight: 300;
        color: hsla(0, 0%, 92.2%, 0.884);
        text-align: left;
        font-size: 0.9rem;
        line-height: 0.8rem;
        text-align: center;
      }
      .hero-container {
        position: relative;

        z-index: 1;
        width: 100%;
        height: 60vh;
      }
      .top-component {
        height: 2rem;
      }
      .wrapper {
        /* The height needs to be set to a fixed value for the effect to work.
         * 100vh is the full height of the viewport. */
        height: 100vh;
        /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
        overflow-x: hidden;
        /* Enable scrolling on the page. */
        overflow-y: auto;
        /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
        perspective: 2px;
      }
      .section1 {
        /* Needed for children to be absolutely positioned relative to the parent. */
        position: relative;
        /* The height of the container. Must be set, but it doesn't really matter what the value is. */

        height: calc(60vh - 2rem);
      }
      .section2 {
        /* Needed for children to be absolutely positioned relative to the parent. */
        position: relative;
        /* The height of the container. Must be set, but it doesn't really matter what the value is. */

        height: 2.5rem;
        text-shadow: -1px -1px 0 #0000006e, 1px -1px 0 #0000006e,
          -1px 1px 0 #0000006e, 1px 1px 0 #0000006e;
      }

      .parallax::after {
        /* Display and position the pseudo-element */
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        /* Move the pseudo-element back away from the camera,
         * then scale it back up to fill the viewport.
         * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
        transform: translateZ(-1px) scale(1.5);
        /* Force the background image to fill the whole element. */
        background-size: 100%;
        /* Keep the image from overlapping sibling elements. */
        z-index: -1;
      }

      .background-svg::after {
        background-image: url('https://res.cloudinary.com/bshano/image/upload/f_auto/v1544482027/Baymedia/people%20photos/Brightened_1Cropped_1200_repatched.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;

         {
          /* z-index: 2; */
        }
         {
          /* height: calc(50vh - 2rem); */
        }
        width: 100%;
        opacity: 0.6;
      }
      .bg1::after {
        background-image: url('https://res.cloudinary.com/bshano/image/upload/f_auto/v1544482027/Baymedia/people%20photos/Brightened_1Cropped_1200_repatched.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;
      }

      .third-component {
        position: relative;
        z-index: 104;
        height: 400vh;
        background-color: #f4f4f4;
        border-top: #444x 4rem solid;
      }
    `}</style>
  </>
);

export default Header;
