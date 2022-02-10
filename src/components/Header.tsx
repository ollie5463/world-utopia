import '../App.css';
import svg from './worldUtopiaLogo.svg';

function Header(styles: any) {
  return (
    <>
      <img style={styles} className='Logo' src={svg} alt='nft logo'></img>
    </>
  );
}

export default Header;
