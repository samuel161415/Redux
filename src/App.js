import './App.css'
import image from './asset/img.png'
function App() {
  return (
    <div className="App">
      <header>
        <h1>My Website</h1>
        <nav>
          <ul className='horizontal_list'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
       
      </header>
      <main>
        <h1>My Blog</h1>
        <article>
          <h2>Post Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum urna id massa sollicitudin, nec dapibus augue venenatis.</p>
        </article>
        <article>
          <h2>Another Post Title</h2>
          <p>Donec efficitur leo a enim fermentum ultricies. Donec vel justo vel nisi vehicula eleifend a id felis.</p>
        </article>
        <section>
  <h2>Product Category</h2>
  <ul className='vertical_val'>
    <li>Product 1</li>
    <li>Product 2</li>
    <li>Product 3</li>
  </ul>
</section>
<section>
  <h2>Product Category</h2>
  <ul className='vertical_list'>
    <li>Product 4</li>
    <li>Product 5</li>
    <li>Product 6</li>
  </ul>
</section>
     </main>
      <button>
        Click me
      </button>
    <div className='divcontainer'>
      <div className='imgInfo' style={{float: "left", width: "50%",clear:'both'}}>
        <p>Some text here</p>
      </div>
      <div className='imgInfo' style={{float: "right", width: "50%",clear:'both'}}>
        <img src={image} alt="An image" />
      </div>
    </div>
      
    </div>
      
  );
}

export default App;
