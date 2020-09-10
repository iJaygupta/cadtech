import React from 'react'
import HeadingTitle from '../../utils/HeadingTitle'

const Subscribe = () => {
    return (
        <div  className="newsletter-container">
          <div className="container subscribe-container">
            <div  className="row justify-content-center">
              <div className="col-lg-6">
              {/* <h4>Join Our Newsletter</h4>
              <p>Stay up to date with the latest news from the NeuronLabsAi community</p> */}
               <HeadingTitle 
                   title={'Join Our Newsletter'}
                   description ={'Stay up to date with the latest news from the Cadtech community'}
                   titleColor ={'#213b52'}
            />
               <form className="news-letter-form">
                   <input type="email" name="email" />
                   <input type="submit" value="Subscribe" />
               </form>
              </div>
            </div>
        </div>
    </div>
    )
}

export default Subscribe
