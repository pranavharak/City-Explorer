import './home.css';

function Home() {
  const headings = [
    "Explore Cities Easily",
    "Let Us Guide You to Your Dream City",
    "From Landmarks to Local Secrets – Find It All!",
    "Discover the World with City Tour Finder!"
  ];
  let index = 0;

  function changeHeading() {
    const heading = document.getElementById("dynamic-heading");
    heading.classList.add("hidden");

    setTimeout(() => {
      heading.innerText = headings[index];
      heading.classList.remove("hidden");
      index = (index + 1) % headings.length;
    }, 500);
  }

  setInterval(changeHeading, 4000);

  return (
    <div className="hero-main">
        <div className='hero'>
            <h1 id="dynamic-heading" className="h1">
                Discover the World with City Tour Finder!
            </h1>
            <h3 className='h2'>
                <u>Welcome to Your Ultimate City Explorer!</u>
            </h3>
            <p> Ready to explore the world like never before? Here, every city is at your fingertips. 
                Whether you’re planning a vacation, looking for hidden gems, or simply curious about new 
                places, our platform makes it easy and exciting to discover the beauty of global destinations.
            </p>
            <p>
            With user-friendly features, detailed guides, we make exploring the world easier, more enjoyable, and more inspiring than ever.
            </p>
            <p>
                We're here to help turn your travel dreams into reality.
            </p>
            <h3>✨ Start your adventure today. The world is waiting for you!</h3>
            <button className='btn'>Start Exploring</button>
      </div>
    </div>
  );
}

export default Home;
