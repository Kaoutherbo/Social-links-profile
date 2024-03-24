import './App.css';
import Card from './components/UI/card'
import './styles/output.css'
import Image from './components/images/avatar-jessica.jpeg'

function App() {
  return (
    <div className="font-inter flex justify-center items-center h-screen font-medium bg-off-black">
      <Card 
      image={Image} 
      name="Jessica Randall" 
      location="London, United Kingdom" 
      description="Front-end developer and avid reader." 
      github="https://github.com/Kaoutherbo" 
      frontendMentor="https://www.frontendmentor.io/profile/Kaoutherbo" 
      linkdin="https://www.linkedin.com/in/boutheldja-kaouther/" 
      x="https://twitter.com/Kaou1Kaouther" 
      insta="https://www.instagram.com/ka_outher2005?igsh=MXZqMWplenJza3d6dw=="
      />
    </div>
  );
}

export default App;
