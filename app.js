const read = document.querySelectorAll('.readmore');

read.forEach(function(item){
    item.addEventListener('click',function(evt){
        if(evt.currentTarget.classList.contains('earth'))
        {
            evt.currentTarget.innerHTML = `<p>3Uganda is home to the endangered mountain gorilla, particularly in the Ruwenzori Mountains.</p>
            <p>4.In the Arabic language, the name of the country Sudan means "the land of the blacks."</p>
            <p>5.Pomelo, the largest citrus fruit on the planet, is endemic to Malaysia.</p>`;
        }
        else
        {
            evt.currentTarget.innerHTML = `<p>3. A FULL NASA SPACE SUIT COSTS $12,000,000. While the entire suit costs a cool $12m, 70% of that cost is for the backpack and control module. However, the space suits that NASA uses were built in 1974.  If these were priced by today's pricing, they would cost an estimated 150 million dollars!</p>
          <p>4. THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM. The Sun accounts for 99.86% of the mass in our solar system with a mass of around 330,000 times that of Earth. Did you know that the Sun is made up of mostly hydrogen (three quarters worth) with the rest of its mass attributed to helium.  If the Sun had a voice would it be high and squeaky from all that helium?</p> 
          <p>5.  ONE MILLION EARTHS CAN FIT INSIDE THE SUN. The Sun is large enough that approximately 1.3 million Earths could fit inside (if squashed in) or if the Earths retained their spherical shape then 960,000 would fit. But can you visualise that number of Earths?</p>
          <p>6. THERE ARE MORE TREES ON EARTH THAN STARS IN THE MILKY WAY. There are about three trillion trees on Planet Earth, and between 100-400 billion stars, approximately, in the galaxy.</p>
        <p>7. THE SUNSET ON MARS APPEARS BLUE. Just as colors are made more dramatic in sunsets on Earth, sunsets on Mars, according to NASA,  would appear bluish to human observers watching from the red planet. Fine dust makes the blue near the Sun's part of the sky much more visibilke, while normal daylight makes the Red Planet's familiar rusty dust color the most perceptible to the human eye.</p>
        <p>8. THERE ARE MORE STARS IN THE UNIVERSE THAN GRAINS OF SANDS ON EARTH
        The universe extends far beyond our own galaxy, The Milky Way, which is why scientists can only estimate how many stars are in space.  However, scientists estimate the universe contains approximately 1,000,000,000,000,000,000,000,000 stars, or a septillion.   While no one can actually count every single grain of sand on the earth, the estimated total from researchers at the University of Hawaii, is somewhere around seven quintillion, five hundred quadrillion grains.  That is an awfully big sand castle!</p> 
        <p>9. ONE DAY ON VENUS IS LONGER THAN ONE YEAR.
        Venus has a slow axis rotation which takes 243 Earth days to complete its day. The orbit of Venus around the Sun is 225 Earth days, making a year on Venus 18 days less than a day on Venus.</p> 
        <p>10. THERE IS A PLANET MADE OF DIAMONDS
        There’s a planet made of diamonds twice the size of earth The "super earth," aka 55 Cancri e, is most likely covered in graphite and diamond.  Paying a visit to that planet would probably pay for the $12 million dollar space suit needed to get there!</p> `
        }
    })
})