import img3 from './Images/SRIJA.jpeg';
function Home()
{
    return(
        <div>
        <img src={img3} className='img'  />
        <div className='tx1'>
          <p><b>Hi There!!</b></p>
          <p> <b>Iam Srija</b></p>
          
          <p><b>My hobbies include</b></p>
          <ul>
            <li><b>Playing</b></li>
            <li><b>Dancing</b></li>
            <li><b>Coding</b></li>
            <li><b>Cooking</b></li>
          </ul>
          
          </div></div>

    )
    
}
export default Home;