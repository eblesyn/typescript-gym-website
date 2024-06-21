import Logo from "../assets/evogym.png";

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="Evogym Logo" />
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius minus ducimus, error maiores dolorem? Ex sit, neque nemo iure assumenda vero rem qui, vel molestiae aliquam tempore asperiores natus.
          </p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className='font-bold'>Links</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className="my-5">eblesyn@gmail.com</p>
          <p className="my-5">08168472839</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
